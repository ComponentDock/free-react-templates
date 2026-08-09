# Template: Tonsor (Beauty — Barbershop)

## Purpose

Tonsor is a single-page barbershop website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Barcut" design (see TEMPLATES.md, Beauty category), built
under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a classic barbershop page with a black/white/gold identity: a
white navbar ("Bar Cut Salon" logo; Home / About / Barbers / Gallery /
Pricing / Pages ▾ / Blog ▾ / Contact), a full-width darkened barbershop-photo
hero slider ("For All Occasion HairStyle is a Must Try Fashion" headline in a
serif face + "Watch Intro Video" gold play button), a split "We Believe that
Interior beauty Lasts Long" about block (photo left, text right, gold "Learn
More" button), a "What We Can Do for You" 4-card services grid (photo cards
with bottom overlay labels), a "Select Your Style" catalogue band over a
background photo (floating white card with 4 style tabs + "View Gallery…"),
a "We Have All Famous Barbers" 3-member team row, a dark photo-backed
testimonials carousel with star ratings and a thumbnail strip, a "Choose Your
Package" 3-tier pricing row (Basic $79 / Premium $89 highlighted / Luxury
$99, each with a 5-item list and "Order Now"), a "Latest From Blog" 4-card
row, and a black footer with About Me / Newsletter / Follow Me widgets.
Tonsor recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Barcut" — free barbershop website template (source:
  https://colorlib.com/wp/template/barcut/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barcut/`
  (HTTP 200, 42.3KB) + stylesheets `css/main.css` (76.2KB), `css/bootstrap.css`,
  `css/owl.carousel.css`, `css/magnific-popup.css`, `css/nice-select.css`,
  `css/availability-calendar.css`, `css/bootstrap-datepicker.css`,
  `css/linearicons.css`, `css/font-awesome.min.css`. The rendered DOM is the
  reference below; the TEMPLATES.md screenshot (`barcut-free-template.jpg`)
  confirms the visual design: black/white/gold "noir luxury" barbershop —
  dark hero photo of a man getting a haircut with white serif (Playfair
  Display) headline and grey sans-serif lorem, gold/mustard pill buttons
  (e.g. "LEARN MORE", "ORDER NOW"), white light sections (services, team,
  pricing) alternating with dark sections (hero, catalogue photo band,
  testimonials, black footer), 3-column pricing with the middle "Premium"
  card inverted black+gold, black blog cards.
- **Section order (1:1):**
  1. `header-area` (white, sticky, `position: relative; background-color:
#fff; z-index: 999999`): `menu-left` (centered) = logo `img/logo.png`
     ("Bar Cut Salon" — recreate as text logo "Tonsor") + links HOME, ABOUT,
     BARBERS, GALLERY; `menu-right` (font-size 11px) = PRICING, PAGES ▾
     (dropdown: Services, Elements), BLOG ▾ (dropdown: Blog, Blog Detail),
     CONTACT. Nav links uppercase; hover/active color #ba9236
     (`menu-left a:hover/.active`, `menu-right .nav-link:hover/.active`).
  2. `home-banner-area` (background #eaeaea, padding 172px 20px 100px):
     full-width photo slider (3 slides `img/banner/b1.jpg` b2 b3 —
     barbershop action photos, darkened for readability), centered
     `banner-content` (absolute center, color #fff): `h1` "For All Occasion
     HairStyle is a Must Try Fashion" (Playfair Display serif, white) +
     paragraph (light grey lorem) + `a.video-play-button` (round gold
     gradient circle with play icon) + "WATCH INTRO VIDEO" label.
  3. `about-area section-gap-top` (white): split layout — left
     `about-left`: two photos (`img/about-img.jpg`, `img/about-img2.jpg`,
     overlapping collage); right text: `h1` "We Believe that Interior
     beauty Lasts Long" (serif) + paragraph + `a.primary-btn` "LEARN MORE"
     (gold gradient).
  4. `service-area section-gap` (white): centered `h1` "What We Can Do for
     You" + lorem subtitle; 4 `single-service` cards (col-lg-3): photo
     (`img/service/service1.jpg`…`service4.jpg`) with `h4` label overlaid at
     the bottom (`position: absolute; bottom: 0; color: #fff;
background: rgba(0,0,0,0.3); padding: 20px`): Stylish Hair Cutting,
     Quality Gel Shave, Beard Trimming, Executive Wash. Hover: `h4`
     background → #bb9236 gradient (`single-service:hover h4 =>
background: #bb9236`).
  5. `catalogue-area section-gap` (background-image `img/catalogue-bg.jpg`,
     cover): centered floating white card: `h4` "Select Your Style" + `p`
     "SHAVEING" (uppercase, color #bb9236) + 4 style tabs
     (`img/tab/icon1.png`…`icon4.png`) + paragraph + `a` "VIEW GALLERY..."
     link (hover #bb9236).
  6. `team-area section-gap` (white): centered `h1` "We Have All Famous
     Barbers" + subtitle; 3 `single-team-member` (col-lg-4): photo
     (`img/team/person1.jpg`…`person3.jpg`, `member-img` overflow hidden) +
     `h4` name + `p` role (uppercase): Peter Baker / Head hair Cut
     Specialist; Nancy Holmes / Spa & Makeup Specialist; Gavin Hansen /
     Hair Styling Expert.
  7. `testimonials-area section-gap-top` (dark, photo-backed): carousel of 4
     quotes — each: `h4` "Fanny Spencer" + 5 gold stars (font-awesome ★)
     - quote paragraph (the original repeats one lorem quote 4× — paraphrase
       into distinct quotes); below, a thumbnail strip (`owl-thumb-item` with
       `img/testimonial/t1.png`…`t4.png`) whose active/hover overlay uses the
       gold gradient (#ba9236→#fdc136). Quote icon `img/testimonial/quote.png`.
  8. `price-area section-gap-top` (white): centered `h1` "Choose Your
     Package" + subtitle; 3 `single-price` cards (col-lg-4, background
     #f9f9f9, padding 40px 30px): `top-sec h4` title + `p` "Standard
     Package"; `bottom-sec h1` price (36px Roboto 700, dashed top border) —
     Basic Hair Cut & Shave $79.00, Premium Hair Cut & Shave $89.00 (active
     card: black styling, gold gradient on h4/price/button),
     Luxury Hair Cut & Shave $99.00; each has a 5-item list (Basic hair
     Cut, Basic Shave, Basic Head Wash, Basic Body Massage, Basic Snacks)
     and `a.primary-btn.price-btn` "ORDER NOW" (gold gradient on active /
     hover).
  9. `latest-blog-area` (dark cards, white bg section): centered `h1`
     "Latest From Blog" + subtitle; 4 blog cards (`img/lst-blog/blog1.jpg`…
     `blog4.jpg`): meta links (calendar "13th Dec", eye "15", comments "04")
     - `h4` title "Portable Fashion for women" (repeated 4× — paraphrase
       into 4 distinct barbershop-ish titles) + excerpt.
  10. `footer-area section-gap` (background #000000): 3 widgets —
      `footer_title` h3 "About Me" + paragraph; "Newsletter" (h3 + "Stay
      updated with our latest trends" + email input placeholder "Enter
      email address" + gold submit button); "Follow Me" (h3 + "Let us be
      social" + social icons: Facebook, Twitter, Dribbble, Behance).
      Copyright bar: "Copyright © … All rights reserved | This template is
      made with by Colorlib" → replace with repo-standard footer credit.
- **Design tokens extracted from `css/main.css`:**
  - Brand gold gradient: **linear-gradient(to right, #ba9236 0%, #fdc136
    51%, #ba9236 100%)** (3-stop) — `primary-btn`, video play button,
    gallery overlay (`single-gallery .thumb .overlay-bg`), active price
    card accents, testimonial thumbnail overlays. Equivalent 90deg
    `#ba9236 → #fdc136` two-stop for circles/overlays.
  - Dark gold: **#bb9236** — service card hover label, catalogue tab text,
    catalogue tab active underline + shadow `0px 5px 15px
rgba(187,146,54,0.3)`.
  - Button `.primary-btn`: inline-block, gold gradient bg, white text,
    uppercase; pill/rounded (vision confirms rounded pill look); price-btn
    sits in card `end-sec`.
  - Fonts: **Roboto** (body/nav/price — `single-price .bottom-sec h1`
    font-family Roboto 36px/700), **Playfair Display** (serif headings —
    hero h1, section h1s). Google Fonts via `<link>`.
  - Text colors: #777777 (body paragraphs), white on dark sections; headings
    inherit serif face.
  - Section backgrounds: hero = #eaeaea + darkened slider photos; about /
    services / team / price / blog = white; catalogue = `catalogue-bg.jpg`
    cover; testimonials = dark photo; footer = **#000000**; price card =
    #f9f9f9; light section alt bg #f9f9ff (used elsewhere in main.css).
  - Cards/borders: service label rgba(0,0,0,0.3) → hover #bb9236; price
    card padding 40px 30px; price h1 dashed top border.
  - Spacing rhythm: `section-gap` = 120px padding top/bottom; `section-gap-top`
    = 120px top; hero padding 172px 20px 100px; nav font-size 11px
    (menu-right); header white sticky z-index 999999.
- **Recreation decisions:** repo-standard navbar (white, sticky) with
  "Tonsor" text logo (bold), nav links (Home, About, Barbers, Gallery,
  Pricing, Services, Blog, Contact — flattened from the original's
  dropdowns, keep uppercase small caps); hero = full-width darkened
  barbershop photo (picsum) or simple crossfade slider (3 slides), serif
  headline + lorem + round gold "Watch Intro Video" play button (lucide
  `Play`, opens modal or inert link); about = split photo collage + serif
  heading + gold "Learn More"; services = 4 photo cards with dark bottom
  label → gold on hover; catalogue = background-photo band with floating
  white card (4 tab icons from lucide, "View Gallery…" link); team = 3
  photo + name + role cards; testimonials = dark photo-backed carousel with
  stars + thumbnail strip (gold active overlay); pricing = 3 cards, middle
  Premium active (black + gold), 5-item lists, "Order Now" gold buttons;
  blog = 4 dark photo cards with meta/title/excerpt; footer = black with
  About Me / Newsletter (email + subscribe) / Follow Me (social icons) +
  copyright bar; all images picsum-seeded (`picsum.photos/seed/tonsor-N/w/h`);
  Google Fonts Roboto + Playfair Display via `<link>`; icons via
  lucide-react; star ratings as lucide `Star` (filled gold).

Tonsor lives in `apps/tonsor` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Header / navigation

The system SHALL render a white sticky header with a logo and primary
navigation.

#### Scenario: Header content

- **GIVEN** the Tonsor page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Tonsor" in bold type on the left
- **AND** it SHALL show uppercase nav links Home, About, Barbers, Gallery,
  Pricing, Services, Blog, and Contact
- **AND** the active/home link SHALL be colored in the brand gold (#ba9236)

#### Scenario: Mobile menu

- **GIVEN** the header is displayed on a narrow viewport
- **WHEN** the user activates the hamburger button
- **THEN** a menu SHALL open with the nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero banner

The system SHALL render a full-width hero with a darkened photo background
(or photo slider), a serif headline, a subtext, and a video play button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the headline "For All Occasion HairStyle is a Must
  Try Fashion" in large white serif type centered over the photo
- **AND** it SHALL show a short light-grey paragraph below the headline
- **AND** it SHALL show a round gold-gradient play button with a "Watch
  Intro Video" label

#### Scenario: Hero slides

- **GIVEN** the hero uses a photo slider
- **WHEN** the slider advances
- **THEN** the background photo SHALL change while the centered content stays
  in place

### Requirement: About section

The system SHALL render a split about section with photos on the left and
text with a call-to-action on the right.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show one or two barbershop photos on the left
- **AND** it SHALL show the heading "We Believe that Interior beauty Lasts
  Long" in serif type on the right
- **AND** it SHALL show a paragraph and a gold-gradient "Learn More" button

### Requirement: Services grid

The system SHALL render a services section with a heading and four photo
cards with bottom overlay labels.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "What We Can Do for You" with a subtitle
- **AND** it SHALL show four cards in a row, each with a photo and a label
  overlaid at the bottom: Stylish Hair Cutting, Quality Gel Shave, Beard
  Trimming, and Executive Wash

#### Scenario: Service card hover

- **GIVEN** a service card is displayed
- **WHEN** the user hovers over the card
- **THEN** the bottom label SHALL change from the dark overlay to the brand
  gold (#bb9236)

### Requirement: Select your style catalogue

The system SHALL render a catalogue band over a background photo with a
floating white card holding style tabs and a gallery link.

#### Scenario: Catalogue content

- **GIVEN** the page is rendered
- **WHEN** the catalogue section is displayed
- **THEN** it SHALL show a full-width background photo with a centered white
  card
- **AND** the card SHALL show the heading "Select Your Style" and the
  uppercase label "Shaveing" in gold
- **AND** it SHALL show four style tabs and a "View Gallery…" link

#### Scenario: Style tab switching

- **GIVEN** the catalogue card is displayed
- **WHEN** the user clicks a style tab
- **THEN** the active tab SHALL be highlighted (gold underline + shadow) and
  the accompanying text SHALL update

### Requirement: Team section

The system SHALL render a team section with a heading and three barber
profile cards.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "We Have All Famous Barbers" with a
  subtitle
- **AND** it SHALL show three cards, each with a photo, a name, and an
  uppercase role (e.g. "Head Hair Cut Specialist", "Spa & Makeup
  Specialist", "Hair Styling Expert")

### Requirement: Testimonials carousel

The system SHALL render a dark photo-backed testimonials carousel with star
ratings and a thumbnail strip.

#### Scenario: Testimonial slides

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show one quote at a time with a customer name and five
  gold stars
- **AND** it SHALL show a thumbnail strip below whose active thumb carries
  the gold gradient overlay
- **AND** the carousel SHALL advance automatically or on thumb click

### Requirement: Pricing packages

The system SHALL render a pricing section with a heading and three package
cards, the middle one highlighted.

#### Scenario: Pricing cards

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Choose Your Package" with a subtitle
- **AND** it SHALL show three cards titled Basic, Premium, and Luxury with
  prices $79.00, $89.00, and $99.00
- **AND** each card SHALL show a "Standard Package" label, a 5-item service
  list, and an "Order Now" button
- **AND** the Premium card SHALL be visually highlighted (dark background
  with gold accents)

#### Scenario: Price card hover

- **GIVEN** a pricing card is displayed
- **WHEN** the user hovers over a non-active card
- **THEN** the card SHALL adopt the highlighted treatment (gold gradient on
  title, price, and button)

### Requirement: Latest blog

The system SHALL render a blog section with a heading and four post cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the latest blog section is displayed
- **THEN** it SHALL show the heading "Latest From Blog" with a subtitle
- **AND** it SHALL show four cards, each with a photo, a date/views/comments
  meta line, a title, and an excerpt

### Requirement: Footer

The system SHALL render a black footer with About Me, Newsletter, and Follow
Me widgets plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Me" widget with a description paragraph
- **AND** it SHALL show a "Newsletter" widget with an email input and a gold
  subscribe button
- **AND** it SHALL show a "Follow Me" widget with social icons (Facebook,
  Twitter, Dribbble, Behance)
- **AND** it SHALL show a copyright bar with the repo-standard footer credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Tonsor app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, about, services, catalogue,
  team, testimonials, pricing, latest blog, and footer inside the main
  landmark in the original's order
- **AND** the document title SHALL be "Tonsor — Barbershop"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- tonsor` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero → about →
      services → catalogue → team → testimonials → pricing → latest blog →
      footer).
- [ ] Design tokens applied: gold gradient #ba9236→#fdc136 (buttons, play
      button, active price accents, testimonial thumb overlay), dark gold
      #bb9236 (service hover, catalogue tabs), #000000 footer, #eaeaea hero
      base + darkened photos, #f9f9f9 price cards, #777777 body text,
      Roboto + Playfair Display fonts, 120px section padding, uppercase
      pill buttons.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Barcut), preview URL, tokens,
      and renames.
