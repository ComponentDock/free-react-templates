# Template: Habitat (Real Estate)

## Purpose

Habitat is a single-page real-estate website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Homes" website template design (source:
https://colorlib.com/wp/template/homes/), built under a DIFFERENT name
(Habitat — a real-estate-themed word, keeping the "homes/property" spirit
of "Homes" while being a new, original name) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Homes" — real-estate/property website template
  (source: https://colorlib.com/wp/template/homes/, category "Bootstrap
  (216)"). Template name: "Homes".
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/homes/`) is REACHABLE (HTTP 200,
  ~97 KB HTML + `css/style.css` ~44.6 KB parsed for tokens). Structure
  below comes from the live preview DOM, which is authoritative.
- **Screenshot note:** the TEMPLATES.md screenshot URL
  (`homes-free-template-1.jpg`) 404s; the real screenshot is
  `https://colorlib.com/wp/wp-content/uploads/sites/2/homes-free-template.jpg`
  (found via the ColorLib template page). It matches the live preview:
  dark-navy hero photo (luxury home interior) with a dark navy overlay and
  centered white "Find your next / dream home." headline; below it the
  white overlapping search bar with lime-green "Search" button; then a
  3-column grid of property cards (house photos, heart icon, rounded
  corners + subtle shadows). The screenshot is cropped before the
  newsletter/services/instagram/footer sections — those were captured from
  the live DOM instead.
- **Section order (1:1, from live preview DOM):**
  1. Header (`header.header-section`, absolute over hero, padding 25px 0,
     container-fluid): logo image top-left (house icon in a circle +
     "Homes." — implement as lucide `Home` icon + wordmark text), then
     `ul.main-menu` (float right): Home · Search Results · Categories ·
     Single Property · Blog · Contact, plus a `.top-social` cluster of
     brand icons (Pinterest, Facebook, Twitter, Dribbble, Behance).
  2. Hero (`section.hero-section.home-page.set-bg`, height 633px, bg
     image `img/bg.jpg`): overlay via `.hero-section:after` = solid
     **rgba(18, 16, 82, 0.75)** (dark navy, NOT a gradient). Content
     centered (`hero-text`, padding-top 272px, text-white): `h2` "Find
     your next" (48px, weight 300) + `h1` "dream home." (72px, weight
     300).
  3. Filter search (`div.filter-search`, margin-top **-57px** so it
     overlaps the hero bottom, z-index 9): `form.filter-form` — white
     background, radius 4px, height 115px, shadow `2px 15px 30px
rgba(0,0,0,0.1)`. Five fields in a row, each separated by 1px
     #F3F3F3 right borders: Location select (London / US / UAE),
     Property Type select (House / Resort / Hotel), Price range slider
     (jquery-ui dual handle, 50k–300k, handles show the values), Bedrooms
     radio pills (1, 2, 3, 4+), Bathrooms radio pills (1, 2, 3, 4+), and
     the Search submit button (`button[type=submit]`: background #8AD144,
     radius `0 4px 4px 0`, padding 42px 40px 43px 31px, 18px white,
     search icon + "Search"). Field labels p: 14px #61616e weight 300.
     Selects (nice-select): transparent, only a bottom border 1px
     #E7E7E7, text 16px weight 500 #3f3f4b. Radio pills
     (`.room-filter-pagi .bf-item label`): background #8F8FA8, radius
     4px, padding 8px 9px, white text; `:checked` label → background
     #8AD144.
  4. Hotel rooms (`section.hotel-rooms.spad`): 3-column grid
     (`col-lg-4 col-md-6`) of `.room-items` property cards — radius 4px,
     shadow `2px 2px 30px rgba(0,0,0,0.1)`, overflow hidden, mb 30px.
     Card: `.room-img.set-bg` (photo) with a heart icon link top-right
     (flaticon-heart → lucide `Heart`); `.room-text` (padding 15px):
     `.room-title` h5 (18px weight 500 #30304e) + two links with icons —
     "Location" (flaticon-placeholder → lucide `MapPin`) and "Show on
     Map" (flaticon-cursor, 12px #8f8fa8 weight 500); `.room-features`
     row of four mini-stats with icons — Lot Size (e.g. "2561 sqft"),
     Beds (9), Baths (2), Garage (1) — each a `p` label + icon img +
     value; `.room-price` — `p` "For Sale" (16px #8f8fa8) + `span`
     "$345,000" (24px weight 500 #30304e); then `.site-btn.btn-line`
     "View Property" (outline button). The demo repeats the same card 4×
     — use distinct placeholder images + paraphrased titles (keep the
     same kind of content).
  5. Popular room (`section.popular-room.set-bg.p-in`, bg image
     `img/bg-2.jpg`, dark photo section): `row` with
     `col-lg-6 offset-lg-6` containing `owl-carousel.slider-active` of
     `.popular-items` slides — white cards (radius 4px, padding 30px 20px
     30px 30px). Slide content: `.popular-room-title` h5 (18px 500
     #30304e, e.g. "Spacious Modern Smart House") + Location / Show on
     Map links; `.popular-room-description` p (14px weight 300 #6f6f89,
     lh 22px); `.popular-room-features` (Lot Size / Beds / Baths /
     Garage stats like the cards); `.popular-room-price` — "For Sale"
     - "$345,000" + a red `span.deal` badge "Best Deal" (background
       #E30707, uppercase 14px weight 500, radius 50px, padding 1px 9px);
       then `.site-btn.btn-line` "View Property". Two slides in the demo.
  6. Newsletter (`section.newslatter-section`, background **#30304e**,
     padding 80px 0 94px, text-center): `newslatter-text` — message icon
     image (lucide `Mail`), `h4` "Join our mailing to get weekly updates
     on our exclusive deals." (white 24px weight 500, lh 30px, mb 35px),
     then a form: email input (width 385px, height 51px, radius 4px,
     padding 18px 20px, placeholder "Email address", color #6f6f8a
     weight 300) + `button.site-btn.news-btn` "Subscribe!" (background
     #8AD144, white, padding 16px 38px, radius 4px, no border).
  7. Services (`section.services-section`, padding 78px 0 62px): 2-column
     split (col-lg-6 each). Left `.left-side`: `h2` with a `span`
     "Why choose homes?" (span: #30304e weight 500) + line breaks then
     "Because we we are the best in the business." (h2 36px weight 400
     #6f6f8a, lh 48px), then a paragraph (lorem). Right `.right-side`:
     `ul` of SIX list items, each with a check icon image (lucide
     `Check`) + lorem text.
  8. Instagram (`section.instagram`, background **#F8F8F9**, padding 40px
     0, text-center): centered `h2` "Don’t forget to follow us on
     Instagram @homes" (36px weight 400 #000). (The demo's instagram
     image grid is JS-injected; render the heading + a row of square
     placeholder photos to keep the strip feel.)
  9. Footer (`footer.footer-section`, background **#30304e**): starts
     with a `.room-pic` strip — container-fluid row of FIVE property
     photos (`img/room-pic/1..5.jpg`); then a centered logo image
     (`img/only-logo.png` → lucide `Home` + "Habitat" wordmark); then
     three columns (col-lg-4 col-md-6): (a) `.about-footer` — `h5`
     "About Homes" + paragraph + `.footer-social` brand icon row
     (Pinterest, Facebook, Twitter, Dribbble, Behance); (b) "Latest Blog
     Posts" — TWO `.single-blog` rows (left thumb photo + right side:
     `h6` title "How to find the perfect area for your next house.",
     `.blog-time` clock icon + "5 min", `.read-more` arrow icon + "Read
     More"); (c) `.footer-address` — `h5` "Get In Touch" + list (MapPin
     "132 Liberty Streetelit, Plano, Texas", Mail "hello@home.com",
     Phone "214-805-4428") + hours lines "Monday – Friday: 9 am – 5 pm"
     / "Saturday: 9 am – 1pm". Bottom `.copyright` bar (text-center,
     row p-20): "Copyright © <year> All rights reserved | This template
     is made with ♥ by Colorlib".
- **Design tokens extracted from `css/style.css` + preview DOM:**
  - Brand color: **#8AD144** (lime green) — search submit button bg,
    newsletter "Subscribe!" button bg, radio pill checked state, outline
    button hover fill (white text).
  - Dark navy: **#30304e** — newsletter section bg, footer bg, card
    titles h5, price spans, "Why choose homes?" span.
  - Muted purple-gray text: **#6f6f8a** (body/secondary, services h2,
    newsletter input text) and **#8f8fa8** (outline button border/text,
    "For Sale" labels, location link text, radio pill bg); descriptions
    use #6f6f89.
  - Field label gray: **#61616e** (14px weight 300); select text
    **#3f3f4b** (16px weight 500).
  - Light backgrounds: **#F8F8F9** (instagram strip), **#F3F3F3**
    (1px field separators, card inner borders).
  - Badge red: **#E30707** ("Best Deal", uppercase 14px weight 500,
    radius 50px).
  - Hero overlay: solid **rgba(18, 16, 82, 0.75)** (dark navy, NOT a
    gradient).
  - Font: **"Roboto", sans-serif** (weights 300 / 400 / 500 in use) —
    Google Fonts `<link>`: `Roboto:wght@300;400;500`.
  - Buttons: `.site-btn` outline variant — 2px solid #8f8fa8 border,
    radius 4px, padding 15px 25px, 16px weight 500, color #8f8fa8;
    hover → background + border #8AD144, white text (0.3s transition).
    Filled variant (news-btn): background #8AD144, white, radius 4px.
    Search submit: radius `0 4px 4px 0` only.
  - Cards: radius 4px, shadow `2px 2px 30px rgba(0,0,0,0.1)`; filter
    form shadow `2px 15px 30px rgba(0,0,0,0.1)`, height 115px.
  - Hero text: white; h2 48px weight 300; h1 72px weight 300; centered,
    padding-top 272px; hero total height 633px.

## Requirements

### Requirement: Header and navigation

The system SHALL render an absolute header over the hero with a logo, a
nav menu, and a brand-icon cluster.

#### Scenario: Header content

- **GIVEN** the Habitat page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL be positioned absolute at the top over the
  hero (padding ~25px 0, full width)
- **AND** it SHALL show the brand "Habitat" top-left (house icon +
  wordmark)
- **AND** it SHALL show the nav links Home, Search Results, Categories,
  Single Property, Blog, and Contact
- **AND** it SHALL show brand icon links (Pinterest, Facebook, Twitter,
  Dribbble, Behance) at the right of the menu

#### Scenario: Responsive menu

- **GIVEN** the header is rendered
- **WHEN** the viewport is narrow (mobile)
- **THEN** the menu SHALL collapse behind a toggle (accessible, with
  aria-label/aria-expanded)
- **AND** activating the toggle SHALL open/close the mobile menu

### Requirement: Hero

The system SHALL render a 633px hero with a background photo, a dark navy
overlay, and a centered two-line headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL be 633px tall with a real-estate photo background
- **AND** it SHALL show a solid dark navy overlay
  (rgba(18, 16, 82, 0.75)) over the photo
- **AND** it SHALL show the centered white headline "Find your next"
  (48px, weight 300) above "dream home." (72px, weight 300)

### Requirement: Filter search form

The system SHALL render a white search form overlapping the bottom of the
hero, with location/type selects, a price range, bedroom/bathroom pills,
and a green search button.

#### Scenario: Form layout and fields

- **GIVEN** the page is rendered
- **WHEN** the filter form is displayed
- **THEN** it SHALL overlap the hero bottom (negative top margin ~-57px,
  z-index above the hero)
- **AND** it SHALL be a white rounded (4px) bar, ~115px tall, with a
  soft shadow (2px 15px 30px rgba(0,0,0,0.1))
- **AND** it SHALL show a Location select (London / US / UAE) with label
  "Location"
- **AND** it SHALL show a Property Type select (House / Resort / Hotel)
  with label "Property Type"
- **AND** it SHALL show a Price range with the label "Price" showing
  min/max handles (50k–300k)
- **AND** it SHALL show Bedrooms radio pills (1, 2, 3, 4+)
- **AND** it SHALL show Bathrooms radio pills (1, 2, 3, 4+)

#### Scenario: Search button and pills

- **GIVEN** the filter form is displayed
- **WHEN** the user looks at the right end of the form
- **THEN** a "Search" submit button SHALL be present (green #8AD144
  background, search icon + label, radius rounded only on the right)
- **AND** bedroom/bathroom pill labels SHALL be gray (#8F8FA8) with white
  text
- **AND** the selected (checked) pill SHALL be green (#8AD144)

#### Scenario: Form labels and selects styling

- **GIVEN** the filter form is displayed
- **WHEN** the selects render
- **THEN** field labels SHALL be 14px weight 300 #61616e
- **AND** select values SHALL be 16px weight 500 #3f3f4b with only a
  bottom border (1px #E7E7E7)

### Requirement: Property cards

The system SHALL render a 3-column grid of property cards with image,
title, location links, feature stats, price, and a view button.

#### Scenario: Card grid

- **GIVEN** the page is rendered
- **WHEN** the property section is displayed
- **THEN** it SHALL show a 3-column grid of cards (1 column on mobile, 2
  on tablet)
- **AND** each card SHALL be rounded (4px) with a soft shadow
  (2px 2px 30px rgba(0,0,0,0.1))

#### Scenario: Card content

- **GIVEN** a property card is displayed
- **WHEN** the card renders
- **THEN** it SHALL show a photo with a heart icon link in its top-right
  corner (lucide `Heart`, aria-label)
- **AND** it SHALL show an h5 title (18px weight 500 #30304e, e.g.
  "Country Style House with beautiful garden and terrace")
- **AND** it SHALL show "Location" and "Show on Map" links with icons
  (12px #8f8fa8)
- **AND** it SHALL show four feature stats — Lot Size (e.g. "2561
  sqft"), Beds (9), Baths (2), Garage (1) — each with an icon
- **AND** it SHALL show the price block: "For Sale" (16px #8f8fa8)
  above "$345,000" (24px weight 500 #30304e)
- **AND** it SHALL show a "View Property" outline button (2px #8f8fa8
  border, radius 4px, green fill + white text on hover)

### Requirement: Popular room carousel

The system SHALL render a dark photo section whose right half holds a
carousel of white property slides with a "Best Deal" badge.

#### Scenario: Popular room section

- **GIVEN** the page is rendered
- **WHEN** the popular-room section is displayed
- **THEN** it SHALL have a dark real-estate photo background
- **AND** its content SHALL sit on the right half (offset column; full
  width on mobile)

#### Scenario: Slide content

- **GIVEN** a popular-room slide is displayed
- **WHEN** the slide renders
- **THEN** it SHALL be a white rounded card (4px, padding ~30px)
- **AND** it SHALL show an h5 title (18px 500 #30304e, e.g. "Spacious
  Modern Smart House") with Location / Show on Map links
- **AND** it SHALL show a description paragraph (14px weight 300 #6f6f89)
- **AND** it SHALL show the feature stats (Lot Size / Beds / Baths /
  Garage)
- **AND** it SHALL show "For Sale" + "$345,000" plus a red "Best Deal"
  badge (#E30707, uppercase, pill radius 50px)
- **AND** it SHALL show a "View Property" outline button

#### Scenario: Carousel behavior

- **GIVEN** the popular-room section is displayed
- **WHEN** the user interacts with the carousel
- **THEN** the slides SHALL advance (auto and/or via prev/next controls)
- **AND** dot indicators SHALL be present

### Requirement: Newsletter

The system SHALL render a dark navy section with a mail icon, a two-line
heading, an email input, and a green subscribe button.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL have a #30304e background (padding ~80px 0 94px),
  centered
- **AND** it SHALL show a mail icon
- **AND** it SHALL show the heading "Join our mailing to get weekly
  updates on our exclusive deals." (white 24px weight 500)
- **AND** it SHALL show an email input (placeholder "Email address",
  radius 4px) and a green "Subscribe!" button (#8AD144, radius 4px)

### Requirement: Why choose us

The system SHALL render a two-column section with a heading + paragraph
on the left and a six-item check list on the right.

#### Scenario: Section content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show on the left the heading "Why choose homes?
  Because we we are the best in the business." (36px weight 400 #6f6f8a
  with the first line #30304e weight 500) and a supporting paragraph
- **AND** it SHALL show on the right SIX list items, each with a check
  icon and lorem-style text

### Requirement: Instagram strip

The system SHALL render a light-gray strip with a centered Instagram
follow heading and a row of square photos.

#### Scenario: Instagram section content

- **GIVEN** the page is rendered
- **WHEN** the instagram section is displayed
- **THEN** it SHALL have a #F8F8F9 background (padding ~40px 0), centered
- **AND** it SHALL show the heading "Don’t forget to follow us on
  Instagram @habitat" (36px weight 400 #000)
- **AND** it SHALL show a row of square placeholder photos (the demo
  injects these via JS — keep the strip feel)

### Requirement: Footer

The system SHALL render a dark navy footer with a photo strip, centered
logo, three widget columns, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a #30304e background
- **AND** it SHALL start with a full-width strip of FIVE property photos
- **AND** it SHALL show the centered brand logo (house icon + "Habitat")
- **AND** it SHALL show an "About Homes" column (paragraph + brand icon
  row: Pinterest, Facebook, Twitter, Dribbble, Behance)
- **AND** it SHALL show a "Latest Blog Posts" column with TWO post rows
  (thumb image, h6 title e.g. "How to find the perfect area for your
  next house.", clock icon + "5 min", arrow + "Read More")
- **AND** it SHALL show a "Get In Touch" column (MapPin "132 Liberty
  Streetelit, Plano, Texas", Mail "hello@home.com", Phone "214-805-4428",
  and hours "Monday – Friday: 9 am – 5 pm" / "Saturday: 9 am – 1pm")
- **AND** a bottom copyright bar SHALL read "Copyright © <current year>
  All rights reserved | This template is made with ♥ by Colorlib"

### Requirement: Page composition

The system SHALL compose all sections in the reference order on one page.

#### Scenario: Section order

- **GIVEN** the Habitat page is rendered
- **WHEN** the user scrolls from top to bottom
- **THEN** the sections SHALL appear in this order: Header, Hero, Filter
  Search, Property Cards, Popular Room, Newsletter, Why Choose Us,
  Instagram, Footer

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] Section order matches the reference 1:1 (Header → Hero → Filter
      Search → Property Cards → Popular Room → Newsletter → Why Choose
      Us → Instagram → Footer)
- [ ] Design tokens reproduced in Tailwind `@theme`: `--color-brand`
      #8AD144 (lime green), `--color-navy` #30304e, `--color-muted`
      #6f6f8a, `--color-outline` #8f8fa8, `--color-label` #61616e,
      `--color-select` #3f3f4b, `--color-light` #F8F8F9,
      `--color-badge` #E30707, `--color-divider` #F3F3F3; font Roboto
      (300/400/500) via Google Fonts `<link>` in `index.html`
- [ ] Header: absolute over hero, "Habitat" brand (house icon +
      wordmark), nav (Home, Search Results, Categories, Single Property,
      Blog, Contact) + brand icon cluster (Pinterest, Facebook, Twitter,
      Dribbble, Behance — inline SVG, NOT lucide brand icons); mobile
      collapse toggle with aria-expanded
- [ ] Hero: 633px, photo bg + solid rgba(18,16,82,.75) overlay,
      centered white "Find your next" (48px/300) + "dream home."
      (72px/300)
- [ ] Filter search: overlaps hero (-57px, z-index), white bar radius
      4px height 115px with shadow, Location + Property Type selects,
      Price range 50k–300k, Bedrooms + Bathrooms radio pills
      (gray → green checked), green "Search" submit (radius 0 4px 4px 0)
- [ ] Property cards: 3-col grid, rounded 4px + shadow
      (2px 2px 30px rgba(0,0,0,.1)), heart icon, h5 title, Location /
      Show on Map links, Lot Size/Beds/Baths/Garage stats, "For Sale
      $345,000", "View Property" outline button (green hover fill)
- [ ] Popular room: dark photo bg, right-half white slide cards
      (title, links, description, stats, "For Sale $345,000" + red
      "Best Deal" pill badge, View Property), carousel with dots
- [ ] Newsletter: #30304e bg, mail icon, two-line heading, email input +
      green "Subscribe!" button
- [ ] Why Choose Us: 2-col split — left h2 (36px #6f6f8a, first line
      #30304e 500) + paragraph; right SIX check-list items
- [ ] Instagram: #F8F8F9 bg, centered 36px heading "Don’t forget to
      follow us on Instagram @habitat" + square photo row
- [ ] Footer: #30304e, 5-photo strip, centered brand, About column +
      socials, 2 blog-post rows (thumb + h6 + clock "5 min" + Read
      More), Get In Touch column (address/email/phone/hours), copyright
      bar
- [ ] All images are picsum placeholders with alt text; no ColorLib
      assets
- [ ] Icons from lucide-react except brand icons (inline SVG per skill);
      no icon fonts copied
- [ ] Tests: one `describe` per component, scenarios mirroring this spec;
      100% coverage (lines/functions/branches/statements)
- [ ] `scripts/verify-app.sh habitat` green (typecheck + lint + coverage + build)
