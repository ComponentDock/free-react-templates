# Template: AutoDock (Car Rental / Automotive Service)

## Purpose

Recreation of ColorLib's **Cardoor** — a car rental HTML template with a dark
header, hero booking form, about section, partner logos, services grid, fun
fact counters, car selection tabs, pricing tables, testimonials, mobile app
promo, blog articles, and a multi-column footer with newsletter signup.

- **Source:** Cardoor — https://colorlib.com/wp/template/cardoor/
- **Preview:** https://preview.colorlib.com/theme/cardoor/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens (extracted from preview)

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#ffd000` | Golden yellow — used on accents, buttons, hover states, borders |
| Dark background | `#1e2228` | Header top bar, footer widget area |
| Overlay | `rgba(0, 0, 0, 0.8)` | Hero slider overlay, fun fact area, pricing area |
| White | `#fff` | Text on dark backgrounds, body background |
| Dark text | `#333` | Section title lines, body text on white |
| Body font | `'Open Sans', sans-serif` | From reset.css |
| Monoton accent | `'Monoton', cursive` | Used in footer logo area |
| Button radius (slicknav) | `2px` | Small radius on hamburger |
| Newsletter button radius | `50px` | Pill-shaped newsletter submit |
| Form input radius | `0` | Sharp corners on booking form inputs |
| Section padding | `100px 0` | Consistent vertical rhythm |
| Section title line color | `#ffd000` | Gold accent line under section headings |

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

## Gherkin Requirements

### Feature: AutoDock — Car Rental Landing Page

#### Scenario: Header displays contact info and navigation
- GIVEN the user loads the page
- THEN a top bar shows address, phone, hours, and social icons on dark #1e2228 background
- AND a navigation bar shows logo on the left and menu links on the right
- AND the nav bar is transparent initially, becoming solid on scroll

#### Scenario: Hero section has booking form and headline
- GIVEN the user views the hero area
- THEN a full-width slider with dark overlay is displayed
- AND a semi-transparent white booking form appears on the left with pick-up location dropdown, pick-up date, return date, car type dropdown, and "Book Now" button
- AND the right side shows "BOOK A CAR TODAY!" headline with discount subtext
- AND the booking form inputs have golden #ffd000 border on focus

#### Scenario: About section shows text and video
- GIVEN the user scrolls to the About section
- THEN a centered section title "About us" with golden car icon accent line appears
- AND the left column shows descriptive text with "Book a Car" and "Contact Us" buttons
- AND the right column shows an embedded video

#### Scenario: Partner logos strip
- GIVEN the user views the partner area
- THEN a row of 6 partner logos is displayed in a horizontal strip

#### Scenario: Services grid displays 6 service cards
- GIVEN the user scrolls to Services
- THEN a centered "Our Services" title with golden accent appears
- AND 6 service cards are shown in a 3-column grid
- AND each card has an icon, title (uppercase), and description text
- AND the services are: Rental Car, Car Repair, Taxi Service, Life Insurance, Car Wash, Call Driver

#### Scenario: Fun fact counters
- GIVEN the user scrolls to the fun fact area
- THEN a dark overlay section shows 3 counter items
- AND the items are: 550+ Happy Clients, 250+ Cars in Stock, 50+ Office in Cities
- AND each has an icon (smile, car, bank) with golden color

#### Scenario: Choose Car tabbed section
- GIVEN the user scrolls to the Choose Car section
- THEN a tabbed interface shows Popular Cars, Newest Cars, and Our Office tabs
- AND the Popular Cars tab is active by default showing car cards
- AND clicking other tabs switches content

#### Scenario: Pricing section with 3 plans
- GIVEN the user scrolls to Pricing
- THEN a dark overlay section with "Only quality for clients" title appears
- AND 3 pricing cards are displayed: Business ($55.99/mo), Trial (Free), Standard ($35.99/mo)
- AND each card shows a feature list

#### Scenario: Testimonials carousel
- GIVEN the user scrolls to Testimonials
- THEN a centered "Testimonials" title appears
- AND testimonial cards show a quote, client name, and client photo
- AND multiple testimonials are available (carousel)

#### Scenario: Mobile app promo section
- GIVEN the user scrolls to the mobile app area
- THEN a dark background section shows "SAVE 30% WITH THE APP"
- AND subtitle "Easy & Fast - Book a car in 60 seconds"
- AND Android Store and Apple Store download buttons with golden styling

#### Scenario: Blog articles section
- GIVEN the user scrolls to Tips and Articles
- THEN a "Tips and articles" title with golden accent appears
- AND article cards show thumbnail image, title, author, comment count, and date badge

#### Scenario: Footer with 3 columns and newsletter
- GIVEN the user views the footer
- THEN a dark #1e2228 footer area shows 3 columns
- AND column 1: About Us with logo, description, and newsletter signup form
- AND column 2: Recent Posts with linked list
- AND column 3: Get in Touch with address, phone, email, and map link
- AND a copyright bar at the bottom

#### Scenario: Footer links to Component Dock
- GIVEN the user views the footer
- THEN the copyright bar includes a link to https://www.componentdock.com/

## Verification Checklist

- [ ] Header top bar: dark background, contact info, social icons, golden accent on icons
- [ ] Navigation: transparent → solid on scroll, logo left, menu right, dropdowns
- [ ] Hero: dark overlay, booking form (location, dates, car type, Book Now), right headline
- [ ] About: section title with golden accent, text + video layout, CTA buttons
- [ ] Partners: horizontal logo strip
- [ ] Services: 3x2 grid, icon + title + description, 6 services
- [ ] Fun Facts: dark overlay, 3 counters with icons
- [ ] Choose Car: 3 tabs (Popular/Newest/Office), car cards in grid
- [ ] Pricing: dark overlay, 3 pricing cards with features
- [ ] Testimonials: carousel with quote, name, photo
- [ ] Mobile App: dark bg, headline, store buttons
- [ ] Articles: horizontal cards with image, title, meta, date
- [ ] Footer: 3 columns, newsletter form, recent posts, contact info
- [ ] Copyright bar: links to Component Dock
- [ ] Color tokens: brand #ffd000, dark #1e2228, white, overlay rgba(0,0,0,0.8)
- [ ] Font: Open Sans throughout
- [ ] Responsive: mobile hamburger menu, stacked columns on small screens
