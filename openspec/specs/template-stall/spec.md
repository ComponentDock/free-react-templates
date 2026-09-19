# Template: Stall

Recreation of the ColorLib "Selling" ecommerce store template.

## Purpose

The Stall template is an ecommerce store landing page featuring a hero section with call-to-action buttons, product grid, newsletter signup, featured products with pricing, about section, team leadership, special promo with countdown, services, testimonials carousel, blog posts, contact form, and a dark footer with Component Dock attribution.

## Requirements

### Requirement: Page renders all sections in order

The Stall template SHALL render all sections in the correct order from top to bottom.

#### Scenario: All sections are visible

- **WHEN** the Stall template loads
- **THEN** the TopBar is visible at the top
- **AND** the Navbar is visible below the TopBar
- **AND** the Hero section is visible
- **AND** the Products section is visible
- **AND** the Newsletter section is visible
- **AND** the FeaturedProducts section is visible
- **AND** the About section is visible
- **AND** the Team section is visible
- **AND** the SpecialPromo section is visible
- **AND** the Services section is visible
- **AND** the Testimonials section is visible
- **AND** the BlogPosts section is visible
- **AND** the Contact section is visible
- **AND** the Footer is visible at the bottom

#### Scenario: Document title is set correctly

- **WHEN** the Stall template loads
- **THEN** the document title is "Stall — Ecommerce Store Template"

### Requirement: TopBar displays contact information and social links

The TopBar SHALL display social media links and contact information.

#### Scenario: Displays social media links

- **WHEN** I inspect the TopBar social links
- **THEN** there are links labeled "Facebook", "Twitter", and "LinkedIn"

#### Scenario: Displays contact information

- **WHEN** I inspect the TopBar contact info
- **THEN** the phone number "+1 234 567 890" is displayed
- **AND** the email "info@stall.com" is displayed

### Requirement: Navbar provides navigation

The Navbar SHALL display the brand name and navigation links with mobile menu support.

#### Scenario: Displays brand and navigation links

- **WHEN** I inspect the navbar
- **THEN** the brand name "Stall" is displayed
- **AND** navigation links for Home, Products, About, Special, Testimonials, Blog, Contact are present

#### Scenario: Mobile menu toggle

- **WHEN** I click the menu toggle button on mobile
- **THEN** the mobile navigation menu opens

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and I click a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero displays heading and call-to-action buttons

The Hero section SHALL display a heading and two call-to-action buttons.

#### Scenario: Displays heading and buttons

- **WHEN** I inspect the Hero section
- **THEN** the heading "Shop With Us" is displayed
- **AND** there is a "Shop Now" button
- **AND** there is a "Club Membership" button

### Requirement: Products displays product grid

The Products section SHALL display a grid of product cards with ratings and actions.

#### Scenario: Displays product grid

- **WHEN** I inspect the Products section
- **THEN** there are 6 product cards displayed
- **AND** each card has an image, title, star rating, and description
- **AND** each card has a "Cart" button and a "View" button

#### Scenario: Wishlist functionality

- **WHEN** I inspect the product cards
- **THEN** each card has a wishlist button

### Requirement: Newsletter provides email subscription

The Newsletter section SHALL display an email subscription form.

#### Scenario: Email subscription form

- **WHEN** I inspect the Newsletter section
- **THEN** there is an email input field
- **AND** there is a "Subscribe" button
- **AND** the heading reads "Get Notified on Each Updates"

#### Scenario: Email input accepts text

- **WHEN** I type "test@example.com" in the email field
- **THEN** the input value is "test@example.com"

### Requirement: FeaturedProducts displays featured items with pricing

The FeaturedProducts section SHALL display featured products with strikethrough and sale prices.

#### Scenario: Displays featured items

- **WHEN** I inspect the FeaturedProducts section
- **THEN** there are 2 featured product cards
- **AND** each card displays the product title, description, and prices

#### Scenario: Price display with discount

- **WHEN** I inspect the prices
- **THEN** original prices are displayed with strikethrough styling
- **AND** sale prices are displayed

### Requirement: About displays company information

The About section SHALL display company information with a trust badge.

#### Scenario: Displays company information

- **WHEN** I inspect the About section
- **THEN** the heading "Why Choose Us" is displayed
- **AND** the "Trusted Merchant for 50 years" badge is visible
- **AND** there is a "Learn More" button

### Requirement: Team displays team members

The Team section SHALL display team member cards with social links.

#### Scenario: Displays team members

- **WHEN** I inspect the Team section
- **THEN** there are 3 team member cards
- **AND** each card displays name, role, image, and description
- **AND** each card has social media links

### Requirement: SpecialPromo displays countdown and shop button

The SpecialPromo section SHALL display a promotional section with countdown.

#### Scenario: Displays countdown and shop button

- **WHEN** I inspect the SpecialPromo section
- **THEN** the heading "Special Promo" is displayed
- **AND** "Summer Sale" subtitle is shown
- **AND** a countdown timer is displayed
- **AND** there is a "Shop Now" button

### Requirement: Services displays service cards

The Services section SHALL display service cards with icons.

#### Scenario: Displays service cards

- **WHEN** I inspect the Services section
- **THEN** there are 6 service cards
- **AND** each card has an icon, title, description, and "Learn More" link

### Requirement: Testimonials displays carousel

The Testimonials section SHALL display a testimonial carousel with navigation.

#### Scenario: Displays testimonial carousel

- **WHEN** I inspect the Testimonials section
- **THEN** the heading "Testimonials" is displayed
- **AND** a testimonial quote is shown with the person's name and image

#### Scenario: Navigate to next testimonial

- **WHEN** I click the "Next testimonial" button
- **THEN** the next testimonial is displayed

#### Scenario: Navigate to previous testimonial

- **WHEN** I click the "Previous testimonial" button
- **THEN** the previous testimonial is displayed

#### Scenario: Carousel wraps around forward

- **WHEN** the carousel is at the last item and I click "Next"
- **THEN** the first testimonial is displayed

#### Scenario: Carousel wraps around backward

- **WHEN** the carousel is at the first item and I click "Previous"
- **THEN** the last testimonial is displayed

### Requirement: BlogPosts displays blog cards

The BlogPosts section SHALL display blog post cards.

#### Scenario: Displays blog cards

- **WHEN** I inspect the BlogPosts section
- **THEN** there are 3 blog post cards
- **AND** each card has an image, title, author, date, and category
- **AND** each card has a "Continue Reading" link

### Requirement: Contact displays form

The Contact section SHALL display a contact form with multiple fields.

#### Scenario: Displays contact form

- **WHEN** I inspect the Contact section
- **THEN** there are fields for First Name, Last Name, Email, Subject, and Message
- **AND** there is a "Send Message" button

#### Scenario: Form fields accept input

- **WHEN** I fill in all form fields
- **THEN** each field reflects the entered value

### Requirement: Footer displays content and Component Dock attribution

The Footer SHALL display footer content with a link to Component Dock.

#### Scenario: Footer content

- **WHEN** I inspect the Footer
- **THEN** the "About Us" section is displayed
- **AND** the "Quick Links" section is displayed
- **AND** the "Featured Product" section is displayed

#### Scenario: Component Dock attribution

- **WHEN** I inspect the copyright
- **THEN** there is a link to "Component Dock" pointing to "https://www.componentdock.com/"
- **AND** the link opens in a new tab

#### Scenario: Social media links

- **WHEN** I inspect the Footer social links
- **THEN** there are links for Facebook, Twitter, LinkedIn, and Instagram
