# Template: CitySeek (Search Form)

## Purpose

Recreation of ColorLib **Search Form 1** (`https://colorlib.com/wp/template/colorlib-search-1/`).
Preview URL: `https://preview.colorlib.com/theme/colorlib-search-1/` (unreachable at time of prep — fell back to screenshot + ColorLib page).

**Category**: Search Form & Bar Templates
**Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
**Description**: A free city search template for directory, listing, or travel-related websites. Features a full-viewport hero with a cityscape background image, a large white heading, and a semi-transparent dark search bar with two input fields and a blue Search button.

## Design Tokens

- **Primary / Brand Colors**:
  - Hero overlay: semi-transparent dark (`rgba(0,0,0,0.4)` to `rgba(0,0,0,0.5)`)
  - Search bar background: semi-transparent dark (`rgba(0,0,0,0.5)`)
  - Input background: white (`#ffffff`)
  - Search button: medium blue (`#4a7cbe` / approx `#5b8ec9`)
  - Heading text: white (`#ffffff`)
  - Placeholder text: light gray (`#999999` / `#aaaaaa`)
- **Font Family**: System sans-serif stack (source uses Bootstrap-compatible sans-serif; likely Helvetica/Arial or similar). Use `Inter, system-ui, sans-serif`.
- **Button Shape**: Rectangular with slight rounding (approx `rounded` or `rounded-sm`), full height of search bar, blue background, white text, bold.
- **Section Backgrounds**:
  - Hero: full-viewport background image with dark overlay, no separate header/nav.
  - No additional sections visible in the screenshot — single-section search landing page.
- **Layout**: Centered content, full-width/height hero, search form horizontally centered with two inputs side-by-side and a Search button on the right.

## Gherkin Requirements & Scenarios

### Feature: City Search Landing Page

As a visitor, I want to search for cities, attractions, or locations using a clean search form so I can find what I'm looking for quickly.

#### Scenario: Hero section renders with background and heading

- **Given** the user visits the CitySeek page
- **Then** a full-viewport hero section is displayed
- **And** a large white heading reads "Discover the Amazing City"
- **And** the hero has a cityscape background image with a dark overlay

#### Scenario: Search form displays two input fields and a button

- **Given** the user views the hero section
- **Then** a semi-transparent dark search bar is visible
- **And** the search bar contains two white input fields side by side
- **And** the first input has placeholder text "What are you looking for?"
- **And** the second input has placeholder text "Location"
- **And** a blue "Search" button is positioned to the right of the inputs

#### Scenario: Search form is responsive on mobile

- **Given** the user views the page on a mobile device
- **Then** the search inputs stack vertically
- **And** the Search button spans full width below the inputs
- **And** the heading remains centered and readable

#### Scenario: Footer attribution

- **Given** the user scrolls to the bottom of the page
- **Then** the footer links to `https://www.componentdock.com/` ("Component Dock")

## Verification Checklist

- [ ] Spec valid (`npm run spec:validate`)
- [ ] Hero section renders with background image and dark overlay
- [ ] Heading "Discover the Amazing City" in white, large font
- [ ] Search bar with two inputs and blue Search button
- [ ] Responsive layout (stacked inputs on mobile)
- [ ] Footer links to Component Dock
- [ ] 100% test coverage (`npm run test:coverage`)
