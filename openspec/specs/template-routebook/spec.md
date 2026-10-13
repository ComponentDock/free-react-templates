# Template: Routebook (Directory / Local Services)

## Purpose

Recreation of ColorLib **Directing** — a local services directory / listing template.
- **Source slug:** `directing`
- **Preview URL:** https://preview.colorlib.com/theme/directing/
- **ColorLib page:** https://colorlib.com/wp/template/directing/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** `routebook` (apps/routebook, @free-react-templates/routebook)

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| **Primary brand color** | `#f03250` | Red — used on primary buttons, accent icons, testimonial quote |
| **Secondary accent** | `#f09d17` / `#E9AA13` | Orange/amber — star ratings, hover states |
| **Hero bg** | `img/hero/hero-bg.jpg` | Full-width background image overlay |
| **Work section bg** | `#f9f9f9` | Light gray |
| **Newsletter section bg** | `#f9f9f9` | Light gray |
| **Header bg** | transparent (default) / `#ffffff` (scrolled) | Fixed header with shadow on scroll |
| **Body text** | `#323232` | Dark charcoal |
| **Secondary text** | `#707070` / `#777C81` | Muted gray |
| **Font family** | `"Cairo", sans-serif` | Google Font |
| **Primary button** | `background: #f03250`, `color: #ffffff`, `border-radius: 2px`, `padding: 12px 30px`, `font-weight: 700`, `text-transform: uppercase` | Sharp corners, minimal radius |
| **Login button** | `border: 1px solid #ffffff`, `border-radius: 50%` | Circular icon button |
| **Listing card radius** | `5px` | Rounded corners on cards |
| **Section heading** | `h2` in section-title divs | Centered, bold |
| **Category icons** | Flaticon food icons (fork, kebab, food truck, croissant, take-away, delivery) | Tab navigation icons |
| **Footer** | Dark background, about/address/social columns | Standard footer layout |

## Visual design notes (from screenshot)

- Dark hero section with background image overlay, large white heading "Discover The Best Services Near You", search form with category/location dropdowns, red "Search" button
- White categories section with 5 icon+label items in a row (Food & Drink, Restaurant, Hotels, Beauty & Spa, Shopping)
- Tabbed "Most Searched Services" section with 6 food category tabs, each showing 3 listing cards (image, title, price, tags)
- "How Does It Work" section with 3 step cards on light gray bg (Explore Listing, Making Appointments, trusted info)
- "Top Featured Locations" section with 4 location cards (Washington D.C, Chicago, San Antonio, Los Angeles) showing city images
- Testimonials section with quote icon and user reviews
- Blog/News section with 3 post cards
- Newsletter subscription area
- Dark footer with logo, address, social links

## Requirements

### Header / Navigation

#### Scenario: Navbar displays logo and navigation links

- **GIVEN** the user loads the page
- **WHEN** the header renders
- **THEN** the logo "Routebook" is visible on the left
- **AND** navigation links "Home", "About", "Listings", "Blog", "Contact" are shown
- **AND** a red "Add Listing" primary button appears
- **AND** a circular login icon button appears

#### Scenario: Header becomes fixed on scroll

- **GIVEN** the user scrolls past the hero
- **WHEN** the header enters fixed position
- **THEN** it gains a white background with box shadow
- **AND** all nav link colors change from white to dark

### Hero Section

#### Scenario: Hero renders with search form

- **GIVEN** the user is on the homepage
- **WHEN** the hero section loads
- **THEN** a full-width background image is displayed
- **AND** the heading "Discover The Best Services Near You" is centered in white
- **AND** a search form with two dropdowns (category, location) is shown
- **AND** a red "Search" button is visible

#### Scenario: Hero search form has category options

- **GIVEN** the hero search form is visible
- **WHEN** the user clicks the category dropdown
- **THEN** options for service categories are displayed

### Categories Section

#### Scenario: Categories section shows popular categories

- **GIVEN** the user scrolls to the categories section
- **WHEN** the section renders
- **THEN** the heading "Most Popular Categories" is displayed
- **AND** 5 category items are shown in a row: Food & Drink, Restaurant, Hotels, Beauty & Spa, Shopping
- **AND** each category has an icon and label

### Most Searched / Listings Section

#### Scenario: Tabbed listings section renders

- **GIVEN** the user scrolls to the most-searched section
- **WHEN** the section loads
- **THEN** the heading "The Most Searched Services" is displayed
- **AND** 6 tab navigation items are shown with food icons
- **AND** the first tab is active by default
- **AND** 3 listing cards are visible in the active tab

#### Scenario: Listing cards display correctly

- **GIVEN** a listing card is rendered
- **WHEN** the user views it
- **THEN** it shows a background image
- **AND** a category tag label in the top-left
- **AND** heart/bookmark icon buttons in the top-right
- **AND** below the image: title, star rating, price range, location/address
- **AND** an "Open Now" or status indicator

#### Scenario: Clicking a tab switches content

- **GIVEN** the user is on the most-searched section
- **WHEN** the user clicks a different tab
- **THEN** the listing cards update to show that category's results
- **AND** the clicked tab becomes active

### How It Works Section

#### Scenario: Work section shows steps

- **GIVEN** the user scrolls to the how-it-works section
- **WHEN** the section renders on light gray background
- **THEN** the heading "How Does It Work" is centered
- **AND** 3 step cards are displayed: "Explore Listing", "Make Appointments", "Get Services"
- **AND** each card has an icon, title, and description text

### Featured Locations Section

#### Scenario: Location cards render

- **GIVEN** the user scrolls to the locations section
- **WHEN** the section renders
- **THEN** the heading "Top Featured Locations" is displayed
- **AND** 4 location cards are shown in a grid: Washington D.C, Chicago, San Antonio, Los Angeles
- **AND** each card shows a city image with a label overlay

### Testimonials Section

#### Scenario: Testimonials render with user quotes

- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the section renders on a background image
- **THEN** the heading "Trusted By Over 5000+ Users" is displayed
- **AND** testimonial cards show user name and quote text
- **AND** a large decorative quote icon is visible

### Blog / News Section

#### Scenario: News posts render

- **GIVEN** the user scrolls to the news section
- **WHEN** the section renders
- **THEN** the heading "News Post" is displayed
- **AND** 3 blog post cards are shown with image, date, title, and excerpt

### Newsletter Section

#### Scenario: Newsletter form renders

- **GIVEN** the user scrolls to the newsletter section
- **WHEN** the section renders on light gray background
- **THEN** the heading "Subscribe Newsletter" is displayed
- **AND** an email input field is shown
- **AND** a red "Subscribe" button is visible

### Footer

#### Scenario: Footer renders with links and Component Dock

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer renders on dark background
- **THEN** the Routebook logo/brand is shown
- **AND** address and social icon links are displayed
- **AND** a "Made with Component Dock" or equivalent link to https://www.componentdock.com/ is present

## Verification checklist

- [ ] Header: logo, nav links, Add Listing button, login icon, fixed-on-scroll behavior
- [ ] Hero: background image, heading, search form with dropdowns, search button
- [ ] Categories: 5 items with icons, centered heading
- [ ] Most Searched: 6 tabs with food icons, tab switching, listing cards with image/tag/rating/price
- [ ] How It Works: 3 step cards on gray bg
- [ ] Featured Locations: 4 city cards in grid
- [ ] Testimonials: background image, user quotes, decorative quote icon
- [ ] News: 3 blog post cards
- [ ] Newsletter: email input, subscribe button
- [ ] Footer: dark bg, logo, address, social links, Component Dock link
- [ ] Font: Cairo (Google Fonts)
- [ ] Brand color: #f03250 (red) on buttons and accents
- [ ] No ColorLib references in app code
- [ ] Tests: 100% coverage
- [ ] Build passes
