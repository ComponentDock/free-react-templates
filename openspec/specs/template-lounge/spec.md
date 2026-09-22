# Lounge — Hotel Landing Template

Recreation of ColorLib "Cozy" (https://colorlib.com/wp/template/cozy/)

## Purpose

A warm, boutique hotel landing page with hero carousel, reservation form, services tabs, room showcase, parallax conference section, restaurant menu, testimonials, blog, events, and Instagram gallery.

## Requirements

### Requirement: Navigation

Users SHALL be able to navigate the site via a sticky navbar with brand name, navigation links, and a Rooms dropdown menu.

#### Scenario: Desktop navigation

- **WHEN** the page loads
- **THEN** the navbar displays the brand "Lounge" and navigation links (Home, About, Rooms, Dining & Bar, Amenities, Booking, Blog, Contact)

#### Scenario: Mobile navigation

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** a mobile navigation menu opens with all links

#### Scenario: Rooms dropdown

- **WHEN** the user hovers over the Rooms link on desktop
- **THEN** a dropdown shows Superior Room Twin, Premier Suite, and Family Room options

#### Scenario: Scroll behavior

- **WHEN** the user scrolls down past 60px
- **THEN** the navbar background changes from transparent to dark

### Requirement: Hero Carousel

Users SHALL see a full-height hero carousel with auto-advancing slides.

#### Scenario: Slide display

- **WHEN** the page loads
- **THEN** the first slide is visible with heading "Welcome to Lounge — your seaside retreat"

#### Scenario: Auto-advance

- **WHEN** 5 seconds pass
- **THEN** the carousel advances to the next slide

#### Scenario: Slide indicators

- **WHEN** the user clicks a slide indicator
- **THEN** the carousel navigates to that slide

### Requirement: Reservation Form

Users SHALL be able to fill in a reservation form with check-in/out dates, guests, and room type.

#### Scenario: Form fields

- **WHEN** the reservation form renders
- **THEN** it displays Check-in, Check-out, Guests, and Room Type fields with a "Check Availability" button

#### Scenario: Form submission

- **WHEN** the user clicks "Check Availability"
- **THEN** the form submits without page reload

### Requirement: Services Section

Users SHALL see a tabbed services section with amenities.

#### Scenario: Default tab

- **WHEN** the services section loads
- **THEN** the "Master Bedrooms" tab is active with its description

#### Scenario: Tab switching

- **WHEN** the user clicks a different service tab
- **THEN** the corresponding service content is displayed

### Requirement: Room Showcase

Users SHALL see a horizontal scrollable list of room cards with images and prices.

#### Scenario: Room cards

- **WHEN** the rooms section loads
- **THEN** 4 room cards are displayed with names, prices, and descriptions

#### Scenario: Scroll navigation

- **WHEN** the user clicks the left/right scroll buttons
- **THEN** the room list scrolls horizontally

### Requirement: Parallax Conference

Users SHALL see a full-width parallax section for the conference center.

#### Scenario: Conference display

- **WHEN** the parallax section loads
- **THEN** it shows "Conference Centre" heading with a "View more details" button

### Requirement: Restaurant Menu

Users SHALL see a tabbed restaurant menu with food items.

#### Scenario: Default menu

- **WHEN** the menu section loads
- **THEN** the "Main" tab is active showing main course items

#### Scenario: Menu tab switching

- **WHEN** the user clicks "Dessert" or "Drinks" tab
- **THEN** the corresponding menu items are displayed

### Requirement: Testimonials

Users SHALL see guest testimonials with ratings and quotes.

#### Scenario: Testimonial display

- **WHEN** the testimonials section loads
- **THEN** 3 testimonial cards are displayed with names, origins, ratings, and quotes

### Requirement: Blog

Users SHALL see recent blog posts.

#### Scenario: Blog cards

- **WHEN** the blog section loads
- **THEN** 3 blog cards are displayed with images, titles, dates, and authors

### Requirement: Events

Users SHALL see upcoming events with date badges and action buttons.

#### Scenario: Event display

- **WHEN** the events section loads
- **THEN** event items are displayed with date badges, titles, descriptions, and "Join event" / "See details" buttons

### Requirement: Instagram Gallery

Users SHALL see an Instagram image gallery with hover effects.

#### Scenario: Gallery display

- **WHEN** the Instagram section loads
- **THEN** 5 images are displayed in a grid with hover overlay

### Requirement: Footer

Users SHALL see a footer with contact information and a Component Dock link.

#### Scenario: Footer columns

- **WHEN** the footer renders
- **THEN** it displays 4 columns: brand info, opening hours, contact info, and newsletter

#### Scenario: Component Dock link

- **WHEN** the footer renders
- **THEN** it shows "More templates at Component Dock" linking to https://www.componentdock.com/
