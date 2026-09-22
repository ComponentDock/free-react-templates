# Template: Cayo (Hotel)

## Purpose

Recreation of ColorLib "Islagrande" hotel template.

- Source slug: `islagrande`
- Source URL: https://colorlib.com/wp/template/islagrande/
- Preview URL: https://preview.colorlib.com/theme/islagrande/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- Category: Hotel / Resort / Reservation

## Design tokens (extracted from preview)

### Colors

- Primary brand: `#78d5ef` (sky blue — headings, highlights, star ratings)
- CTA/Accent: `#F96D00` (orange — buttons, prices, links)
- Nav hover: `#fb929e` (pink — nav link hover)
- Dark bg: `#000` / `#19191A` (navbar, footer, parallax)
- Text primary: `#19191A` (headings)
- Body text: `#777C81` (muted gray)
- Light background: `#F9F8F6` (cream/off-white sections)
- White: `#ffffff` (hero text, button text, footer text)

### Typography

- Headings font: `"Poppins", sans-serif` (weight 600-700)
- Accent/serif font: `"Playfair Display", serif` (brand logo, subheadings)
- Body font: `"Poppins", sans-serif` (weight 300-400)

### Buttons

- Primary CTA: orange `#F96D00` bg, white text, letter-spacing 2px, flat (no border-radius)
- Reserve buttons: same style

### Sections

1. Navbar: dark bg, brand "Cayo" (Playfair Display), nav links with pink hover
2. Hero: split layout — left text + CTA, right image slider with overlay
3. Booking Form: dark bg, check-in/out, room type, adults/children, reserve button
4. Services: 4-column grid — 24/7 Front Desk, Restaurant Bar, Transfer Services, Spa Suites
5. Rooms: 6 room cards — Suite, Family, Deluxe, Classic, Superior, Luxe with star ratings
6. Restaurant: tabbed menu — Main Dish, Drinks, Desserts — circular images, stars, prices
7. Counter: parallax bg — 50 Hotel Branches, 20000 Happy Guests, 100 Rooms, 100 Destinations
8. About: split — video preview with play button, social icons, about text
9. Testimonials: carousel with avatar, stars, quote, navigation
10. Blog: 3-column cards with date, author, comments, excerpt
11. Footer: dark bg — brand, Company links, Services links, Contact info

## Requirements

### Requirement: Navbar displays brand and navigation links

The navbar SHALL display the brand logo "Cayo" and navigation links: Home, About, Amenities, Rooms, Restaurant, Blog, Contact, plus a "Book Now" CTA button.

#### Scenario: Navbar renders on desktop

- **WHEN** the page loads
- **THEN** the navbar shows the brand "Cayo"
- **AND** navigation links are visible: Home, About, Amenities, Rooms, Restaurant, Blog, Contact
- **AND** a "Book Now" button/link is visible

#### Scenario: Navbar toggles mobile menu

- **WHEN** the user clicks the hamburger menu icon
- **THEN** the mobile menu opens
- **AND** the menu shows all navigation links
- **AND** clicking a navigation link closes the menu

### Requirement: Hero section displays hotel heading with image slider

The hero SHALL display a split layout with heading text and "Make A Booking" CTA on the left, and an image slider with navigation arrows on the right.

#### Scenario: Hero renders heading

- **WHEN** the page loads
- **THEN** the hero shows "Welcome to Cayo Hotel" subheading
- **AND** "A Perfect Place To Stay" main heading
- **AND** "Make A Booking" CTA link

#### Scenario: Hero slider navigates between slides

- **WHEN** the user clicks the next arrow
- **THEN** the next slide is displayed
- **AND** the heading text updates

### Requirement: Booking form allows room reservation

The booking form SHALL provide check-in date, check-out date, room type select, adults select, children select, and a Reserve button.

#### Scenario: Booking form renders all fields

- **WHEN** the page loads
- **THEN** check-in and check-out date inputs are visible
- **AND** room type select shows: Suite, Family, Deluxe, Classic, Superior, Luxe
- **AND** adults and children selects are visible
- **AND** Reserve button is visible

### Requirement: Services section displays amenities

The services section SHALL display 4 service cards: 24/7 Front Desk, Restaurant Bar, Transfer Services, Spa Suites.

#### Scenario: Services renders all cards

- **WHEN** the page loads
- **THEN** all 4 service titles are visible
- **AND** each has a description and Read More link

### Requirement: Rooms section displays room types with prices

The rooms section SHALL display 6 room cards with images, star ratings, prices, and Reserve buttons.

#### Scenario: Rooms renders all 6 rooms

- **WHEN** the page loads
- **THEN** Suite ($100), Family ($140), Deluxe ($130), Classic ($200), Superior ($120), Luxe ($500) are visible
- **AND** each has a star rating and Reserve A Room button

### Requirement: Restaurant section displays tabbed menu

The restaurant section SHALL display a tabbed interface with Main Dish, Drinks, and Desserts tabs.

#### Scenario: Restaurant defaults to Main Dish tab

- **WHEN** the page loads
- **THEN** Main Dish tab is active
- **AND** Grilled Salmon, Filet Mignon, Pasta Primavera are visible

#### Scenario: Restaurant switches tabs

- **WHEN** the user clicks the Drinks tab
- **THEN** drink menu items are displayed
- **AND** Main Dish items are hidden

### Requirement: Counter section displays statistics

The counter section SHALL display 4 statistics with parallax background: 50 Hotel Branches, 20000 Happy Guests, 100 Rooms, 100 Destinations.

### Requirement: About section with video preview

The about section SHALL display a video preview image with play button, heading "Watch Our Video", description text, and social media links.

### Requirement: Testimonials carousel

The testimonials section SHALL display a carousel of guest reviews with avatars, star ratings, quotes, and navigation arrows.

### Requirement: Blog section displays recent posts

The blog section SHALL display 3 blog post cards with images, dates, authors, comment counts, and excerpts.

### Requirement: Footer with brand and links

The footer SHALL display the "Cayo" brand, Company links, Services links, Contact info (address, phone, email), social media icons, and a copyright notice linking to Component Dock.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text is "Component Dock"
