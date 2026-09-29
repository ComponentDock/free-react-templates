# Template: SearchSpark (Search Form Bar)

## Purpose

Recreation of ColorLib **Search Form Bar 03** — a minimalist, centered search bar component with a coral-red circular search icon button positioned on the LEFT side of the input field. Single-page, single-section template focused on the search widget with a title heading.

## Source

- ColorLib slug: `search-form-bar-03`
- Preview: `https://preview.colorlib.com/theme/search-form-bar-03/` (returns 404; fallback to screenshot)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-03.jpg`
- ColorLib page: `https://colorlib.com/wp/template/search-form-bar-03/`
- Category: Search Form & Bar Templates

## Design Tokens (from screenshot analysis)

- **Font:** Poppins (Google Fonts), sans-serif
- **Page background:** #f5f5f5 (very light warm gray)
- **Title text:** #333 (dark gray), 28px, font-weight 500, centered
- **Search input container:** centered, max-width ~520px, relative positioning
- **Search input:** white (#fff) background, border: 1px solid #e0e0e0, border-radius: 50px (pill shape), padding: 14px 20px 14px 55px (extra left padding for circular button), font-size: 16px, color: #333, placeholder: #999
- **Search button (circle):** background: #ef5350 (Material coral-red), border-radius: 50%, width: 44px, height: 44px, white magnifying glass icon (lucide-react Search), positioned absolutely inside input LEFT side
- **Box shadow on input:** subtle (0 2px 8px rgba(0,0,0,0.1))
- **Footer:** standard Component Dock footer

### Key difference from Search Form Bar 02 (SearchVane)
- Button color: coral-red (#ef5350) vs blue (#2196f3)
- Button position: LEFT side of input vs right side
- No hover-expand animation — the input is always fully visible (not collapsed to a circle)

## Section Structure

1. **Page wrapper** — full viewport, centered flexbox (vertical + horizontal), min-height 100vh, bg #f5f5f5
2. **Search card** — centered container with title and search bar
   - **Title** — "Search Form/Bar #03" or simplified to "Search", centered, dark text
   - **Search bar** — search input with coral-red circular icon button on LEFT side
3. **Footer** — Component Dock attribution

## Requirements

### Requirement: Page title
The app SHALL set the document title to "SearchSpark" on mount.

#### Scenario: Document title on load
- **WHEN** the app loads
- **THEN** the document title is "SearchSpark"

### Requirement: Page layout
The page SHALL display a vertically centered layout with the search bar centered both horizontally and vertically.

#### Scenario: Centered layout
- **WHEN** the app loads
- **THEN** the search bar component is vertically and horizontally centered on the page

#### Scenario: Page background color
- **WHEN** the app loads
- **THEN** the page background is light gray (#f5f5f5)

### Requirement: Title text
The search card SHALL display a title above the search bar.

#### Scenario: Title visible
- **WHEN** the app loads
- **THEN** a title text ("Search") is visible above the search input

#### Scenario: Title styling
- **WHEN** the app loads
- **THEN** the title is centered, dark gray text (#333), and uses the Poppins font

### Requirement: Search input field
The search bar SHALL contain a text input field with placeholder text.

#### Scenario: Input visible
- **WHEN** the app loads
- **THEN** a text input with placeholder "Search..." is visible

#### Scenario: Input styling
- **WHEN** the app loads
- **THEN** the input has a white background, rounded pill shape (border-radius: 50px), and a subtle box shadow

### Requirement: Search button
The search bar SHALL display a coral-red circular search icon button on the LEFT side of the input.

#### Scenario: Button visible
- **WHEN** the app loads
- **THEN** a coral-red circular button with a magnifying glass icon is visible on the left side of the search input

#### Scenario: Button styling
- **WHEN** the app loads
- **THEN** the button is coral-red (#ef5350), circular (border-radius: 50%), 44x44px, and contains a white search icon

#### Scenario: Button position
- **WHEN** the app loads
- **THEN** the search button is positioned on the LEFT side of the input field (not the right)

### Requirement: Search input interaction
Users SHALL be able to type text into the search input field.

#### Scenario: Type in search field
- **WHEN** the user types "hello world" in the search input
- **THEN** the search input contains "hello world"

#### Scenario: Clear search input
- **WHEN** the user types "test" in the search input and then clears it
- **THEN** the search input is empty

### Requirement: Form submission
The search form SHALL handle submission without a page reload.

#### Scenario: Submit search
- **WHEN** the user types "query" in the search input and presses Enter
- **THEN** the page does not reload and the form remains rendered

### Requirement: Responsive design
The search bar SHALL be responsive and work on mobile screen sizes.

#### Scenario: Mobile layout
- **WHEN** the viewport width is 375px
- **THEN** the search bar remains centered and functional

### Requirement: Footer
The footer SHALL display a Component Dock link and copyright.

#### Scenario: Component Dock link
- **WHEN** the app loads
- **THEN** the footer contains a link to "https://www.componentdock.com/" labeled "Component Dock"

#### Scenario: Copyright text
- **WHEN** the app loads
- **THEN** the footer shows "SearchSpark. All rights reserved."
