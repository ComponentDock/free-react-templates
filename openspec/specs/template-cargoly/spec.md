# Template: Cargoly (Logistics)

## Purpose

Cargoly is a single-page logistics/freight company website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Boxe" design (see TEMPLATES.md — listed under Bootstrap, line
351, first unchecked item whose prep did not exist on main), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a corporate logistics landing page: a dark full-bleed hero
(truck photo, white headline, phone-input + yellow arrow CTA, floating yellow
"Get Pick Up Here" card), a white about section, a 4-card service grid
(Planning / List Delivery / Transport / Inventory), a dark full-width CTA
banner ("International Truck Freight"), a delivery-process strip with
percentage breakdowns (Trucks 50% / Air 10% / Railway 20% / Ship 20%), a
violet quote-request section with a multi-field form, a "Recent Deliveries"
card grid, a 3-card blog section, and a 4-column footer (about + working
hours, category links, gallery grid, newsletter). Cargoly recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Boxe" — free logistics/freight website template
  (source: https://colorlib.com/wp/template/boxe/). Despite the name it is a
  trucking/freight template, not boxing.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/boxe/`
  (HTTP 200, 33KB) + stylesheet `css/style.css` (176KB) plus
  `css/bootstrap.min.css`, `css/owl.carousel.min.css`, `css/themify-icons.css`,
  `css/flaticon.css`, `css/slick.css`, `css/nice-select.css`, `css/all.css`,
  `css/intlInputPhone.min.css`. The rendered DOM is the reference below; the
  TEMPLATES.md screenshot (`boxe-free-template.jpg`, 1200×946) confirms the
  visual design: dark navy/black hero with a white truck on a mountain road at
  dusk, bold white headline, bright yellow `#f6a515` square arrow button and
  floating yellow "Logistics World 2019 / Get Pick Up Hear" card, violet
  `#6345fe` logo icon, uppercase small nav (Home, About, Services, Delivery,
  Blog, Contact) with a search icon, white content sections below (services,
  process, quote form, deliveries, blog, footer).
- **Section order (1:1):**
  1. `header.main_menu.home_menu` (navbar): `a.navbar-brand` `img/logo.png`
     (image logo → text logo "Cargoly"); `ul.nav` links: **Home, About,
     Services, delivery (dropdown: Blog, Single blog, Elements), Contact** —
     small uppercase dark-grey links; right side `i.ti-search` search icon
     (mobile: hamburger menu).
  2. `section.banner_part` (height 835px, `background-image: url(../img/
banner_bg.png)`, cover, center):
     - `div.banner_text` (left-aligned text): `h1` "Run on the **rocky
       streets**" (large bold white, accent word in yellow) + `p` "Fast
       landing delivery / for your goods business".
     - phone input with country-code dropdown (intlInputPhone, e.g. +33) and
       a yellow square arrow button (→ next step).
     - floating yellow card bottom-right of the hero: "Logistics World 2019"
       (small) / "Get Pick up Hear" (bold, uppercase) + white right-arrow.
  3. `section.about_part.section_padding` (padding 355px 0 180px — overlaps
     the banner's lower area):
     - `div.about_part_img` (left): image (about truck/warehouse photo) with
       an overlapping accent panel.
     - `div.about_part_text` (right): small "about us" eyebrow, `h2` "Boxe
       Best" (→ "Cargoly Best"), two paragraphs of body copy, `a.btn_1`
       "learn more" (violet).
  4. `section.service_part` (padding 400px 0 116px): section header `h2`
     "Boxe Best" + "Deliverie Services" label + intro paragraph, then 4
     `div.single_service` cards (icon + `h4` + short paragraph):
     **Planning, List Delivery, Transport, Inventory**.
  5. `section.cta_area` (bg `#000` + `../img/cta_bg.png` cover, text-center,
     padding 179px 0): `h2` "International Truck Freight" + paragraph +
     `a.btn_1` "view all" (violet bg, white text; hover yellow).
  6. `section.deliverie_process.section_padding` (padding 70px 0 50px):
     centered header `h2` "World Wide" + "Deliveries Process" label, then 4
     process items each with an icon, title and percentage bar/stat:
     **Trucks 50% · Air 10% · Railway 20% · Ship 20%** + short paragraph each.
  7. `section.regervation_part.section_padding` (bg `#6345fe`, z-index 1,
     `../img/reservation_bg.png`):
     - Left column: `h2` "Get A Quote" + quote form with fields **Name,
       Email or phone, Dapurtare (Departure), Arrival, Cargo Description,
       Transportation Method** (select) + submit `a.btn_1` "GET A QUOTE"
       (white bg, violet text).
     - Right column: `h2` "Are You A Sender?" + paragraph + `a.btn_3`
       "check now" link with arrow.
  8. `section.deliveries_part.section_padding` (padding 70px 0 50px): header
     `h2` "Recent Deliveries", then 4 `div.single_deliver` cards ("World
     Corgo") with a cargo image, `h4` title, address "324 King Heaven tower,
     House no Melbourne, VIC-222, Australia" and a "check now" link.
  9. `section.blog_part.padding_bottom`: header `h2` "Latest Blog", then 3
     `div.single_blog` cards: image with a date block ("jan" + "2019"), `h3`
     title "Founder Defends", excerpt paragraph, meta row (100 Likes · 1
     Comment), `a.btn_3` "read more" with arrow.
  10. `footer.footer-area` (bg `../img/footer_bg.png`, 4 columns):
      - About text + **Working Hours** (Monday–Friday: 8AM–6PM,
        Saturday–Sunday: 8AM–12PM).
      - **CATEGORY** links: Boat Shippment, Services, Transport Planning,
        Transportation, Truck Delivery Checking.
      - **Our Gallery**: small image grid.
      - **Newsletter**: heading + blurb ("For business professionals caught
        between high OEM price and mediocre print and graphic output…") +
        email input + subscribe button. Bottom bar: copyright credit
        (replace Colorlib credit with repo-standard footer credit).
- **Design tokens extracted from `css/style.css`:**
  - Fonts (Google Fonts `@import` in style.css): **'Poppins', sans-serif**
    (headings/nav, weights 300–800) + **'Roboto', sans-serif** (body, weights
    300/400/500). Load via `<link>` in index.html.
  - Brand violet: **#6345fe** — primary button bg (`.btn_1` hover, `.btn_4`
    bg, banner button), `regervation_part` section bg, logo icon, link hovers.
  - Accent yellow: **#f6a515** — hero arrow button, floating pick-up card,
    headline accent word, hover accents (`.btn_1:hover` text, `.btn_3:hover`,
    `.btn_4:hover`).
  - Heading ink: **#415094** (dark indigo) — h1–h6 default.
  - Body grey: **#999999 / #777777 / #888888** — paragraphs, muted text.
  - Neutrals: **#fff**, **#f9f9ff** (light lavender-white section bg),
    **#f0e9ff** (light lavender, alt bg), **#000** (cta_area bg), #f1f1f1,
    #eee (borders).
  - Buttons `.btn_1`: inline-block, padding 19px 47px (variants 10px 30px /
    14.5px 43px), **border-radius 4px**, 14px, **uppercase**, font-weight
    800, bg `#f5f5fd` text `#6345fe`; hover bg `#6345fe` text `#fff`
    (banner variant: bg `#6345fe` text `#fff`, hover text `#f6a515`; some
    variants radius 0). `.btn_3`: text link with arrow (weight 500, hover
    yellow). `.btn_4`: bg `#6345fe`, white text, padding 14.5px 43px.
  - Section backgrounds: banner = image cover (835px); cta_area = `#000` +
    image cover (padding 179px 0); regervation_part = solid `#6345fe`;
    footer = image bg; white/`#f9f9ff` for content sections.
  - Spacing: about_part 355px 0 180px, service_part 400px 0 116px (both
    overlap the hero/previous section), deliverie_process + deliveries_part
    70px 0 50px, blog_part 0 0 40px.
- **Recreation decisions:** header = white sticky bar with "Cargoly" bold
  text logo, uppercase nav (Home, About, Services, Delivery with dropdown,
  Contact), search icon (dead anchor or toggles nothing) and mobile
  hamburger; hero = full-bleed dark truck photo (picsum) with white headline
  - yellow accent word, phone input with country-code select + yellow arrow
    button, and a floating yellow "Get Pick Up Here" card; about = two-column
    image + text with eyebrow label and violet "learn more" button; services =
    4 icon cards (lucide icons: ClipboardList, Truck, Package, Boxes); CTA
    banner = dark full-width strip with violet "view all" button; process = 4
    stat items with progress bars (50/10/20/20%); quote = violet section with
    the 6-field form (validated) + "Are You A Sender?" column; deliveries = 4
    cargo cards (picsum images) with title + address + link; blog = 3 cards
    with date block, title, excerpt, likes/comments meta, read-more; footer =
    4-column with working hours, category links, gallery grid (picsum thumbs),
    newsletter email form; images picsum-seeded
    (`picsum.photos/seed/cargoly-N/w/h`); Google Fonts Poppins + Roboto via
    `<link>`; icons via lucide-react.

Cargoly lives in `apps/cargoly` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header

The system SHALL render a sticky header with a logo, uppercase navigation,
and a search icon.

#### Scenario: Header content

- **GIVEN** the Cargoly page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Cargoly" as a bold text logo on the
  left
- **AND** it SHALL show the nav links Home, About, Services, Delivery, and
  Contact in small uppercase grey text
- **AND** it SHALL show a search icon on the right

#### Scenario: Delivery dropdown

- **GIVEN** the header is displayed
- **WHEN** the user hovers or activates the Delivery link
- **THEN** a dropdown SHALL open with the links Blog, Single Blog, and
  Elements

#### Scenario: Mobile menu

- **GIVEN** the header is displayed on a narrow viewport
- **WHEN** the user activates the hamburger control
- **THEN** a menu SHALL open showing the nav links
- **AND** activating the hamburger again SHALL close the menu

### Requirement: Hero banner

The system SHALL render a full-bleed dark hero with headline, phone CTA, and
a floating pick-up card.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-width background image (truck photo) with a
  bold white headline (e.g. "Run on the rocky streets") with the accent word
  highlighted in yellow
- **AND** it SHALL show the sub-line "Fast landing delivery / for your goods
  business"
- **AND** it SHALL show a phone input with a country-code select and a yellow
  arrow submit button

#### Scenario: Pick-up card

- **GIVEN** the hero is displayed
- **WHEN** the floating card is visible
- **THEN** it SHALL show "Logistics World 2019" as a small label and "Get
  Pick Up Here" as the bold heading with a right-arrow icon

### Requirement: About section

The system SHALL render a two-column about section with an image and text.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a small "about us" eyebrow label and a bold heading
  (e.g. "Cargoly Best")
- **AND** it SHALL show a left image (with accent panel) and right-side
  paragraphs of body copy
- **AND** it SHALL show a "learn more" button in the brand violet

### Requirement: Services grid

The system SHALL render a section header and four service cards.

#### Scenario: Service cards

- **GIVEN** the services section is displayed
- **WHEN** the card grid renders
- **THEN** it SHALL show the heading (e.g. "Cargoly Best") with a "Deliverie
  Services" label and an intro paragraph
- **AND** it SHALL show four cards titled Planning, List Delivery, Transport,
  and Inventory, each with an icon and a short description

### Requirement: CTA banner

The system SHALL render a dark full-width call-to-action strip.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA banner is displayed
- **THEN** it SHALL show a dark background with the heading "International
  Truck Freight", a supporting paragraph, and a "view all" button

### Requirement: Delivery process

The system SHALL render the delivery process strip with percentage stats.

#### Scenario: Process stats

- **GIVEN** the delivery process section is displayed
- **WHEN** the stats render
- **THEN** it SHALL show the heading "World Wide" with a "Deliveries Process"
  label
- **AND** it SHALL show four items — Trucks 50%, Air 10%, Railway 20%, Ship
  20% — each with an icon, a title, a percentage indicator (progress bar),
  and a short description

### Requirement: Quote request section

The system SHALL render a violet quote-request section with a form and a
sender column.

#### Scenario: Quote form

- **GIVEN** the quote section is displayed
- **WHEN** the form renders
- **THEN** it SHALL show the heading "Get A Quote" with fields for Name,
  Email or phone, Departure, Arrival, Cargo Description, and Transportation
  Method
- **AND** it SHALL show a "GET A QUOTE" submit button in white with violet
  text
- **AND** submitting an invalid form SHALL show per-field errors and block
  submission

#### Scenario: Sender column

- **GIVEN** the quote section is displayed
- **WHEN** the right column renders
- **THEN** it SHALL show the heading "Are You A Sender?", a supporting
  paragraph, and a "check now" link with an arrow

### Requirement: Recent deliveries

The system SHALL render the recent-deliveries card grid.

#### Scenario: Delivery cards

- **GIVEN** the deliveries section is displayed
- **WHEN** the card grid renders
- **THEN** it SHALL show the heading "Recent Deliveries"
- **AND** it SHALL show four cards, each with a cargo image, a title (e.g.
  "World Corgo"), an address line, and a "check now" link

### Requirement: Blog section

The system SHALL render three blog cards with date blocks and meta.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **WHEN** the cards render
- **THEN** it SHALL show the heading "Latest Blog"
- **AND** each card SHALL show an image with a date block (month + year), a
  title, an excerpt, a meta row (likes and comments), and a "read more" link

### Requirement: Footer

The system SHALL render a four-column footer with working hours, links,
gallery, and a newsletter form.

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an about column with Working Hours (Monday–Friday:
  8AM–6PM; Saturday–Sunday: 8AM–12PM)
- **AND** it SHALL show a CATEGORY column with links (Boat Shippment,
  Services, Transport Planning, Transportation, Truck Delivery Checking)
- **AND** it SHALL show an "Our Gallery" column with a small image grid
- **AND** it SHALL show a Newsletter column with an email input and a
  subscribe button
- **AND** the bottom bar SHALL carry the repo-standard footer credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Cargoly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, about, services, CTA banner,
  delivery process, quote, recent deliveries, blog, and footer inside the
  main landmark in the original's order
- **AND** the document title SHALL be "Cargoly — Logistics & Freight"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- cargoly` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero → about →
      services → CTA banner → delivery process → quote → recent deliveries →
      blog → footer).
- [ ] Design tokens applied: brand violet #6345fe (buttons, quote section bg,
      logo), accent yellow #f6a515 (hero CTA, pick-up card, hovers), heading
      ink #415094, body grey #999999/#777777, light bg #f9f9ff/#f0e9ff, dark
      #000 CTA banner, Poppins headings + Roboto body, 4px-radius uppercase
      bold buttons (padding ~19px 47px), 835px hero with dark cover image.
- [ ] Hero has phone input + country select + yellow arrow button and the
      floating "Get Pick Up Here" yellow card.
- [ ] Quote form has all six fields, validation with per-field errors, and a
      white/violet submit button.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Boxe), preview URL, tokens,
      and renames.
