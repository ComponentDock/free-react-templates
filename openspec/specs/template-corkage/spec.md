# Corkage — Indian Restaurant Landing Template

## Purpose

Recreate the ColorLib "Resta" template (https://colorlib.com/wp/template/resta/) as a React 19 + Tailwind CSS 4 + TypeScript single-page restaurant landing template named "Corkage". The design is a warm-toned Indian restaurant site with a hero carousel, about section, tabbed menu, testimonials, reservation form, and footer.

## Requirements

### Requirement: Navigation bar

The template SHALL display a sticky dark (#222222) navigation bar with brand name "Corkage" and links to Home, Menu, About, Testimonials, and Contact. The navbar SHALL include a "Book a Table" CTA button on the right side. The navbar SHALL include a mobile hamburger menu that toggles open/closed on click.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the brand "Corkage" and all navigation links plus the "Book a Table" button

#### Scenario: Mobile navigation

- **WHEN** the hamburger menu button is clicked on mobile
- **THEN** a mobile navigation panel opens with all links
- **WHEN** a mobile nav link is clicked
- **THEN** the mobile navigation panel closes

### Requirement: Hero section

The template SHALL display a full-width hero section with a background image, dark overlay, heading text "Fresh And Delicious Food For Your Health", and an orange (#E8A87C) "View Menus" CTA button linking to the menu section.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the hero heading "Fresh And Delicious Food" is visible
- **AND** a "View Menus" button linking to #menu is present

### Requirement: About section

The template SHALL display a split-layout about section with a decorative food icon on the left, a heading "Sed ut perspiciatis unde omnis iste natus", descriptive paragraph text, and two stacked food images on the right.

#### Scenario: About content

- **WHEN** the page loads
- **THEN** the about heading containing "Sed ut perspiciatis" is visible
- **AND** descriptive paragraph text is present

### Requirement: Menu section

The template SHALL display a tabbed menu section with tabs for Starters, Main Course, and Desserts. Each tab SHALL show menu items with name, description, and price.

#### Scenario: Default tab

- **WHEN** the page loads
- **THEN** the Starters tab is active and shows starter menu items

#### Scenario: Tab switching

- **WHEN** the Main Course tab is clicked
- **THEN** the Main Course menu items are displayed

### Requirement: Testimonials section

The template SHALL display a testimonials section with customer quotes, names, and roles. The testimonials SHALL be displayed in a carousel with previous/next navigation.

#### Scenario: Testimonials display

- **WHEN** the page loads
- **THEN** at least one testimonial with a quote, name, and role is visible

#### Scenario: Testimonial navigation

- **WHEN** the next button is clicked
- **THEN** the next testimonial is displayed

### Requirement: Reservation form

The template SHALL display a "Book a Table" reservation form with fields for Name, Email, Phone, Date, Time, and Number of Guests, plus a "Book Now" submit button.

#### Scenario: Form fields

- **WHEN** the page loads
- **THEN** the reservation form has Name, Email, Phone, Date, Time, and Number of Guests fields
- **AND** a "Book Now" button is present

### Requirement: Footer

The template SHALL display a dark-background footer with About Us, Recent Blog, Services links, and Newsletter signup. The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer shows About Us, Recent Blog, Services, and Newsletter sections
- **AND** a "More templates at Component Dock" link pointing to https://www.componentdock.com/ is present

#### Scenario: Social links

- **WHEN** the page loads
- **THEN** Twitter, Facebook, and Instagram social media links are present in the footer
