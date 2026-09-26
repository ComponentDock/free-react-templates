# Reflexly — Photography Studio Template

Recreation of ColorLib **Phozogy** (https://colorlib.com/wp/template/phozogy/).

## Purpose

Reflexly is a photography studio landing page template featuring a hero carousel, services grid, photo categories, filterable portfolio gallery, and a full footer with subscribe form. The design uses a green accent (#009603), Quantico headings, Open Sans body text, and a dark header/footer with white content sections.

## Requirements

### Requirement: Header with navigation

The template SHALL display a fixed header with the logo "Reflexly", navigation links (Home, About, Services, Portfolio, Contact), and a search icon button.

#### Scenario: Logo displays brand name

- **WHEN** the page loads
- **THEN** the text "Reflexly" is visible in the header

#### Scenario: Navigation links are present

- **WHEN** the page loads
- **THEN** links for Home, About, Services, Portfolio, and Contact are visible

#### Scenario: Search icon is accessible

- **WHEN** the page loads
- **THEN** a search icon button with an aria-label is present

### Requirement: Hero section with carousel

The template SHALL display a full-width hero section with a background image, heading "Photography Studio", description text, and a "Contact us" call-to-action button.

#### Scenario: Hero heading is displayed

- **WHEN** the page loads
- **THEN** a heading "Photography Studio" is visible

#### Scenario: Contact us button is present

- **WHEN** the page loads
- **THEN** a button labeled "Contact us" is visible

### Requirement: Services section

The template SHALL display three service cards in a grid: Shooting, Videos, and Editing, each with an image, title, and description.

#### Scenario: Three services are displayed

- **WHEN** the page loads
- **THEN** cards for Shooting, Videos, and Editing are visible

### Requirement: Categories section

The template SHALL display a categories section with a heading, a "View all" button, and a horizontal scrollable list of category cards (Animal, Natural, Portrait, Landscape, Wildlife) each showing an image, name, and picture count.

#### Scenario: Categories heading and button

- **WHEN** the page loads
- **THEN** a heading "Categories" and a "View all" button are visible

#### Scenario: Category cards display names and counts

- **WHEN** the page loads
- **THEN** category cards show names like "Animal" and counts like "120 pictures"

### Requirement: Portfolio section with filters

The template SHALL display a filterable portfolio grid with tabs (All, Fashion, Lifestyle, Natural, Wedding) and a "Load More" button.

#### Scenario: Filter tabs are present

- **WHEN** the page loads
- **THEN** tabs for All, Fashion, Lifestyle, Natural, and Wedding are visible

#### Scenario: Clicking a filter updates displayed items

- **WHEN** the user clicks the "Fashion" filter tab
- **THEN** only portfolio items tagged as Fashion are displayed

#### Scenario: Load More button

- **WHEN** the page loads
- **THEN** a "Load More" button is visible below the portfolio grid

### Requirement: Footer with Component Dock link

The template SHALL display a footer with logo, description, social icons, Instagram grid, quick links, subscribe form, and a copyright line linking to Component Dock.

#### Scenario: Footer displays Component Dock link

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is visible in the footer

#### Scenario: Subscribe form is present

- **WHEN** the page loads
- **THEN** an email input and a submit button are visible in the footer

#### Scenario: Quick links are present

- **WHEN** the page loads
- **THEN** links for Home, About, Contact, Gallery, Portfolio, and Services are visible in the footer
