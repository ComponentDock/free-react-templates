# Template: Roofmark (Real Estate)

## Purpose

Recreation of ColorLib **Myhome** — a real estate agency website template.

- Source slug: `myhome`
- ColorLib page: https://colorlib.com/wp/template/myhome/
- Preview URL: https://preview.colorlib.com/theme/myhome/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Header displays contact info and navigation

The page SHALL render a two-row header with a purple top bar containing contact details and a white main nav with logo and links.

#### Scenario: Top bar displays contact info

- **WHEN** the page loads
- **THEN** the top bar shows a phone number, address, and email
- **AND** social icons are visible on the right
- **AND** Login and Register links are present

#### Scenario: Main nav bar shows logo and links

- **WHEN** the page loads
- **THEN** the logo reads "roofmark" with "mark" in the brand green color
- **AND** nav links include Home, About us, Listings, News, Contact
- **AND** a "submit listing" button is on the right

### Requirement: Hero slider displays property slides

The page SHALL render a full-width hero carousel with property images, addresses, and prices.

#### Scenario: Hero displays property slides

- **WHEN** the page loads
- **THEN** a full-width hero image carousel is visible
- **AND** each slide shows an address headline and a price tag

#### Scenario: Hero slides are navigable

- **WHEN** the user clicks the right arrow
- **THEN** the next slide appears with a smooth transition

### Requirement: Search bar allows property search

The page SHALL display a search form with property type, rooms, and location inputs.

#### Scenario: Search form is visible

- **WHEN** the page loads
- **THEN** a "Find your home" search bar appears
- **AND** it contains three text inputs: Property type, No rooms, Location
- **AND** a search button is present

### Requirement: Featured properties section shows listings

The page SHALL display a grid of property cards with images, tags, prices, and stats.

#### Scenario: Featured section displays property cards

- **WHEN** the user scrolls to the Featured Properties section
- **THEN** a section title reads "the best deals" and "Featured Properties"
- **AND** 3 property cards are shown in a row
- **AND** each card has an image, tags, price, location, and stats

#### Scenario: Property card tags are color-coded

- **WHEN** a property card is visible
- **THEN** the "house" tag has a green background
- **AND** the "for sale" tag has a purple background
- **AND** the "for rent" tag has a pink background

### Requirement: Hot deal section shows featured listing

The page SHALL display a 2-column hot deal section with a large image and property details.

#### Scenario: Hot deal section shows a featured listing

- **WHEN** the user scrolls to the Hot Deal section
- **THEN** a large image is on the left with tags
- **AND** the right side shows the price, property title, location, and agent info

### Requirement: Testimonials section displays client quotes

The page SHALL display a testimonial carousel with quotes from clients.

#### Scenario: Testimonials section displays client quotes

- **WHEN** the user scrolls to the Testimonials section
- **THEN** an image is on the left with a dark overlay
- **AND** a carousel of testimonial slides is visible
- **AND** each slide shows a quote, body text, and author name

#### Scenario: Testimonials carousel is navigable

- **WHEN** the user clicks next/prev buttons
- **THEN** the next/previous testimonial slide appears

### Requirement: Footer displays site information

The page SHALL render a dark purple footer with four columns of links and a copyright bar.

#### Scenario: Footer has four columns

- **WHEN** the user scrolls to the footer
- **THEN** a dark purple background is visible
- **AND** columns show about info, useful links, property types, and a mini card

#### Scenario: Footer bar shows copyright and nav

- **WHEN** the footer is visible
- **THEN** a bottom bar shows copyright text and footer navigation links

### Requirement: Footer links to Component Dock

The page footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer contains Component Dock link

- **WHEN** the user views the footer
- **THEN** a link to componentdock.com is present with "Component Dock" text

### Requirement: No ColorLib references in app source

The app source code SHALL NOT contain any references to "colorlib" in files under apps/roofmark/.

#### Scenario: Source files are clean

- **WHEN** the source code is inspected
- **THEN** no file contains the string "colorlib"
