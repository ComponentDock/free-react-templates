# Template: AutoDock (Car Rental / Automotive Service)

## Purpose

Recreation of ColorLib "Cardoor" — a car rental landing page with a dark
header, hero booking form, about section, partner logos, services grid, fun
fact counters, car selection tabs, pricing tables, testimonials, mobile app
promo, blog articles, and a multi-column footer with newsletter signup.

- **Source:** ColorLib "Cardoor" (slug: `cardoor`)
- **Preview URL:** https://preview.colorlib.com/theme/cardoor/
- **ColorLib page:** https://colorlib.com/wp/template/cardoor/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cardoor-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** AutoDock (`apps/autodock`, `@free-react-templates/autodock`)

## Design Tokens (extracted from preview)

| Token                    | Value                     | Notes                                                           |
| ------------------------ | ------------------------- | --------------------------------------------------------------- |
| Brand color              | `#ffd000`                 | Golden yellow — used on accents, buttons, hover states, borders |
| Dark background          | `#1e2228`                 | Header top bar, footer widget area                              |
| Overlay                  | `rgba(0, 0, 0, 0.8)`      | Hero slider overlay, fun fact area, pricing area                |
| White                    | `#fff`                    | Text on dark backgrounds, body background                       |
| Dark text                | `#333`                    | Section title lines, body text on white                         |
| Body font                | `'Open Sans', sans-serif` | From reset.css                                                  |
| Newsletter button radius | `50px`                    | Pill-shaped newsletter submit                                   |
| Form input radius        | `0`                       | Sharp corners on booking form inputs                            |
| Section padding          | `100px 0`                 | Consistent vertical rhythm                                      |
| Section title line color | `#ffd000`                 | Gold accent line under section headings                         |

## Visual Design (from screenshot reference)

The Cardoor screenshot shows:

- Dark top bar with contact info (address, phone, hours) and social icons
- Transparent-over-image navbar with logo left, nav links right
- Full-width hero slider with dark overlay; left side has a white semi-transparent booking form (pick-up location, dates, car type, "Book Now" button); right side has large white headline "BOOK A CAR TODAY!"
- White-background About section: left text + "Book a Car" / "Contact Us" buttons, right embedded video
- Partner logos strip (logos in a row)
- Services section: 3x2 grid of icon + title + description cards
- Fun fact counters on dark overlay: "550+ Happy Clients", "250+ Cars in Stock", "50+ Office in Cities"
- Choose Car section: tabbed interface (Popular Cars / Newest Cars / Office Map) with car cards
- Pricing section on dark overlay: 3 pricing cards (Business $55.99, Trial Free, Standard $35.99)
- Testimonials: carousel with quote, name, and client photo
- Mobile app promo: dark background, "SAVE 30% WITH THE APP", Android/Apple store buttons
- Blog articles: horizontal cards with thumbnail, title, meta, date badge
- Footer: 3 columns (About + newsletter, Recent Posts, Get in Touch + map link), dark #1e2228 background
- Copyright bar at bottom

## Requirements

### Requirement: App shell, design tokens, and fonts

The app SHALL live at `apps/autodock` (package
`@free-react-templates/autodock`) and compose the section order documented
above. Open Sans SHALL be loaded via a Google Fonts `<link>` in `index.html`
(weights 300–800; never ship font files). `src/index.css` SHALL register the
brand tokens in `@theme` (at minimum `--color-brand: #ffd000`,
`--color-carbon: #1e2228`) and set the body default to Open Sans. Every
footer SHALL link `https://www.componentdock.com/` branded as "Component
Dock", and no app file may mention the original template source.

#### Scenario: Tokens registered

- **GIVEN** the app renders
- **THEN** `@theme` defines brand `#ffd000` and carbon `#1e2228`
- **AND** the body renders Open Sans

#### Scenario: Fonts loaded without shipping files

- **GIVEN** `index.html`
- **THEN** a Google Fonts `<link>` requests Open Sans (300–800)
- **AND** no font binary is shipped in the app

### Requirement: Header with contact top bar and navigation

The header SHALL show a dark top bar with address, phone, and office hours
plus social icon links, and a navigation bar with the AutoDock logo on the
left and menu links on the right. The nav SHALL be transparent initially and
become solid dark on scroll. Below `lg` the links SHALL collapse behind a
hamburger button toggling a conditional mobile menu with `aria-expanded`.

#### Scenario: Header displays contact info and navigation

- **GIVEN** the user loads the page
- **THEN** a top bar shows address, phone, hours, and social icons on the dark background
- **AND** a navigation bar shows the logo on the left and menu links on the right

#### Scenario: Nav turns solid on scroll

- **GIVEN** the nav bar is at the top of the page
- **WHEN** the user scrolls past 50px
- **THEN** the header gains a solid dark background and shadow

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport is below `lg`
- **WHEN** the user activates the hamburger button
- **THEN** the mobile menu opens with `aria-expanded="true"`
- **AND** activating it again closes the menu

### Requirement: Hero section with booking form and headline

A full-width hero with a dark overlay SHALL show a semi-transparent white
booking form on the left (pick-up location dropdown, pick-up date, return
date, car type dropdown, "Book Now" button) and the "BOOK A CAR TODAY!"
headline with discount subtext on the right. Booking form inputs SHALL have
golden `#ffd000` borders.

#### Scenario: Hero section has booking form and headline

- **GIVEN** the user views the hero area
- **THEN** a semi-transparent white booking form appears on the left with pick-up location, pick-up date, return date, car type, and a "Book Now" button
- **AND** the right side shows the "BOOK A CAR TODAY!" headline with discount subtext
- **AND** the booking form inputs have golden borders

### Requirement: About section with text, CTAs, and video

The About section SHALL show a centered title with the golden car-icon accent
line, descriptive text with "Book a Car" and "Contact Us" buttons on the
left, and an embedded-video placeholder with a play button on the right.

#### Scenario: About section shows text and video

- **GIVEN** the user scrolls to the About section
- **THEN** a centered "About us" title with the golden accent line appears
- **AND** the left column shows descriptive text with "Book a Car" and "Contact Us" buttons
- **AND** the right column shows a video placeholder with a play button

### Requirement: Partner logos strip

A horizontal strip SHALL display six partner logo placeholders.

#### Scenario: Partner logos strip

- **GIVEN** the user views the partner area
- **THEN** a row of six partner logos is displayed in a horizontal strip

### Requirement: Services grid with six service cards

The Services section SHALL show a centered title and a 3-column grid of six
cards, each with an icon, an uppercase title, and description text: Rental
Car, Car Repair, Taxi Service, Life Insurance, Car Wash, and Call Driver.

#### Scenario: Services grid displays 6 service cards

- **GIVEN** the user scrolls to Services
- **THEN** a centered "Our Services" title with the golden accent appears
- **AND** six service cards are shown in a 3-column grid
- **AND** each card has an icon, an uppercase title, and description text
- **AND** the services are: Rental Car, Car Repair, Taxi Service, Life Insurance, Car Wash, Call Driver

### Requirement: Fun fact counters

A dark-overlay section SHALL show three counter items with golden icons:
550+ Happy Clients, 250+ Cars in Stock, and 50+ Office in Cities.

#### Scenario: Fun fact counters

- **GIVEN** the user scrolls to the fun fact area
- **THEN** a dark overlay section shows three counter items
- **AND** the items are: 550+ Happy Clients, 250+ Cars in Stock, 50+ Office in Cities
- **AND** each has an icon with golden color

### Requirement: Choose Car tabbed section

The Choose Car section SHALL show a tabbed interface (Popular Cars, Newest
Cars, Our Office) with Popular Cars active by default showing car cards;
clicking other tabs SHALL switch the rendered content.

#### Scenario: Choose Car tabbed section

- **GIVEN** the user scrolls to the Choose Car section
- **THEN** a tabbed interface shows Popular Cars, Newest Cars, and Our Office
- **AND** the Popular Cars tab is active by default showing car cards
- **AND** clicking other tabs switches the content

### Requirement: Pricing section with three plans

A dark-overlay pricing section SHALL show three cards: Business ($55.99/mo),
Trial (Free), and Standard ($35.99/mo), each with a feature list.

#### Scenario: Pricing section with 3 plans

- **GIVEN** the user scrolls to Pricing
- **THEN** a dark overlay section with the "Only quality for clients" title appears
- **AND** three pricing cards are displayed: Business ($55.99/mo), Trial (Free), Standard ($35.99/mo)
- **AND** each card shows a feature list

### Requirement: Testimonials carousel

The Testimonials section SHALL show a quote card with the client name and
photo, with previous/next controls that cycle through at least three
testimonials and wrap around.

#### Scenario: Testimonials carousel

- **GIVEN** the user scrolls to Testimonials
- **THEN** a centered "Testimonials" title appears
- **AND** the testimonial card shows a quote, client name, and client photo
- **AND** the previous/next controls cycle through the testimonials with wrap-around

### Requirement: Mobile app promo section

A dark-background section SHALL show "SAVE 30% WITH THE APP", the subtitle
"Easy & Fast — Book a car in 60 seconds", and Android Store / Apple Store
download buttons with golden styling.

#### Scenario: Mobile app promo section

- **GIVEN** the user scrolls to the mobile app area
- **THEN** a dark background section shows "SAVE 30% WITH THE APP"
- **AND** the subtitle reads "Easy & Fast — Book a car in 60 seconds"
- **AND** Android Store and Apple Store download buttons with golden styling appear

### Requirement: Blog articles section

A "Tips and articles" section SHALL show three horizontal article cards with
thumbnail image, title, author, comment count, and a golden date badge.

#### Scenario: Blog articles section

- **GIVEN** the user scrolls to Tips and Articles
- **THEN** a "Tips and articles" title with the golden accent appears
- **AND** article cards show a thumbnail image, title, author, comment count, and date badge

### Requirement: Footer with three columns, newsletter, and Component Dock link

The footer SHALL show a dark three-column area (About Us with logo,
description, and newsletter signup form; Recent Posts with a linked list; Get
in Touch with address, phone, email, hours, and a map link) plus a copyright
bar that links to `https://www.componentdock.com/` branded as "Component
Dock".

#### Scenario: Footer with 3 columns and newsletter

- **GIVEN** the user views the footer
- **THEN** a dark footer area shows three columns
- **AND** column 1 shows About Us with the logo, description, and a newsletter signup form
- **AND** column 2 shows Recent Posts as a linked list
- **AND** column 3 shows Get in Touch with address, phone, email, and a map link
- **AND** a copyright bar sits at the bottom

#### Scenario: Footer links to Component Dock

- **GIVEN** the user views the footer copyright bar
- **THEN** it includes a link to https://www.componentdock.com/ branded as "Component Dock"

## Verification Checklist

- [x] Header top bar: dark background, contact info, social icons, golden accent on icons
- [x] Navigation: transparent → solid on scroll, logo left, menu right, mobile hamburger
- [x] Hero: dark overlay, booking form (location, dates, car type, Book Now), right headline
- [x] About: section title with golden accent, text + video layout, CTA buttons
- [x] Partners: horizontal logo strip
- [x] Services: 3x2 grid, icon + title + description, 6 services
- [x] Fun Facts: dark overlay, 3 counters with icons
- [x] Choose Car: 3 tabs (Popular/Newest/Office), car cards in grid
- [x] Pricing: dark overlay, 3 pricing cards with features
- [x] Testimonials: carousel with quote, name, photo, wrap-around controls
- [x] Mobile App: dark bg, headline, store buttons
- [x] Articles: horizontal cards with image, title, meta, date
- [x] Footer: 3 columns, newsletter form, recent posts, contact info
- [x] Copyright bar: links to Component Dock
- [x] Color tokens: brand #ffd000, dark #1e2228, white, overlay rgba(0,0,0,0.8)
- [x] Font: Open Sans throughout
- [x] Responsive: mobile hamburger menu, stacked columns on small screens
