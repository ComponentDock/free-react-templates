# Spec: FindBox

Recreation of ColorLib Search Form Bar 11 (https://colorlib.com/wp/template/search-form-bar-11/).

## Overview

A minimal search form bar template featuring a top navbar with brand text and an inline search input with icon toggle.

## Design Tokens

- Brand color: `#4a90d9` (blue)
- Background: white `#ffffff`
- Text: dark gray `#333333`
- Placeholder: light gray `#999999`
- Divider: light gray `#e0e0e0`
- Font: system sans-serif (Inter)

## Structure

1. **Navbar** — horizontal bar, brand text left, search input right
2. **Divider** — thin horizontal line below navbar
3. **ContentArea** — centered instruction text ("Please click the search icon to toggle the search bar.")
4. **Footer** — Component Dock link

## Scenarios

### Navbar renders

- GIVEN the app loads
- THEN a navigation bar is visible at the top
- AND "FindBox" brand text appears on the left
- AND a search input with placeholder "Enter keyword and hit enter..." appears on the right

### Search form interaction

- GIVEN the search input is visible
- WHEN the user types in the search input
- THEN the input value updates
- AND the input can be cleared

### Search icon button

- GIVEN the navbar renders
- THEN a search icon button is visible next to the input
- AND the button is accessible (aria-label)

### Content area

- GIVEN the app loads
- THEN a content area appears below the navbar
- AND instruction text is centered

### Footer

- GIVEN the app loads
- THEN a footer link to componentdock.com is visible
- AND the link text contains "Component Dock"

### Accessibility

- GIVEN the app loads
- THEN all interactive elements have proper labels
- AND the search input has an aria-label
- AND the search button has an aria-label
