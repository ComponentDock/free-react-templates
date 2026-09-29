# Template: SearchQuint (Search Form / Header Nav)

## Purpose

Recreation of ColorLib "Search Form/Bar V15" — a header-reveal search form snippet. The page features a collapsible search bar that slides down from the top (overlaying the navbar) when toggled via a search icon in the navigation. The search bar has a gray background with a centered form (input + blue "Search" button) and a close button. Below is a standard navbar with "Brand" text and navigation links.

- **Source:** https://colorlib.com/wp/template/search-form-bar-15/
- **Preview (live):** https://preview.colorlib.com/theme/bootstrap/search-form-bar-15/
- **Description:** "The best free header reveal search form snippet that operates flawlessly on all modern devices, mobile and desktop."
- **Category:** Search Form & Bar Templates (header reveal search form)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the live preview CSS (`css/style.css`).

| Token                     | Value                                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| Font family               | `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` (weight 400)             |
| Brand / primary color     | `#007bff` (Bootstrap blue)                                                                      |
| Button background         | `#007bff`                                                                                       |
| Button text               | `#fff` (white)                                                                                  |
| Button hover bg           | `#0069d9`                                                                                       |
| Button border             | `#007bff` (same as bg, effectively none visible)                                                |
| Search bar background     | `#efefef` (light gray)                                                                          |
| Search bar transition     | `margin-top 1s cubic-bezier(0.23, 1, 0.32, 1)` (slide-down reveal)                             |
| Page background           | `#fff` (white)                                                                                  |
| Navbar text/link color    | Default dark (`#212529`), links hover to brand blue                                              |
| Search close icon color   | `#000` (black)                                                                                  |
| Content area text         | `#757575` (gray)                                                                                |
| Form control border       | `#ced4da` (gray border)                                                                         |
| Form control focus ring   | `0 0 0 0.2rem rgba(0, 123, 255, 0.25)` (blue glow)                                             |
| Button border-radius      | Default (none — square corners, Bootstrap default)                                              |
| Input border-radius       | Default (none — square corners)                                                                 |
| Search icon size          | Inline SVG, `20px` font-size equivalent                                                          |
| Close icon size           | `20px` font-size equivalent                                                                     |
| Search bar z-index        | `99999`                                                                                         |
| Search bar height         | Auto, vertically centered form                                                                  |
| Content min-height        | Fills remaining viewport after navbar                                                           |

## Requirements

### Requirement: Collapsible search overlay bar

The page SHALL display a full-width search bar that slides down from the top of the page when the search icon is clicked, and slides back up when the close button is clicked.

#### Scenario: Search bar hidden by default

- **WHEN** the page loads
- **THEN** the search bar is NOT visible (off-screen above the page)
- **AND** the navbar is visible at the top

#### Scenario: Search bar opens on icon click

- **WHEN** the user clicks the search icon in the navigation bar
- **THEN** the search bar slides down from the top over 1 second (cubic-bezier transition)
- **AND** the search bar has a gray background (`#efefef`)
- **AND** the search bar contains a centered form with an input and "Search" button
- **AND** a close (X) button is visible at the top-right of the search bar

#### Scenario: Search bar closes on X click

- **WHEN** the search bar is open and the user clicks the close (X) button
- **THEN** the search bar slides back up off-screen

### Requirement: Search form layout

The search form inside the overlay bar SHALL be horizontally centered with a "Search" submit button on the left and a text input on the right, both inline.

#### Scenario: Form elements are inline

- **WHEN** the search bar is open
- **THEN** a form is visible, centered horizontally (max-width ~7 of 12 columns)
- **AND** the "Search" button is on the left side of the form
- **AND** the search input is on the right side of the form
- **AND** the button has a blue background (`#007bff`) and white text
- **AND** the input has placeholder text "Search..."

### Requirement: Navigation bar

The navbar SHALL display a "Brand" text link on the left, navigation links (Home, About, Contact) on the right, and a search icon toggle.

#### Scenario: Navbar renders correctly

- **WHEN** the page loads
- **THEN** a navigation bar is visible
- **AND** the text "Brand" appears on the left side
- **AND** "Home", "About", and "Contact" links appear on the right side
- **AND** a search icon (magnifying glass) appears to the right of the navigation links

#### Scenario: Search icon toggles search bar

- **WHEN** the user clicks the search icon in the navbar
- **THEN** the search bar slides down into view

### Requirement: Content area

Below the navbar, the page SHALL display a centered message prompting the user to click the search icon.

#### Scenario: Instructional text visible

- **WHEN** the page loads
- **THEN** a centered paragraph is visible below the navbar
- **AND** the paragraph contains text instructing the user to click the search icon
- **AND** the text color is gray (`#757575`)

### Requirement: Responsive behavior

The template SHALL be responsive, adapting the search form and navbar for mobile devices.

#### Scenario: Mobile layout

- **WHEN** the viewport width is less than 768px
- **THEN** the search form stacks vertically (button above input)
- **AND** the "Brand" text is centered
- **AND** the navigation links adjust for mobile display

## Verification checklist

- [ ] Search bar slides down/up with cubic-bezier transition
- [ ] Search bar background is `#efefef`
- [ ] Close button (X) is positioned top-right inside search bar
- [ ] Search form is centered with button on left, input on right
- [ ] Button has `#007bff` background, white text, no border-radius
- [ ] Input has placeholder "Search..."
- [ ] Navbar shows "Brand" on left, nav links + search icon on right
- [ ] Content area shows instructional text in gray
- [ ] Search icon in navbar toggles the search bar open
- [ ] Close icon in search bar toggles it closed
- [ ] Responsive at mobile breakpoints
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage
