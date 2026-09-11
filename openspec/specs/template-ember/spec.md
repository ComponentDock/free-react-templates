# Template: Ember

## Purpose

Ember is a restaurant landing template that recreates the ColorLib "Dingo" design (https://colorlib.com/wp/template/dingo/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. The template showcases a restaurant website with a hero section, popular dishes gallery, restaurant history, video highlight, tabbed food menu, chef team, reservation form, customer testimonials, blog section, and a dark footer with newsletter and Component Dock branding.

## Requirements

### Requirement: Navbar with navigation and brand

The template SHALL display a sticky navbar with the "Ember" brand logo, navigation links (Home, About, Menu, Chefs, Blog, Contact), a "Book a Table" CTA button, a dark mode toggle, and a mobile hamburger menu.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the Ember logo, all six navigation links, and the "Book a Table" button

#### Scenario: Mobile hamburger menu opens and closes

- **WHEN** the user clicks the mobile menu button
- **THEN** a mobile navigation panel appears with all links
- **AND** clicking a link closes the mobile menu

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle button
- **THEN** the dark class is toggled on the document root element

### Requirement: Hero section with headline and CTAs

The template SHALL display a full-width hero section with a background image, the tagline "Expensive but the best", the headline "Deliciousness jumping into the mouth", descriptive body text, and two call-to-action buttons: "Reservation" and "Watch our story".

#### Scenario: Hero renders headline and buttons

- **WHEN** the page loads
- **THEN** the hero section displays the headline, tagline, and both CTA buttons

### Requirement: Popular Dishes section

The template SHALL display a "Popular Dishes" section with an "Our Exclusive Items" heading and four food cards, each with a placeholder image, dish name, description, and a "Read More" link.

#### Scenario: All four dish cards render

- **WHEN** the Popular Dishes section is visible
- **THEN** four dish cards are displayed with images, names, descriptions, and "Read More" links

### Requirement: History section

The template SHALL display a two-column history section with a background image on the left and the heading "Where The Food's As Good As The Root Beer." with descriptive text and a "Read More" button on the right.

#### Scenario: History section renders content

- **WHEN** the History section is visible
- **THEN** the heading, body text, background image, and "Read More" button are displayed

### Requirement: Expect The Best video section

The template SHALL display a dark overlay section with the heading "Expect The Best", descriptive text, and a circular play button linking to a YouTube video.

#### Scenario: Video section renders play button

- **WHEN** the Expect The Best section is visible
- **THEN** the heading and a play button link are displayed

### Requirement: Popular Menu with tabbed interface

The template SHALL display a tabbed menu section with tabs for Special, Breakfast, Lunch, Dinner, and Snacks. Each tab shows six menu items with an image, name, description, and price. Clicking a tab switches the displayed items.

#### Scenario: Default tab shows Special items

- **WHEN** the Popular Menu section loads
- **THEN** the Special tab is active and six Special menu items are displayed

#### Scenario: Tab switching

- **WHEN** the user clicks a different tab
- **THEN** that tab becomes active and its menu items are displayed

### Requirement: Team section with chef cards

The template SHALL display a "Team Member" section with an "Our Experience Chefs" heading and four chef cards, each with a circular image, name, and role.

#### Scenario: Chef cards render

- **WHEN** the Team section is visible
- **THEN** four chef cards with images, names, and roles are displayed

### Requirement: Reservation form

The template SHALL display a reservation form with fields for email (required), number of guests (select), time slot (select), and optional notes. Form validation requires a valid email address. On successful submission, a confirmation message is displayed.

#### Scenario: Form renders all fields

- **WHEN** the Reservation section is visible
- **THEN** the email input, guests select, time select, notes textarea, and submit button are displayed

#### Scenario: Validation error on invalid email

- **WHEN** the user submits the form without a valid email
- **THEN** a validation error message is displayed

#### Scenario: Successful submission

- **WHEN** the user enters a valid email and submits the form
- **THEN** a confirmation message is displayed

### Requirement: Testimonials section

The template SHALL display a "Testimonials" section with an "Customers Feedback" heading and three testimonial cards, each with a star rating, quoted text, author name, and role.

#### Scenario: Testimonials render

- **WHEN** the Testimonials section is visible
- **THEN** three testimonial cards with star ratings, quotes, and author information are displayed

### Requirement: Blog section

The template SHALL display a "Recent News" section with an "Latest From Blog" heading and four blog post cards, each with a placeholder image, date, category tag, title, and "Read More" link.

#### Scenario: Blog posts render

- **WHEN** the Blog section is visible
- **THEN** four blog post cards with images, dates, categories, titles, and "Read More" links are displayed

### Requirement: Footer with Component Dock branding

The template SHALL display a dark footer with four columns: About Us (brand description and social links), Important Links (navigation), Contact Us (address, phone, email), and Newsletter (email subscription form). The copyright bar MUST link to https://www.componentdock.com/ as "Component Dock".

#### Scenario: Footer renders all columns

- **WHEN** the Footer is visible
- **THEN** all four columns and the copyright bar with the Component Dock link are displayed

#### Scenario: Newsletter subscription

- **WHEN** the user enters a valid email and clicks Subscribe
- **THEN** a thank-you message is displayed

### Requirement: Responsive design

The template SHALL be fully responsive, adapting the layout for mobile, tablet, and desktop viewports.

#### Scenario: Mobile layout

- **WHEN** the viewport is narrower than 640px
- **THEN** sections stack vertically and the mobile navigation is available

### Requirement: Dark mode support

The template SHALL support dark mode via a class-based toggle on the document root element.

#### Scenario: Dark mode toggling

- **WHEN** the user toggles dark mode
- **THEN** all sections adapt their colors for dark mode
