# Template: Zing (Restaurant Landing)

## Purpose

Zing is a restaurant landing page in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Tasteit" free template (source: https://colorlib.com/wp/template/tasteit/), built under a DIFFERENT name (**Zing**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based restaurant template with a hero slider, reservation form, tabbed menu, chef profiles, testimonials carousel, blog cards, newsletter CTA, and a dark footer with hours and social links.

**Design tokens:** brand red `#e52b34`, decorative font "Dancing Script", body font "Roboto", dark footer `#333333`, light section bg `#f8f9fa`.

## Requirements

### Requirement: Page shell

The app renders a min-h-screen wrapper containing all major sections in order.

#### Scenario: All sections present

- **WHEN** the app loads
- **THEN** the page shows Navbar, Hero, About, CTA Banner, Menu, Testimonials, Chefs, Ingredients, Blog, Newsletter, and Footer sections

### Requirement: Navbar

The navbar shows the logo "Zing" and navigation links with scroll-based background change and mobile menu toggle.

#### Scenario: Navigation links

- **WHEN** the app loads
- **THEN** the navbar shows Home, About, Chef, Menu, Reservation, Blog, Contact links

#### Scenario: Mobile menu toggle

- **WHEN** I click the open menu button
- **THEN** the close menu button appears
- **WHEN** I click the close menu button
- **THEN** the open menu button appears

#### Scenario: Transparent to solid on scroll

- **WHEN** the page scrolls past 60px
- **THEN** the navbar gets a dark background

### Requirement: Hero

The hero section shows decorative text and a CTA button.

#### Scenario: Hero content

- **WHEN** the app loads
- **THEN** the hero shows "Cooking Since Best Quality" heading
- **AND** a "Book Your Table" CTA button is visible

### Requirement: About section with reservation form

The about section has a reservation form and welcome text.

#### Scenario: Form fields

- **WHEN** the app loads
- **THEN** the reservation form has Name, Phone, Email fields
- **AND** a "Book Now" submit button

#### Scenario: Form prevents default

- **WHEN** I click "Book Now"
- **THEN** the page does not navigate away

### Requirement: CTA Banner

A parallax-style banner with dining event promotion.

#### Scenario: CTA content

- **WHEN** the app loads
- **THEN** "Private Dinners & Happy Hours" heading is visible
- **AND** a Reservation link is present

### Requirement: Tabbed Menu

The menu section has tabbed categories with food items.

#### Scenario: Menu tabs

- **WHEN** the app loads
- **THEN** Breakfast, Lunch, Dinner, Desserts tabs are visible
- **AND** breakfast items are shown by default

#### Scenario: Tab switching

- **WHEN** I click the "Lunch" tab
- **THEN** lunch menu items appear
- **WHEN** I click the "Dinner" tab
- **THEN** dinner items appear

### Requirement: Testimonials

Customer review carousel with navigation.

#### Scenario: Testimonial navigation

- **WHEN** I click the next review button
- **THEN** a different review appears
- **WHEN** I click the previous review button
- **THEN** the previous review returns

#### Scenario: Wrap-around navigation

- **WHEN** I click next from the last review
- **THEN** the first review appears

### Requirement: Chef profiles

Master chef section with profile cards.

#### Scenario: Chef display

- **WHEN** the app loads
- **THEN** the "Our Master Chef" heading is visible
- **AND** chef names and titles are shown

### Requirement: Ingredients feature

Feature section with image and checklist.

#### Scenario: Features list

- **WHEN** the app loads
- **THEN** "Perfect Ingredients" heading is visible
- **AND** feature items are listed

### Requirement: Blog section

Recent blog post cards.

#### Scenario: Blog cards

- **WHEN** the app loads
- **THEN** "Recent Blog" heading is visible
- **AND** 3 blog cards with "Read more" links are shown

### Requirement: Newsletter CTA

Email subscription form on colored background.

#### Scenario: Newsletter form

- **WHEN** the app loads
- **THEN** a newsletter heading is visible
- **AND** an email input and Subscribe button are present

### Requirement: Footer

Dark footer with about text, hours, social links, newsletter, and Component Dock link.

#### Scenario: Footer content

- **WHEN** the app loads
- **THEN** "About Zing" heading is visible
- **AND** service hours are listed
- **AND** a newsletter form is present

#### Scenario: Component Dock link

- **WHEN** the app loads
- **THEN** a link to https://www.componentdock.com/ with "Component Dock" text is present

#### Scenario: Newsletter prevents default

- **WHEN** I fill in the footer newsletter email and submit
- **THEN** the page does not navigate away

### Requirement: Accessibility

Interactive elements have proper ARIA attributes.

#### Scenario: ARIA labels

- **WHEN** the app loads
- **THEN** the mobile menu toggle has an aria-label
- **AND** testimonial navigation buttons have aria-labels
