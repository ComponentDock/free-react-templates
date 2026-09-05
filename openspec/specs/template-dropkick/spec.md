---
name: dropkick
description: >
  Recreation of ColorLib Dropdown 09 — an additional-details dropdown snippet
  that shows an image and text side-by-side when a "View Details" button is clicked.
source: https://colorlib.com/wp/template/dropdown-09/
preview: https://preview.colorlib.com/theme/bootstrap/dropdown-09/
design_tokens:
  font: Roboto (Google Fonts)
  bg_page: '#fafafa'
  bg_menu: '#ffffff'
  brand_primary: '#3fc5f0'
  brand_hover: '#12b5ea'
  text_body: gray
  text_heading: '#000000'
  button_radius: 5px
  button_shadow: '0px 10px 20px -6px rgba(0,0,0,0.12)'
  menu_shadow: '0px 10px 34px -20px rgba(0,0,0,0.41)'
  menu_padding: 20px
  menu_min_width: 20rem
  menu_margin_top: 20px
  font_size_body: 18px
---

## Purpose

Recreate the ColorLib Dropdown 09 template as "Dropkick" — a responsive dropdown snippet
that reveals an image and descriptive text when the user clicks a "View Details" button.
The design uses a clean light background, Roboto font, sky-blue accent button, and a
white dropdown panel with shadow and arrow indicator.

## Requirements

### Requirement: Page renders heading

The page SHALL display a centered heading "Dropdown #09".

#### Scenario: Heading visible on load

- **WHEN** the user loads the page
- **THEN** a heading with text "Dropdown #09" is visible and centered

### Requirement: Dropdown button is visible

The page SHALL display a "View Details" button styled with the brand accent color.

#### Scenario: Button visible on load

- **WHEN** the user loads the page
- **THEN** a button labeled "View Details" is visible

### Requirement: Clicking the button opens the dropdown

The button SHALL toggle a dropdown panel showing an image and text side-by-side.

#### Scenario: Dropdown opens on click

- **WHEN** the user clicks the "View Details" button
- **THEN** a dropdown panel appears below the button
- **AND** the panel contains a placeholder image on the left
- **AND** the panel contains descriptive text on the right

### Requirement: Dropdown closes on outside click

The dropdown SHALL close when the user clicks outside the dropdown area.

#### Scenario: Outside click closes dropdown

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the dropdown
- **THEN** the dropdown panel closes

### Requirement: Dropdown toggles on repeated clicks

The button SHALL toggle the dropdown open and closed on repeated clicks.

#### Scenario: Toggle open and closed

- **GIVEN** the dropdown is closed
- **WHEN** the user clicks the "View Details" button
- **THEN** the dropdown opens
- **WHEN** the user clicks the "View Details" button again
- **THEN** the dropdown closes

### Requirement: Accessibility attributes

The button SHALL have proper ARIA attributes for dropdown state.

#### Scenario: aria-expanded reflects state

- **GIVEN** the dropdown is closed
- **WHEN** the user inspects the button
- **THEN** aria-expanded is "false"
- **WHEN** the user clicks the button
- **THEN** aria-expanded is "true"

### Requirement: Footer renders Component Dock link

The page SHALL display a footer with a link to Component Dock.

#### Scenario: Footer with Component Dock link

- **WHEN** the user loads the page
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text contains "Component Dock"
