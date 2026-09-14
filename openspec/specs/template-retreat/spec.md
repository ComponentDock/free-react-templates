# Spec: Retreat

Recreation of ColorLib **Roberto** (https://colorlib.com/wp/template/roberto/).

## Purpose

Provide a premium hotel and resort landing page with top bar, navbar, hero, booking form, about, services, rooms, testimonials, gallery, blog, CTA, partners, and footer sections.

## Design Tokens

- Brand: #1cc3b2 (teal)
- Dark header: #0e2737 (navy)
- Body text: #2a303b
- Secondary text: #636a76
- Font: Poppins
- Button: border-radius 2px, teal bg, white text

## Requirements

### Requirement: TopBar displays contact information and social links

The top bar SHALL display phone number, email address, and social media icons (Facebook, Twitter, Instagram).

#### Scenario: Contact info renders

- **WHEN** the page loads
- **THEN** the TopBar shows phone "(123) 456-789-1230" and email "info@retreat.com"

#### Scenario: Social icons render

- **WHEN** the page loads
- **THEN** the TopBar shows Facebook, Twitter, and Instagram icons

### Requirement: Navbar provides navigation and booking CTA

The navbar SHALL display the "Retreat" logo, navigation links (Home, Rooms, About, Pages, News, Contact), a search icon, and a "Book Now" call-to-action button.

#### Scenario: Logo and nav links render

- **WHEN** the page loads
- **THEN** the navbar shows the "Retreat" logo
- AND shows links: Home, Rooms, About, Pages, News, Contact

#### Scenario: Book Now button renders

- **WHEN** the page loads
- **THEN** a "Book Now" button is visible

### Requirement: Hero section displays welcome message and CTA

The hero SHALL display a full-width background image with dark overlay, a "Hotel & Resort" subtitle, the heading "Welcome To Retreat", and a "Discover Now" call-to-action button.

#### Scenario: Hero heading renders

- **WHEN** the page loads
- **THEN** the hero shows "Welcome To Retreat"

#### Scenario: Hero subtitle renders

- **WHEN** the page loads
- **THEN** the hero shows "Hotel & Resort"

#### Scenario: Discover Now button renders

- **WHEN** the page loads
- **THEN** a "Discover Now" button is visible

### Requirement: BookingForm allows date and guest selection

The booking form SHALL provide check-in and check-out date inputs, room count, adult count, and children count dropdowns, and a "Check Availability" submit button.

#### Scenario: Date inputs render

- **WHEN** the page loads
- **THEN** "Check In" and "Check Out" date inputs are present

#### Scenario: Guest dropdowns render

- **WHEN** the page loads
- **THEN** "Room", "Adults", and "Children" dropdowns are present

#### Scenario: Submit button renders

- **WHEN** the page loads
- **THEN** a "Check Availability" button is visible

### Requirement: About section displays hotel information

The about section SHALL display a heading, a description about the hotel group, and the manager name "Michen Taylor".

#### Scenario: Heading renders

- **WHEN** the page loads
- **THEN** the about section shows "Welcome to" text

#### Scenario: Manager name renders

- **WHEN** the page loads
- **THEN** "Michen Taylor" is displayed

#### Scenario: Description renders

- **WHEN** the page loads
- **THEN** the text "340 hotels worldwide" is displayed

### Requirement: Services section displays 5 service items

The services section SHALL display 5 service items: Transport, Travel Service, Spa & Relaxation, Restaurant, Bar & Drinks.

#### Scenario: All services render

- **WHEN** the page loads
- **THEN** all 5 service labels are visible

### Requirement: Rooms section displays room cards with pricing

The rooms section SHALL display at least 2 room cards, each with a name, price per day, and a "View Details" button.

#### Scenario: Room cards render

- **WHEN** the page loads
- **THEN** "Premium King Room" and "Deluxe Suite" are displayed
- AND prices "$400" and "$250" are shown

#### Scenario: View Details buttons render

- **WHEN** the page loads
- **THEN** at least 2 "View Details" buttons are present

### Requirement: Testimonials section displays guest feedback

The testimonials section SHALL display a testimonial quote, a 5-star rating, and the author name "Sarah Mitchell".

#### Scenario: Quote and author render

- **WHEN** the page loads
- **THEN** a testimonial quote about a "wonderful stay" is displayed
- AND "Sarah Mitchell" is shown as the author

#### Scenario: Section heading renders

- **WHEN** the page loads
- **THEN** "Our Guests Love Us" is displayed

### Requirement: Gallery section displays resort images

The gallery section SHALL display 4 gallery items with hover overlay effects.

#### Scenario: Gallery items render

- **WHEN** the page loads
- **THEN** "Ocean View Suite", "Fine Dining Restaurant", "Spa & Sauna", and "Beach Activities" are displayed

### Requirement: Blog section displays latest news

The blog section SHALL display 3 blog post cards with image, date, category, title, excerpt, and "Read More" link.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** 3 blog post titles are displayed
- AND 3 "Read More" links are present

### Requirement: CTA section encourages contact

The CTA section SHALL display "Contact us now!" heading, a phone number, and a "Contact Now" button.

#### Scenario: CTA heading renders

- **WHEN** the page loads
- **THEN** "Contact us now!" is displayed

#### Scenario: Phone number renders

- **WHEN** the page loads
- **THEN** "345-678-9999" is shown

#### Scenario: Contact button renders

- **WHEN** the page loads
- **THEN** a "Contact Now" button is visible

### Requirement: Partners section displays partner logos

The partners section SHALL display 5 partner name placeholders.

#### Scenario: Partner names render

- **WHEN** the page loads
- **THEN** 5 partner names are displayed

### Requirement: Footer provides contact, links, and newsletter

The footer SHALL display contact information, recent blog posts, navigation links, and a newsletter subscribe form with email input.

#### Scenario: Newsletter form renders

- **WHEN** the page loads
- **THEN** an email input and "Subscribe" button are present

#### Scenario: Navigation links render

- **WHEN** the page loads
- **THEN** footer links "About Us" and "Our Rooms" are visible

#### Scenario: Component Dock link renders

- **WHEN** the page loads
- **THEN** a "Component Dock" link pointing to "https://www.componentdock.com/" is present

#### Scenario: Social icons render

- **WHEN** the page loads
- **THEN** Facebook, Twitter, Instagram, and LinkedIn icons are visible

### Requirement: App renders all sections in order

The App component SHALL compose all sections: TopBar, Navbar, Hero, BookingForm, About, Services, Rooms, Testimonials, Gallery, Blog, CTA, Partners, Footer.

#### Scenario: All sections render

- **WHEN** the page loads
- **THEN** all major section content is present
