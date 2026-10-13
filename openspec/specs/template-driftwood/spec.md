# Template: Driftwood (Travel Agency)

## Purpose

Driftwood is a single-page travel agency landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Pacific" free template (source:
https://colorlib.com/wp/template/pacific/), built under a DIFFERENT name
(**Driftwood**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 multi-section travel agency page with a dark
navbar, full-height hero with parallax background, tabbed search bar, services
grid, destination carousel, destination cards, parallax video section, about
split, testimonial carousel, and a 4-column footer over a parallax background.
Fonts: Poppins (body) + Arizonia (cursive subheadings). Brand accent: orange-red
`#f15d30`. Service card accent colors: blue `#1089ff`, teal `#048998`,
cyan `#00a8b5`, red `#ff5959`.

**Preview URL:** https://preview.colorlib.com/theme/pacific/

## Design tokens (extracted from live preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand accent | `#f15d30` | Subheading text, service card overlays, CTA accent |
| Service color 1 | `#1089ff` | Activities card overlay |
| Service color 2 | `#048998` | Travel Arrangements card overlay |
| Service color 3 | `#00a8b5` | Private Guide card overlay |
| Service color 4 | `#ff5959` | Location Manager card overlay |
| Hero overlay | `#000000` at 30% opacity | Semi-transparent dark overlay on hero bg |
| Navbar bg | `#343a40` (Bootstrap dark) | Dark navigation bar |
| Button primary | `#007bff` (Bootstrap blue) | Form submit, CTA buttons |
| Body font | Poppins, sans-serif | All body text, headings |
| Display font | Arizonia, cursive | Subheading text (hero, sections) |
| Button radius | `0.25rem` (4px) | Bootstrap default rounded buttons |
| Testimonial overlay | Same as hero (black 30%) | Parallax bg sections |
| Footer text | `rgba(0,0,0,0.5)` | Footer link color |
| Footer heading | `#000000` | Footer widget titles |

## Section order (from live preview DOM)

1. **Navbar** — dark bg, brand "Driftwood" (was "Pacific Travel Agency"),
   nav links: Home, About, Destination, Hotel, Blog, Contact. Fixed position,
   transitions to `.scrolled` state.
2. **Hero** — full-height (`js-fullheight`) parallax background image,
   black overlay at 30% opacity. Left-aligned content (col-md-7):
   Arizonia subheading "Welcome to Driftwood", Poppins h1 "Discover Your
   Favorite Place with Us", description paragraph, circular video play button
   (fa-play icon).
3. **Search Bar** — pill-shaped container overlapping hero bottom. Two tabs
   ("Search Tour" / "Hotel") using nav-pills. Each tab has a form row:
   Destination (text input), Check-in date, Check-out date, Price Limit
   (select dropdown), Search button (btn-primary).
4. **Services** — split layout. Left (col-md-6, order-md-last): subheading
   "Welcome to Driftwood", h2 "It's time to start your adventure",
   description paragraphs, "Search Destination" CTA button. Right (col-md-6):
   2×2 grid of service cards (Activities, Travel Arrangements, Private Guide,
   Location Manager). Each card has a background image, colored overlay, icon,
   title, and description.
5. **Select Destination** — parallax background image, centered heading
   "Select Your Destination". Horizontal owl-carousel of destination cards
   (Philippines 8 Tours, Canada 2 Tours, Thailand 5 Tours, Australia 5 Tours,
   Greece 7 Tours). Each card: bg image, text overlay with name + tour count.
6. **Tour Destinations** — white section. Centered heading "Tour Destination".
   2×3 grid of destination cards. Each card: background image with price badge
   ($550/person), tour duration (e.g. "8 Days Tour"), title, location with
   map marker, amenity icons (shower, bed, mountain/beach).
7. **Video Section** — full-width parallax background image with dark overlay.
   Centered circular play button (fa-play).
8. **About** — split layout. Left: background image (with negative margin
   box-shadow). Right: subheading "About Us", h2 "Make Your Tour Memorable
   and Safe With Us", description, "Book Your Destination" CTA button.
9. **Testimonials** — parallax background image with dark overlay. Centered
   heading "Tourist Feedback". Horizontal carousel of testimonial cards.
   Each card: 5-star rating, quote text, user avatar + name + position.
10. **Footer** — 4-column layout over parallax background image.
    Col 1: "About" text + social icons (Twitter, Facebook, Instagram).
    Col 2: "Information" link list. Col 3: "Experience" link list.
    Col 4: "Have a Questions?" with address, phone, email.
    Bottom row: copyright with "Component Dock" link.

## Requirements

### Feature: Driftwood Travel Agency Landing Page

#### Scenario: Navbar displays on page load

- **GIVEN** the user opens the Driftwood page
- **THEN** a dark navigation bar is visible at the top
- **AND** the brand text reads "Driftwood" with a subtitle "Travel Agency"
- **AND** navigation links are present: Home, About, Destination, Hotel, Blog, Contact

#### Scenario: Hero section fills viewport height

- **GIVEN** the user opens the Driftwood page
- **THEN** the hero section fills the full viewport height
- **AND** a background image is displayed with a dark overlay
- **AND** the subheading "Welcome to Driftwood" is shown in cursive font
- **AND** the headline "Discover Your Favorite Place with Us" is displayed
- **AND** a circular video play button is visible

#### Scenario: Search bar has tabbed interface

- **GIVEN** the user views the search bar section
- **THEN** two tabs are visible: "Search Tour" and "Hotel"
- **AND** the "Search Tour" tab is active by default
- **AND** each tab contains fields: Destination, Check-in date, Check-out date, Price Limit
- **AND** a "Search" button is present in each tab form

#### Scenario: Services section shows 4 service cards

- **GIVEN** the user scrolls to the services section
- **THEN** a heading "It's time to start your adventure" is displayed
- **AND** 4 service cards are shown in a 2×2 grid
- **AND** the cards are: Activities, Travel Arrangements, Private Guide, Location Manager
- **AND** each card has a background image with a colored overlay and an icon

#### Scenario: Destination carousel displays travel destinations

- **GIVEN** the user scrolls to the select destination section
- **THEN** a parallax background is visible behind the section
- **AND** the heading reads "Select Your Destination"
- **AND** a horizontal carousel shows at least 5 destination cards
- **AND** each card displays a destination name and tour count

#### Scenario: Tour destination grid shows 6 destination cards

- **GIVEN** the user scrolls to the tour destinations section
- **THEN** the heading reads "Tour Destination"
- **AND** a grid of 6 destination cards is displayed
- **AND** each card shows an image, price per person, tour duration, title, location, and amenity icons

#### Scenario: Video play section has parallax background

- **GIVEN** the user scrolls to the video section
- **THEN** a full-width parallax background image is displayed
- **AND** a centered circular play button is visible

#### Scenario: About section has split layout

- **GIVEN** the user scrolls to the about section
- **THEN** a split layout is displayed: image on the left, text on the right
- **AND** the subheading reads "About Us"
- **AND** the heading reads "Make Your Tour Memorable and Safe With Us"
- **AND** a "Book Your Destination" CTA button is present

#### Scenario: Testimonials section shows user feedback

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a parallax background is visible
- **AND** the heading reads "Tourist Feedback"
- **AND** a carousel of testimonial cards is displayed
- **AND** each card shows a star rating, quote, user avatar, name, and position

#### Scenario: Footer contains 4 columns with contact info

- **GIVEN** the user scrolls to the footer
- **THEN** 4 columns are displayed: About, Information, Experience, Have a Questions
- **AND** the About column includes social media icons
- **AND** the contact column shows address, phone, and email
- **AND** the copyright line links to Component Dock

#### Scenario: Navbar transitions on scroll

- **GIVEN** the user scrolls down the page
- **THEN** the navbar applies a scrolled state class
- **AND** the navbar remains fixed at the top of the viewport

#### Scenario: Search form tabs switch content

- **GIVEN** the search bar is visible
- **WHEN** the user clicks the "Hotel" tab
- **THEN** the Hotel search form is displayed
- **AND** the Search Tour form is hidden

## Verification checklist

- [ ] Navbar: dark bg, brand with subtitle, 6 nav links, fixed position
- [ ] Hero: full-height, parallax bg image, overlay, Arizonia subheading, Poppins h1, video button
- [ ] Search bar: pill container, 2 tabs (Search Tour / Hotel), 5 fields per tab, Search button
- [ ] Services: split layout (text left, 2×2 card grid right), 4 cards with bg images + colored overlays + icons
- [ ] Select Destination: parallax bg, heading, horizontal carousel, 5+ destination cards
- [ ] Tour Destinations: white section, 2×3 grid, 6 cards with image/price/days/title/location/amenities
- [ ] Video section: full-width parallax bg, centered play button
- [ ] About: split layout (image left, text right), subheading, heading, CTA button
- [ ] Testimonials: parallax bg, heading, carousel, star ratings, user info
- [ ] Footer: 4 columns, social icons, links, contact info, copyright with Component Dock link
- [ ] Fonts: Poppins (body) loaded via Google Fonts, Arizonia (cursive subheadings) loaded via Google Fonts
- [ ] Brand accent: #f15d30 used for subheadings and service card overlays
- [ ] All images replaced with picsum.photos placeholders
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains driftwood.free.componentdock.com
- [ ] homepage field set to https://driftwood.free.componentdock.com
- [ ] 100% test coverage
