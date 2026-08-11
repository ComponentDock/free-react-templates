# Template: Hoodly (Local Business Directory Template)

## Purpose

Hoodly is a local-business directory landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Locals Directory" template design (see TEMPLATES.md — appears
3×: lines 441, 1080, 1545; all three rows point to the same source, one prep
covers all; verified with `grep -c 'wp/template/locals-directory/'` = 3),
built under a DIFFERENT name (Hoodly — "hood" (neighborhood) + -ly, matching
the project's naming pattern: Lendly, Stayly, Roadly) per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/locals-directory/ (Bootstrap /
Business / Directory categories; title "Local Directory | Template").
Preview URL: https://preview.colorlib.com/theme/localsdirectory/ — NOTE the
TEMPLATES.md slug `locals-directory` 404s on the preview portal; the real
preview slug is `localsdirectory` (no hyphen, confirmed via
`preview.colorlib.com/assets/js/products.js`, entry under "Job Board",
demo preview `2019/10/localsdirectory-demo-preview.jpg`).

## Design reference (replication findings)

- **Original:** ColorLib "Locals Directory" (`<title>Local Directory |
Template</title>`; the `<meta description>` leftover "Yoga Studio
  Template" is a base-template artifact — ignore). A pink-and-dark local
  directory one-pager: a solid `#1d1d1d` header bar over the hero (two-line
  logo left, 5-link menu, "Register/ Login" links + pink "Add Listing" pill
  right); a full-height hero over a New York street photo with a dark
  overlay (left: huge 96px white "New York" heading with a location pin;
  center: a white 43%-opacity search panel with two h5 labels + dropdowns —
  "Search Category" (Restaurants / Hotels / Food & Drinks / Home Delievery
  / Commercial Shops) and "Your Location" (New York) — plus a pink square
  "Search Now" button); a light `#F7F8FB` "Top trending for your city"
  section (2×2 grid of cards: 185px circular photo + 55px pink rating
  circle + title + address + blurb + open/closed pills + a colored
  FEATURED tag top-right); a "Categories" mosaic (1 large 745px tile left +
  2×2 grid of 360px tiles right, each a photo with a black text box:
  category name + listing count + "View All", lightbox zoom on click); a
  testimonial carousel (avatar + italic quote + "Michael Smith / CEO
  Company" ×3); a photo "How it works" band (3 steps with dark 76px number
  squares: Search the portal / Choose the one 4u / Book it!); a light
  "Get the App now!" section (phone photo left, 3 pink check bullets, App
  Store + Google Play badges right); and a `#1d1d1d` footer (dark newsletter
  form, 3 link widgets + From the Blog with 2 post cards, copyright bar +
  footer menu).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/localsdirectory/
  (HTTP 200, ~26.6 KB HTML fetched; `css/style.css` ~41 KB parsed for
  tokens). The page imports bootstrap.min, font-awesome, flaticon,
  nice-select, owl.carousel, magnific-popup, slicknav — site is jQuery +
  Bootstrap 4 + owl-carousel + nice-select + magnific-popup + slicknav, NOT
  Tailwind. Section backgrounds are applied via `data-setbg` attributes
  (`img/hero-bg.jpg`, `img/line-bg.jpg`, `img/categories/cat-1..5.jpg`)
  read by main.js — recreate as CSS background images.
- **Screenshot note:** `localsdirectory-free-template.jpg` (1200×946)
  MATCHES the live template: dark header bar with the two-line white logo
  "LOCALS / DIRECTORY & MORE" and a pink "Add Listing" pill; hero over a
  busy New York street photo (yellow cabs, ~40% dark overlay) with the huge
  white "New York" heading and the translucent white search panel (Search
  Category + Your Location dropdowns + pink "Search Now"); below, the
  "Top trending for your city" section with two light-grey listing cards
  (circular photo, yellow FEATURED tag, title, address, pink + grey
  status pills). The live preview DOM + parsed stylesheet are the
  authoritative reference; the screenshot confirms the same design.

### Section structure (from the live DOM, top to bottom)

1. `div#preloder` (page preloader with a 60px loader circle — optional,
   can omit).
2. `header.header-section` (position absolute, width 100%, height 112px,
   padding 32px 0 31px, background `#1d1d1d`, z-index 1):
   - `div.logo` (float left, margin-right 115px) — `img src="img/logo.png"`
     (two-line white logo "LOCALS / DIRECTORY & MORE" per screenshot →
     recreate as a text brand: "HOODLY" bold uppercase white with a small
     "LOCAL DIRECTORY" tagline line below).
   - `nav.main-menu.mobile-menu` (float left) > `ul`: 5 × `li` — Home
     (`li.active`), Explore, More Cities, News, Contact — `a` 20px #fff
     weight 400, line-height 42px; hover color `#FF5581`.
   - `div.header-right` (float right): `div.user-access` (inline-block,
     margin-right 25px) — `a` × 2: "Register/" and "Login" (20px #fff 400,
     hover `#FF5581`); `a.primary-btn` "Add Listing" — bg `#FF5581`, 20px
     #fff 400, padding 11px 44px 15px, square corners.
   - Mobile: slicknav (jQuery) → recreate as client-side hamburger menu
     (dark `#222` background per slicknav CSS).
3. `section.hero-section.set-bg` (height 938px, padding-top 253px, bg
   `img/hero-bg.jpg` via data-setbg + dark overlay) > `div.container` >
   `div.row` > `div.col-lg-12` > `div.hero-text` (text-align center):
   - `img` (location-pin icon above the heading — flaticon map pin;
     recreate with lucide MapPin).
   - `h1` "New York" — 96px #fff, margin-bottom 34px (responsive scale
     down; keep uppercase-city styling of the source, i.e. the source text
     is "New York" — paraphrase to a city of the implementer's choice, e.g.
     "New York").
   - `form.filter-search` (padding 25px 38px 38px, position relative;
     `::after` white bg opacity 0.43, z-index -1 — translucent white
     panel):
     - `div.category-search` (inline-block, width calc(41% - 20px)):
       `h5` "Search Category" (18px #fff weight 900, mb 12px) +
       `select.ca-search` (nice-select: transparent bg, height 50px,
       white 16px text, radius 0, padding-left 31px; dropdown list bg
       `#1D1D1D`) — options: Restaurants, Hotels, Food & Drinks, Home
       Delievery, Commercial Shops.
     - `div.location-search` (same sizing): `h5` "Your Location" +
       `select.lo-search` — options: New York.
     - `button` "Search Now" — position absolute, right 38px, top 57px,
       bg `#FF5581`, color #fff, 16px, padding 13px 65px, border 1px
       solid `#FF5581`, square. Client-side submit → success state.
4. `section.trending-restaurant.spad` (padding 100px 0) > `div.container`:
   - `div.section-title` (text-align center, margin-bottom 65px): `h2`
     "Top trending for your city" — 48px #242424 weight 700; `p`
     "Explore some of the best places in the world" — 18px `#787878`.
   - `div.row`: 4 × `div.col-lg-6` > `div.trend-item` (bg `#F7F8FB`,
     padding 18px 18px 18px 0, margin-bottom 30px, position relative):
     - `div.trend-pic` (inline-block, relative, margin-left -15px,
       margin-right 20px): `img` 185×185, border-radius 50%
       (trending/trending-1..4.jpg → picsum seeds); `div.rating`
       (absolute right 0 top 0, 55×55px, bg `#FF5581`, white 16px
       weight 900, line-height 55px, radius 50%) — "4.9" / "4.9" /
       "4.6" / "5.0".
     - `div.trend-text` (inline-block, float right, padding-top 20px,
       padding-bottom 15px): `h4` 22px `#242424` weight 700 (New Place
       Restaurant / Palace Club / Grand Hotel / Opera Concert); `span`
       address 16px `#FF5581` weight 700, mb 6px (Main Road, No 25/11 /
       Parker Street, No 234/40); `p` blurb 16px `#787878`, mb 22px
       (Fusce urna quam… — paraphrase).
     - status pills: `div.closed` "Closed Now" — inline-block, padding
       7px 20px, bg `#FF5581`, 14px #fff, margin-right 10px, mb 5px;
       `div.open` "Opens Tomorow at 10am" / "Open Until 3am" — same
       shape, bg `#CACDD6` (base) or `#FF5581` (nightlife/events
       variants).
     - `div.tic-text` FEATURED tag — absolute right 0 top 0, 12px
       weight 700 uppercase, padding 5px 15px, color #fff:
       Restaurants `#FFC600` (yellow), Nightlife `#009CFF` (blue),
       Hotels `#4CCA81` (green), Events `#C55CD8` (purple).
     - Variant classes: `trend-item.nightlife` / `.hotels` / `.events`
       (change tag + open-pill colors only; card bg stays `#F7F8FB`).
5. `section.categories-section.spad` (padding-top 0, padding-bottom 88px,
   margin 0 37px, overflow hidden) > `div.container-fluid`:
   - `div.categories-left` (col): 1 × `div.categories-item.set-bg.large-img`
     (height 745px, mb 26px, position relative, z-index 1, padding 22px;
     bg `img/categories/cat-1.jpg`):
     - `a.img-hover.pop-up` (magnific-popup lightbox trigger; zoom icon
       on hover → lucide ZoomIn) wrapping `img` (cat photo).
     - `div.categories-text` (width 100%, max-width 333px, padding 30px
       15px 29px 48px, inline-block, position relative, bg `#000`,
       z-index 999): `h4` "Restaurants" 22px #fff weight 700; `p`
       "2373 Listings" 16px `#cacdd6` weight 700; `a` "View All" 16px
       `#FF5581` weight 700.
   - `div.categories-right` (col) > `div.row`: 4 × `div.col-md-6` >
     `div.categories-item.set-bg` (height 360px) — Nightlife & Clubs
     (cat-2), Spa & Resorts (cat-3), Hotels (cat-4), Clubs & Pubs
     (cat-5); same black text box pattern. Lightbox on click.
6. `section.testimonial-section` (margin 0 52px; bg is the page body —
   white) > `div.container` > `div.row` > `div.col-lg-10.offset-lg-1`:
   - `div.testimonial-item.owl-carousel` — 3 × `div.single-testimonial-item`
     (text-align center): `img` avatar (testimonial-1.png → picsum
     portrait seed); `p` italic 20px `#787878` line-height 36px, mb 30px
     (Fusce urna quam… quote — paraphrase); `h4` "Michael Smith" 22px
     `#242424` weight 700; `span` "CEO Company" 16px `#787878`.
     Carousel → client-side state (prev/next + dots), no owl-carousel.
   - `div.container-fluid` > `div.bg-img` > `img` (testimonial-bg.png —
     decorative ribbon image; optional).
7. `section.work-section.set-bg` (bg `img/line-bg.jpg` via data-setbg,
   padding-top 110px, padding-bottom 85px, margin 0 52px, position
   relative) > `div.container`:
   - `div.section-title`: `h2` "How it works" — 48px #fff weight 700; `p`
     white 18px.
   - `div.row`: 3 × `div.col-lg-4` > `div.single-work-item` (mb 30px):
     `div.number` (76×76px, bg `#2C2C2C`, white 24px weight 700,
     line-height 76px, float left) — "01." / "02." / "03."; `div.work-text`
     (padding-left for the floated square): `h4` white weight 700 mb 18px —
     "Search the portal" / "Choose the one 4u" / "Book it!"; `p` white 16px
     line-height 28px (paraphrase the Fusce… blurbs).
8. `section.app-section.spad` (bg `#F7F8FB`) > `div.container` > `div.row`:
   - `div.col-lg-5`: `img` (phone.png — a hand holding a phone → picsum
     or a CSS/emoji phone mock; optional).
   - `div.col-lg-6.offset-lg-1` > `div.app-text`: `div.section-title`:
     `h2` "Get the App now!" — 48px `#242424` weight 700, plus a `p`
     sub-line ("Explore some of the best places in the world");
     `p` paragraph (paraphrase); `ul` × 3 `li` — list-style none, bg
     `#FF5581`, mb 19px, padding 11px 0 14px 30px, white 15px, each with
     `img` check-icon.png (→ lucide Check) margin-right 19px — 3 feature
     bullets (paraphrase: Find nearby places / Read verified reviews / Save
     your favorites); then 2 store badges: `a > img` (apple-store.jpg /
     google-store.jpg → recreate as bordered pills with lucide Apple / Play
     - "App Store" / "Google Play" text — NOTE lucide has no brand icons;
       use simple inline SVG or plain text badges).
9. `footer.footer-section.spad` (bg `#1d1d1d`, padding-top 120px) >
   `div.container`:
   - `form.newslatter-form` (position relative, margin-bottom 85px):
     `input` (width 100%, height 66px, border 1px solid `#7E7E7E`, bg
     `#333333`, white italic weight 700, padding-left 35px; placeholder —
     "Your email") + `button` "Subscribe to our Newsletter" (position
     absolute right 0, width 292px, height 100%, bg `#FF5581`, white
     18px weight 700, border 1px solid `#FF5581`, cursor pointer).
     Submit → success state.
   - `div.row`: 4 × `div.col-lg-3.col-sm-6` > `div.footer-widget`
     (margin-bottom 40px):
     - `h4` "Usefull Links" (white weight 700, margin-bottom 56px) —
       ul: About us, Testimonials, How it works, Create an account,
       Our Services.
     - `h4` "Categories" — ul: Hotels, Restaurant, Spa & resorts,
       Concert & Events, Bars & Pubs.
     - `h4` "Usefull Links" (SOURCE DUPLICATES the first widget —
       implement as a second distinct column, e.g. "Support" with
       Get help, Contact us, Report a problem, Terms of service,
       Privacy policy, or keep the duplicate per source).
     - `h4` "From the Blog" — 2 × `div.single-blog` (mb 15px, overflow
       hidden): `div.blog-pic` (f-blog-1.jpg / f-blog-2.jpg → picsum
       seeds, thumbnail) + `div.blog-text`: `h6` "10 Best clubs in
       town" + `span` "March 27, 2019" — 16px `#FF5581` 14px? (span is
       14px `#FF5581` per CSS; h6 white).
     - `ul li` color `#8e8e8e` 16px line-height 36px (footer widget
       links are plain `li` text in source — recreate as links with
       hover `#FF5581`).
   - `div.row.footer-bottom` (padding-top 60px, border-top 1px solid
     `#EEEEEE`-ish divider): `div.col-lg-5` > `div.copyright` (14px
     `#414141`, mb 10px): "Copyright © <year> All rights reserved | This
     template is made with ❤ by ColorLib" → recreate as "© 2026 Hoodly —
     Local Directory · All rights reserved" (heart icon `#FF5581`);
     `div.col-lg-7` (text-center text-lg-right) > `div.footer-menu`:
     5 × `a` — Home, Explore, More Cities, News, Contact (white 16px,
     hover `#FF5581`).

### Content (for copy paraphrase)

- Header: brand "HOODLY" (+ tagline "LOCAL DIRECTORY"); Home (active),
  Explore, More Cities, News, Contact; "Register/" "Login"; "Add Listing".
- Hero: city "New York" + location pin; "Search Category" dropdown
  (Restaurants, Hotels, Food & Drinks, Home Delievery, Commercial Shops);
  "Your Location" (New York); "Search Now".
- Trending: "Top trending for your city" / "Explore some of the best
  places in the world"; 4 cards — New Place Restaurant (4.9, Main Road,
  No 25/11, Restaurants, Closed Now + Opens Tomorow at 10am), Palace Club
  (4.9, Parker Street, No 234/40, Nightlife, Open Until 3am), Grand Hotel
  (4.6, Main Road, No 25/11, Hotels, Closed Now + Opens Tomorow at 10am),
  Opera Concert (5.0, Parker Street, No 234/40, Events, Open Until 3am).
- Categories: Restaurants / Nightlife & Clubs / Spa & Resorts / Hotels /
  Clubs & Pubs — "2373 Listings" each + "View All" (5 tiles: 1 large + 4).
- Testimonials: ×3 — quote + "Michael Smith" / "CEO Company".
- How it works: "Search the portal" / "Choose the one 4u" / "Book it!".
- App: "Get the App now!" + 3 check bullets + App Store / Google Play.
- Footer: "Subscribe to our Newsletter"; Usefull Links ×2 (About us,
  Testimonials, How it works, Create an account, Our Services), Categories
  (Hotels, Restaurant, Spa & resorts, Concert & Events, Bars & Pubs);
  From the Blog — "10 Best clubs in town" + "March 27, 2019" ×2;
  copyright + footer menu (Home, Explore, More Cities, News, Contact).

## Design tokens

| Token          | Value                    | Usage                                                                                                                                                                   |
| -------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| brand-pink     | `#FF5581`                | primary-btn ("Add Listing") bg, Search Now button, rating circle, closed pill, categories "View All", app bullets, newsletter button, footer/blog accents, hover states |
| ink            | `#242424`                | section-title h2 (48px/700), trend-text h4, testimonial h4, app-title h2                                                                                                |
| muted          | `#787878`                | section-title p, trend-text p, testimonial p + span, app p, footer li, work p (white in work)                                                                           |
| light          | `#F7F8FB`                | trend-item card bg, app-section bg                                                                                                                                      |
| dark           | `#1d1d1d`                | header-section bg, footer-section bg, nice-select dropdown list bg                                                                                                      |
| input-dark     | `#333333`                | newsletter input bg (border `#7E7E7E`)                                                                                                                                  |
| panel-white    | `#ffffff` @ 0.43 opacity | filter-search panel bg (over hero)                                                                                                                                      |
| box-black      | `#000000`                | categories-text overlay box bg                                                                                                                                          |
| number-dark    | `#2C2C2C`                | work-section number squares                                                                                                                                             |
| open-grey      | `#CACDD6`                | "open" pill (base), categories-text "2373 Listings" p                                                                                                                   |
| tag-yellow     | `#FFC600`                | tic-text FEATURED tag (Restaurants/base card)                                                                                                                           |
| tag-blue       | `#009CFF`                | tic-text FEATURED tag (Nightlife card)                                                                                                                                  |
| tag-green      | `#4CCA81`                | tic-text FEATURED tag (Hotels card)                                                                                                                                     |
| tag-purple     | `#C55CD8`                | tic-text FEATURED tag (Events card)                                                                                                                                     |
| footer-muted   | `#8e8e8e`                | footer widget li text                                                                                                                                                   |
| copyright-grey | `#414141`                | footer copyright text                                                                                                                                                   |
| font           | "Lato"                   | everything (sans-serif fallback): nav 20px/400, hero h1 96px, section h2 48px/700, card h4 22px/700, work h4 (700), footer h4 (700), p 16–18px, buttons 16–20px         |

Radii: buttons/inputs are SQUARE (radius 0 — Search Now, Add Listing,
newsletter button). Circles: trend-pic img 185px (50%), rating badge 55px
(50%). Number squares 76px (no radius). Spacing: `.spad` padding 100px 0;
header height 112px + padding 32px 0 31px; hero height 938px + padding-top
253px; filter-search padding 25px 38px 38px; trend-item padding 18px 18px
18px 0 + mb 30px; categories-item mb 26px (large 745px / grid 360px heights,
padding 22px), categories-text padding 30px 15px 29px 48px (max-width
333px); testimonial margin 0 52px; work padding 110px 0 85px + margin 0
52px; app bullets mb 19px + padding 11px 0 14px 30px; footer padding-top
120px; newsletter mb 85px + input height 66px + button width 292px;
footer-widget h4 mb 56px; footer-bottom padding-top 60px; single-blog mb
15px; container max-width ~1170px (Bootstrap).

## Requirements

### Requirement: Header / Navigation

The system SHALL render a solid-dark header bar over the hero with a text
brand, five nav links (Home active), register/login links, and an "Add
Listing" button.

#### Scenario: Brand and nav links

- **GIVEN** the Hoodly app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL sit at the top with a `#1d1d1d` background
  over the hero
- **AND** the brand SHALL read "HOODLY" in bold uppercase white (with a
  "LOCAL DIRECTORY" tagline, per the source logo)
- **AND** the nav SHALL list Home (active), Explore, More Cities, News,
  and Contact in 20px white 400
- **AND** links SHALL turn brand pink on hover

#### Scenario: Register / Login + Add Listing

- **GIVEN** the header is rendered
- **WHEN** the page loads
- **THEN** "Register/" and "Login" text links SHALL render on the right
- **AND** a pink square "Add Listing" button SHALL render beside them

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow
- **WHEN** the hamburger trigger is activated
- **THEN** a mobile menu SHALL open listing the same nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero

The system SHALL render a full hero over a city photo with a big city
heading and a translucent search panel.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show a cover photo background with a dark overlay
- **AND** the 96px white heading SHALL read "New York" with a location-pin
  icon above it

#### Scenario: Search panel

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** a translucent white search panel SHALL render with a "Search
  Category" dropdown (Restaurants, Hotels, Food & Drinks, Home Delievery,
  Commercial Shops) and a "Your Location" dropdown (New York)
- **AND** a pink square "Search Now" button SHALL submit the search (client
  -side success state)

### Requirement: Trending listings

The system SHALL render the "Top trending for your city" section with four
listing cards.

#### Scenario: Section title

- **GIVEN** the trending section is rendered
- **WHEN** the page loads
- **THEN** the 48px heading SHALL read "Top trending for your city"
- **AND** the sub-line SHALL read "Explore some of the best places in the
  world"

#### Scenario: Listing cards

- **GIVEN** the trending section is rendered
- **WHEN** the page loads
- **THEN** four cards SHALL render on the `#F7F8FB` background, each with a
  185px circular photo, a 55px pink rating circle (4.9 / 4.9 / 4.6 / 5.0),
  a 22px title (New Place Restaurant, Palace Club, Grand Hotel, Opera
  Concert), an orange-pink address line, a blurb, and an open/closed pill
  ("Closed Now" pink + "Opens Tomorow at 10am" grey, or "Open Until 3am")
- **AND** each card SHALL show a FEATURED tag top-right in its category
  color (yellow Restaurants, blue Nightlife, green Hotels, purple Events)

### Requirement: Categories mosaic

The system SHALL render the categories mosaic with one large tile and four
grid tiles, each with a black text box and a View All link.

#### Scenario: Category tiles

- **GIVEN** the categories section is rendered
- **WHEN** the page loads
- **THEN** one large left tile (745px) SHALL list Restaurants
- **AND** four right tiles (360px) SHALL list Nightlife & Clubs, Spa &
  Resorts, Hotels, and Clubs & Pubs
- **AND** each tile SHALL show a photo background with a black text box
  (22px white title, "2373 Listings" in grey, and a pink "View All" link)

#### Scenario: Lightbox

- **GIVEN** a category tile is rendered
- **WHEN** it is clicked
- **THEN** a lightbox SHALL open showing the photo (client-side modal)

### Requirement: Testimonials

The system SHALL render a testimonial carousel with three slides.

#### Scenario: Carousel slides

- **GIVEN** the testimonial section is rendered
- **WHEN** the page loads
- **THEN** the carousel SHALL cycle through three centered slides, each
  with an avatar image, an italic 20px quote, "Michael Smith" in 22px
  weight 700, and "CEO Company" below
- **AND** prev/next controls and dots SHALL navigate between slides

### Requirement: How it works

The system SHALL render the photo "How it works" band with three numbered
steps.

#### Scenario: Steps

- **GIVEN** the work section is rendered
- **WHEN** the page loads
- **THEN** the white 48px heading SHALL read "How it works" over the cover
  photo background
- **AND** three steps SHALL render, each with a dark 76px square number
  (01., 02., 03.), a white heading (Search the portal / Choose the one 4u /
  Book it!), and a white paragraph

### Requirement: App section

The system SHALL render the light "Get the App now!" section with check
bullets and store badges.

#### Scenario: App content

- **GIVEN** the app section is rendered
- **WHEN** the page loads
- **THEN** the 48px heading SHALL read "Get the App now!" on the `#F7F8FB`
  background with a phone photo on the left
- **AND** three pink check-bullets SHALL render (white 15px text on `#FF5581`
  rows)
- **AND** App Store and Google Play badges SHALL render below

### Requirement: Footer

The system SHALL render the dark footer with a newsletter form, link
widgets, a blog column, and a copyright bar.

#### Scenario: Newsletter form

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** a dark italic email input (height 66px) SHALL render with a pink
  "Subscribe to our Newsletter" button (292px)
- **AND** submitting SHALL show a success state

#### Scenario: Widgets and blog

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the Usefull Links widget SHALL list About us, Testimonials, How
  it works, Create an account, Our Services
- **AND** the Categories widget SHALL list Hotels, Restaurant, Spa &
  resorts, Concert & Events, Bars & Pubs
- **AND** the From the Blog widget SHALL show two post cards ("10 Best
  clubs in town" + "March 27, 2019")

#### Scenario: Copyright bar

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the copyright line SHALL read "© 2026 Hoodly — Local Directory ·
  All rights reserved" with a pink heart
- **AND** a footer menu SHALL list Home, Explore, More Cities, News,
  Contact

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh hoodly`)
- [ ] Design tokens from this spec applied in `@theme` (brand-pink
      `#FF5581`, ink `#242424`, muted `#787878`, light `#F7F8FB`, dark
      `#1d1d1d`, input-dark `#333333`, number-dark `#2C2C2C`, open-grey
      `#CACDD6`, tag colors)
- [ ] Lato loaded via Google Fonts `<link>` in index.html
- [ ] Section structure + order matches the live DOM 1:1 (header → hero →
      trending → categories → testimonials → work → app → footer)
- [ ] Placeholder images via `https://picsum.photos/seed/hoodly-<n>/<w>/<h>`
      (hero bg, 4 trend photos, 5 category photos, avatar, phone, blog
      thumbs, work bg); NO assets copied from ColorLib
- [ ] Icons from lucide-react (MapPin, Check, ZoomIn, Heart) — store
      badges as inline SVG or text pills (lucide has no brand icons)
- [ ] Interactivity client-side only: testimonial carousel, categories
      lightbox, mobile menu, search/newsletter submit → success state (no
      owl-carousel/nice-select/magnific-popup/slicknav/jquery)
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL returns 200
