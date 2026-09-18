# Template: Passage — Immigration & Visa Consultation

Recreation of ColorLib Immigration layout. No ColorLib references in app code.

## Purpose

Passage is an immigration and visa consultation landing page template. It provides a professional, trustworthy design for immigration service providers with sections for hero messaging, service cards (country destinations), a booking form, feature highlights, customer testimonials, blog posts, and a footer with Component Dock branding.

## Requirements

### Requirement: Navbar with top bar and navigation links

The template SHALL display a navbar with a top bar containing a tagline and phone number, and navigation links for Home, About, Services, Countries, Blog, and Contact.

#### Scenario: Top bar displays tagline and phone number

- **GIVEN** the user is on any page
- **THEN** the top bar SHALL display the tagline "We believe we help people for happier lives"
- **AND** the top bar SHALL display a phone number

#### Scenario: Navigation links are present

- **GIVEN** the user is on any page
- **THEN** the navbar SHALL contain links for "Home", "About", "Services", "Countries", "Blog", and "Contact"

### Requirement: Hero banner with brand styling

The template SHALL display a hero banner with a brand red (#f6214b) background, headline, subtext, and a CTA button.

#### Scenario: Hero banner displays headline and subtext

- **GIVEN** the user is on the home page
- **THEN** the hero banner SHALL have a brand red background
- **AND** the hero banner SHALL display the headline "Immigrations & Visa Consultation"
- **AND** the hero banner SHALL display the subtext "Process Visa without within hours"

#### Scenario: Hero banner CTA button is present

- **GIVEN** the user is on the home page
- **THEN** the hero banner SHALL display a "Book Consultancy" button styled as a rounded-full circle

### Requirement: Call-to-top section with CTA

The template SHALL display a call-to-top section with a light gray background, headline, description, and a CTA button.

#### Scenario: Call-to-top section displays headline and description

- **GIVEN** the user is on the home page
- **THEN** the call-to-top section SHALL have a light gray (#f9f9ff) background
- **AND** the section SHALL display the headline "Start planning your New Dream"
- **AND** the section SHALL display a description paragraph

#### Scenario: Call-to-top section button is present

- **GIVEN** the user is on the home page
- **THEN** the call-to-top section SHALL display a "Request Free Consultancy" button

### Requirement: Services/countries section with four cards

The template SHALL display a services section with exactly 4 country cards, each containing an image, country tag, title, and description.

#### Scenario: Four country cards are displayed

- **GIVEN** the user is on the home page
- **THEN** the services section SHALL display exactly 4 country cards

#### Scenario: Country cards contain correct content

- **GIVEN** the user is on the home page
- **THEN** there SHALL be a card for "United States" with a country tag, title, and description
- **AND** there SHALL be a card for "Canada" with a country tag, title, and description
- **AND** there SHALL be a card for "Germany" with a country tag, title, and description
- **AND** there SHALL be a card for "Australia" with a country tag, title, and description

### Requirement: Booking form with consultation fields

The template SHALL display a booking form section with a dark overlay background, headline, and a form with name, email, phone, visa type, and message fields.

#### Scenario: Booking form section displays headline

- **GIVEN** the user is on the home page
- **THEN** the booking form section SHALL have a dark overlay background
- **AND** the section SHALL display the headline "Globally Connected by Large Network"

#### Scenario: Booking form contains required fields

- **GIVEN** the user is on the home page
- **THEN** the booking form SHALL contain a name input field
- **AND** the booking form SHALL contain an email input field
- **AND** the booking form SHALL contain a phone input field
- **AND** the booking form SHALL contain a visa type select field
- **AND** the booking form SHALL contain a message textarea field

#### Scenario: Booking form submits successfully

- **GIVEN** the user is on the home page
- **WHEN** the user fills in the name field with "John Doe"
- **AND** the user fills in the email field with "john@example.com"
- **AND** the user fills in the phone field with "+1234567890"
- **AND** the user selects a visa type from the dropdown
- **AND** the user fills in the message field with "I need help with my visa"
- **AND** the user clicks the submit button
- **THEN** the form should be submitted

### Requirement: Features section with six items

The template SHALL display a features section with exactly 6 feature items, each with a title and lucide icon.

#### Scenario: Six feature items are displayed

- **GIVEN** the user is on the home page
- **THEN** the features section SHALL display exactly 6 feature items

#### Scenario: Feature items have correct titles

- **GIVEN** the user is on the home page
- **THEN** there SHALL be a feature item with title "Expert Technicians"
- **AND** there SHALL be a feature item with title "Professional Service"
- **AND** there SHALL be a feature item with title "Great Support"
- **AND** there SHALL be a feature item with title "Technical Skills"
- **AND** there SHALL be a feature item with title "Highly Recommended"
- **AND** there SHALL be a feature item with title "Positive Reviews"

### Requirement: Reviews section with customer testimonials

The template SHALL display a reviews section with customer testimonials, star ratings, and names.

#### Scenario: Reviews carousel displays customer testimonials

- **GIVEN** the user is on the home page
- **THEN** the reviews section SHALL display customer testimonials

#### Scenario: Review entries contain customer details

- **GIVEN** the user is on the home page
- **THEN** there SHALL be a review from "Fannie Rowe" with a star rating
- **AND** there SHALL be a review from "Hulda Sutton" with a star rating

### Requirement: Brand logos section

The template SHALL display a brand logos section with exactly 5 partner logo placeholders.

#### Scenario: Five partner logo placeholders are displayed

- **GIVEN** the user is on the home page
- **THEN** the brand logos section SHALL display exactly 5 logo placeholders

### Requirement: Blog section with two posts

The template SHALL display a blog section with exactly 2 blog post cards, each containing an image, tag, title, and date.

#### Scenario: Two blog post cards are displayed

- **GIVEN** the user is on the home page
- **THEN** the blog section SHALL display exactly 2 blog post cards

#### Scenario: Blog cards contain required elements

- **GIVEN** the user is on the home page
- **THEN** each blog card SHALL display an image
- **AND** each blog card SHALL display a tag
- **AND** each blog card SHALL display a title
- **AND** each blog card SHALL display a date

### Requirement: CTA bottom section

The template SHALL display a CTA bottom section with a dark overlay background, headline, and a CTA button.

#### Scenario: CTA bottom displays headline

- **GIVEN** the user is on the home page
- **THEN** the CTA bottom section SHALL have a dark overlay background
- **AND** the section SHALL display the headline "No Look Further. Try us today!"

#### Scenario: CTA bottom button is present

- **GIVEN** the user is on the home page
- **THEN** the CTA bottom section SHALL display an "Apply For Visa" button

### Requirement: Footer with Component Dock branding

The template SHALL display a footer with About Us, Contact Us, Newsletter sections, and a copyright notice linking to Component Dock.

#### Scenario: Footer contains About Us section

- **GIVEN** the user is on any page
- **THEN** the footer SHALL contain an "About Us" section with description text

#### Scenario: Footer contains Contact Us section with phone numbers

- **GIVEN** the user is on any page
- **THEN** the footer SHALL contain a "Contact Us" section
- **AND** the Contact Us section SHALL display phone numbers

#### Scenario: Footer contains Newsletter subscription

- **GIVEN** the user is on any page
- **THEN** the footer SHALL contain a "Newsletter" section with an email input field

#### Scenario: Footer copyright links to Component Dock

- **GIVEN** the user is on any page
- **THEN** the footer SHALL display a copyright notice
- **AND** the copyright notice SHALL contain a link to "https://www.componentdock.com/"
- **AND** the link text SHALL read "Component Dock"
- **AND** there SHALL be no references to "ColorLib" or "colorlib" in the rendered output
