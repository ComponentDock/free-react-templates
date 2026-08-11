# Template: Taverna (Restaurant Website)

## Purpose

Taverna is a single-page restaurant website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Appetizer"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Appetizer" — restaurant / food & catering site
  (source: https://colorlib.com/wp/template/appetizer/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/appetizer/
  (HTTP 200, full rendered DOM + `css/style.css` (76KB) + `css/flaticon.css`
  extracted 2026-08-12 during prep). The TEMPLATES.md screenshot
  (`appetizer-free-template.jpg`) was also viewed (browser) and confirms the
  design below: dark photo hero with white outlined headline, orange CTA
  buttons, script-font decorative subheadings.
- **Section order (1:1):** Navbar (logo "Appetizer" + Home, About, Menu, Blog,
  Contact + orange "Book a table" button; transparent over hero, white links)
  → Hero slider (`home-slider owl-carousel js-fullheight`, 3 slides with photo
  bg + 0.5 black overlay; centered uppercase Monoton h1 + "Order Now" primary
  - "View Menu" white-outline buttons; carousel dots) → About
    (`ftco-wrap-about`, white; script subheading "About" + h2 "Appetizer
    Restaurant" + paragraph + round orange video play button) → Stats band
    (`ftco-counter img`, photo bg `bg_4.jpg`; 4 counters: 18 Years of
    Experienced, 15000 Happy Customers, 100 Menus, 20 Staffs — 40px black
    numerals) → Catering Services (`bg-light`; "Services" + 3 icon cards:
    Birthday Party, Business Meetings, Wedding Party — circular icon, title,
    blurb) → Our Menu (white; "Specialties" + 6 category columns: Breakfast,
    Lunch, Dinner, Desserts, Wine Card, Drinks — each 3 items: photo, title,
    price $29, ingredient tags; bordered card) → Make Reservation (white; form:
    Name, Email, Phone, Date, Time, Person select 1/2/3/4+ + "Make a
    Reservation" orange submit; right side Google map) → Our Master Chef
    (white; "Chef" + 4 staff cards: John Smooth/Restaurant Owner, Rebeca
    Welson/Head Chef, Kharl Branyt/Chef, Luke Simon/Chef — photo, name,
    position, blurb, social icons) → Happy Customer (`testimony-section img`,
    photo bg `bg_5.jpg`; 5 carousel slides: round avatar + quote icon + quote +
    name + "Customer") → Instagram strip (5 square photos with hover icon) →
    Footer (`ftco-footer ftco-bg-dark`; brand + blurb + social; Open Hours
    Mon–Thu 9:00–24:00 / Fri–Sun 9:00–02:00; Newsletter email + Subscribe;
    Instagram 6-thumb grid; copyright).
- **Design tokens extracted from `style.css` + preview HTML:**
  - Primary **#ffa323** (warm orange/gold) — `.btn.btn-primary` background +
    border, `.icon-video` round play button, script subheading color.
  - Secondary button `.btn.btn-white`: background #fff, border #fff, text
    #000 (hero "View Menu").
  - Body: **"Poppins"** 17px, line-height 2, color #666666; headings black
    (h2 weight 600). Hero h1: **"Monoton"**, cursive, uppercase, ~5vw, white,
    letter-spacing 1px. Decorative subheadings: **"Miss Fajardose"**, cursive,
    100px, #ffa323, absolutely positioned behind the heading (z-index -1).
    All three via Google Fonts.
  - Hero overlay: black, opacity 0.5. Hero buttons `p-3 px-xl-4 py-xl-3`,
    radius Bootstrap 0.25rem (rounded).
  - Menu item card `.menus`: border 1px #e6e6e6, border-radius 5px, padding
    30px 20px; category heading `.heading-menu h3` 30px weight 900.
  - Counter numeral `.text strong.number`: 40px, weight 500, #000.
  - Staff position: 14px, rgba(0,0,0,0.3); testimonial name: 22px #000.
  - Sections `.ftco-section`: padding 7em 0; light section bg #f8f9fa.
  - Footer: background #141313 (`.ftco-footer`) / #3c312e (`.ftco-bg-dark`);
    footer paragraph color rgba(255,255,255,0.7).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/taverna-<n>/<w>/<h>`); icons → lucide-react (Cake,
  UtensilsCrossed, Wine, ChefHat, Play, Quote, MapPin, Clock, Mail, Phone,
  Instagram, Facebook, Twitter/X, CalendarDays, Users); the Google map →
  stylized placeholder panel; the original's duplicated menu items
  ("Grilled Beef with potatoes"/"Grilled Crab with Onion" ×3 per category)
  may be varied with other dish names keeping the same item structure;
  original hero typo "Kick of" fixed to "Kick Off"; no assets copied.

Taverna lives in `apps/taverna` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Taverna",
anchor links to the page's sections, a "Book a table" call-to-action button,
and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Taverna page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Taverna" and links to Home, About, Menu, and Contact
- **AND** the navbar SHALL show a "Book a table" button
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero slider

The system SHALL render a full-height hero slider with three slides, each with
a background image, a headline, and two action buttons.

#### Scenario: Hero slide content

- **GIVEN** the Taverna page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show the slide headlines "Our Delicious Specialties", "The Best Place to Kick Off Your Day", and "Creamy Hot and Ready to Serve"
- **AND** each slide SHALL show "Order Now" and "View Menu" buttons
- **AND** the slider SHALL be navigable (next/prev controls or dots)

### Requirement: About section

The system SHALL render an about section with a decorative subheading, a
heading, a paragraph, and a video play button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "Taverna Restaurant" with a decorative script "About" label above it
- **AND** it SHALL show a descriptive paragraph
- **AND** it SHALL show a circular play button for the promo video

### Requirement: Stats band

The system SHALL render a stats band over a background image with four
counters.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show the figures 18 Years of Experienced, 15000 Happy Customers, 100 Menus, and 20 Staffs

### Requirement: Catering services

The system SHALL render a catering services section with a heading and three
icon cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the catering services section is displayed
- **THEN** it SHALL contain a heading "Catering Services"
- **AND** it SHALL show cards titled "Birthday Party", "Business Meetings", and "Wedding Party", each with an icon and a blurb

### Requirement: Menu section

The system SHALL render a menu section with a heading and six category
columns, each containing three dish items with a photo, a title, a price, and
ingredient tags.

#### Scenario: Menu content

- **GIVEN** the page is rendered
- **WHEN** the menu section is displayed
- **THEN** it SHALL contain a heading "Our Menu"
- **AND** it SHALL show the categories Breakfast, Lunch, Dinner, Desserts, Wine Card, and Drinks
- **AND** each category SHALL show three dish items with a title, a price, and ingredient tags

### Requirement: Reservation form

The system SHALL render a reservation section with a form collecting name,
email, phone, date, time, and party size, plus a submit button.

#### Scenario: Reservation form fields

- **GIVEN** the page is rendered
- **WHEN** the reservation section is displayed
- **THEN** it SHALL contain a heading "Make Reservation"
- **AND** the form SHALL have fields for Name, Email, Phone, Date, Time, and Person (1, 2, 3, or 4+)
- **AND** the form SHALL have a "Make a Reservation" submit button

#### Scenario: Reservation validation

- **GIVEN** the reservation form is displayed
- **WHEN** the user submits the form with invalid or missing fields
- **THEN** the form SHALL show per-field errors and SHALL NOT submit

### Requirement: Chef section

The system SHALL render a chef section with a heading and four staff cards.

#### Scenario: Chef content

- **GIVEN** the page is rendered
- **WHEN** the chef section is displayed
- **THEN** it SHALL contain a heading "Our Master Chef"
- **AND** it SHALL show staff cards for "John Smooth" (Restaurant Owner), "Rebeca Welson" (Head Chef), "Kharl Branyt" (Chef), and "Luke Simon" (Chef), each with a photo, a blurb, and social links

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and a carousel
of customer quotes.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Happy Customer"
- **AND** it SHALL show at least three customer quotes with reviewer names and the position "Customer"

### Requirement: Instagram strip

The system SHALL render an Instagram strip of square photo tiles with a hover
icon.

#### Scenario: Instagram strip content

- **GIVEN** the page is rendered
- **WHEN** the Instagram strip is displayed
- **THEN** it SHALL show at least four square image tiles
- **AND** each tile SHALL reveal an Instagram icon on hover

### Requirement: Footer

The system SHALL render a dark footer with a brand blurb, open hours, a
newsletter form, an Instagram grid, social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand "Taverna" with a blurb and social links (GitHub, X, LinkedIn)
- **AND** it SHALL show "Open Hours" with Monday–Thursday 9:00–24:00 and Friday–Sunday 9:00–02:00
- **AND** it SHALL show a "Newsletter" email input with a "Subscribe" button
- **AND** it SHALL show an "Instagram" grid of six thumbnails
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Taverna app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Taverna — Restaurant Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/taverna`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/taverna`)
- [ ] Section order matches the reference 1:1 (navbar → hero slider → about → stats band → catering services → menu → reservation → chef → testimonials → instagram strip → footer)
- [ ] Design tokens from the reference used in `@theme` (primary #ffa323, white button #fff, footer dark #141313/#3c312e, body #666666, border #e6e6e6; Poppins + Monoton + Miss Fajardose Google Fonts)
- [ ] Hero: photo bg + 0.5 black overlay, uppercase Monoton white headline, orange "Order Now" + outlined "View Menu", 3 slides with dots
- [ ] About: script "About" subheading in #ffa323 behind the heading, "Taverna Restaurant" h2, paragraph, round orange play button
- [ ] Stats: photo background band, four counters (18 / 15000 / 100 / 20) with labels
- [ ] Catering: light #f8f9fa section, 3 cards with circular icons (Birthday Party, Business Meetings, Wedding Party)
- [ ] Menu: 6 category columns (Breakfast, Lunch, Dinner, Desserts, Wine Card, Drinks), 3 items each with photo/title/price/tags, bordered rounded cards
- [ ] Reservation: 6 fields (Name, Email, Phone, Date, Time, Person select) + orange "Make a Reservation" submit; zod validation with per-field errors; map placeholder
- [ ] Chef: 4 cards with photo, name, position, blurb, social icons
- [ ] Testimonials: photo bg section, carousel with round avatars + quotes + names + "Customer"
- [ ] Instagram strip: 5 square tiles with hover Instagram icon
- [ ] Footer: dark bg, brand blurb + social, Open Hours list, Newsletter form, 6-thumb Instagram grid, copyright
