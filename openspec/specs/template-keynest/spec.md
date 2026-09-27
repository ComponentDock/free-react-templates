## Purpose

Keynest is a free real estate property listing website template that recreates the ColorLib "Rolast" design (https://colorlib.com/wp/template/rolast/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. It provides a property listing landing page with a hero search form, property cards, a feature showcase carousel, a 4-step process section, agent profiles, and a newsletter footer.

## Design Tokens

- **Font:** Prompt (Google Fonts), sans-serif
- **Primary brand:** #0FB45F (green)
- **Heading color:** #140C40 (dark navy/purple)
- **Body text:** #646D77 (gray)
- **Background:** white (#fff) for most sections, light gray (#f8f9fa) for alternate sections
- **Button style:** green border + text, solid green on hover, uppercase, letter-spacing 3px

## Requirements

### Requirement: Navigation bar with logo and links

The template SHALL display a sticky navigation bar with the "Keynest" logo, navigation links (Home, Property, About, Blog, Contact), and a phone number button on the right.

#### Scenario: Navigation content

- **WHEN** the page loads
- **THEN** the navbar shows the "Keynest" logo
- **AND** navigation links (Home, Property, About, Blog, Contact) are visible
- **AND** a phone number button is displayed on the right

### Requirement: Hero section with property search form

The template SHALL display a hero section with a dark background image, heading "Find Your Dream Home", subtitle "We Have Over Million Properties For You", and a tabbed search form with Buy Property / Rent Property tabs containing Location, Property Type, Bedroom fields, and a Search button.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the hero shows "Find Your Dream Home" heading
- **AND** a subtitle text is displayed
- **AND** Buy Property / Rent Property tabs are visible

#### Scenario: Search form

- **WHEN** the page loads
- **THEN** the search form has Location, Property Type, and Bedroom fields
- **AND** a Search button is displayed

### Requirement: Property listings grid

The template SHALL display a section titled "Searching for the Best Places?" with 6 property cards in a 3-column grid. Each card has an image, title, location, bed/bath info, and price.

#### Scenario: Property cards

- **WHEN** the page loads
- **THEN** 6 property cards are displayed
- **AND** each card shows an image, title, location, and price
- **AND** each card shows bed and bath info

### Requirement: Feature showcase section

The template SHALL display a split section with text on the left ("Just browse away. It's all here.") and an image carousel on the right, with a "Browse Property" button.

#### Scenario: Feature content

- **WHEN** the page loads
- **THEN** the heading "Just browse away. It's all here." is visible
- **AND** descriptive text is shown
- **AND** a "Browse Property" button is displayed

### Requirement: 4-step process section

The template SHALL display a 4-step process section with numbered steps: "Choose a category", "Find real estate", "Take the keys", "Live happy", each with an icon and description.

#### Scenario: Process steps

- **WHEN** the page loads
- **THEN** 4 steps are displayed in a row
- **AND** each step shows a number, title, and description

### Requirement: Team/agents section

The template SHALL display a "Meet Our Agents" section with 4 agent cards. Each card shows a photo, social media icons, name, and role.

#### Scenario: Agent cards

- **WHEN** the page loads
- **THEN** 4 agent cards are shown
- **AND** each card shows a photo, name, role, and social media icons

### Requirement: Footer with Component Dock link

The template SHALL display a footer with logo, About links, Services links, Newsletter form, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer shows the Keynest logo
- **AND** About and Services link columns are visible
- **AND** a newsletter subscription form is present
- **AND** a link to https://www.componentdock.com/ is displayed as "Component Dock"
