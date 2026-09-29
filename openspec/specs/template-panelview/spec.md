# Template: Panelview (Sidebar Navigation)

## Purpose

Panelview is a two-column sidebar navigation template, a recreation of ColorLib
"Bootstrap Sidebar 08". The original source is
https://colorlib.com/wp/template/bootstrap-sidebar-08/. The live preview was
unreachable at time of research (404), so the design is based on the screenshot
only.

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.

## Design tokens

Extracted from the screenshot and ColorLib template page CSS:

| Token              | Value                                                              |
| ------------------ | ------------------------------------------------------------------ |
| Background         | `#ffffff` (white)                                                  |
| Text color         | `#333333` (dark gray)                                              |
| Heading color      | `#222222` (near-black)                                             |
| Sidebar bg         | `#ffffff` (white, same as main)                                    |
| Tag badge bg       | `#f0f0f0` (light gray)                                             |
| Tag badge text     | `#555555` (medium gray)                                            |
| Tag badge radius   | `4px` (small rounded corners)                                      |
| Category border    | `#e0e0e0` (light gray divider between items)                       |
| Font family        | System sans-serif (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`) |
| Layout             | Two-column: main content ~65%, sidebar ~35%                        |
| Sidebar position   | Right                                                              |
| Chevron icon       | Dropdown arrow on category items                                   |

## Gherkin requirements

### Feature: Panelview — Sidebar Navigation Template

  Background:
    Given the user opens Panelview in a browser
    Then the page displays a two-column layout with main content on the left and sidebar on the right

  Scenario: Page title and heading
    Given the page is loaded
    Then the main content area displays a heading "Sidebar #08" (or paraphrase)
    And the heading is large, bold, and near-black

  Scenario: Main content paragraphs
    Given the page is loaded
    Then the main content area contains two paragraphs of body text
    And the text is dark gray and uses a system sans-serif font

  Scenario: Categories section in sidebar
    Given the page is loaded
    When the user looks at the sidebar
    Then a "Categories" heading is visible
    And four category items are listed: "Mens Shoes", "Mens Shoes", "Accessories", "Clothes"
    And each category item has a dropdown chevron on the right
    And each category item is separated by a light gray horizontal divider

  Scenario: Category item hover
    Given the Categories section is visible
    When the user hovers over a category item
    Then the item shows a subtle hover state (background or text color change)

  Scenario: Tag Cloud section in sidebar
    Given the page is loaded
    When the user looks below Categories
    Then a "Tag Cloud" heading is visible
    And eight tags are displayed: "DISH", "MENU", "FOOD", "SWEET", "TASTY", "DELICIOUS", "DESSERTS", "DRINKS"
    And each tag has a light gray background with small rounded corners
    And tag text is uppercase and medium gray

  Scenario: Newsletter section in sidebar
    Given the page is loaded
    When the user looks below Tag Cloud
    Then a "Newsletter" heading is visible
    And an email input field with placeholder "Enter Email Address" is displayed
    And the input has a clean border style matching the overall design

  Scenario: Responsive layout
    Given the user is on a mobile viewport (< 768px)
    When the page is loaded
    Then the sidebar stacks below the main content
    And all sections remain accessible and readable

  Scenario: Footer with Component Dock link
    Given the page is loaded
    When the user scrolls to the bottom
    Then a footer is visible with a link to https://www.componentdock.com/
    And the link text includes "Component Dock"

## Verification checklist

- [ ] Two-column layout renders correctly (main left, sidebar right)
- [ ] Heading is large, bold, near-black
- [ ] Two body text paragraphs with system sans-serif font
- [ ] Categories section with 4 items and dropdown chevrons
- [ ] Category items separated by light gray dividers
- [ ] Tag Cloud section with 8 uppercase tags in gray badges
- [ ] Newsletter section with email input placeholder
- [ ] Responsive: sidebar stacks on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] All tests pass with 100% coverage
