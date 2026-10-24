# Template: GrandCourt (Hotel)

## Purpose

Recreation of ColorLib's **Luxehotel** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page hotel website.

- **Source slug:** `luxehotel`
- **Preview URL:** https://preview.colorlib.com/theme/luxehotel/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/luxehotel-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library (100% coverage)
- **Source design:** ColorLib "Luxehotel" — https://colorlib.com/wp/template/luxehotel/

## Design tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/luxehotel/:

| Token | Value | Usage |
|---|---|---|
| Primary blue | `#4586FF` | Buttons, links, icon color, active states |
| Accent orange | `#F96D00` | Hover states, price highlights, secondary CTA |
| Gold highlight | `#F7AF1D` | Star ratings, accent text |
| Footer dark | `#302939` | Footer background, dark sections |
| Body text | `#595959` | Paragraph text, descriptions |
| Light background | `#fafafa` / `#f7f7f7` | Section backgrounds (light grey sections) |
| Heading font | `"Playfair Display", Times, serif` | h1, h2 headings — elegant serif |
| Body font | `"Poppins", Arial, sans-serif` | Body text, navigation, UI elements |
| Button radius | `4px` | Primary buttons, form inputs |
| Icon circle radius | `50%` | Service icons, user avatar circles |
| Overlay | `rgba(0,0,0,0.7)` | Hero overlay, image overlays |

### Fallback placeholder images

Use `https://picsum.photos/seed/grandcourt-<n>/<w>/<h>` for deterministic placeholders:
- Hero slider: `seed/grandcourt-hero-1/1920/1080`, etc.
- Room images: `seed/grandcourt-room-1/600/400`, etc.
- Food menu: `seed/grandcourt-food-1/100/100`, etc.
- Blog images: `seed/grandcourt-blog-1/400/300`, etc.
- User avatars: `seed/grandcourt-user-1/200/200`, etc.

## Section structure (top-to-bottom)

1. **TopBar** — Dark background strip: site URL left, phone number + social icons (Twitter, Facebook, LinkedIn, Dribbble) right
2. **Navbar** — Logo "GrandCourt" left (Playfair Display bold), navigation links right (Home, Rooms, Dining & Bar, Amenities, Blog, About, Contact), sticky on scroll
3. **HeroSlider** — Full-width image carousel (4 slides), dark overlay, centered text (Playfair Display h1 heading + Poppins h2 sub-heading), two CTA buttons: "View Detail" (blue) and "Know More" (outlined), dot navigation
4. **ReservationBar** — Dark purple-gray (#302939) strip: Check-in date picker, Check-out date picker, Adults dropdown (1-5+), Children dropdown (1-5+), Search button (blue)
5. **Services** — 4-column grid, white background: circular icon containers (light gray bg) with blue icons, heading (Playfair Display), description text. Items: 24/7 Front Desk, Spa Suites, Transfer Services, Restaurant & Bar
6. **RoomsAndSuites** — Light grey (#f7f7f7) background, centered heading with 5-star icon row, Owl-style carousel of room cards: each card has room image, star rating row, room name, price ($ currency + amount + "/ per night"), amenities list (checkmark icons), "Book now!" button (blue). Rooms: Suite ($99), Double Room ($199), Family Room ($249), Classic Double ($150), Superior Double ($200), Superior Family ($299). "View all rooms" link at bottom.
7. **DiningAndBar** — White background, centered heading with 5-star row, split layout: left side has tabbed menu (Mains/Desserts/Drinks tabs), each tab shows 4 food items in list (image thumbnail + price + dish name + category). Right side has a large background image (cover photo).
8. **Blog** — White background, centered heading with 5-star row, split layout: left side has featured video/image with play button overlay, right side has 3 blog post entries (thumbnail image + date + title + category tag), "View all blog post" link at bottom right.
9. **Testimonials** — Light grey background, centered heading with 3-star row, 3-column grid: each card has circular user avatar, name, "Satisfied Customer" subtitle, blockquote with testimonial text.
10. **Newsletter** — Full-width background image with dark overlay, centered: 5-star row, heading "Sign Up for a Newsletter", sub-text, email input + "Subscribe" button (blue).
11. **Footer** — Dark purple-gray (#302939) background, 4-column layout: (1) Brand name + description + social icons, (2) Quick Links (Accommodation, Dining & Bar, Restaurants, Beach & Resorts), (3) Recent Blog Posts list, (4) Contact Information (address, phone, email, website). Bottom: copyright line with heart icon + Colorlib credit + "Demo Images: Unsplash" note. **Must replace with Component Dock credit + link to https://www.componentdock.com/**

## Requirements

### Feature: GrandCourt template behaviour

#### Scenario: TopBar renders site info and social links

Feature: GrandCourt TopBar

#### Scenario: TopBar displays contact information and social links

- **GIVEN** the page loads
- **THEN** the TopBar shows the site URL on the left
- **AND** the TopBar shows the phone number on the right
- **AND** the TopBar shows 4 social icon links (Twitter, Facebook, LinkedIn, Dribbble)

#### Scenario: Navbar renders with logo and navigation links

Feature: GrandCourt Navbar

#### Scenario: Navbar displays logo and navigation

- **GIVEN** the page loads
- **THEN** the navbar shows "GrandCourt" logo text in Playfair Display font
- **AND** the navbar shows 7 navigation links: Home, Rooms, Dining & Bar, Amenities, Blog, About, Contact
- **AND** the Home link is visually active

#### Scenario: Navbar becomes sticky on scroll

- **GIVEN** the user scrolls past the TopBar
- **THEN** the navbar should stick to the top of the viewport

#### Scenario: HeroSlider displays carousel with CTA buttons

Feature: GrandCourt HeroSlider

#### Scenario: Hero slider shows slides with text and buttons

- **GIVEN** the page loads
- **THEN** the hero slider displays a full-width background image
- **AND** the slider shows a dark overlay on the image
- **AND** the slider shows an h2 sub-heading in Poppins font
- **AND** the slider shows an h1 heading in Playfair Display font
- **AND** the slider shows a "View Detail" button with blue (#4586FF) background
- **AND** the slider shows a "Know More" button with outlined style

#### Scenario: Hero slider navigation dots

- **GIVEN** the page loads
- **THEN** the slider shows 4 navigation dots below the buttons
- **AND** clicking a dot navigates to the corresponding slide

#### Scenario: ReservationBar renders booking form

Feature: GrandCourt ReservationBar

#### Scenario: Reservation bar shows date pickers and guest selectors

- **GIVEN** the page loads
- **THEN** the reservation bar displays with dark (#302939) background
- **AND** it shows a "Check-in" date picker field
- **AND** it shows a "Check-out" date picker field
- **AND** it shows an "Adults" dropdown with options 1-5+
- **AND** it shows a "Children" dropdown with options 1-5+
- **AND** it shows a blue "Search" button

#### Scenario: Services section displays 4 service cards

Feature: GrandCourt Services

#### Scenario: Services section shows 4 service items

- **GIVEN** the page loads
- **THEN** the Services section shows 4 cards in a row
- **AND** each card has a circular icon container with a blue icon
- **AND** each card has a heading: "24/7 Front Desk", "Spa Suites", "Transfer Services", "Restaurant & Bar"
- **AND** each card has a description paragraph below the heading

#### Scenario: RoomsAndSuites section displays room carousel

Feature: GrandCourt RoomsAndSuites

#### Scenario: Rooms section shows heading with star icons

- **GIVEN** the page loads
- **THEN** the Rooms section shows a centered heading "Rooms & Suites"
- **AND** the heading has 5 gold (#F7AF1D) star icons above it
- **AND** the section has a light grey (#f7f7f7) background

#### Scenario: Rooms section shows carousel of room cards

- **GIVEN** the page loads
- **THEN** the carousel shows at least 6 room cards
- **AND** each room card shows an image
- **AND** each room card shows star rating icons
- **AND** each room card shows the room name (e.g., "Suite", "Double Room")
- **AND** each room card shows a price with currency symbol and "/ per night"
- **AND** each room card shows a list of amenities with checkmark icons
- **AND** each room card shows a "Book now!" button

#### Scenario: Rooms section shows "View all rooms" link

- **GIVEN** the page loads
- **THEN** there is a "View all rooms" link with an arrow icon at the bottom

#### Scenario: DiningAndBar section displays tabbed menu

Feature: GrandCourt DiningAndBar

#### Scenario: Dining section shows tabbed menu

- **GIVEN** the page loads
- **THEN** the Dining section shows a centered heading "Dining & Bar"
- **AND** the section shows 3 tabs: "Mains", "Desserts", "Drinks"
- **AND** the "Mains" tab is active by default

#### Scenario: Each tab shows 4 food items

- **GIVEN** the "Mains" tab is active
- **THEN** 4 food items are displayed in a list
- **AND** each food item shows a thumbnail image
- **AND** each food item shows a price (e.g., "$25.99")
- **AND** each food item shows a dish name
- **AND** each food item shows a category description

#### Scenario: Tab switching works

- **GIVEN** the user clicks the "Desserts" tab
- **THEN** the Desserts tab becomes active
- **AND** the food items update to show dessert dishes

#### Scenario: Blog section displays posts with featured video

Feature: GrandCourt Blog

#### Scenario: Blog section shows layout with video and posts

- **GIVEN** the page loads
- **THEN** the Blog section shows a centered heading "Recent Blog"
- **AND** the left side shows a featured video/image with a play button overlay
- **AND** the right side shows 3 blog post entries
- **AND** each blog post shows a thumbnail image
- **AND** each blog post shows a date (e.g., "January 14, 2018")
- **AND** each blog post shows a title
- **AND** each blog post shows a category tag (e.g., "Activities")

#### Scenario: Blog section shows "View all" link

- **GIVEN** the page loads
- **THEN** there is a "View all blog post" link with an arrow icon

#### Scenario: Testimonials section displays guest reviews

Feature: GrandCourt Testimonials

#### Scenario: Testimonials section shows 3 guest reviews

- **GIVEN** the page loads
- **THEN** the Testimonials section shows a centered heading "Our Satisfied Guests says"
- **AND** the heading has 3 gold star icons above it
- **AND** the section has a light grey background
- **AND** 3 testimonial cards are displayed in a row
- **AND** each card shows a circular user avatar image
- **AND** each card shows the user's name
- **AND** each card shows "Satisfied Customer" subtitle
- **AND** each card shows a blockquote with testimonial text

#### Scenario: Newsletter section displays signup form

Feature: GrandCourt Newsletter

#### Scenario: Newsletter section shows email signup

- **GIVEN** the page loads
- **THEN** the Newsletter section shows a full-width background image with dark overlay
- **AND** it shows a centered heading "Sign Up for a Newsletter"
- **AND** it shows sub-text "Get A 50% Discounts in every Rooms, Book now!"
- **AND** it shows an email input field
- **AND** it shows a blue "Subscribe" button

#### Scenario: Footer displays 4-column layout

Feature: GrandCourt Footer

#### Scenario: Footer shows brand info, links, and contact

- **GIVEN** the page loads
- **THEN** the Footer has a dark (#302939) background
- **AND** column 1 shows "GrandCourt" brand name + description + social icons
- **AND** column 2 shows Quick Links: Accommodation, Dining & Bar, Restaurants, Beach & Resorts
- **AND** column 3 shows Recent Blog Posts list
- **AND** column 4 shows Contact Information (address, phone, email, website)

#### Scenario: Footer shows copyright and Component Dock credit

- **GIVEN** the page loads
- **THEN** the Footer bottom shows a copyright line
- **AND** the Footer links to https://www.componentdock.com/ ("Component Dock")

#### Scenario: Go-to-top button

Feature: GrandCourt GoToTop

#### Scenario: Scroll-to-top button appears on scroll

- **GIVEN** the user scrolls down past the hero
- **THEN** a go-to-top button should appear
- **AND** clicking it should scroll the page back to the top

## Verification checklist

- [ ] TopBar renders with site URL, phone number, and social icons
- [ ] Navbar renders with logo and 7 navigation links; sticky on scroll
- [ ] HeroSlider shows 4 slides with h2/h1 headings, two CTA buttons, dot navigation
- [ ] ReservationBar renders with date pickers, guest dropdowns, search button on dark bg
- [ ] Services shows 4 cards with circular blue icons, headings, descriptions
- [ ] RoomsAndSuites shows heading with 5 stars, carousel of 6 room cards with image/rating/name/price/amenities/button, "View all rooms" link
- [ ] DiningAndBar shows 3 tabs (Mains/Desserts/Drinks), each with 4 food items, background image on right
- [ ] Blog shows heading, featured video/image left, 3 blog posts right with thumbnail/date/title/category, "View all" link
- [ ] Testimonials shows heading with 3 stars, 3 cards with circular avatar/name/subtitle/blockquote, light grey bg
- [ ] Newsletter shows background image, heading, sub-text, email input, subscribe button
- [ ] Footer shows 4 columns (brand/social, quick links, blog posts, contact), dark bg, Component Dock credit
- [ ] Go-to-top button appears on scroll and works
- [ ] All fonts load correctly: Playfair Display for headings, Poppins for body
- [ ] All design tokens match: primary #4586FF, accent #F96D00, gold #F7AF1D, footer #302939
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No references to ColorLib in any app file (comments included)
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] `public/CNAME` contains `grandcourt.free.componentdock.com`
- [ ] `homepage` in package.json is `https://grandcourt.free.componentdock.com`
