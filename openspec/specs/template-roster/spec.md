---
name: roster
description: >
  Recreation of ColorLib Listco (https://colorlib.com/wp/template/listco/) —
  a directory listing landing page with hero search, city cards, directory
  carousel, how-it-works steps, and footer.
stack:
  react: 19
  tailwind: 4
  typescript: strict
---

## Purpose

Roster is a directory listing landing page template that recreates the ColorLib
Listco design. It provides a hero search section, popular city cards, a
scrollable directory listing carousel, a how-it-works explainer, new listings,
and a branded footer linking to Component Dock.

## Requirements

### Requirement: Navbar with logo, navigation, login, and add-listing button

The page renders a fixed navbar with the "Roster" logo, navigation links
(Home, Categories, Explore, Contact), a Login link, and an "Add Listing"
button. The navbar transitions from transparent to solid white on scroll.

#### Scenario: Navbar renders all elements

- **GIVEN** the page loads
- **THEN** the navbar displays the logo text "Roster"
- **AND** navigation links for Home, Categories, Explore, and Contact are visible
- **AND** a "Log in" link is visible
- **AND** an "Add Listing" button is visible

#### Scenario: Navbar toggles dark mode

- **GIVEN** the page loads in light mode
- **WHEN** I click the dark mode toggle button
- **THEN** the html element has class "dark"

### Requirement: Hero section with search form

The hero section displays a background image with dark overlay, a heading
"Explore Your City", a subtitle, a search form with text input, category
dropdown, and search button, plus category icon shortcuts.

#### Scenario: Hero renders heading and search form

- **GIVEN** the page loads
- **THEN** a heading "Explore Your City" is displayed
- **AND** a search input, category select, and search button are visible

#### Scenario: Search form is interactive

- **GIVEN** the page loads
- **WHEN** I type "restaurant" in the search input
- **THEN** the input displays "restaurant"
- **WHEN** I select "Restaurants" from the category dropdown
- **THEN** the dropdown shows "Restaurants"

### Requirement: Popular locations section with city cards

The page displays an "Explore Top Cities" section with 6 city cards in a
responsive grid. Each card shows a city image, name, and listing count badge.

#### Scenario: All city cards render

- **GIVEN** the page loads
- **THEN** the "Explore Top Cities" heading is visible
- **AND** 6 city cards are displayed (New York, Paris, Rome, Sydney, Tokyo, London)
- **AND** each card shows a listing count (e.g. "65+ Listings")

### Requirement: Popular directory carousel

The page displays a "Popular Directory" section with scrollable listing cards.
Each card shows an image with overlay, price badge, status, title, description,
category, and a favorite button.

#### Scenario: Directory cards render

- **GIVEN** the page loads
- **THEN** the "Popular Directory" heading is visible
- **AND** 5 directory cards are displayed with titles and price badges

#### Scenario: Favorite button is clickable

- **GIVEN** the page loads
- **WHEN** I click the favorite button on "Urban Bites"
- **THEN** the button remains in the document

### Requirement: How it works section with steps

The page displays a "How It Works" section with a CTA button and 3 numbered
steps explaining the directory process.

#### Scenario: Steps render correctly

- **GIVEN** the page loads
- **THEN** the "How It Works" heading is visible
- **AND** 3 steps are displayed (Find Businesses, Review Listings, Make a Reservation)
- **AND** step numbers 01, 02, 03 are visible

### Requirement: New directory section

The page displays a "New Directory" section with a carousel of new listing cards.

#### Scenario: New directory cards render

- **GIVEN** the page loads
- **THEN** the "New Directory" heading is visible
- **AND** 5 new directory cards are displayed

### Requirement: Footer with Component Dock link

The footer renders on a dark background with logo, contact info, newsletter
signup, social links, and a "Component Dock" attribution link.

#### Scenario: Footer links to Component Dock

- **GIVEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text mentions "Component Dock"
- **AND** the link opens in a new tab

#### Scenario: Footer newsletter form is interactive

- **GIVEN** the page loads
- **WHEN** I type an email in the newsletter input
- **THEN** the input displays the typed email
- **WHEN** I submit the newsletter form
- **THEN** the page does not navigate (form submission is prevented)
