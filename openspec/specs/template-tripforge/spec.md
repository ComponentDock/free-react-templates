# Template: Tripforge (Travel Booking Template)

## Purpose

Tripforge is a single-page travel-booking/directory website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Direngine" travel website template (see TEMPLATES.md, Travel
section, line 2979), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a photo-driven travel search/directory page: a transparent
navbar floating over a full-height tropical beach hero ("Explore your
amazing city") with an inline search bar (keyword + Where select + coral
Search button) and four "browse the highlights" chips; a light services
strip of four white cards overlapping the hero bottom (Best Price Guarantee
· Travellers Love Us · Best Travel Agent · Our Dedicated Support) with coral
line icons that flip the whole card coral on hover; a "Featured Destination"
carousel of image tiles with circular icon overlays; a "Top Tour Packages"
grid of rich cards (stars, price, duration, location, Discover link); a
photo-backed "Some fun facts" counter band (4 animated counters); a
"Popular Hotels & Rooms" card grid with prices and Book Now; a two-column
"Why Choose Us? / Our Guests Says" band pairing copy + outline button with a
testimonial carousel (round photo + coral quote badge); a "Popular
Restaurants" card grid; a "Tips & Articles" blog-card row; a teal→mint
gradient newsletter band with a bordered subscribe form; and a dark
charcoal footer (brand + social, Information, Customer Support, Have a
Questions?) . The whole design is a light white page anchored by coral-red
`#f85959` and a teal→mint gradient (`#2ebdc4` → `#68e5b2`).

Brand colors: coral red `#f85959` (hero Search button, service icons,
service-card hover bg, star ratings, nav CTA hover, quote badge, hover
circle icons); teal `#2ebdc4` and mint `#68e5b2` (hero overlay gradient at
-45deg, newsletter parallax background); sky blue `#78d5ef` (secondary
`.btn-primary` variant present in the stylesheet); footer charcoal
`#222831` (`.ftco-footer`; `.ftco-bg-dark` alt `#3c312e`); light section bg
`#f8f9fa` (`bg-light`); body text `#4d4d4d`; headings `#212529`; muted grey
`#6c757d`; location links `#999999`; input borders `#e6e6e6`; price blue
`#2f89fc`; tag grey `#b3b3b3`. Fonts: Poppins (theme body override:
14px / weight 300 / line-height 1.8 / `#4d4d4d`; the bootstrap reset in the
same file lists "Work Sans" but the theme's later `body` rule overrides it —
the rendered font is Poppins). Hero h1 is 60px weight 200 with the first
line bold (`<strong>`); normal-section h2 is 30px weight 300 with bold
inner word; dark-section h2 is 40px white weight 400; subheadings are 14px.
Buttons are pills (radius 30px) except the hero search inputs and newsletter
form which are square (radius 0); the destination hover icon is a 60px
white circle; testimonial photos are 100px circles.

## Design reference (replication findings)

- **Original:** ColorLib "Direngine" — travel booking/directory template
  (source: https://colorlib.com/wp/template/direngine/). Listed in
  TEMPLATES.md `## Travel` at line 2979; slug appears exactly once.
- **Live preview URL:** https://preview.colorlib.com/theme/direngine/
  (HTTP 200, 50,840 bytes, verified 2026-10-01). HTML saved to
  `/tmp/direngine.html`; theme stylesheet `css/style.css`
  (HTTP 200, 82,533 bytes) saved to `/tmp/direngine-style.css`. The preview
  DOM is authoritative for section order and copy; the screenshot
  (`direngine-free-template.jpg`, reviewed visually) is authoritative for
  the hero photo treatment, the overlapping white service cards, the white
  highlight chips, and the pill "Add listing" navbar CTA.
- **Stylesheets in the reference:** `css/open-iconic-bootstrap.min.css`,
  `css/animate.css`, `css/owl.carousel.min.css` + theme,
  `css/magnific-popup.css`, `css/aos.css`, `css/ionicons.min.css`,
  `css/bootstrap-datepicker.css`, `css/jquery.timepicker.css`,
  `css/flaticon.css`, `css/icomoon.css`, `css/style.css` (theme —
  canonical tokens). Icon fonts, owl carousel, magnific popup, scrollax,
  and AOS are NEVER copied: recreation uses lucide-react icons and
  React-state carousels/scrolled-nav.
- **Fonts:** the theme `body` rule sets `font-family: "Poppins", Arial,
  sans-serif` (14px, weight 300, line-height 1.8, color `#4d4d4d`). Load
  Poppins 300/400/500/600/700 via Google Fonts `<link>` in `index.html`.
- **DOM skeleton (section order 1:1, from preview HTML):**
  1. `nav.ftco-navbar.ftco-navbar-light` — absolute over hero (top 20px,
     transparent; scrolled → solid black background per CSS). Brand
     "dirEngine." (bold white wordmark + coral period), links Home · About ·
     Tour · Hotels · Blog · Contact (white 14px, padding ~0.9rem/20px),
     and `li.nav-item.cta` > "Add listing" pill (1px solid
     `rgba(255,255,255,0.4)`, radius 30px, hover → bg `#f85959`).
     Mobile: hamburger toggle.
  2. `.hero-wrap.js-fullheight` — cover photo `images/bg_1.jpg` (tropical
     beach: turquoise water, palms, outrigger boat, white sand) with
     `.overlay` gradient `-45deg #2ebdc4 → #68e5b2` (opacity 0 by default;
     the original fades it in via scroll animation — recreation may use a
     subtle overlay or static photo). Left-aligned content (col-md-9):
     h1 "Explore (br) your amazing city" (60px, weight 200, first line
     strong/bold, white, line-height 1.2); p "Find great places to stay,
     eat, shop, or visit from local experts" (20px, weight 300,
     `rgba(255,255,255,0.8)`); search form (`.block-17`): textfield input
     (placeholder "Ex: food, service, hotel") + select ("Where" with
     options San Francisco USA / Berlin Germany / Lodon United Kingdom /
     Paris Italy, chevron icon) + `input.search-submit.btn.btn-primary`
     value "Search" (bg `#f85959`, white). Inputs are square (radius 0),
     52px tall, white bg, border `#e6e6e6`, 14px text; then "Or browse the
     highlights" line (white text over hero) and `.browse` chips: four
     white pills (radius 2px, padding 10px 15px, dark icon + label) —
     Restaurant (utensils), Hotel (building), Places (map-pin/landmark),
     Shopping (shopping-bag).
  3. `.ftco-section.services-section.bg-light` — `.container` has
     `margin-top: -120px; z-index: 2` so the card row overlaps the hero
     bottom. Four white cards (`.services.block-6`, padding 25px,
     box-shadow `0 2px 5px rgba(0,0,0,0.03)`): centered 60px coral line
     icon + h3 (20px) + grey blurb — Best Price Guarantee (seal/badge),
     Travellers Love Us (heart), Best Travel Agent (agent/detective),
     Our Dedicated Support (headset). Card hover → bg `#f85959`, text and
     icon white.
  4. `.ftco-section.ftco-destination` — left heading block: subheading
     "Featured" (14px) + h2 "**Featured** Destination" (30px, weight 300,
     bold inner word). Owl carousel (recreation: React-state slider) of
     destination tiles: image tile (picsum) with hover overlay revealing a
     60px white circle + coral search icon centered; below (`.text p-3`):
     h3 title link + `.listing` "15 Listing" (14px). Demo items: Paris,
     Italy · San Francisco, USA · Lodon, UK · Lion, Singapore · Australia
     · Paris, Italy (repeat — recreate 5–6 tiles).
  5. `.ftco-section.bg-light` (Top Tour Packages) — subheading "Special
     Offers" + h2 "**Top** Tour Packages"; `container-fluid` responsive
     grid of tour cards (destination-card pattern): image + hover circle
     icon; row with h3 title + `.rate` stars (10px, `#f85959`, 4 filled +
     1 empty + "8 Rating" span) and `.price` "$200" (18px, weight 400,
     `#2f89fc`); blurb; `.days` chip "2 days 3 nights" (13px); `<hr>`;
     `.bottom-area`: location (map icon + "San Franciso, CA", 14px) and
     "Discover" link right-aligned. Demo cards all read "Paris, Italy".
  6. `section.ftco-counter.img#section-counter` — cover bg photo (same
     `bg_1.jpg`) with dark overlay; `heading-section-white`: h2 "Some fun
     facts" (40px, white, weight 400) + subheading "More than 100,000
     websites hosted" (white 90%). Four counters (`.number` 30px white
     weight 400, animate count-up on scroll in the original):
     100000 Happy Customers · 40000 Destination Places · 87000 Hotels ·
     56400 Restaurant.
  7. `.ftco-section.bg-light` (Popular Hotels & Rooms) — subheading
     "Special Offers" + h2 "**Popular** Hotels & Rooms"; `container-fluid`
     grid of hotel cards: image + hover circle; row with h3 "Hotel, Italy"
     + stars/"8 Rating" and `.price.per-price` "$40<br>/night" (small
     "/night" line); blurb; `<hr>`; bottom row with "Book Now" link
     (accent-colored). Demo shows 5 cards.
  8. `.ftco-section.testimony-section.bg-light` — two columns:
     left (col-md-5): subheading "Best Directory Website" + h2 "**Why**
     Choose Us?" + two paragraphs + "Read more" button (`.btn.btn-primary.
     btn-outline-primary` pill: 1px coral border, transparent bg, coral
     text, hover fills coral/white); right (col-md-6): subheading
     "Testimony" + h2 "**Our** Guests Says" + testimonial owl carousel:
     `.testimony-wrap` white card (padding 30px, box-shadow `0 2px 5px
     rgba(0,0,0,0.03)`) with `.user-img` 100px round photo + `.quote`
     40px coral circle badge (white quote icon) at photo bottom-right +
     testimonial text + guest name.
  9. `.ftco-section` (Popular Restaurants) — subheading "Special
     Offers" + h2 "**Popular** Restaurants"; 4-column grid of restaurant
     cards (destination pattern): image + hover circle; h3 "Luxury
     Restaurant"; stars/"8 Rating"; blurb; bottom row: location
     (map icon + "San Franciso, CA") + "Discover" link. 4 cards.
  10. `.ftco-section.bg-light` (Tips & Articles) — subheading "Recent
      Blog" + h2 "**Tips** & Articles"; 4-column blog cards
      (`.blog-entry`): `.block-20` image (250px tall, cover), `.text p-4`
      with `.tag` chip ("Tips, Travel", "Culture", … — grey `#b3b3b3`),
      h3 title link, `.meta` row (date · author Admin · comment count with
      chat icon, 15px grey). 4 cards.
  11. `.ftco-section-parallax` — newsletter band: `.parallax-img` base
      gradient `-45deg #2ebdc4 → #68e5b2` (10em vertical padding) —
      recreation: teal→mint gradient band (optionally with a subtle
      parallax image); `heading-section-white` centered: h2 "Subscribe to
      our Newsletter" (40px white; original misspells "Subcribe" — fix the
      typo in copy), paragraph; `.subscribe-form` (col-md-8): outer
      `.form-group` border 1px solid `rgba(255,255,255,0.7)` radius 0,
      flex row: email input (transparent bg, pill radius 30px, white 70%
      text/placeholder 16px) + "Subscribe" `.submit` (border-left 1px
      solid `rgba(255,255,255,0.7)`, white text, radius 0).
  12. `footer.ftco-footer.ftco-bg-dark` — bg `#222831` (`.ftco-bg-dark`
      alt `#3c312e`), padding 8em 0; four columns:
      - Brand: h2 "dirEngine" (`.ftco-heading-2`, white ~17px) + blurb +
        social list (twitter, facebook, instagram): 50px circles,
        `rgba(255,255,255,0.05)` bg, inline-SVG brand icons (lucide-react
        removed brand icons — never rely on it for these).
      - "Information": About · Service · Terms and Conditions · Become a
        partner · Best Price Guarantee · Privacy and Policy.
      - "Customer Support": FAQ · Payment Option · Booking Tips · How it
        works · Contact Us.
      - "Have a Questions?": `.block-23` contact list (map-marker address,
        phone, email).
      The recreation footer MUST link `https://www.componentdock.com/`
      ("Component Dock") per repo conventions, replacing any attribution.

## Design tokens (from `css/style.css`)

| Token | Value | Usage |
| --- | --- | --- |
| coral brand | `#f85959` | hero Search button, service icons, service-card hover bg, star ratings, nav CTA hover, hover circle icons, quote badge |
| teal | `#2ebdc4` | hero overlay gradient start, newsletter band gradient start |
| mint | `#68e5b2` | hero overlay gradient end, newsletter band gradient end |
| gradient | `-45deg, teal 0% → mint 100%` | hero overlay + newsletter band |
| sky blue | `#78d5ef` | secondary `.btn-primary` variant (use sparingly) |
| footer dark | `#222831` | footer background |
| footer dark alt | `#3c312e` | `.ftco-bg-dark` |
| light section bg | `#f8f9fa` | services, tour, hotels, why/testimony, tips sections |
| body text | `#4d4d4d` | body copy |
| heading | `#212529` | default headings |
| muted grey | `#6c757d` | secondary text |
| location grey | `#999999` | hotel `.loc` links |
| tag grey | `#b3b3b3` | blog tags, meta chat icon |
| price blue | `#2f89fc` | `.price` on tour/hotel cards |
| input border | `#e6e6e6` | hero search inputs |
| white | `#FFFFFF` | cards, chips, hero text |

- Fonts: Poppins 300/400/500/600/700 (Google Fonts `<link>` in
  `index.html`; body default Poppins 14px/300, line-height 1.8).
- Type scale: hero h1 60px weight 200 (first line 700); hero p 20px/300
  white 80%; normal h2 30px weight 300 (bold inner `<strong>`); dark-band
  h2 40px white weight 400; subheading 14px (white 90% on dark); service
  h3 20px; card h3 ~20px; counter number 30px white; `.price` 18px/400
  `#2f89fc`; `.rate` stars 10px `#f85959`; blog meta 15px; `.days` 13px.
- Radii: buttons/CTA pills 30px; hero search inputs + newsletter form
  outer square (0); browse chips 2px; destination hover icon + testimonial
  photo + quote badge circles (50%); footer social icons 50px circles.
- Buttons: primary coral pill (bg `#f85959`, white text; hover variants:
  transparent + coral border/text); hero nav CTA outline pill
  (`rgba(255,255,255,0.4)` border) filling coral on hover.
- Hero search inputs: 52px tall, white bg, border `#e6e6e6`, radius 0,
  14px; select has chevron icon.
- Cards: white bg, box-shadow `0 2px 5px rgba(0,0,0,0.03)`; image tiles
  get a centered 60px white circle + coral icon overlay on hover; service
  cards flip to coral bg with white content on hover.
- Placeholder images (picsum, deterministic): hero `tripforge-hero`,
  counter/newsletter band `tripforge-band`, destinations
  `tripforge-dest-1..6`, tours `tripforge-tour-1..5`, hotels
  `tripforge-hotel-1..5`, restaurants `tripforge-rest-1..4`, blog
  `tripforge-blog-1..4`, testimonial photos `tripforge-quote-1..3`. Icons
  from lucide-react (Search, UtensilsCrossed, Building2, MapPin,
  ShoppingBag, BadgeCheck, HeartHandshake, Compass, Headphones, Star,
  ChevronDown, ChevronLeft/Right, Menu, X, Mail, Phone, MapPin) plus
  inline-SVG brand icons (Twitter/Facebook/Instagram simple-icons paths).
  No ColorLib assets, CSS, or strings in the app.

## Requirements

### Requirement: Transparent floating navbar with brand, links, and Add listing CTA

The system SHALL render a transparent navbar floating over the hero with
the Tripforge brand, primary nav links, and an outline pill CTA.

#### Scenario: Desktop navbar

- **GIVEN** the Tripforge app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL sit absolutely over the hero (transparent
  background, near the top)
- **AND** it SHALL show the brand on the left: bold white wordmark
  "tripforge" with a coral `#f85959` period/dot accent
- **AND** the nav SHALL list Home · About · Tour · Hotels · Blog · Contact
  in white ~14px text
- **AND** the right side SHALL show an "Add listing" pill CTA (1px solid
  `rgba(255,255,255,0.4)`, radius 30px, white text) that fills coral
  `#f85959` on hover

#### Scenario: Scrolled and mobile navbar

- **GIVEN** the navbar is rendered
- **WHEN** the user scrolls down
- **THEN** the navbar SHALL gain a solid dark background (React state
  on scroll) with a transition
- **AND** on narrow viewports the nav links SHALL collapse behind a
  hamburger toggle (lucide Menu/X, `aria-expanded`) opening a stacked menu

### Requirement: Tropical beach hero with headline, search bar, and highlight chips

The system SHALL render a full-height beach hero with white headline copy,
an inline search form, and four browse-highlight chips.

#### Scenario: Hero composition

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL show a full-height cover photo (picsum
  `tripforge-hero`, tropical-beach mood) with the teal→mint gradient
  overlay treatment (`#2ebdc4` → `#68e5b2` at -45deg, subtle)
- **AND** it SHALL show the h1 "Explore / your amazing city" — first line
  bold, second line weight 200, ~60px white, line-height 1.2
- **AND** the subtext "Find great places to stay, eat, shop, or visit from
  local experts" SHALL render at ~20px weight 300, white 80%
- **AND** the search form SHALL contain: a text input (placeholder "Ex:
  food, service, hotel"), a "Where" select (options: San Francisco USA ·
  Berlin Germany · Lodon United Kingdom · Paris Italy) with chevron icon,
  and a coral `#f85959` "Search" submit button
- **AND** the search inputs SHALL be square (radius 0), 52px tall, white
  bg, border `#e6e6e6`, 14px text
- **AND** below the form, "Or browse the highlights" text SHALL appear in
  white followed by four white chips (radius 2px, dark icon + label):
  Restaurant · Hotel · Places · Shopping
- **AND** on small viewports the search fields SHALL stack and the display
  size SHALL scale down without overlapping the navbar

### Requirement: Overlapping services strip with four cards

The system SHALL render a light services strip whose four white cards
overlap the hero bottom, with coral line icons and coral hover flip.

#### Scenario: Four service cards

- **GIVEN** the services section is rendered
- **WHEN** it loads
- **THEN** the section SHALL sit on `#f8f9fa` with its container pulled up
  (~-120px) so the card row overlaps the hero image (z-index above hero)
- **AND** it SHALL show four white cards (padding 25px, shadow `0 2px 5px
  rgba(0,0,0,0.03)`): Best Price Guarantee · Travellers Love Us · Best
  Travel Agent · Our Dedicated Support
- **AND** each card SHALL show a centered ~60px coral line icon
  (lucide BadgeCheck / HeartHandshake / Compass / Headphones), a 20px
  heading, and a grey blurb
- **AND** on card hover the whole card SHALL flip to coral `#f85959` with
  white icon and text

### Requirement: Featured Destination carousel

The system SHALL render a "Featured Destination" section with a heading and
a slider of destination image tiles.

#### Scenario: Destination tiles

- **GIVEN** the featured-destination section is rendered
- **WHEN** it loads
- **THEN** it SHALL show subheading "Featured" and h2 "**Featured**
  Destination" (30px, weight 300, bold inner word), left-aligned
- **AND** it SHALL show a React-state carousel of 5–6 destination tiles
  (picsum `tripforge-dest-1..6`) with prev/next controls
- **AND** each tile SHALL show the image with a centered 60px white circle
  + coral search-icon overlay on hover, and below it an h3 title (Paris,
  Italy · San Francisco, USA · Lodon, UK · Lion, Singapore · Australia)
  plus a "15 Listing" label (14px)

### Requirement: Top Tour Packages card grid

The system SHALL render a light section with a grid of rich tour cards.

#### Scenario: Tour cards

- **GIVEN** the tour-packages section is rendered
- **WHEN** it loads
- **THEN** the section SHALL sit on `#f8f9fa` with subheading "Special
  Offers" and h2 "**Top** Tour Packages"
- **AND** it SHALL show a responsive grid of tour cards (picsum
  `tripforge-tour-1..5`), each: image + hover circle icon, h3 title, star
  rating (coral `#f85959` stars — 4 filled + 1 empty — plus "Rating"
  label), price figure `$200` in `#2f89fc` (18px), blurb, a "2 days 3
  nights" chip, a divider, and a bottom row with location (map icon +
  "San Franciso, CA") and a right-aligned "Discover" link
- **AND** cards SHALL wrap from multi-column to stacked on mobile

### Requirement: Fun-facts counter band

The system SHALL render a photo-backed counter band with four animated
counters.

#### Scenario: Counters

- **GIVEN** the counter section is rendered
- **WHEN** it loads
- **THEN** it SHALL show a background photo treatment (picsum
  `tripforge-band`) with dark overlay and white centered heading "Some fun
  facts" (40px, weight 400) + subheading "More than 100,000 websites
  hosted" (white 90%)
- **AND** it SHALL show four counters: 100000 Happy Customers · 40000
  Destination Places · 87000 Hotels · 56400 Restaurant
- **AND** the numbers SHALL count up from 0 when scrolled into view
  (IntersectionObserver; reduced-motion falls back to the final value)

### Requirement: Popular Hotels & Rooms grid

The system SHALL render a light section with hotel cards including prices
and a Book Now action.

#### Scenario: Hotel cards

- **GIVEN** the hotels section is rendered
- **WHEN** it loads
- **THEN** the section SHALL sit on `#f8f9fa` with subheading "Special
  Offers" and h2 "**Popular** Hotels & Rooms"
- **AND** it SHALL show a responsive grid of 5 hotel cards (picsum
  `tripforge-hotel-1..5`): image + hover circle icon, h3 "Hotel, Italy",
  star rating + "8 Rating", price "$40 /night" (per-night small line),
  blurb, divider, and a bottom row with a "Book Now" link in accent color

### Requirement: Why Choose Us + testimonials band

The system SHALL render a two-column light band pairing "Why Choose Us?"
copy with a testimonial carousel.

#### Scenario: Two-column band

- **GIVEN** the why/testimony section is rendered
- **WHEN** it loads
- **THEN** the section SHALL sit on `#f8f9fa` and show two columns:
  left — subheading "Best Directory Website", h2 "**Why** Choose Us?",
  two paragraphs, and a "Read more" outline pill button (1px coral
  border, transparent bg, coral text; hover fills coral with white text)
- **AND** right — subheading "Testimony", h2 "**Our** Guests Says", and a
  testimonial carousel of white cards (padding 30px, shadow `0 2px 5px
  rgba(0,0,0,0.03)`): 100px round guest photo (picsum
  `tripforge-quote-1..3`) with a 40px coral circle quote badge at its
  bottom-right, testimonial paragraph, and guest name
- **AND** the columns SHALL stack vertically on mobile (copy first)

### Requirement: Popular Restaurants grid

The system SHALL render a section with restaurant cards using the
destination-card pattern.

#### Scenario: Restaurant cards

- **GIVEN** the restaurants section is rendered
- **WHEN** it loads
- **THEN** it SHALL show subheading "Special Offers" and h2 "**Popular**
  Restaurants"
- **AND** it SHALL show a 4-column grid (wrapping on mobile) of 4
  restaurant cards (picsum `tripforge-rest-1..4`): image + hover circle
  icon, h3 "Luxury Restaurant", star rating + "8 Rating", blurb, and a
  bottom row with location (map icon + "San Franciso, CA") and a
  right-aligned "Discover" link

### Requirement: Tips & Articles blog row

The system SHALL render a light section with four blog cards.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** it loads
- **THEN** the section SHALL sit on `#f8f9fa` with subheading "Recent
  Blog" and h2 "**Tips** & Articles"
- **AND** it SHALL show 4 blog cards (picsum `tripforge-blog-1..4`, image
  250px tall cover): a grey tag chip ("Tips, Travel" / "Culture" / …),
  an h3 title link, and a meta row (date · author · comment count with
  chat icon, 15px grey)

### Requirement: Teal-mint newsletter band

The system SHALL render a gradient newsletter band with a bordered
subscribe form.

#### Scenario: Newsletter form

- **GIVEN** the newsletter section is rendered
- **WHEN** it loads
- **THEN** it SHALL show a teal→mint gradient background (`#2ebdc4` →
  `#68e5b2` at -45deg) with generous vertical padding
- **AND** it SHALL show centered white heading "Subscribe to our
  Newsletter" (~40px, weight 400) and a short paragraph
- **AND** the subscribe form (max-width ~col-md-8, centered) SHALL show an
  outer border 1px solid `rgba(255,255,255,0.7)` (radius 0) containing a
  transparent email input (pill radius 30px, white 70% text/placeholder)
  and a "Subscribe" submit with a left border `rgba(255,255,255,0.7)`
  (white text, radius 0)
- **AND** submitting a valid email SHALL show a success message; invalid
  input SHALL block submit (per repo form conventions)

### Requirement: Dark footer with four columns

The system SHALL render a dark charcoal footer with brand/social, link
columns, contact info, and the Component Dock link.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** it SHALL sit on `#222831` (dark charcoal) with ~8em vertical
  padding and show four columns:
  - brand: white heading "tripforge" + blurb + social icons (Twitter,
    Facebook, Instagram — inline SVG brand icons in 50px translucent
    circles; NEVER lucide for brand icons)
  - "Information": About · Service · Terms and Conditions · Become a
    partner · Best Price Guarantee · Privacy and Policy
  - "Customer Support": FAQ · Payment Option · Booking Tips · How it
    works · Contact Us
  - "Have a Questions?": contact list with map-marker address, phone, and
    email
- **AND** the footer SHALL link `https://www.componentdock.com/` branded
  "Component Dock" (replacing the original attribution)
- **AND** the columns SHALL stack on narrow viewports

### Requirement: Page composition, tokens, and conventions

The system SHALL compose all sections in the reference order and follow
repo conventions.

#### Scenario: Section order and conventions

- **GIVEN** the Tripforge app is rendered
- **WHEN** the page loads
- **THEN** sections SHALL appear in this order: navbar · hero (search +
  chips) · services strip · featured destination carousel · top tour
  packages · fun-facts counters · popular hotels · why choose us +
  testimonials · popular restaurants · tips & articles · newsletter ·
  footer
- **AND** design tokens SHALL live in `@theme` (`src/index.css`): coral
  `#f85959`, teal `#2ebdc4`, mint `#68e5b2`, footer `#222831`, light bg
  `#f8f9fa`, body `#4d4d4d`, muted `#6c757d`, price `#2f89fc`, border
  `#e6e6e6`; Poppins loaded via Google Fonts `<link>` in `index.html`
- **AND** all images SHALL be deterministic picsum placeholders
  (`picsum.photos/seed/tripforge-<n>/<w>/<h>`) and icons SHALL come from
  lucide-react (brand icons as inline SVG)
- **AND** the app SHALL contain no reference to ColorLib or the source
  name in any file (provenance lives only in this spec, TEMPLATES.md, and
  the PR)
- **AND** inner pages from the reference (about.html, tour.html,
  hotel.html, blog.html, contact.html) SHALL NOT be recreated — all links
  are in-page anchors or "#"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec (whole-repo validate may
      fail on unrelated legacy specs — check this spec's own `✓` line).
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/tripforge`
      (`scripts/verify-app.sh tripforge` in FAST_MODE; full `npm run gate`
      in CI).
- [ ] Visual fidelity: transparent floating navbar (bold "tripforge" +
      coral dot, white links, outline "Add listing" pill filling coral on
      hover, solid dark on scroll), tropical beach hero with "Explore /
      your amazing city" (bold first line, weight-200 second), inline
      search (keyword + Where select + coral Search), four white highlight
      chips, overlapping white service cards with coral icons + coral
      hover flip, Featured Destination carousel with circular hover
      icons + "15 Listing", Top Tour Packages cards (coral stars, blue
      price, days chip, Discover), photo counter band with four animated
      counters, Popular Hotels cards ($40 /night + Book Now), Why Choose
      Us + testimonial carousel (100px round photo + coral quote badge),
      Popular Restaurants grid, Tips & Articles blog row, teal→mint
      newsletter band with bordered pill-input form, dark charcoal footer
      (brand + social + Information + Customer Support + Have a Questions?
      + Component Dock link) match the Direngine preview 1:1.
- [ ] Design tokens in `@theme` as listed above; Poppins via Google Fonts;
      coral `#f85959` primary, teal→mint gradient bands, square search
      inputs + pill buttons, 60px circular hover icons.
- [ ] Placeholder images use `picsum.photos/seed/tripforge-<n>/<w>/<h>`
      (hero, band, dest ×6, tour ×5, hotel ×5, rest ×4, blog ×4, quote
      ×3); icons from lucide-react with inline-SVG brand icons; no
      ColorLib assets, CSS, or strings anywhere in `apps/tripforge`.
- [ ] `public/CNAME` = `tripforge.free.componentdock.com`; package
      `@free-react-templates/tripforge`; `"homepage"`
      = `https://tripforge.free.componentdock.com`; lockfile registers the
      workspace; `injectUiSource()` present in `vite.config.ts`; footer
      links Component Dock.
