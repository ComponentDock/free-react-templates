# Template: Nestled (Real Estate)

## Purpose

Recreation of the ColorLib "Homey" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page real estate template.

- **Source slug:** `homey`
- **Source URL:** https://colorlib.com/wp/template/homey/
- **Preview URL:** https://preview.colorlib.com/theme/homey/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/nestled`
- **Surge target:** `nestled.free.componentdock.com`

## Requirements

### Requirement: Navbar with navigation and auth CTAs

The template SHALL render a sticky navbar with logo, navigation links, and sign up/login buttons.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the logo "Nestled" with a primary-colored dot
- **AND** navigation links for Home, Buy, Rent, About, Contact are visible
- **AND** Sign up and Login buttons are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu expands
- **AND** clicking the button again collapses it

### Requirement: Hero property slider

The template SHALL display a full-width hero section with a property image carousel showing price, address, and property specs.

#### Scenario: First slide displays by default

- **WHEN** the page loads
- **THEN** the hero section shows the first property with price, address, and bath/bed/sqft specs

#### Scenario: Navigation arrows cycle slides

- **WHEN** the user clicks the next arrow
- **THEN** the slider advances to the next property
- **AND** clicking the previous arrow returns to the prior property
- **AND** navigation wraps around at boundaries

### Requirement: Services section

The template SHALL display a services section with a heading and 4 service icons in a grid.

#### Scenario: Services render correctly

- **WHEN** the services section is visible
- **THEN** a heading "We will help you find your home" is displayed
- **AND** 4 service items with icons and titles are shown in a grid

### Requirement: Properties carousel

The template SHALL display a horizontally scrollable property card carousel on a light background.

#### Scenario: Property cards display

- **WHEN** the properties section is visible
- **THEN** property cards show image, price, specs, and location
- **AND** navigation arrows are present

### Requirement: Features section

The template SHALL display two feature cards with icons, headings, and descriptions.

#### Scenario: Feature cards render

- **WHEN** the features section is visible
- **THEN** "Ask our Customer Service" and "Visit our Blog" cards are displayed

### Requirement: Why Us section

The template SHALL display a three-column layout with icon list, portrait image, and descriptive text.

#### Scenario: Why Us content renders

- **WHEN** the Why Us section is visible
- **THEN** 5 icon list items, a portrait image, and "Why Us" heading with description are shown

### Requirement: Testimonials section

The template SHALL display two testimonial cards with quotes and author information.

#### Scenario: Testimonials render

- **WHEN** the testimonials section is visible
- **THEN** two testimonial cards with quotes, author names, and roles are displayed

### Requirement: Footer with Component Dock link

The template SHALL render a footer with 4 columns and a dark bottom bar linking to Component Dock.

#### Scenario: Footer columns display

- **WHEN** the footer is visible
- **THEN** About, Pages, Resources, and Contact columns are shown
- **AND** social media icon links are present

#### Scenario: Component Dock attribution

- **WHEN** the footer bottom bar is visible
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is present
- **AND** the link opens in a new tab

### Requirement: 100% test coverage

All components SHALL have 100% line, function, branch, and statement coverage.

#### Scenario: Coverage thresholds met

- **WHEN** `npm run test:coverage` is executed for the nestled workspace
- **THEN** all coverage metrics report 100%
