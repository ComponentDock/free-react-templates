# Template: Stead (Real Estate Template)

## Purpose

Stead is a single-page real estate & property-listing website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Findstate" website template design (see TEMPLATES.md — appears
THREE times: line 395, line 1014, and line 2589; mark ALL THREE rows `[x]`
when shipped), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Findstate" — real estate / property search landing
  page (source: https://colorlib.com/wp/template/findstate/).
- **Preview URL:** https://preview.colorlib.com/theme/findstate/ — HTTP 200,
  full rendered DOM analyzed (60,352 bytes, title "Findstate - Free Bootstrap
  4 Template by Colorlib"); master stylesheet `css/style.css` (79,564 bytes)
  extracted and parsed. Libs: Bootstrap 4 grid, Owl Carousel (property
  offers + testimonials), AOS scroll animation, ionicons + flaticon icon
  fonts, bootstrap-datepicker + jquery.timepicker (search form). Font
  **Roboto** (CSS: `font-family: "Roboto", Arial, sans-serif`) — no Google
  Fonts link in the HTML; load Roboto 300–700 via Google Fonts `<link>` in
  index.html. Cross-checked against the TEMPLATES.md screenshot
  (`findstate-free-template.jpg`, AVIF, viewed in browser) — designs match.
  The demo brands itself "Findstate"; our recreation uses the NEW name
  **Stead**.
- **Section order (1:1):**
  1. Navbar (`navbar ftco_navbar ftco-navbar-light`, transparent over the
     hero, top: 20px): brand "Findstate" left (black); nav right — Home /
     About / Services / Agent / Listing / Blog / Contact (15px / 600, black,
     gold `#d4ca68` hover + active). Mobile: solid black bg, brand white,
     hamburger toggler.
  2. Hero (`hero-wrap`, 850px tall, bg image `images/bg_2.jpg` + white
     overlay gradient `rgba(255,255,255,.71) → transparent → white` AND gold
     overlay-2 gradient `#d4c968 → transparent` left→right, 50% width,
     opacity .7): centered h1 black "Find Properties That Make You Money"
     (60px / 400 / lh 1.1, `<br>` split into two lines) + gold "Search
     Properties" button (`btn btn-primary`); mouse scroll indicator at the
     bottom.
  3. Search form (`ftco-section ftco-no-pb`, directly below hero):
     `search-property-1` — 4 fields in a row + submit:
     - Location — text input, search icon, placeholder "City/Locality Name";
     - Property Type — select: Type / Commercial / - Office / Residential /
       Villa / Condominium / Apartment;
     - Property Status — select: Type / Rent / Sale;
     - Price Limit — select: $5,000 … $2,000,000 ($5k/$10k/$50k/$100k/$200k/
       $300k/$400k/$500k/$600k/$700k/$800k/$900k/$1,000,000/$2,000,000);
     - Submit "Search Property" — gold button (padding 22px 10px,
       font-size 20px). Labels 18px / 400 black; controls 16px, 1px border
       `rgba(0,0,0,.05)`, radius 4px, text `rgba(0,0,0,.4)`.
  4. Exclusive offer (`ftco-section goto-here`): subheading "What we offer"
     (gold, 12px / 600, letter-spacing 2px, uppercase, flanked by two 50px
     gold rules) + h2 "Exclusive Offer For You" (40px / 600); Owl-carousel
     of property cards (`property-wrap`): photo 250px — hover reveals a
     gold circular bookmark icon (60px, `#d4ca68` bg, white icon) and a
     bottom agent bar (40px agent avatar + white agent name "Ben Ford" +
     bookmark/compare icon buttons); white `.text` card with soft shadow
     (`0px 5px 21px -14px rgba(0,0,0,.14)`), padding 25px: title 18px / 600
     black ("Blue View Home"), location line ("2854 Meadow View Drive,
     Hartford, USA", pin icon, `rgba(0,0,0,.4)`), price row — "$800,000"
     with "$3,050 /mo" muted old price (gold `#d4ca68` orig-price), meta
     row "3 2 1,878 sqft" (bed / bath / area icons). Carousel shows 4
     slides.
  5. Why choose us (`ftco-section ftco-fullwidth`): subheading "Services" +
     h2 "Why Choose Us?"; 4 feature blocks (icon + title + Duden-river
     paragraph): No Downpayment, All Cash Offer, Experts in Your Corner,
     Locked in Pricing.
  6. Counter (`ftco-counter ftco-section img`, photo bg + gold overlay
     band 27% width left, opacity .3 on desktop): 4 stats, numbers 50px /
     300 gold `#d4ca68`, labels 18px `rgba(0,0,0,.7)`: Area Population /
     Total Properties / Average House / Total Branches.
  7. Find properties in your city (`ftco-section`): subheading "Find
     Properties" + h2 "Find Properties In Your City"; 6 city cards (photo +
     city name "New York, USA" + "100 Property Listing" + "See All Listing"
     link).
  8. Testimonials (`ftco-section testimony-section bg-light`): subheading
     "Testimonial" + h2 "Happy Clients"; carousel of quote cards (Duden
     text + name "Roger Scott" + role "Marketing Manager").
  9. Agents (`ftco-section ftco-agent`): subheading "Agents" + h2 "Our
     Agents"; 4 agent cards (photo, name, "43 Properties" count): Ben Ford,
     John Cooper, Janice Clinton, Eunice Henceford.
  10. Blog (`ftco-section ftco-no-pt`): subheading "Blog" + h2 "Recent
      Blog"; 3 blog entries (photo 200px, meta "October 17, 2019 Admin 3",
      title "Why Lead Generation is Key for Business Growth").
  11. Footer (`ftco-footer ftco-section`, background `#d4ca68` GOLD, text
      `rgba(255,255,255,.9)`): brand "Findstate" + blurb (Duden); 3 link
      columns — "Community" (Search Properties, For Agents, Reviews, FAQs),
      "About Us" (Our Story, Meet the team, Careers), "Company" (About Us,
      Press, Contact, Careers); "Have a Questions?" contact block (203 Fake
      St. Mountain View, San Francisco, California, USA · +2 392 3929 210 ·
      info@yourdomain.com); copyright bar ("Copyright ©{year} All rights
      reserved | This template is made with ♥ by Colorlib" → paraphrased
      credit + Component Dock link).
- **Design tokens extracted from the live preview CSS (`style.css`):**
  - Signature brand gold `#d4ca68` (also written `#d4c968` in the hero
    gradient — same gold, two hex variants; standardize on `#d4ca68`):
    navbar hover/active links, subheading text + rules, `btn-primary` fill,
    hero gold gradient, counter numbers, property price highlight, footer
    background.
  - Hero: 850px tall; h1 60px / 400 / lh 1.1 black; white overlay
    `linear-gradient(to bottom, rgba(255,255,255,.71) 0%, transparent 50%,
#fff 100%)`; gold overlay `linear-gradient(to right, #d4c968 0%,
rgba(212,201,104,.9) 36%, rgba(212,201,104,.55) 50%, transparent 100%)`
    width 50%, opacity .7.
  - Buttons (`.btn.btn-primary`): background `#d4ca68`, 1px solid `#d4ca68`
    border, white text, border-radius 3px, font-size 14px, box-shadow none;
    hover → transparent bg + gold text. Hero CTA padding `py-3 px-4`
    (16px 24px); search submit padding 22px 10px, font-size 20px.
  - Section headings: `.heading-section .subheading` — gold, 12px / 600,
    letter-spacing 2px, uppercase, flanked by 50px × 1px gold rules at
    ±60px; `.heading-section h2` 40px / 600 (mobile 28px).
  - Property cards: `.property-wrap .img` 250px; hover icon 60px circle
    gold bg; `.text` white, padding 25px, shadow `0px 5px 21px -14px
rgba(0,0,0,.14)`; title 18px / 600; muted text `rgba(0,0,0,.4)`.
  - Counter: numbers 50px / 300 gold; labels 18px `rgba(0,0,0,.7)`; gold
    overlay band 27% width, opacity .3.
  - Body: font Roboto; section paddings 7em (footer `7em 0`); `bg-light`
    testimony section `#f8f9fa`.
- **Visual design (from screenshot + live view):** clean, airy real-estate
  landing. White page on a soft-focus photo of Victorian houses; hero blends
  into a pale gold→white gradient on the left with dark centered headline
  and a mustard-gold CTA; black transparent navbar with gold active link;
  white search bar with 4 fields + gold button; white property card
  carousel; photo counter band with gold stat numbers; light-gray
  testimonial band; and a distinctive solid GOLD footer with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/stead-<n>/<w>/<h>`; hero uses the same seed trick or
  a CSS gradient + picsum photo); icons → lucide-react (search, map-pin,
  bed-double, bath, ruler, bookmark, arrow-left-right for compare, menu,
  quote, chevron-down; social brand icons as inline SVG per repo rule);
  Roboto via Google Fonts `<link>`; no assets copied. Owl carousels → CSS
  overflow/scroll rows or a simple React carousel; AOS scroll animation →
  CSS `animate-on-scroll` if desired, else static. Copy paraphrased but
  same content kinds (headline, search fields, property details, feature
  names, stats, city names, testimonial quotes, agent names, blog meta,
  contact info).

Stead lives in `apps/stead` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header and navigation

The system SHALL render a transparent navbar over the hero with brand, nav
links, and a mobile toggle.

#### Scenario: Navbar content

- **GIVEN** the Stead page is rendered
- **WHEN** the navbar is displayed
- **THEN** the brand "Stead" SHALL appear on the left
- **AND** the nav SHALL show links Home, About, Services, Agent, Listing,
  Blog, and Contact
- **AND** the Home link SHALL be styled as active (gold)
- **AND** the nav links SHALL turn gold on hover

#### Scenario: Mobile navigation

- **GIVEN** the Stead page is rendered on a narrow viewport
- **WHEN** the viewport is below the breakpoint
- **THEN** the navbar SHALL have a solid black background
- **AND** the nav links SHALL collapse behind a hamburger toggle that opens
  the menu

### Requirement: Hero

The system SHALL render a full-height photo hero with a headline and a
search CTA.

#### Scenario: Hero content

- **GIVEN** the Stead page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL show a large background photo washed with a
  white-to-transparent gradient and a gold gradient from the left
- **AND** the hero SHALL show the centered heading "Find Properties That
  Make You Money"
- **AND** the hero SHALL show a gold "Search Properties" button
- **AND** the hero SHALL show a mouse scroll indicator at its bottom

### Requirement: Property search form

The system SHALL render the property search form with four fields and a
submit button.

#### Scenario: Search form fields

- **GIVEN** the Stead page is rendered
- **WHEN** the search section is displayed
- **THEN** the form SHALL show a Location text input with placeholder
  "City/Locality Name" and a search icon
- **AND** the form SHALL show a Property Type select with options
  Commercial, Office, Residential, Villa, Condominium, and Apartment
- **AND** the form SHALL show a Property Status select with options Rent
  and Sale
- **AND** the form SHALL show a Price Limit select ranging from $5,000 to
  $2,000,000
- **AND** the form SHALL show a gold "Search Property" submit button

### Requirement: Exclusive offer property cards

The system SHALL render a carousel of property listing cards.

#### Scenario: Property card content

- **GIVEN** the Stead page is rendered
- **WHEN** the exclusive-offer section is displayed
- **THEN** the section SHALL show the gold subheading "What we offer"
- **AND** the section SHALL show the heading "Exclusive Offer For You"
- **AND** the section SHALL show property cards, each with a photo, a
  title, a location line, a price, and a bed/bath/sqft meta row
- **AND** hovering a card SHALL reveal a gold bookmark icon and an agent
  bar with the agent's avatar and name

### Requirement: Why choose us

The system SHALL render the four feature blocks.

#### Scenario: Feature blocks

- **GIVEN** the Stead page is rendered
- **WHEN** the services section is displayed
- **THEN** the section SHALL show the heading "Why Choose Us?"
- **AND** the section SHALL show four features titled No Downpayment, All
  Cash Offer, Experts in Your Corner, and Locked in Pricing
- **AND** each feature SHALL include an icon and a short description

### Requirement: Stats counter

The system SHALL render a photo band with four statistics.

#### Scenario: Counter stats

- **GIVEN** the Stead page is rendered
- **WHEN** the counter section is displayed
- **THEN** the section SHALL show a background photo with a gold overlay
  band
- **AND** the section SHALL show four stats: Area Population, Total
  Properties, Average House, and Total Branches
- **AND** each stat SHALL show a large gold number with a label

### Requirement: Find properties in your city

The system SHALL render the six city cards.

#### Scenario: City cards

- **GIVEN** the Stead page is rendered
- **WHEN** the city section is displayed
- **THEN** the section SHALL show the heading "Find Properties In Your
  City"
- **AND** the section SHALL show six city cards, each with a photo, a city
  name (e.g. "New York, USA"), a "100 Property Listing" count, and a "See
  All Listing" link

### Requirement: Testimonials

The system SHALL render a testimonials carousel.

#### Scenario: Testimonial cards

- **GIVEN** the Stead page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL show the heading "Happy Clients"
- **AND** the section SHALL show quote cards with a testimonial text, a
  client name, and a role

### Requirement: Agents

The system SHALL render the four agent cards.

#### Scenario: Agent cards

- **GIVEN** the Stead page is rendered
- **WHEN** the agents section is displayed
- **THEN** the section SHALL show the heading "Our Agents"
- **AND** the section SHALL show four agent cards, each with a photo, a
  name, and a property count (e.g. "43 Properties")
- **AND** the agents SHALL be named Ben Ford, John Cooper, Janice Clinton,
  and Eunice Henceford

### Requirement: Recent blog

The system SHALL render the blog preview cards.

#### Scenario: Blog cards

- **GIVEN** the Stead page is rendered
- **WHEN** the blog section is displayed
- **THEN** the section SHALL show the heading "Recent Blog"
- **AND** the section SHALL show three blog cards, each with a photo, a
  meta line (date, admin, comment count), and a post title

### Requirement: Footer

The system SHALL render the gold footer with link columns and contact
info.

#### Scenario: Footer content

- **GIVEN** the Stead page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a gold background with white text
- **AND** the footer SHALL show the brand, a short blurb, and link columns
  Community, About Us, and Company
- **AND** the footer SHALL show a "Have a Questions?" contact block with an
  address, a phone number, and an email
- **AND** the footer SHALL show a copyright bar with a link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `scripts/verify-app.sh stead` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] All spec scenarios implemented (`openspec/specs/template-stead/spec.md`)
- [ ] Visual pass vs live demo `https://preview.colorlib.com/theme/findstate/`
- [ ] TEMPLATES.md lines 395, 1014, AND 2589 all marked `[x]`
- [ ] `public/CNAME` = `stead.free.componentdock.com`; `homepage` =
      `https://stead.free.componentdock.com`
