# Template: Findly (Directory / Listing Template)

## Purpose

Findly is a directory/listing landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Gricklo"
template design (see TEMPLATES.md — appears 2×: lines 588, 1530; both rows
point to the same source, one prep covers all; verified with
`grep -c 'wp/template/gricklo/'` = 2), built under a DIFFERENT name (Findly —
find + -ly, matching the project's naming pattern) per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/gricklo/ (Bootstrap 5 category,
"Gricklo" — a directory/listings template: destinations, business categories,
popular listings, reviews)
Preview URL: https://preview.colorlib.com/theme/gricklo/

## Design reference (replication findings)

- **Original:** ColorLib "Gricklo" — a light, airy directory/listing landing
  page: a full-height photo hero (night restaurant interior, dark navy
  top-to-bottom gradient overlay) with the white 60px headline "Listing made
  easy.", a white pill search bar (What? / Where? / blue Search button), and
  translucent white category pills (Restaurant · Home · Party · Shopping ·
  Hotel); a white "Top Destination" strip of six CIRCULAR city photos with
  hover overlays; a light-blue-grey `#F1F6F9` "Things Are You Interested In"
  mixed category grid; a white "Popular Things To do" carousel of listing
  cards (photo, "Closed" pill badge, heart, orange star rating, title with
  verified badge, address, category + contact icons); a bordered "Do you want
  to find more?" CTA band (blue pill "Explore More"); a `#F1F6F9` "How It
  Work?" 3-step strip (Find Businesses / Review Listings / Make a
  Reservation); a testimonials slider ("People talking about" with a grey
  quote card + founder row); and a pale-blue `#F1FBFF` footer (about + 4
  socials, Navigation links, Services links, Subscribe newsletter form,
  copyright bar). Primary brand blue `#4DB7FE` with orange `#FF6F00` rating
  accents; Work Sans headings + Mulish body.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/gricklo/
  (HTTP 200, ~45 KB HTML fetched; `assets/css/style.css` ~90 KB parsed for
  tokens — the page also imports bootstrap.min, owl.carousel, slicknav,
  animate, magnific-popup, fontawesome-all, themify-icons, slick,
  nice-select; site is jQuery + Bootstrap 5 + owl-carousel + slicknav, NOT
  Tailwind). Fonts come from a CSS `@import` of Google Fonts "Mulish"
  (300–800) + "Work Sans" (300–800) — recreate via Google Fonts `<link>`s in
  index.html (do NOT copy font files).
- **Screenshot note:** `gricklo-free-template.jpg` (1200×946) MATCHES the
  live template: nav logo + centered links + Sign In / Add Listing (blue
  pill); hero with night restaurant photo + dark navy overlay, white headline
  - subtext, white pill search bar split into What? / Where? / blue Search
    button, and category filter pills below ("Restaurant" active-blue);
    "Top Destination" section with a horizontal row of six circular city
    photos. The live preview DOM + parsed stylesheet are the authoritative
    reference; the screenshot confirms palette + layout.

### Section structure (from the live DOM, top to bottom)

1. `header` > `div.header-area.header-transparent` > `div.main-header
  .header-sticky` (sticky bar on scroll: fixed top 0, white bg, shadow
   `0 10px 15px rgba(25,25,25,0.1)`) > `div.menu-wrapper` (flex, space
   between) > `div.container-fluid`:
   - `div.left-content` (flex): `div.logo` > `a` > img `assets/img/logo/
logo.png` (→ text brand "Findly" or picsum logo placeholder); inline
     search `form.form-box` (width 323px; `input` height 48px, white text,
     bg `rgba(255,255,255,0.25)`, border `1px solid rgba(35,47,85,0.15)`,
     radius 30px pill, padding-left 50px, placeholder "Search" white) +
     `div.search-icon` (search glyph, white, absolute left 25px); nav
     `div.main-menu.d-none.d-lg-block` > `nav` > `ul#navigation`:
     "Home" · "Listing" (▾ angle-down, submenu: Listing, Listing Details) ·
     "About" · "Blog" (▾, submenu: Blog, Blog Details, Element) · "Contact"
     — `a` Work Sans 16px/600 white, padding 28px 5px, hover `#4DB7FE`;
     submenu bg `rgba(26,33,61,0.8)`, width 170px.
   - `div.buttons` > `ul` > `li.button-header`: `a.header-btn.mr-30` "Sign
     In" (white Work Sans 16px/500, hover `#4DB7FE`) + `a.btn.header-btn2`
     "Add Listing" (blue `#4DB7FE` pill radius 30px, padding 24px 23px).
   - Mobile: `div.mobile_menu.d-block.d-lg-none` (slicknav → client-side
     hamburger menu with the same links).
2. `div.slider-area.hero-bg1` (bg image `assets/img/hero/h1_hero.jpg`,
   cover) > `div.single-slider.hero-overly.slider-height1.d-flex
.align-items-center` (min-height 956px; `::before` = navy vertical
   gradient overlay `rgba(26,32,61,0.65)` top → `rgba(27,34,60,0.75)` ~50%
   → fading to `~0.15` at bottom) > `div.container` > centered column:
   - `div.hero-caption.pt-10`: `h1` "Listing made easy." (Work Sans 60px/
     600 white) + `p` "Explore vacation rentals, bar & restaurants and
     experiences. Find amazing places to visit" (white 22px/300, padding
     0 159px).
   - `form.search-box.mb-45` (flex, space-between; white rounded bar):
     `div.input-form` (width 42%) > `input` (height 60px, width 100%, color
     `#140C40` 17px, radius 6px, padding-left 94px, placeholder "Ex: Food,
     Service, Hotel, Shopping") + `span` "What?" (Work Sans `#1A213D`
     16px/500, absolute left 22px); `div.input-form` > `input` (placeholder
     "Your City....") + `span` "Where?"; `div.search-form` > `a` "Search"
     (icon + text; bg `#4DB7FE`, white Work Sans 16px, height 60px).
   - `div.category-items.text-center` > `ul`: "Restaurant" · "Home"
     (`.active`, bg `#304CBB`) · "Party" · "Shopping" · "Hotel" — pills:
     margin 3px 5px, bg `rgba(255,255,255,0.25)`, white 16px, padding
     10px 20px, radius 20px.
3. `section.great-stuffs.section-padding` (white; section-padding = 100px
   top / 90px bottom) > `div.container`:
   - `div.section-tittle.text-center.mb-40` > `h2` "Top Destination"
     (Work Sans 36px/600 `#1A213D`).
   - `div.row` of 6 × `div.col-xl-2.col-lg-2.col-md-4.col-sm-4` >
     `div.single-location.mb-30.text-center`:
     - `div.location-img` — **circle** (border-radius 50%; `::before` hover
       overlay `rgba(26,33,61,0.5)` fade-in; `::after` decorative rotating
       2px DOTTED white ring (92% × 91%, radius 50%, `rotateme` 30s linear
       infinite) revealed on hover) > img `topDesti1..6.png` +
       `div.location-details` (centered) > `h4` > `a` "Explore" +
       angle-right icon (white 16px/600; hidden → shown on hover).
     - `h3` > `a` city name (`#1A213D` 22px/600, padding-top 20px):
       New York, Toronto, Thailand, Paris, Dhaka, Rome.
4. `section.popular-location.section-padding.section-bg` (bg `#F1F6F9`) >
   `div.container`:
   - `div.section-tittle.text-center.mb-80` > `h2` "Things Are You
     Interested In" + `p` "Things you are looking for today" (`#6B5A5A`
     18px/300).
   - 3-column mixed grid (`div.row`): left `col-xl-4` = 2 stacked cards
     ("Restaurant & Bar", "Outdoor"); middle `col-xl-4` = 1 TALL card
     "Shopping Center" (`div.location-details.location-details2`: `h4`
     white 16px/600 + `p` "Discover & connect with great <br> local
     businesses in New York" + `a.location-btn` "Explore" — bg `#4DB7FE`,
     padding 13px 32px, white, radius 30px pill; hover: white bg + blue
     text); right `col-xl-4` = 2 stacked cards ("Restaurant & Bar",
     "Outdoor"). Cards: `div.single-location.mb-20` > `div.location-img`
     (rounded, overflow hidden; `::before` bottom navy gradient `#010a27`
     → transparent for caption legibility) > img `home-blog1..5.jpg` +
     overlay `h4` title (white 16px/600).
5. `section.popular-directorya-area.section-padding.fix` (white) >
   `div.container`:
   - `div.section-tittle.text-center.mb-70` > `h2` "Popular Things To do" +
     `p` "Popular Exclusive Listings In Our Directory".
   - `div.directory-active` (owl carousel → client-side state) of 4–5 ×
     `div.properties.pb-20` > `div.properties-card` (radius 5px, shadow
     `0px 6px 6px 0px rgba(2,25,65,0.08)`):
     - `div.properties-img.overlay1` (relative; `::before` bottom navy
       gradient like the category cards): `a` > img `directory1..4.jpg`
       (width 100%, radius 5px 5px 0 0); `div.img-text` (absolute top 32px
       left 28px) > `span` "Closed" (white 16px/400, padding 7px 15px,
       radius 25px pill, bg `rgba(126,109,92,0.9)`); `div.icon` (absolute
       top-right) > heart icon (`far fa-heart`); `div.ratting` (absolute
       bottom 25px left 25px) > `ul`: 5 star icons + `li` > `span` "-
       4.90 (230 Review)" — all color `#FF6F00` 14px (lucide Star filled).
     - `div.properties-caption` (padding 15px 18px 0 22px; border-bottom
       1px solid `#ebeff4`): `h3` (20px/600 `#1A213D`) > `a` "Gloria Fast
       Food Restaurant" + verified badge img (`varified.png` → lucide
       BadgeCheck blue); `p` (16px) > map-marker icon + "75 Prince Street,
       green road, NY, USAk" [sic — paraphrase].
     - `div.properties-footer.d-flex.justify-content-between` (padding
       19px 18px 12px 22px): `div.restaurant-name` > restaurant icon
       (→ lucide UtensilsCrossed) + `h3` > `a` "Food & Restaurant";
       `div.contact` > `ul` > 2 × `li` icons (phone-alt, envelope → lucide
       Phone, Mail).
6. `section.container` > `div.wantToWork` (border 1px solid `#DEE0E5`,
   radius 5px, flex space-between, padding) > `div`:
   - `h2` "Do you want to find more?" (24px/600 `#1A213D`) + `p` "10,563
     listing for you on our list."
   - `div.linking` > `a.btn.wantToWork-btn` "Explore More" (blue pill
     radius 30px; `.btn` hover = navy `#1A213D` scaleX sweep from left via
     `::before`).
7. `section.our-services.section-padding.position-relative` (bg `#F1F6F9`)
   > `div.container`:
   - `div.section-tittle.text-center.mb-70` > `h2` "How It Work?"
   - `div.row.justify-content-between` > 3 × `div.col-xxl-3.col-xl-4
.col-lg-4.col-md-6.col-sm-6` > `div.single-services.text-center.mb-30`:
     `div.services-icon` > img `services1..3.svg` (→ lucide: Search /
     Star / CalendarCheck) + `div.services-cap` > `h5` > `a` "Find
     Businesses" / "Review Listings" / "Make a Reservation" + `p`
     description (18px `#6B5A5A`).
8. `div.testimonial-area` (white) > `div.h1-testimonial-active` (client-side
   slider; nav arrows: 35px black circles radius 50%, shadow
   `0px 5px 10px rgba(0,0,0,0.05)`) > `div.single-testimonial`:
   - `div.testimonial-caption` (padding-left 80px) >
     `div.testimonial-top-cap`: `h2` "People talking about" (Work Sans
     36px/600 `#000`) + `p` quote (bg `#F1F6F9`, radius 5px, padding
     30px 100px 30px 40px, 20px `#1A213D`; quotes paraphrased).
   - `div.testimonial-founder.d-flex.align-items-center`: `div.founder-img`
     > img (circular portrait) + `div.founder-text`: `span` "Dan Delion"
     > (Work Sans 20px/600 `#1A213D`) + `p` "UI & UX Designer at Colorlib"
     > (→ paraphrase role, e.g. "Founder at Findly").
9. `footer` > `div.footer-wrapper.gray-bg` (bg `#F1FBFF`) >
   `div.footer-area.footer-padding` (padding-top 80px) > `div.container` >
   `div.row.justify-content-between` (4 columns):
   - `div.col-xl-3` (brand): `div.footer-logo.mb-35` > img
     `logo2_footer.png` (→ text brand or picsum); `div.footer-pera` > `p`
     about text (`#A4A6AE` 14px, line-height 1.8); `div.footer-social` >
     4 × `a` (Facebook, Instagram, LinkedIn, YouTube — inline SVG brand
     icons, color `#677F8B` 20px, margin-right 24px; lucide has no brand
     icons).
   - `div.col-xl-2` "Navigation" (`h4` white 20px/400): Home, About,
     Services, Blog, Contact (links).
   - `div.col-xl-2` "Services": Care, Treatment, Training, Hygienic Care
     [sic — source recycles health-template copy; paraphrase to
     directory-appropriate links, e.g. Find Businesses, List Your
     Business, Pricing, Help Center].
   - `div.col-xl-3` "Subscribe newsletter" (`h4` white 20px + `p`
     "Subscribe our newsletter to get updates about our services and
     offers.") > `form.subscribe_form` (mailchimp → client-side
     validation): `input` email (height 50px, border `#f0e9ff`, radius 0,
     padding-left 20px, placeholder "Enter Email Address" `#999999`) +
     button (icon; white bg) — mirror `newsletter_widget` split-input
     style.
   - `div.footer-bottom` (padding-top 39px) > copyright bar: ColorLib
     credit line ("Copyright © <year> All rights reserved | This template
     is made with <heart> by Colorlib") → recreate as "© 2026 Findly —
     All rights reserved" + required Component Dock link
     (https://www.componentdock.com/).

### Content (for copy paraphrase)

- Nav: Home, Listing (▾ Listing / Listing Details), About, Blog (▾ Blog /
  Blog Details / Element), Contact + inline "Search" input + "Sign In" +
  "Add Listing".
- Hero: h1 "Listing made easy."; p "Explore vacation rentals, bar &
  restaurants and experiences. Find amazing places to visit"; search
  placeholders "Ex: Food, Service, Hotel, Shopping" / "Your City....";
  category pills Restaurant · Home (active) · Party · Shopping · Hotel.
- Top Destination: 6 cities — New York, Toronto, Thailand, Paris, Dhaka,
  Rome — each with "Explore →" hover overlay.
- Interested In: categories Restaurant & Bar, Outdoor, Shopping Center
  (+ "Explore" location-btn), Restaurant & Bar, Outdoor.
- Popular listings: "Gloria Fast Food Restaurant" (repeat ×5 in source →
  vary names), "Food & Restaurant" category, "Closed" badge, ratings like
  "4.90 (230 Review)", addresses (paraphrase).
- CTA: "Do you want to find more?" / "10,563 listing for you on our list."
  / "Explore More".
- How It Work: Find Businesses, Review Listings, Make a Reservation (+
  paraphrased blurbs).
- Testimonials: "People talking about" + quote + founder "Dan Delion".
- Footer: brand blurb, 4 socials, Navigation (Home/About/Services/Blog/
  Contact), Services links (paraphrased), Subscribe newsletter, copyright.

## Design tokens

| Token             | Value                           | Usage                                                                                                                                                                           |
| ----------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| brand-blue        | `#4DB7FE`                       | `.btn` bg, search-form "Search" button, location-btn, header-btn2 (Add Listing), nav link hover, header-btn hover, back-to-top, search widget button bg                         |
| blue-deep         | `#304CBB`                       | active category pill bg ("Home" active)                                                                                                                                         |
| navy              | `#1A213D`                       | headings (h1–h6, section-tittle h2), `.btn::before` hover sweep, input labels (What?/Where?), location names, testimonial quote text, testimonial founder name, submenu bg base |
| ink-deep          | `#140C40`                       | hero search input text color                                                                                                                                                    |
| ink               | `#000000`                       | testimonial h2, carousel arrow bg                                                                                                                                               |
| accent-orange     | `#FF6F00`                       | rating stars + review text (`.ratting ul li`)                                                                                                                                   |
| section-bg        | `#F1F6F9`                       | `.section-bg` (Interested In), `.our-services` bg, testimonial quote card bg                                                                                                    |
| footer-bg         | `#F1FBFF`                       | `.gray-bg` footer wrapper                                                                                                                                                       |
| muted-brown       | `#6B5A5A`                       | section-tittle `p`, body `p` color                                                                                                                                              |
| footer-text       | `#A4A6AE`                       | footer body text                                                                                                                                                                |
| role-text         | `#68696E`                       | founder role text                                                                                                                                                               |
| socials           | `#677F8B`                       | footer social icons                                                                                                                                                             |
| placeholder       | `#999999`                       | newsletter input placeholder                                                                                                                                                    |
| badge-bg          | `rgba(126,109,92,0.9)`          | "Closed" pill badge on listing photos (radius 25px)                                                                                                                             |
| hero-overlay      | `rgba(26,32,61,0.65→0.75→0.15)` | vertical gradient overlay on hero photo (top-heavy)                                                                                                                             |
| nav-input-bg      | `rgba(255,255,255,0.25)`        | header inline search input + hero category pills bg                                                                                                                             |
| card-shadow       | `rgba(2,25,65,0.08)`            | properties-card shadow (`0px 6px 6px 0px`)                                                                                                                                      |
| card-border       | `#ebeff4`                       | properties-caption bottom border                                                                                                                                                |
| cta-border        | `#DEE0E5`                       | wantToWork CTA box border                                                                                                                                                       |
| newsletter-border | `#f0e9ff`                       | newsletter input border                                                                                                                                                         |
| font-heading      | "Work Sans"                     | h1–h6, buttons, labels, nav links, founder name (Google Fonts 300–800)                                                                                                          |
| font-body         | "Mulish"                        | body copy (Google Fonts 300–800)                                                                                                                                                |

Radii: **30px pill** on `.btn` (all primary buttons incl. Add Listing,
Explore More, location-btn padding 13px 32px), header inline search input,
hero category pills (radius 20px), "Closed" badge (25px); **50% circles**
on Top Destination images (with decorative 2px dotted rotating ring on
hover), testimonial carousel arrows (35px), founder portrait; 10px on
location-img (category cards); 6px on hero search inputs; 5px on
properties-card / properties-img (5px 5px 0 0) / wantToWork box /
testimonial quote; 0 on newsletter input (split with white icon button).

Spacing: hero min-height 956px; `.section-padding` = 100px top / 90px
bottom; `.footer-padding` 80px top; search inputs + search button 60px
height; newsletter input 50px; section-tittle h2 mb 14px, section-tittle
mb 50px; properties-card caption padding 15px 18px 0 22px, footer padding
19px 18px 12px 22px; hero p padding 0 159px (desktop); testimonial caption
padding-left 80px, quote padding 30px 100px 30px 40px.

## Requirements

### Requirement: Header / Navigation

The system SHALL render a transparent-over-hero sticky header with a text
brand, an inline search input, five nav links (two with dropdowns), a Sign
In link, an Add Listing pill button, and a mobile hamburger menu.

#### Scenario: Brand, search, and nav links

- **GIVEN** the Findly app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL overlay the hero transparently at the top
- **AND** the brand SHALL read "FINDLY" (or a text/logo equivalent)
- **AND** an inline pill search input with a search icon SHALL render next
  to the brand
- **AND** the nav SHALL list Home, Listing (dropdown: Listing, Listing
  Details), About, Blog (dropdown: Blog, Blog Details, Element), and
  Contact in 16px Work Sans white
- **AND** nav links SHALL turn brand blue on hover

#### Scenario: Sign In and Add Listing

- **GIVEN** the header is rendered
- **WHEN** the page loads
- **THEN** a "Sign In" text link SHALL render on the right (white, brand
  blue on hover)
- **AND** a "Add Listing" pill button SHALL render next to it with a brand
  blue background, white text, and 30px radius

#### Scenario: Scrolled state

- **GIVEN** the page is scrolled down
- **WHEN** the header becomes sticky
- **THEN** it SHALL turn into a translucent navy bar (`rgba(26,33,61,0.8)`
  per the source stylesheet `.header-sticky.sticky-bar`) with the soft
  shadow `0 10px 15px rgba(25,25,25,0.1)`

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow
- **WHEN** the hamburger trigger is activated
- **THEN** a mobile menu SHALL open listing the same nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero

The system SHALL render a tall hero over a photo with a navy gradient
overlay, a white headline and subtext, a two-field search bar with a blue
Search button, and translucent category pills.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL fill at least 956px with a cover photo background
  and a top-heavy navy gradient overlay
- **AND** the white 60px headline SHALL read "Listing made easy."
- **AND** the white 22px subtext SHALL read "Explore vacation rentals, bar
  & restaurants and experiences. Find amazing places to visit"

#### Scenario: Search bar

- **GIVEN** the hero search bar is rendered
- **WHEN** the page loads
- **THEN** a white rounded bar SHALL show a "What?" field (placeholder "Ex:
  Food, Service, Hotel, Shopping") and a "Where?" field (placeholder "Your
  City...."), each with a navy Work Sans label
- **AND** a brand blue "Search" button with a search icon SHALL render on
  the right

#### Scenario: Category pills

- **GIVEN** the hero category pills are rendered
- **WHEN** the page loads
- **THEN** translucent white pills SHALL list Restaurant, Home (active,
  filled `#304CBB`), Party, Shopping, and Hotel
- **AND** the active pill SHALL render with the deep-blue fill and white
  text

### Requirement: Top Destination

The system SHALL render the "Top Destination" section with six circular
city cards, each with a hover overlay and an Explore link.

#### Scenario: Destination cards

- **GIVEN** the Top Destination section is rendered
- **WHEN** the page loads
- **THEN** the centered 36px heading SHALL read "Top Destination"
- **AND** six circular photo cards SHALL render in a row: New York,
  Toronto, Thailand, Paris, Dhaka, Rome
- **AND** each card SHALL show its city name in 22px/600 navy below the
  image

#### Scenario: Card hover

- **GIVEN** a destination card is rendered
- **WHEN** it is hovered
- **THEN** a `rgba(26,33,61,0.5)` overlay SHALL fade in over the photo
- **AND** a white "Explore" link with an angle-right icon SHALL appear
  centered
- **AND** a decorative 2px dotted white ring SHALL rotate slowly around the
  image edge

### Requirement: Interested In categories

The system SHALL render the "Things Are You Interested In" section on a
light `#F1F6F9` background with a mixed grid of image category cards.

#### Scenario: Category grid

- **GIVEN** the categories section is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL read "Things Are You Interested In" with the
  subtext "Things you are looking for today"
- **AND** five image cards SHALL render in a 3-column layout: two stacked
  on the left (Restaurant & Bar, Outdoor), one tall card in the middle
  (Shopping Center), and two stacked on the right (Restaurant & Bar,
  Outdoor)
- **AND** each card SHALL show its white category title over the image with
  a bottom navy gradient

#### Scenario: Tall card content

- **GIVEN** the tall Shopping Center card is rendered
- **WHEN** the page loads
- **THEN** it SHALL show a short description paragraph and a brand blue
  pill "Explore" button
- **AND** hovering the button SHALL invert it (white background, blue text)

### Requirement: Popular Listings

The system SHALL render the "Popular Things To do" carousel of listing
cards, each with a photo, status badge, wishlist icon, star rating, title,
address, and a category footer with contact icons.

#### Scenario: Listing cards

- **GIVEN** the listings section is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL read "Popular Things To do" with the subtext
  "Popular Exclusive Listings In Our Directory"
- **AND** at least four listing cards SHALL render in a client-side
  carousel, each containing:
  - a photo (radius 5px 5px 0 0) with a "Closed" pill badge (top-left,
    `rgba(126,109,92,0.9)`), a heart icon (top-right), and a rating row
    over the bottom (5 filled stars + "- 4.90 (230 Review)" in `#FF6F00`)
  - a title (20px/600 navy) with a blue verified badge and an address line
    with a map-marker icon
  - a footer row: category icon + "Food & Restaurant" on the left, and
    phone + envelope icons on the right

#### Scenario: Carousel navigation

- **GIVEN** the listings carousel is rendered
- **WHEN** the next/prev controls are activated
- **THEN** the carousel SHALL advance/go back one card
- **AND** dot indicators SHALL reflect the active card

### Requirement: Find More CTA

The system SHALL render the bordered "Do you want to find more?" band with
a listing count and an Explore More button.

#### Scenario: CTA band

- **GIVEN** the CTA section is rendered
- **WHEN** the page loads
- **THEN** a bordered box (1px `#DEE0E5`, 5px radius) SHALL show the 24px
  heading "Do you want to find more?" and the text "10,563 listing for you
  on our list."
- **AND** a brand blue pill "Explore More" button SHALL render on the right

### Requirement: How It Work

The system SHALL render the "How It Work?" three-step section on `#F1F6F9`
with icon, title, and description per step.

#### Scenario: Steps

- **GIVEN** the How It Work section is rendered
- **WHEN** the page loads
- **THEN** the centered heading SHALL read "How It Work?"
- **AND** three centered step cards SHALL render with icons and titles:
  Find Businesses, Review Listings, and Make a Reservation
- **AND** each card SHALL show a short paraphrased description

### Requirement: Testimonials

The system SHALL render the "People talking about" testimonial slider with
a quote card and a founder row.

#### Scenario: Testimonial slide

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the 36px heading SHALL read "People talking about"
- **AND** the quote SHALL render on a `#F1F6F9` card (5px radius, 20px
  navy text)
- **AND** below it a founder row SHALL show a circular portrait, the name
  (e.g. "Dan Delion") in 20px/600 navy, and a paraphrased role line

#### Scenario: Slider navigation

- **GIVEN** the testimonial slider is rendered
- **WHEN** the next/prev arrow controls (35px black circles) are activated
- **THEN** the slider SHALL advance/go back one slide
- **AND** the slider SHALL contain at least two distinct slides

### Requirement: Footer

The system SHALL render the pale-blue `#F1FBFF` footer with a brand column,
Navigation and Services link columns, a Subscribe newsletter form, and a
copyright bar linking to Component Dock.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the brand column SHALL show the Findly logo/text, an about
  paragraph (`#A4A6AE` 14px), and four social icons (Facebook, Instagram,
  LinkedIn, YouTube)
- **AND** a "Navigation" column SHALL list Home, About, Services, Blog,
  Contact
- **AND** a "Services" column SHALL list four paraphrased links
- **AND** a "Subscribe newsletter" column SHALL show the heading, a short
  pitch, an email input (50px, `#f0e9ff` border), and a submit button

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is rendered
- **WHEN** an invalid email is submitted
- **THEN** the form SHALL show a client-side error and SHALL NOT submit

#### Scenario: Copyright bar

- **GIVEN** the footer copyright bar is rendered
- **WHEN** the page loads
- **THEN** it SHALL read "© 2026 Findly — All rights reserved"
- **AND** it SHALL link to https://www.componentdock.com/ (mandatory)

## Verification checklist

- [ ] Section order + structure matches the live preview 1:1 (header →
      hero → top destination → interested-in categories → popular listings
      → find-more CTA → how-it-work → testimonials → footer).
- [ ] Brand blue `#4DB7FE` in `@theme`; used via Tailwind classes
      everywhere (buttons, search, hovers, active states).
- [ ] Fonts: Work Sans (headings/buttons) + Mulish (body) via Google Fonts
      `<link>` in `index.html`; no font files copied.
- [ ] Placeholder images: `https://picsum.photos/seed/findly-<n>/<w>/<h>`
      (hero bg, 6 destination circles, 5 category cards, 4–5 listing
      photos, founder portrait) — never copy ColorLib assets. Prefer
      subject-appropriate seeds for the night-restaurant hero and city
      circles (verify with browser_vision; see skill notes on seed
      screening).
- [ ] Icons: lucide-react (Search, Star filled, Heart, MapPin, BadgeCheck,
      UtensilsCrossed, Phone, Mail, Menu, ChevronRight/AngleRight,
      CalendarCheck); brand socials (Facebook/Instagram/Linkedin/Youtube)
      as inline SVG (lucide has no brand icons). Probe every icon with
      `node -e "console.log(typeof require('lucide-react').X)"` — renames
      bite silently.
- [ ] Carousels (popular listings, testimonials) implemented with
      client-side state — no owl-carousel.
- [ ] Destination circle hover: navy overlay + Explore link + rotating
      2px dotted white ring (CSS `animation`, `rotateme`-style keyframes).
- [ ] `.btn` hover sweep (navy `#1A213D` scaleX from left) reproduced via a
      Tailwind group-hover/after utility or arbitrary-property transform —
      NOT Tailwind's translate utilities (see v4 transform-order trap).
- [ ] Hero overlay: top-heavy navy gradient (not a flat overlay) — use a
      Tailwind arbitrary `bg-[linear-gradient(...)]`.
- [ ] Tests: Vitest + Testing Library, 100% lines/functions/branches/
      statements; desktop + mobile nav duplication handled with
      `getAllByRole` indexing (mobile menu last); decorative `<img alt="">`
      photos queried via `container.querySelectorAll('img')` (no `img`
      role); role=status/alert accessible-name rules respected.
- [ ] Gates: `npm run verify:app -- findly` green; full gate via CI on
      merge.
- [ ] PR description: source template (Gricklo), preview URL, design
      tokens used, what differs (renames, placeholder images,
      owl-carousel→client-side state, mailchimp→client-side validation,
      paraphrased copy incl. the footer "Services" health-template gibberish
      and "10,563" count).
