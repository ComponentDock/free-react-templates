# Spec: ClassiPost

## Purpose

ClassiPost is a classified ads listing template that recreates the ColorLib "Classy Ads" design (https://colorlib.com/wp/template/classy-ads/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. The template features a hero section with search bar, category grid, featured ads, and a footer with Component Dock branding.

## Design Tokens (extracted from ColorLib preview)

- **Primary color**: teal/mint `#1ec6b6` / `#17c9b9`
- **Background**: white (`#ffffff`) and light gray (`#f8f9fa`)
- **Text**: dark (`#212529`)
- **Font**: Poppins (Google Fonts)
- **Button style**: rounded-full, teal background, white text, hover darkens
- **Navbar**: white background, dark text, teal "Post an Ad" button
- **Hero**: grayscale background image, white overlay text, search bar with inputs

## Requirements

### Requirement: Navbar

The template SHALL include a sticky top navbar with the brand name "ClassiPost" and navigation links.

#### Scenario: Navbar renders all navigation links

- **WHEN** the page loads
- **THEN** the navbar displays links for Home, Ads, About, Blog, and Contact
- **AND** the brand name "ClassiPost" is displayed
- **AND** a "+ Post an Ad" button is visible

#### Scenario: Mobile menu toggle

- **WHEN** the mobile menu button is clicked
- **THEN** the mobile navigation menu opens
- **AND** the aria-expanded attribute toggles

### Requirement: Hero Section

The template SHALL include a hero section with a heading, subtitle, and search bar.

#### Scenario: Hero renders heading and subtitle

- **WHEN** the page loads
- **THEN** the hero displays "Largest Classifieds In The World"
- **AND** the subtitle "You can buy, sell anything you want." is visible

#### Scenario: Search bar renders with inputs

- **WHEN** the page loads
- **THEN** a search input with placeholder "What are you looking for?" is shown
- **AND** a location input with a pin icon is shown
- **AND** a category dropdown with "All Categories" is shown
- **AND** a "Search" button is visible

### Requirement: Categories Section

The template SHALL include a categories section with icon grid showing listing categories and counts.

#### Scenario: Categories display six categories

- **WHEN** the page loads
- **THEN** six categories are displayed: Real Estate, Books & Magazines, Furniture, Electronics, Cars & Vehicles, Other
- **AND** each category shows an icon and a count (e.g. 3,921, 398, 1,229, 32,891, 29,221, 219)

### Requirement: Featured Ads Section

The template SHALL include a featured ads section with ad cards in a grid.

#### Scenario: Featured ads render cards

- **WHEN** the page loads
- **THEN** the heading "Featured Ads" is displayed
- **AND** at least four ad cards are shown with image, title, price, and location

### Requirement: Footer

The template SHALL include a footer with Component Dock branding.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer displays "More templates at Component Dock"
- **AND** a link to https://www.componentdock.com/ is present
