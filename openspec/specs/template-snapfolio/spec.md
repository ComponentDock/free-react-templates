# Template: Snapfolio (Gallery)

## Purpose

Recreation of ColorLib Capture photography gallery template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source template:** Capture
- **Source slug:** capture
- **Source URL:** https://colorlib.com/wp/template/capture/
- **Preview URL:** https://preview.colorlib.com/theme/capture/
- **Category:** Gallery (Photography Portfolio)
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design Tokens

### Colors
- **Primary accent:** #78d5ef (light blue) — buttons, links, highlights
- **Secondary:** #6c757d (gray) — secondary text, borders
- **Background:** #ffffff (white) — main content area
- **Text:** #212529 (dark gray) — body text
- **Footer background:** #343a40 (dark charcoal) — footer section
- **Overlay:** #000000 with opacity transitions — gallery item hover
- **Loader accent:** #F96D00 (orange) — loading spinner

### Typography
- **Body font:** "Work Sans", sans-serif
- **Heading font:** "Poppins", "Montserrat", sans-serif (loaded via Google Fonts)
- **Base size:** 1rem (16px)
- **Line height:** 1.5

### Spacing & Layout
- **Sidebar width:** 20% (desktop), 270px (mobile, slide-in)
- **Gallery grid:** 3 columns (Bootstrap col-md-4)
- **Gallery item height:** 280px
- **Section padding:** Standard Bootstrap container with px-md-5

### Components
- **Buttons:** Sharp corners (border-radius: 0), solid background
- **Gallery cards:** Background image with dark overlay on hover
- **Navigation:** Vertical sidebar with underline hover effect
- **Footer:** 3-column layout (categories, archives, contact)

## Gherkin Requirements

### Feature: Sidebar Navigation
  As a visitor
  I want to navigate the site via a fixed sidebar
  So that I can access different sections easily

  Scenario: Sidebar displays on desktop
    Given I am viewing the site on a desktop viewport
    Then the sidebar should be visible on the left side
    And it should contain the logo with camera icon
    And it should show navigation links: Home, Gallery, About, Blog, Contact
    And it should display social media icons at the bottom

  Scenario: Sidebar toggles on mobile
    Given I am viewing the site on a mobile viewport
    When I tap the hamburger menu icon
    Then the sidebar should slide in from the left
    And the main content should shift right

### Feature: Photography Gallery Grid
  As a visitor
  I want to browse photography work in a grid layout
  So that I can view the portfolio

  Scenario: Gallery displays images in grid
    Given I am on the home page
    Then I should see a 3-column grid of photography entries
    And each entry should have a background image
    And each entry should be 280px tall

  Scenario: Gallery items show overlay on hover
    Given I hover over a photography entry
    Then a dark overlay should appear with 0.7 opacity
    And the entry title should become visible
    And the category tag should become visible

  Scenario: Gallery items display content
    Given a photography entry is rendered
    Then it should show a title (e.g., "Work 01")
    And it should show a category tag (e.g., "Model", "Nature")
    And the text should be white colored

### Feature: Footer
  As a visitor
  I want to see footer information
  So that I can find contact details and categories

  Scenario: Footer displays categories
    Given I scroll to the footer
    Then I should see a "Category" section
    And it should list photography categories with counts

  Scenario: Footer displays archives
    Given I scroll to the footer
    Then I should see an "Archives" section
    And it should list monthly archives with post counts

  Scenario: Footer displays contact info
    Given I scroll to the footer
    Then I should see a "Have a Questions?" section
    And it should show address, phone, and email

  Scenario: Footer has dark background
    Given I view the footer
    Then it should have a dark background (#343a40)
    And the text should be light colored

### Feature: Responsive Design
  As a visitor on any device
  I want the layout to adapt to my screen size
  So that content is readable and accessible

  Scenario: Mobile layout adjusts sidebar
    Given I am on a mobile device
    Then the sidebar should be hidden by default
    And the main content should take full width

  Scenario: Tablet layout adjusts grid
    Given I am on a tablet device
    Then the gallery grid should show 2 columns

## Verification Checklist

- [ ] Sidebar navigation renders with logo, menu items, and social links
- [ ] Sidebar toggles on mobile with hamburger menu
- [ ] Photography grid displays in 3-column layout
- [ ] Gallery items show hover overlay effect with title and tag
- [ ] Gallery items are 280px height
- [ ] Footer displays categories, archives, and contact sections
- [ ] Footer has dark background
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] All interactive elements have proper accessibility attributes
- [ ] Color tokens match the original design (#78d5ef primary, #343a40 footer)
- [ ] Typography uses Work Sans and Poppins/Montserrat fonts
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to Component Dock website
- [ ] Template runs with 100% test coverage
