# Template: AeroWorks (Car Dealership / Rental)

## Purpose

Recreation of the ColorLib **Hvac** template
([colorlib.com/wp/template/hvac/](https://colorlib.com/wp/template/hvac/)),
preview at [preview.colorlib.com/theme/hvac/](https://preview.colorlib.com/theme/hvac/).

> **Note:** Despite the name "Hvac," this template is a **car rental / dealership**
> site — hero with car search, service cards, vehicle listings, blog, and footer.

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript.
**Name:** `aeroworks` (apps/aeroworks, @free-react-templates/aeroworks).

## Requirements

### Requirement: Header Navigation

Users SHALL see a two-tier header with a dark top bar (phone, email, social icons) and a main nav bar (logo, links, "Add Car" button).

#### Scenario: Top bar displays contact info

- **WHEN** the user is on any page
- **THEN** the top bar shows a phone number and email address
- **AND** the top bar has a dark background
- **AND** social media icons are visible

#### Scenario: Main navigation renders all links

- **WHEN** the user is on any page
- **THEN** the nav bar shows logo on the left
- **AND** links: Home, Cars, Blog, Pages
- **AND** an "Add Car" button is visible on the right

### Requirement: Hero Section

Users SHALL see a full-width hero with a background image, headline, car details, and a tabbed search form.

#### Scenario: Hero displays car hero content

- **WHEN** the user is on the home page
- **THEN** the hero section shows a full-width background image
- **AND** "Find Your Dream Car" headline is visible
- **AND** a car model name and monthly price are displayed
- **AND** two CTA buttons are visible: "Test Drive" and "Learn More"

#### Scenario: Hero search form has two tabs

- **WHEN** the user scrolls to the hero search area
- **THEN** tabs "Car Rental" and "Buy Car" are visible
- **AND** the rental tab shows dropdowns for Year, Brand, Model, Mileage
- **AND** a price range dropdown is visible

### Requirement: Services Section

Users SHALL see 4 service cards in a row with icons, titles, and descriptions.

#### Scenario: Four service cards are displayed

- **WHEN** the user scrolls to the services section
- **THEN** 4 service cards are visible in a row
- **AND** each card has an icon, title, and description
- **AND** the cards have white backgrounds with light borders

#### Scenario: Service cards have correct content

- **WHEN** the services section is rendered
- **THEN** the services are: Rental A Cars, Buying A Cars, Car Maintenance, Support 24/7

### Requirement: Feature Section

Users SHALL see a split layout with trust message, CTA buttons, and 6 feature items with icons.

#### Scenario: Feature section shows trust message and items

- **WHEN** the user scrolls to the feature section
- **THEN** "We Are a Trusted Name In Auto" heading is visible
- **AND** a description paragraph is shown
- **AND** "About Us" and "Our Partners" buttons are visible
- **AND** 6 feature items are shown in a grid: Engine, Turbo, Cooling, Suspension, Electrical, Brakes

### Requirement: Car Listings

Users SHALL see a grid of car cards with images, names, and prices.

#### Scenario: Car grid displays vehicle cards

- **WHEN** the user scrolls to the car listings section
- **THEN** "Best Vehicle Offers" heading is visible
- **AND** multiple car cards are shown in a grid layout
- **AND** each card has an image, car name, and price

### Requirement: Choose Us Section

Users SHALL see a split layout with "Why People Choose Us" text and a video placeholder.

#### Scenario: Choose Us section renders

- **WHEN** the user scrolls to the choose us section
- **THEN** "Why People Choose Us" heading is visible
- **AND** an "About Us" button is shown
- **AND** a video thumbnail with play button is on the right

### Requirement: Latest News

Users SHALL see 3 blog post cards with thumbnails, dates, and titles.

#### Scenario: Blog cards are displayed

- **WHEN** the user scrolls to the latest news section
- **THEN** "Latest News Updates" heading is visible
- **AND** 3 blog post cards are shown in a row
- **AND** each card has a thumbnail image, date, and title

### Requirement: Footer

Users SHALL see a dark footer with contact info, information links, brand logos, and a Component Dock link.

#### Scenario: Footer shows contact and info columns

- **WHEN** the user scrolls to the footer
- **THEN** "Contact Us Now!" heading is visible with phone and email
- **AND** an Information column shows links: Purchase, Payment, Shipping, Return
- **AND** a Top Brand section shows brand names
- **AND** copyright text is displayed at the bottom

#### Scenario: Footer has Component Dock link

- **WHEN** the user is on any page
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"

## Verification Checklist

- [ ] All 8 sections render in correct order
- [ ] Design tokens match: #db2d2e primary, Lato font, 2px radius
- [ ] Header: top bar dark, nav links, "Add Car" button
- [ ] Hero: bg image, headline, search form with tabs
- [ ] Services: 4 cards with icons, borders, centered text
- [ ] Feature: split layout, 6 icon items, #f7f7f7 background
- [ ] Car listings: grid of cards with images and prices
- [ ] Choose Us: split layout with video placeholder
- [ ] Latest News: 3 blog cards with thumbnails
- [ ] Footer: dark bg, contact/info/brands columns, copyright
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds (vite build)
