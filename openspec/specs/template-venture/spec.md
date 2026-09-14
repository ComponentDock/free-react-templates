# Venture — Recreation of ColorLib Startupbusiness

## Purpose

Recreate the ColorLib Startupbusiness template as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Venture". The template provides a business startup landing page with sections for services, skills, portfolio, testimonials, features, blog, and contact.

## Requirements

### Requirement: All sections render correctly

The template SHALL render all major sections in the correct order.

#### Scenario: Section presence

- **WHEN** the app loads
- **THEN** all sections are visible: Navbar, Hero, WantToWork, Services, Skills, ProjectGallery, Testimonials, Features, Blog, ContactCTA, Footer

### Requirement: Navbar functionality

The navbar SHALL display navigation links and a mobile menu toggle.

#### Scenario: Desktop navigation

- **WHEN** the page loads on desktop
- **THEN** all navigation links (Home, About, Services, Works, Blog, Contact) are visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu button
- **THEN** the mobile navigation menu opens

### Requirement: Services section displays cards

The services section SHALL display service cards with icons and descriptions.

#### Scenario: Service cards render

- **WHEN** the services section is visible
- **THEN** three service cards are displayed (Strategic Planning, Trades & Stocks, Audit & Assurance)

### Requirement: Skills section shows progress bars

The skills section SHALL display skill progress bars with percentages.

#### Scenario: Progress bars render

- **WHEN** the skills section is visible
- **THEN** three progress bars are displayed with correct percentages (75%, 89%, 95%)

### Requirement: Footer includes Component Dock link

The footer SHALL include a link to Component Dock.

#### Scenario: Footer link present

- **WHEN** the footer is visible
- **THEN** a link to "Component Dock" with href "https://www.componentdock.com/" is present
