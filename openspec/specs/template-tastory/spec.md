# Tastory — Restaurant Landing Template

**Recreation of ColorLib Eatwell** (https://colorlib.com/wp/template/eatwell/)

## Purpose

Provide a full-featured restaurant landing page with hero, about, offers carousel, tabbed menu, news/blog cards, photo gallery, contact form, and a dark footer — faithfully recreating the ColorLib Eatwell design under the name "Tastory".

## Requirements

### Requirement: Navbar with navigation links

The template SHALL render a fixed dark navbar with the brand name "Tastory" and navigation links to all sections (Home, About, Offer, Menu, News, Gallery, Contact). The navbar SHALL support a mobile toggle that shows/hides a mobile menu.

#### Scenario: Desktop navigation

- **WHEN** the page renders on a desktop viewport
- **THEN** the navbar displays "Tastory" brand and all seven navigation links

#### Scenario: Mobile toggle

- **WHEN** the user clicks the mobile toggle button
- **THEN** the mobile menu expands showing all navigation links
- **WHEN** the user clicks a mobile navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section with call-to-action

The template SHALL render a full-screen hero section with a background image, the heading "Welcome To Tastory", a subheading about delicious and healthy foods, and a "Reservation" button linking to the contact section.

#### Scenario: Hero displays heading and CTA

- **WHEN** the page loads
- **THEN** the hero shows "Welcome To Tastory" heading
- **AND** the hero shows a "Reservation" button linking to #contact

### Requirement: About section with story and image

The template SHALL render a split-layout about section with a "Our Story" subtitle, "Welcome" heading, descriptive text, a "Learn More About Us" button, and a restaurant image.

#### Scenario: About section content

- **WHEN** the about section is visible
- **THEN** it shows "Our Story" subtitle and "Welcome" heading
- **AND** it shows a "Learn More About Us" button
- **AND** it shows a restaurant image

### Requirement: Offers section with cards

The template SHALL render an offers section with a centered header ("Our Offers" subtitle, "Our Offer This Summer" heading) and three offer cards showing image, title, description, and price.

#### Scenario: Offer cards display

- **WHEN** the offers section renders
- **THEN** three offer cards are visible with titles, images, and prices

### Requirement: Tabbed menu section

The template SHALL render a menu section with "Delicious Menu" heading and three tabs (Breakfast, Lunch, Dinner). Each tab shows six menu items with thumbnail, name, description, and price.

#### Scenario: Default tab

- **WHEN** the menu section renders
- **THEN** the Breakfast tab is active by default
- **AND** six breakfast menu items are visible

#### Scenario: Tab switching

- **WHEN** the user clicks the "Lunch" tab
- **THEN** lunch items are displayed and breakfast items are hidden

### Requirement: News section with blog cards

The template SHALL render a news section with "News" heading and three blog cards, each with an image, title, description, and "Read More" link.

#### Scenario: News cards

- **WHEN** the news section renders
- **THEN** three cards are visible with "Read More" links

### Requirement: Gallery section with photo grid

The template SHALL render a gallery section with "Gallery" heading and six food images in a responsive grid.

#### Scenario: Gallery images

- **WHEN** the gallery section renders
- **THEN** six images are displayed in a grid

### Requirement: Contact section with form

The template SHALL render a contact section with "Get In Touch" heading, a form with Name, Email, Message fields and a "Send Message" button, plus address and contact information.

#### Scenario: Contact form

- **WHEN** the contact section renders
- **THEN** a form with Name, Email, Message inputs and Send Message button is visible
- **AND** address and phone information is displayed

### Requirement: Footer with Component Dock branding

The template SHALL render a dark footer with About Us text, The Restaurant links, Useful links, social media icons (Twitter, Facebook, Instagram), and a link to Component Dock (https://www.componentdock.com/).

#### Scenario: Footer branding

- **WHEN** the footer renders
- **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is visible
- **AND** social media icons are present
- **AND** restaurant and useful links sections are displayed
