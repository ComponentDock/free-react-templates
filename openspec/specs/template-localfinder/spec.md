# LocalFinder — Directory Listing Template

**Original:** ColorLib "Directing" — https://colorlib.com/wp/template/directing/
**Preview:** https://preview.colorlib.com/theme/directing/
**New name:** localfinder
**Description:** Local services directory and business listing landing page

## Purpose

LocalFinder is a local services directory listing template that helps users discover businesses and services nearby. It provides a search interface with category and location filtering, showcases popular categories, featured services with tabbed browsing, featured locations, testimonials, and blog posts. The footer links to Component Dock.

## Requirements

### Requirement: Navbar with navigation and branding

The page SHALL display a sticky navbar with the "LocalFinder" logo, navigation links (Home, Listing, Categories, Blog, Shop), an "+Add Listing" CTA button, and a user account icon. The navbar SHALL include a mobile-responsive hamburger toggle.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the LocalFinder logo, all 5 nav links, the Add Listing button, and the user icon

#### Scenario: Mobile navbar toggle

- **WHEN** a user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu expands showing all nav links

### Requirement: Hero section with search form

The page SHALL display a hero section with a photo mosaic background, a heading "Discover The Best Services Near You", a subtext with listing count, a search form (text input + category select + location select + "EXPLORE NOW" button), and a row of category pill links.

#### Scenario: Search form is interactive

- **WHEN** a user types in the search input
- **THEN** the input displays the typed text

#### Scenario: Category pills render

- **WHEN** the hero section loads
- **THEN** 6 category pills are displayed: Restaurant, Food & Drink, Shopping, Beauty, Hotels, All Categories

### Requirement: Most Popular Categories section

The page SHALL display a "Most Popular Categories" section with 5 category cards, each showing a circular colored icon, category name, and listing count.

#### Scenario: Categories render correctly

- **WHEN** the page loads
- **THEN** 5 category cards appear with their respective names and listing counts (Food & Drink: 78, Restaurant: 32, Hotels: 16, Beauty & Spa: 55, Shopping: 23)

### Requirement: Most Searched Services with tabs

The page SHALL display a "The Most Searched Services" section with a tabbed interface (Restaurant, Shopping, Travel, Beauty) showing 4 listing cards per tab with image, title, location, and rating.

#### Scenario: Default tab shows Restaurant listings

- **WHEN** the section loads
- **THEN** the Restaurant tab is active and 4 restaurant listings are shown

#### Scenario: Tab switching

- **WHEN** a user clicks the Shopping tab
- **THEN** the Shopping tab becomes active and shopping listings replace restaurant listings

### Requirement: Featured Locations section

The page SHALL display a "Featured Locations" section with 4 location cards showing background images, location names, and listing counts.

#### Scenario: Location cards render

- **WHEN** the page loads
- **THEN** 4 location cards appear: New York (2,840), Los Angeles (1,925), Chicago (1,430), Miami (980)

### Requirement: Testimonials section

The page SHALL display a "What Our Users Say" section on a dark background with 3 testimonial cards, each showing star ratings, a quote, and user info (name, role, avatar).

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** 3 testimonial cards appear with names, roles, and quotes

### Requirement: Blog section

The page SHALL display a "Latest News" section with 3 blog post cards showing images, dates, titles, and excerpts.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** 3 blog post cards appear with titles and dates

### Requirement: Newsletter subscription

The page SHALL display a "Subscribe to Our Newsletter" section with an email input field and a "Subscribe" button.

#### Scenario: Newsletter form is interactive

- **WHEN** a user types an email address and clicks Subscribe
- **THEN** the form accepts the input without error

### Requirement: Footer with Component Dock link

The page SHALL display a footer with logo, contact info, quick links, and a bottom bar containing copyright text with a "Component Dock" link to https://www.componentdock.com/. The footer SHALL NOT contain any external attribution links.

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present

#### Scenario: No external attribution

- **WHEN** the footer renders
- **THEN** no links to external template providers appear
