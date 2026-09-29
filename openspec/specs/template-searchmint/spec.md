# Spec: SearchMint

## Purpose

Recreation of ColorLib **Search Form/Bar V09** — a minimal, clean search bar snippet with a centered heading, white input, and mint-green search button on a light background.

> Source: https://colorlib.com/wp/template/search-form-bar-09/
> Preview: https://preview.colorlib.com/theme/bootstrap/search-form-bar-09/
> Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-09.jpg

## Design Tokens

| Token                | Value                                 | Notes                    |
| -------------------- | ------------------------------------- | ------------------------ |
| Font family          | `"Poppins", sans-serif`               | Google Fonts             |
| Background           | `#fafafa` (light gray)                | Page background          |
| Heading color        | `#000` (black)                        | Heading text             |
| Heading font-size    | `28px`                                | Heading size             |
| Heading weight       | `400` (normal)                        | Heading weight           |
| Input background     | `#ffffff` (white)                     | Search input field       |
| Input height         | `50px`                                | Input field height       |
| Input font-size      | `14px`                                | Input text size          |
| Input border-radius  | `2px`                                 | Very slight rounding     |
| Input border         | none                                  | No visible border        |
| Input placeholder    | `rgba(0, 0, 0, 0.7)`                  | Placeholder text color   |
| Input box-shadow     | `0px 5px 20px -12px rgba(0,0,0,0.2)`  | Subtle shadow            |
| Button background    | `#01d28e` (mint green)                | Search button background |
| Button color         | `#ffffff` (white)                     | Button text              |
| Button width         | `90px`                                | Fixed button width       |
| Button height        | `50px`                                | Button height            |
| Button border-radius | `2px`                                 | Very slight rounding     |
| Button box-shadow    | `0px 5px 20px -12px rgba(0,0,0,0.34)` | Button shadow            |
| Section padding      | `7em 0`                               | Vertical spacing         |
| Transition           | `0.3s`                                | Form hover transition    |

## Requirements

### Requirement: Centered heading

The template SHALL display "Find What You Need" in Poppins font, 28px, font-weight 400, color black, centered on the page.

#### Scenario: Heading renders correctly

- **WHEN** the template is rendered
- **THEN** a heading "Find What You Need" is visible and centered
- **AND** the heading uses Poppins font, 28px, font-weight 400, color black

### Requirement: Search input

The template SHALL render a search input with placeholder "Search...", white background, 50px height, 2px border-radius, no visible border, and a subtle box shadow.

#### Scenario: Input renders with correct styles

- **WHEN** the template is rendered
- **THEN** a search input is visible with placeholder text "Search..."
- **AND** the input has a white background, 50px height, 2px border-radius
- **AND** the input has no visible border
- **AND** the input has a subtle box shadow

### Requirement: Search button

The template SHALL render a "Search" submit button with mint-green (#01d28e) background, white text, 90px wide, 50px tall, 2px border-radius, and a subtle box shadow.

#### Scenario: Button renders with correct styles

- **WHEN** the template is rendered
- **THEN** a "Search" button is visible to the right of the input
- **AND** the button has a mint-green (#01d28e) background
- **AND** the button text is white
- **AND** the button is 90px wide and 50px tall
- **AND** the button has a subtle box shadow

### Requirement: Form layout

The search input and button SHALL be aligned in a horizontal flex row with space-between, centered on the page with max-width ~640px.

#### Scenario: Form layout renders correctly

- **WHEN** the template is rendered
- **THEN** the search input and button are aligned in a horizontal row
- **AND** the input and button are vertically centered within the row
- **AND** the form is centered on the page with max-width ~640px

### Requirement: Page background

The page background SHALL be #fafafa.

#### Scenario: Background color is correct

- **WHEN** the template is rendered
- **THEN** the page background is #fafafa

### Requirement: Section spacing

The section SHALL have generous vertical padding (~7em top and bottom).

#### Scenario: Section has correct padding

- **WHEN** the template is rendered
- **THEN** the section has generous vertical padding (~7em top and bottom)

### Requirement: Hover transition

The search form SHALL have a smooth 0.3s transition on hover.

#### Scenario: Transition is applied

- **WHEN** the user hovers over the search form area
- **THEN** a smooth 0.3s transition is applied

### Requirement: Responsive behavior

The search form SHALL remain visible and functional on mobile devices, maintaining horizontal layout.

#### Scenario: Mobile layout

- **WHEN** the template is rendered on a mobile device (width < 768px)
- **THEN** the search form remains visible and functional
- **AND** the input and button maintain their horizontal layout

### Requirement: Footer

The template SHALL include a footer linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders with link

- **WHEN** the template is rendered
- **THEN** a footer is present with a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"

### Requirement: Accessibility

The search input SHALL have an associated aria-label, the search button SHALL be a semantic button element, and the heading SHALL use a semantic heading tag.

#### Scenario: Accessibility attributes present

- **WHEN** the template is rendered
- **THEN** the search input has an associated aria-label
- **AND** the search button is a semantic button element
- **AND** the heading uses a semantic heading tag

### Requirement: Form submission

The search form SHALL call an onSearch callback with the trimmed query on submit, and SHALL NOT call it when the input is empty or whitespace-only.

#### Scenario: Submit with valid query

- **WHEN** the user types "dashboard" in the search input
- **AND** the user presses Enter
- **THEN** the onSearch callback is called with "dashboard"

#### Scenario: Submit with empty query

- **WHEN** the user presses Enter without typing
- **THEN** the onSearch callback is NOT called

#### Scenario: Submit with whitespace only

- **WHEN** the user types " " in the search input
- **AND** the user presses Enter
- **THEN** the onSearch callback is NOT called
