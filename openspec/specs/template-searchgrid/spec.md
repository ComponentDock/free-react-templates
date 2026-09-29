# Template: Searchgrid (Search Form Bar 12)

## Purpose

Searchgrid is a minimal search form bar template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Search Form Bar 12" free template (source: https://colorlib.com/wp/template/search-form-bar-12/), built under a DIFFERENT name (**Searchgrid**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The template consists of a single horizontal navigation bar with three elements: brand text on the left, navigation links in the center, and a rounded search input with magnifying glass icon on the far right. The design is clean and minimal — white background, thin gray bottom border, Inter font family. The page body below the navbar is empty white space.

**Design Tokens:**

| Token         | Value                        | Usage                      |
| ------------- | ---------------------------- | -------------------------- |
| Brand blue    | `#2874f0`                    | Brand logo text color      |
| Background    | `#ffffff`                    | Navbar background          |
| Nav text      | `#333333`                    | Navigation link text       |
| Border light  | `#e8e8e8`                    | Navbar bottom border       |
| Search border | `#e0e0e0`                    | Search input border        |
| Placeholder   | `#aaaaaa`                    | Search placeholder text    |
| Search radius | `20px`                       | Search input full rounding |
| Font          | Inter, system-ui, sans-serif | Entire navbar              |

## Requirements

### Requirement: Navbar Layout

The navbar SHALL be displayed as a full-width horizontal bar at the top of the viewport with a white background and a thin gray bottom border.

#### Scenario: Navbar renders on page load

- **WHEN** the page loads
- **THEN** a navigation bar is visible at the top
- **AND** the navbar has a white background
- **AND** the navbar has a 1px light gray bottom border (#e8e8e8)
- **AND** the navbar content is centered with max-width ~1200px

### Requirement: Brand Logo

The navbar SHALL display brand text on the far left in blue (#2874f0), bold and approximately 20px.

#### Scenario: Brand text is visible

- **WHEN** the navbar renders
- **THEN** the brand text "Brand" appears on the far left
- **AND** the brand text is styled in blue (#2874f0)
- **AND** the brand text is bold

### Requirement: Navigation Links

The navbar SHALL display navigation links "Home", "About", "Contact" positioned to the right of the brand, styled in dark gray.

#### Scenario: Nav links are visible

- **WHEN** the navbar renders
- **THEN** navigation links "Home", "About", "Contact" appear
- **AND** the links are positioned to the right of the brand
- **AND** the links are styled in dark gray (#333333)
- **AND** the links are evenly spaced with horizontal padding

### Requirement: Search Input

The navbar SHALL display a search input on the far right with a magnifying glass icon, rounded corners (20px), and placeholder text "Search".

#### Scenario: Search input renders

- **WHEN** the navbar renders
- **THEN** a search input appears on the far right of the navbar
- **AND** the search input has a magnifying glass icon on its left side
- **AND** the search input has placeholder text "Search"
- **AND** the search input has rounded corners (border-radius: 20px)
- **AND** the search input has a light gray border

#### Scenario: Search input accepts text

- **WHEN** the user types in the search input
- **THEN** the input value updates with the typed text

### Requirement: Footer

The template SHALL display a footer with a link to Component Dock.

#### Scenario: Footer renders

- **WHEN** the app loads
- **THEN** a footer is visible at the bottom
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text contains "Component Dock"

### Requirement: Responsive Behavior

The navbar SHALL collapse navigation links on narrow viewports while keeping brand and search visible.

#### Scenario: Mobile view

- **WHEN** the viewport width is less than 768px
- **THEN** the navigation links are hidden
- **AND** the brand and search bar remain visible
