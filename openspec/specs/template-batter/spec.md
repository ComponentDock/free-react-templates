# Batter — Creative Digital Agency Landing Page

## Purpose

Recreation of ColorLib Go Crepe (https://colorlib.com/wp/template/go-crepe/) as a React 19 + Tailwind CSS 4 + TypeScript template. Batter is a creative digital agency landing page with a hero banner, feature grid, about story, portfolio works, newsletter signup, and footer with contact widgets.

## Requirements

### Requirement: Navbar with navigation and mobile toggle

The template SHALL render a sticky navbar with logo, navigation links (Home, About, Works, Contact), and a hamburger menu toggle on mobile.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the "Batter" logo and all four navigation links

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** the mobile menu expands showing all navigation links
- **AND** the button icon changes to a close icon

### Requirement: Hero section with CTA

The template SHALL render a full-width hero section with a dark gradient background, heading text, subtext, and an orange CTA button linking to the contact section.

#### Scenario: Hero content

- **WHEN** the hero section is visible
- **THEN** it displays the heading "Instead of eating, you should feel the garnishing"
- **AND** it shows a "Get Started" CTA button linking to #contact

### Requirement: Features grid with three cards

The template SHALL render a 3-column features section with three feature cards, each containing an icon, title, and description.

#### Scenario: Feature cards display

- **WHEN** the features section is visible
- **THEN** three cards are displayed: "Stunning Visuals", "Clean Code", and "Punctuality"
- **AND** each card has a descriptive paragraph

### Requirement: Story section with dark background

The template SHALL render a dark-background story section with a title on the left and a white content card on the right containing a heading, paragraph, and CTA button.

#### Scenario: Story content

- **WHEN** the story section is visible
- **THEN** it displays "Our Untold Story" heading
- **AND** a white card with "From the part of beginning" heading and a CTA button

### Requirement: Portfolio works grid

The template SHALL render a portfolio grid with six work items, each showing a placeholder image, title, and description.

#### Scenario: Works display

- **WHEN** the works section is visible
- **THEN** six portfolio items are displayed in a responsive grid
- **AND** each item has an image, title, and description

### Requirement: Newsletter signup form

The template SHALL render a newsletter section with a heading, email input field, and submit button.

#### Scenario: Newsletter form

- **WHEN** the newsletter section is visible
- **THEN** it displays "Subscribe for our Newsletter" heading
- **AND** an email input with placeholder "Email address"
- **AND** a "Get Started" submit button

### Requirement: Footer widgets with contact info

The template SHALL render a dark-background footer widget section with three contact info blocks: address, email, and phone.

#### Scenario: Contact widgets

- **WHEN** the footer widgets section is visible
- **THEN** three blocks are displayed: Address, Email Address, and Phone Number
- **AND** each block has an icon and contact details

### Requirement: Footer with Component Dock link

The template SHALL render a footer with the logo, copyright text linking to Component Dock, and social media icons.

#### Scenario: Footer content

- **WHEN** the footer is visible
- **THEN** it displays the "Batter" logo
- **AND** copyright text with a link to https://www.componentdock.com/
- **AND** social media icon links (Facebook, Twitter, Dribbble, Behance)

### Requirement: App integration renders all sections

The template SHALL render all sections in the correct order: Navbar, Hero, Features, Story, Works, Newsletter, FooterWidgets, Footer.

#### Scenario: Full page render

- **WHEN** the App component mounts
- **THEN** all eight sections are rendered in order
- **AND** no console errors occur
