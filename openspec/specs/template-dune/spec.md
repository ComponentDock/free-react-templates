# Dune — Travel Agency Landing Page

> Recreation of ColorLib "Safario" (https://colorlib.com/wp/template/safario/)
> Preview: https://preview.colorlib.com/theme/safario/

## Overview

A travel agency landing page with a transparent navbar over a hero banner,
services section, about section, tour cards with pricing overlays, testimonials
carousel, search package form, blog cards, and a multi-column footer.

## Design Tokens

- **Fonts:** Roboto (body), Roboto Condensed (headings)
- **Brand color:** #6059f6 (indigo/purple)
- **Brand hover:** #201aa3 (dark indigo)
- **Headings:** #2a2a2a
- **Body text:** #888888
- **Background:** #ffffff (main), #f8f8ff (gray sections)
- **Buttons:** rounded-full, bg brand, white text, hover darker

## Sections (in order)

1. **Navbar** — transparent background, logo "Dune", nav links (Home, About, Packages, Pages, Blog, Contact), "Get Started" CTA button
2. **Hero Banner** — headline "Travel More To Discover Yourself", descriptive text, "Get Started" CTA, travel image on right
3. **Services** — "Our Popular Services" heading, 3 service cards (Hotel Booking, Flight Booking, Destination Booking) with icon, title, description
4. **About** — image left, text right: "Exploration is really the essence of the human spirit", "Learn More" button
5. **Tours** — "We offer worldwide tour plan recently", 4 tour cards with image overlay (name, duration, price), arranged in asymmetric grid
6. **Testimonials** — "Our client says" heading, 3 testimonial cards with photo, name, role, quote
7. **Search Package** — form with text input, category select, tour duration, date, price range, search button
8. **Blog** — "From our Blog" heading, 3 blog cards with image, title, date, comment count, excerpt
9. **Footer** — 4 columns (About, Navigation, Newsletter, InstaFeed), copyright bar with Component Dock link

## Gherkin Scenarios

```gherkin
Feature: Dune travel landing page

  Scenario: Page renders all sections
    Given the app loads
    Then the navbar is visible with logo "Dune"
    And the hero section displays "Travel More To Discover Yourself"
    And the services section shows 3 service cards
    And the about section has an image and text
    And the tours section shows 4 tour cards
    And the testimonials section shows client reviews
    And the search package form is present
    And the blog section shows 3 articles
    And the footer links to Component Dock

  Scenario: Navigation links work
    Given the navbar is visible
    When I click "About"
    Then the page scrolls to the about section

  Scenario: Mobile menu toggles
    Given the viewport is mobile
    When I click the menu button
    Then the mobile menu opens
    And I see all navigation links

  Scenario: Search form submission
    Given the search package form is visible
    When I fill in the search field
    And I select a category
    And I click "Search Package"
    Then the form does not reload the page

  Scenario: Newsletter subscription
    Given the footer newsletter form is visible
    When I enter a valid email
    And I click subscribe
    Then a success message appears

  Scenario: Footer links to Component Dock
    Given the footer is visible
    Then the copyright mentions "Component Dock"
    And the link points to https://www.componentdock.com/
```
