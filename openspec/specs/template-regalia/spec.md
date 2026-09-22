## Purpose

Recreate the ColorLib "Luxury Hotel" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Regalia". The original is a luxury hotel landing page with hero slider, reservation bar, services, rooms showcase, dining section, blog, testimonials, newsletter, and footer.

Source: https://colorlib.com/wp/template/luxury-hotel/
Preview: Unavailable (404). Screenshot used as sole reference.

### Design Tokens

- Brand color: Dark olive green `#2c3e2d`
- Accent color: Warm gold `#b8860b`
- Background primary: White `#ffffff`
- Background secondary: Light warm gray `#f9f7f4`
- Text body: Dark gray `#555555`
- Font heading: Cormorant Garamond (serif)
- Font body: Lato (sans-serif)

## Requirements

### Requirement: TopBar displays contact information and social links

The template SHALL display a top bar with phone number, email, and social media icon links.

#### Scenario: Contact info visible

- **WHEN** the page loads
- **THEN** the top bar displays the phone number "+1 234 567 890"
- **AND** the top bar displays the email "info@regalia.com"

#### Scenario: Social links present

- **WHEN** the page loads
- **THEN** the top bar shows social media icon links for Twitter, Facebook, Instagram, and LinkedIn

### Requirement: Navbar displays brand and navigation links

The template SHALL display a sticky navbar with the "Regalia" brand name and navigation links.

#### Scenario: Brand name visible

- **WHEN** the page loads
- **THEN** the navbar displays "Regalia" as the brand

#### Scenario: Navigation links present

- **WHEN** the page loads
- **THEN** navigation links for Home, Rooms, Dining, Amenities, Blog, About, and Contact are visible

#### Scenario: Mobile menu toggle

- **WHEN** user clicks the mobile menu toggle button
- **THEN** the mobile menu expands
- **AND** the aria-expanded attribute changes to true

#### Scenario: Mobile menu close

- **WHEN** the mobile menu is open and user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: HeroSlider displays hero section with CTA

The template SHALL display a full-width hero section with heading, subtitle, and call-to-action button.

#### Scenario: Hero content visible

- **WHEN** the page loads
- **THEN** the heading "Experience Luxury Living" is visible
- **AND** the subtitle is visible
- **AND** the "Book Your Stay" CTA button is visible

#### Scenario: CTA links to reservation

- **WHEN** user clicks the "Book Your Stay" button
- **THEN** the page scrolls to the reservation section

### Requirement: ReservationBar displays booking form

The template SHALL display a reservation form with check-in/check-out date fields and a book button.

#### Scenario: Form fields visible

- **WHEN** the page loads
- **THEN** check-in date, check-out date, and guest count fields are visible
- **AND** the "Book Now" button is visible

### Requirement: Services displays 4 service cards

The template SHALL display a services section with 4 cards showing icons and descriptions.

#### Scenario: Service cards visible

- **WHEN** the page loads
- **THEN** service cards for Room Service, Restaurant, Spa & Wellness, and Swimming Pool are displayed

### Requirement: Rooms displays 3 room cards with prices

The template SHALL display a rooms section with 3 cards showing images, titles, and prices.

#### Scenario: Room cards visible

- **WHEN** the page loads
- **THEN** room cards for Deluxe Suite ($299), Executive Room ($199), and Garden Villa ($449) are displayed

#### Scenario: Book button present

- **WHEN** user views a room card
- **THEN** a "Book Now" button is available

### Requirement: DiningBar displays dining section

The template SHALL display a dining section with background image, heading, and description.

#### Scenario: Dining content visible

- **WHEN** the page loads
- **THEN** the heading "Fine Dining Experience" is visible
- **AND** a "View Menu" link is present

### Requirement: Blog displays 3 blog post cards

The template SHALL display a blog section with 3 post cards.

#### Scenario: Blog posts visible

- **WHEN** the page loads
- **THEN** 3 blog post cards with titles and dates are displayed

### Requirement: Testimonials displays guest reviews

The template SHALL display a testimonials section with quotes and author information.

#### Scenario: Testimonials visible

- **WHEN** the page loads
- **THEN** testimonial quotes from Sarah Johnson, Michael Chen, and Emma Williams are displayed
- **AND** 5-star ratings are shown for each testimonial

### Requirement: Newsletter displays email signup form

The template SHALL display a newsletter section with email input and subscribe button.

#### Scenario: Form visible

- **WHEN** the page loads
- **THEN** an email input and "Subscribe" button are visible

#### Scenario: Form submission clears input

- **WHEN** user types an email and clicks Subscribe
- **THEN** the email input is cleared

### Requirement: Footer displays content and Component Dock link

The template SHALL display a footer with 4 columns and a link to componentdock.com.

#### Scenario: Footer columns visible

- **WHEN** the page loads
- **THEN** the footer shows brand info, quick links, recent posts, and contact information

#### Scenario: Component Dock link present

- **WHEN** the page loads
- **THEN** the footer contains a "Component Dock" link to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: App renders all sections and sets title

The template SHALL render all sections and set the document title.

#### Scenario: All sections render

- **WHEN** the page loads
- **THEN** the navigation, main content, and footer sections render without errors

#### Scenario: Document title set

- **WHEN** the page loads
- **THEN** the document title is "Regalia — Luxury Hotel Template"
