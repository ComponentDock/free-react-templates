# Template: FindBox (Search Form Bar)

Recreation of ColorLib Search Form Bar 11 (https://colorlib.com/wp/template/search-form-bar-11/).

## Purpose

Findbox is a search form bar component with a navbar and footer. It recreates the ColorLib **Search Form Bar 11** design (https://colorlib.com/wp/template/search-form-bar-11/, preview: https://preview.colorlib.com/theme/bootstrap/search-form-bar-11/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

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

## Requirements

### Feature: Navbar renders

#### Scenario: GIVEN the app loads

- **Given** the page is rendered
- **When** the Navbar renders is inspected
- **Then** GIVEN the app loads

#### Scenario: THEN a navigation bar is visible at the top

- **Given** the page is rendered
- **When** the Navbar renders is inspected
- **Then** THEN a navigation bar is visible at the top

#### Scenario: AND "FindBox" brand text appears on the left

- **Given** the page is rendered
- **When** the Navbar renders is inspected
- **Then** AND "FindBox" brand text appears on the left

#### Scenario: AND a search input with placeholder "Enter keyword and hit enter..."…

- **Given** the page is rendered
- **When** the Navbar renders is inspected
- **Then** AND a search input with placeholder "Enter keyword and hit enter..." appears on the right

### Feature: Search form interaction

#### Scenario: GIVEN the search input is visible

- **Given** the page is rendered
- **When** the Search form interaction is inspected
- **Then** GIVEN the search input is visible

#### Scenario: WHEN the user types in the search input

- **Given** the page is rendered
- **When** the Search form interaction is inspected
- **Then** WHEN the user types in the search input

#### Scenario: THEN the input value updates

- **Given** the page is rendered
- **When** the Search form interaction is inspected
- **Then** THEN the input value updates

#### Scenario: AND the input can be cleared

- **Given** the page is rendered
- **When** the Search form interaction is inspected
- **Then** AND the input can be cleared

### Feature: Search icon button

#### Scenario: GIVEN the navbar renders

- **Given** the page is rendered
- **When** the Search icon button is inspected
- **Then** GIVEN the navbar renders

#### Scenario: THEN a search icon button is visible next to the input

- **Given** the page is rendered
- **When** the Search icon button is inspected
- **Then** THEN a search icon button is visible next to the input

#### Scenario: AND the button is accessible (aria-label)

- **Given** the page is rendered
- **When** the Search icon button is inspected
- **Then** AND the button is accessible (aria-label)

### Feature: Content area

#### Scenario: GIVEN the app loads

- **Given** the page is rendered
- **When** the Content area is inspected
- **Then** GIVEN the app loads

#### Scenario: THEN a content area appears below the navbar

- **Given** the page is rendered
- **When** the Content area is inspected
- **Then** THEN a content area appears below the navbar

#### Scenario: AND instruction text is centered

- **Given** the page is rendered
- **When** the Content area is inspected
- **Then** AND instruction text is centered

### Feature: Footer

#### Scenario: GIVEN the app loads

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** GIVEN the app loads

#### Scenario: THEN a footer link to componentdock.com is visible

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** THEN a footer link to componentdock.com is visible

#### Scenario: AND the link text contains "Component Dock"

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** AND the link text contains "Component Dock"

### Feature: Accessibility

#### Scenario: GIVEN the app loads

- **Given** the page is rendered
- **When** the Accessibility is inspected
- **Then** GIVEN the app loads

#### Scenario: THEN all interactive elements have proper labels

- **Given** the page is rendered
- **When** the Accessibility is inspected
- **Then** THEN all interactive elements have proper labels

#### Scenario: AND the search input has an aria-label

- **Given** the page is rendered
- **When** the Accessibility is inspected
- **Then** AND the search input has an aria-label

#### Scenario: AND the search button has an aria-label

- **Given** the page is rendered
- **When** the Accessibility is inspected
- **Then** AND the search button has an aria-label

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/findbox/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/findbox/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar renders — Given** the page is rendered
- [ ] Search form interaction — Given** the page is rendered
- [ ] Search icon button — Given** the page is rendered
- [ ] Content area — Given** the page is rendered
- [ ] Accessibility — Given** the page is rendered
