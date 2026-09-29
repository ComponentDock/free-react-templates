# Spec: SearchGate

## Purpose

Recreation of ColorLib **Search Form Bar 06** — a standalone animated search form bar with a circular search icon button that expands the input on hover/focus.

> Source: https://colorlib.com/wp/template/search-form-bar-06/
> Preview: https://preview.colorlib.com/theme/search-form-bar-06/
> Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-06.jpg

## Design Tokens

| Token                  | Value                    | Notes                    |
| ---------------------- | ------------------------ | ------------------------ |
| Brand color            | `#76a21e` (olive green)  | Button background        |
| Brand hover            | `#6b9319` (darker olive) | Button hover state       |
| Background             | `#fafafa` (off-white)    | Page background          |
| Input background       | `#ffffff` (white)        | Search input field       |
| Font family            | `"Poppins", sans-serif`  | Google Fonts             |
| Button radius          | `50%` (circle)           | 60x60px button           |
| Input border-radius    | `40px` (pill shape)      | Rounded input            |
| Input width (rest)     | `150px`                  | Collapsed state          |
| Input width (expanded) | `300px`                  | On hover/focus           |
| Input height           | `50px`                   | Consistent with button   |
| Button size            | `60px x 60px`            | Circle diameter          |
| Icon color             | `#ffffff` (white)        | Search icon              |
| Section padding        | `7em 0`                  | Vertical spacing         |
| Transition             | `0.3s` ease              | On hover width expansion |

## Requirements

### Requirement: Page layout and heading

The page SHALL render a centered, full-viewport container with a light (#fafafa) background and Poppins font. A heading "SearchGate" SHALL appear above the search form.

#### Scenario: Page loads with correct layout

- **WHEN** the page loads
- **THEN** the viewport background color is light (#fafafa)
- **AND** a heading "SearchGate" is visible above the form
- **AND** the form is centered both vertically and horizontally

### Requirement: Circular search button

The search form SHALL contain a circular search button with the brand color (#76a21e) and a white magnifying glass icon.

#### Scenario: Button renders as a circle

- **WHEN** the page loads
- **THEN** a search button is visible
- **AND** the button has rounded-full (circle) shape
- **AND** the button has background color #76a21e

### Requirement: Expandable search input

The search input SHALL start at 150px width with a pill shape and expand to 300px on focus/hover with a 0.3s transition.

#### Scenario: Input starts collapsed

- **WHEN** the page loads
- **THEN** the search input is approximately 150px wide
- **AND** the input has pill-shaped border radius

#### Scenario: Input expands on focus

- **WHEN** I click on the search input
- **THEN** the input width expands toward 300px

#### Scenario: Input collapses on blur

- **GIVEN** the search input is focused
- **WHEN** I click outside the search form
- **THEN** the input collapses back to 150px

### Requirement: Form submission behavior

The form SHALL prevent default submission and call the onSearch callback with the trimmed query when the user presses Enter with a non-empty query.

#### Scenario: Typing in search input

- **WHEN** I type "react templates" into the search input
- **THEN** the search input contains "react templates"

#### Scenario: Submitting with a query

- **WHEN** I type "dashboard" into the search input
- **AND** I press Enter
- **THEN** the form submits with the query "dashboard"

#### Scenario: Submitting with empty input

- **WHEN** I press Enter without typing
- **THEN** the form does not submit

#### Scenario: Submitting with whitespace only

- **WHEN** I type " " into the search input
- **AND** I press Enter
- **THEN** the form does not submit

### Requirement: Footer with Component Dock link

The template SHALL render a footer with a copyright notice and a link to https://www.componentdock.com/ labeled "Component Dock".

#### Scenario: Footer is visible

- **WHEN** the page loads
- **THEN** a footer element is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link opens in a new tab
