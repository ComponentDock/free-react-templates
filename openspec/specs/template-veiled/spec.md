# Template: Veiled (Restaurant Landing)

## Purpose

Veiled is a single-page restaurant landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sneaky Restaurant" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a warm-toned restaurant page with red-orange and dark-purple
accents: a hero ("Foods the most precious things" with carousel + Book Now +
feature icons), an About Us section (image pair + blurb), Featured Food carousel
(3 food cards with price + rating), an Offer band (50% OFF pizza), a Food Menu
grid (8 dish cards), a CTA band (reservation CTA), a Our Chef section (3 chef
cards with social overlay), a Reservation section (form with dark background),
a Blog section (3 blog cards), and a 4-column footer with newsletter form.
Veiled recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Sneaky Restaurant" — free restaurant website template
  (source: https://colorlib.com/wp/template/sneaky/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/sneaky/`
  (HTTP 200, full HTML ~720 lines). The rendered DOM is the reference below;
  the TEMPLATES.md screenshot (`sneaky-free-template.jpg`) confirms the
  visual design (warm light sections, red-orange accents, dark purple headings).
- **Section order (1:1):**
  1. Header (`header_area`): logo + nav (Home, About, Menu, Chef, Blog dropdown, Contact).
  2. Hero (`hero-banner`): "Foods the most precious things" + Book Now CTA + Watch Video link
     + 3 feature icons (Fast Service, Fresh Food, 24/7 Support) + social icons (left side)
     + hero image carousel (owl-carousel).
  3. About (`about section-margin`): "About Us" / "We speak the good food language" + blurb
     + "Learn More" CTA. Two overlapping images (img-styleBox pattern).
  4. Featured Food (`section-margin mb-lg-100`): "Featured Food" / "Fresh taste and great price"
     + 3 food cards in owl-carousel (Mountain Mike Pizza $35, Patatas Bravas $30,
     Pulled Sandwich $20) — each with image, title, description, 5-star rating, price.
  5. Offer (`bg-lightGray section-padding`): split layout — food image left + red-orange
     offer card right ("Italian Pizza Offer" / "50% OFF" / Read More). The offer card
     floats left over the image at larger breakpoints.
  6. Food Menu (`section-margin`): "Food Menu" / "Delicious food" + 2-column grid of 8 dish
     cards (image + name + price + description, with hover shadow + background change).
  7. CTA (`cta-area`): full-width background image with dark overlay —
     "Some Trendy And Popular Courses Offerd" / headline / Reservation CTA.
  8. Our Chef (`section-margin`): "Our Chef" / "Talent & experience member" + 3 chef cards
     (image, name, title, social overlay on hover — slides down from top).
  9. Reservation (`bg-lightGray section-padding`): split — left intro text
     ("Get experience from sneaky") + right dark-background form (Book A Table:
     Name, Email, Phone, Date, People + Make Reservation button).
  10. Blog (`section-margin`): "Our Blog" / "Latest food and recipe news" + 3 blog cards
      (image, author + date, headline).
  11. Footer (`footer-area section-gap`): 4 columns (Top Products, Quick Links, Features,
      Resources) + Newsletter form + social icons + copyright bar.

- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#e22104** (red-orange) — used for .button, .price-tag, .intro-title,
    .offer-card, nav hover, footer social hover, blog date badge.
  - Heading / dark text: **#2f2d4e** (dark navy-purple) — h1-h5, nav links, hero info,
    social icons default, footer social background.
  - Body text: **#888888** (medium gray).
  - Light background: **#fff8f7** (warm off-white) — .bg-lightGray, featured-item,
    food-card, card-blog, footer-area.
  - Accent gold: **#ffbe0f** (rating stars).
  - Fonts: **"Josefin Sans"** (headings, h1-h5) + **"Open Sans"** (body, nav, buttons)
    via Google Fonts.
  - Buttons: **border-radius: 30px** (pill shape), background #e22104, white text,
    hover: background red. Button-shadow uses `box-shadow: -5px 8px 20px 0px rgba(229,16,2,0.15)`.
  - Section margins: 65px mobile / 130px desktop (section-margin, section-padding).
  - CTA background: dark overlay `rgba(2,1,15,0.7)` over background image.
  - Chef overlay: `rgba(2,1,15,0.5)` — slides down on hover.
  - Featured item hover: `box-shadow: 0px 10px 20px 0px rgba(8,6,89,0.1)`.
  - Fixed navbar on scroll: background changes to **#7676ff** (light purple).
  - Offer card shadow: `box-shadow: -13px 2px 20px 0px rgba(8,6,89,0.2)`.
  - Section intro title: has a horizontal line via `::after` (1px #3a414e line extending right).

- **Recreation decisions:** repo-standard Navbar (site name "Veiled", Home + Menu + Chef
  + Blog + Contact links, dark-mode toggle) + CTA; hero = seeded picsum photo with headline,
  Book Now CTA, and 3 feature icon cards (lucide); about = overlapping seeded photos + blurb;
  featured food = 3 food cards with price + rating (lucide Star icons); offer = split layout
  with image + red offer card; food menu = 2x4 grid of dish cards; CTA = full-width with
  dark overlay; chef = 3 cards with initials avatars + social overlay; reservation = form
  section; blog = 3 cards; footer with newsletter form + social links. All images
  picsum-seeded (`picsum.photos/seed/veiled-N/w/h`); Google Fonts via `<link>`.
  Footer links to `https://www.componentdock.com/`.

Veiled lives in `apps/veiled` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Veiled", links
(Home, Menu, Chef, Blog, Contact), and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Veiled page is rendered
- **WHEN** I inspect the navigation bar
- **THEN** it displays the site name "Veiled"
- **AND** it contains links: Home, Menu, Chef, Blog, Contact
- **AND** it contains a dark-mode toggle button

#### Scenario: Navbar scrolls to fixed

- **GIVEN** the page is scrolled past the hero section
- **WHEN** I observe the navigation bar
- **THEN** it becomes fixed at the top with a solid background

### Requirement: Hero section

The system SHALL render a hero section with a headline, a "Book Now" CTA, a
"Watch Video" link, and three feature icons (Fast Service, Fresh Food, 24/7 Support).

#### Scenario: Hero content

- **GIVEN** the Veiled page is rendered
- **WHEN** I view the hero section
- **THEN** it displays the headline "Foods the most precious things"
- **AND** it shows a "Book Now" button
- **AND** it shows a "Watch Video" link
- **AND** it displays three feature icons: Fast Service, Fresh Food, 24/7 Support

#### Scenario: Hero image carousel

- **GIVEN** the hero section is rendered
- **WHEN** I view the right side of the hero
- **THEN** it displays a food image (placeholder via picsum)

### Requirement: About section

The system SHALL render an "About Us" section with two overlapping images, a
heading, descriptive text, and a "Learn More" CTA.

#### Scenario: About content

- **GIVEN** the Veiled page is rendered
- **WHEN** I view the About section
- **THEN** it shows the heading "We speak the good food language"
- **AND** it shows the intro label "About Us"
- **AND** it shows descriptive paragraph text
- **AND** it shows a "Learn More" button
- **AND** it displays two overlapping placeholder images

### Requirement: Featured Food section

The system SHALL render a "Featured Food" section with three food cards, each
showing an image, name, description, star rating, and price.

#### Scenario: Featured food cards

- **GIVEN** the Veiled page is rendered
- **WHEN** I view the Featured Food section
- **THEN** it shows the heading "Fresh taste and great price"
- **AND** it displays three food cards
- **AND** each card has an image, name, description, 5-star rating, and price

### Requirement: Offer section

The system SHALL render a promotional offer section with a food image and a
red-orange card showing "Italian Pizza Offer" / "50% OFF".

#### Scenario: Offer content

- **GIVEN** the Veiled page is rendered
- **WHEN** I view the Offer section
- **THEN** it shows "Italian Pizza Offer"
- **AND** it shows "50% OFF"
- **AND** it shows a "Read More" button
- **AND** it has a light gray background

### Requirement: Food Menu section

The system SHALL render a "Food Menu" section with a 2-column grid of eight
dish cards, each showing an image, name, price, and description.

#### Scenario: Food menu grid

- **GIVEN** the Veiled page is rendered
- **WHEN** I view the Food Menu section
- **THEN** it shows the heading "Delicious food"
- **AND** it displays eight food cards in a 2-column layout
- **AND** each card shows a dish image, name, price, and short description

#### Scenario: Food card hover

- **GIVEN** a food card is displayed
- **WHEN** I hover over it
- **THEN** the card background changes to white and gains a subtle shadow

### Requirement: CTA section

The system SHALL render a full-width call-to-action section with a dark overlay
background, a headline, and a "Reservation" button.

#### Scenario: CTA content

- **GIVEN** the Veiled page is rendered
- **WHEN** I view the CTA section
- **THEN** it displays "Some Trendy And Popular Courses Offerd"
- **AND** it shows a headline
- **AND** it shows a "Reservation" button

### Requirement: Chef section

The system SHALL render a "Our Chef" section with three chef cards, each
showing an image, name, title, and social icons overlay on hover.

#### Scenario: Chef cards

- **GIVEN** the Veiled page is rendered
- **WHEN** I view the Chef section
- **THEN** it shows the heading "Talent & experience member"
- **AND** it displays three chef cards
- **AND** each card shows a name, title, and social icon overlay on hover

### Requirement: Reservation section

The system SHALL render a reservation section with introductory text on the
left and a dark-background booking form on the right (Name, Email, Phone,
Date, People fields + Make Reservation button).

#### Scenario: Reservation form

- **GIVEN** the Veiled page is rendered
- **WHEN** I view the Reservation section
- **THEN** it shows the heading "Get experience from Veiled"
- **AND** it displays a "Book A Table" form
- **AND** the form contains fields: Name, Email, Phone, Date, People
- **AND** it shows a "Make Reservation" submit button

### Requirement: Blog section

The system SHALL render a "Our Blog" section with three blog cards, each
showing an image, author, date, and headline.

#### Scenario: Blog cards

- **GIVEN** the Veiled page is rendered
- **WHEN** I view the Blog section
- **THEN** it shows the heading "Latest food and recipe news"
- **AND** it displays three blog cards
- **AND** each card shows an image, author name, date, and article headline

### Requirement: Footer

The system SHALL render a footer with four link columns (Top Products, Quick
Links, Features, Resources), a newsletter form with email input, social
icon links, and a copyright line linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the Veiled page is rendered
- **WHEN** I view the footer
- **THEN** it displays four link columns
- **AND** it shows a newsletter email input + submit button
- **AND** it shows social icon links (Facebook, Twitter, Dribbble, LinkedIn)
- **AND** it shows a copyright line with a link to `https://www.componentdock.com/`

### Requirement: Dark mode

The system SHALL support dark mode toggled via the navbar toggle, applying
`dark:` Tailwind utilities across all sections.

#### Scenario: Dark mode toggle

- **GIVEN** the Veiled page is rendered in light mode
- **WHEN** I click the dark-mode toggle
- **THEN** all sections switch to dark color scheme
- **AND** the toggle icon updates to reflect the current mode

## Verification checklist

- [ ] All 11 sections rendered in correct order
- [ ] Design tokens match: #e22104 brand, #2f2d4e headings, #fff8f7 backgrounds, Josefin Sans + Open Sans fonts, pill buttons (border-radius: 30px)
- [ ] Featured Food: 3 cards with price + 5-star rating
- [ ] Offer section: split layout with red card overlay
- [ ] Food Menu: 2x4 grid with hover effect
- [ ] CTA: dark overlay background
- [ ] Chef cards: hover social overlay
- [ ] Reservation form: dark background, 5 fields
- [ ] Blog: 3 cards with author + date
- [ ] Footer: 4 columns + newsletter + social + Component Dock link
- [ ] Dark mode works across all sections
- [ ] No ColorLib references in app code
- [ ] All images use picsum-seeded placeholders
- [ ] Google Fonts loaded via `<link>` in index.html
- [ ] 100% test coverage
