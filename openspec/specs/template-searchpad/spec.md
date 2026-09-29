# Spec: Searchpad

## Purpose

Recreation of ColorLib "Colorlib Search Form V21" — an expandable search form page with two stacked search inputs. The first input is round (pill-shaped) and expands from a 60px circle to full width on focus with a clear button. The second input is square (rounded corners) and expands from a small width to full width on focus. Both inputs sit on a light blue background and are centered vertically and horizontally.

> Source: https://colorlib.com/wp/template/colorlib-search-21/
> Preview: https://colorlib.com/etc/searchf/colorlib-search-21/

## Requirements

### Requirement: Page layout and background

The page SHALL render a centered, full-viewport container with a light blue (#d8f4fe) background and Poppins font.

#### Scenario: Page loads with correct background

- **WHEN** the page loads
- **THEN** the viewport background color is light blue
- **AND** the form is centered both vertically and horizontally

### Requirement: Two stacked search inputs

The form SHALL contain two search inputs stacked vertically with 80px spacing between them.

#### Scenario: Two inputs are visible

- **WHEN** the page loads
- **THEN** two search input fields are visible
- **AND** the inputs are stacked vertically

### Requirement: First input is expandable and round

The first input SHALL start as a 60×60px circle with a search icon, and expand to full width on focus. A clear button SHALL appear when text is entered.

#### Scenario: First input starts collapsed

- **WHEN** the page loads
- **THEN** the first input is 60px wide with rounded corners (pill shape)

#### Scenario: First input expands on focus

- **WHEN** I click on the first input
- **THEN** the first input expands to the full form width

#### Scenario: Clear button appears on input

- **WHEN** I type "hello" into the first input
- **THEN** the clear button becomes visible

#### Scenario: Clear button removes text

- **GIVEN** I have typed "hello" into the first input
- **WHEN** I click the clear button
- **THEN** the first input becomes empty

#### Scenario: First input collapses on blur

- **GIVEN** the first input is focused
- **WHEN** I click outside the form
- **THEN** the first input collapses back to 60px

### Requirement: Second input is expandable and square

The second input SHALL start as a 60px-wide square with a search icon on the right, and expand to full width on focus.

#### Scenario: Second input starts collapsed

- **WHEN** the page loads
- **THEN** the second input is 60px wide with minimal border radius

#### Scenario: Second input expands on focus

- **WHEN** I click on the second input
- **THEN** the second input expands to the full form width

### Requirement: Form submission

The form SHALL prevent default submission on Enter key.

#### Scenario: Submitting the form does not reload the page

- **WHEN** I type "query" into any input and press Enter
- **THEN** the page does not reload

### Requirement: Accessibility

The form SHALL use semantic HTML with proper labels and ARIA attributes.

#### Scenario: Inputs are accessible

- **WHEN** I inspect the form
- **THEN** each input has a visible label or aria-label
- **AND** the clear button has an accessible label
