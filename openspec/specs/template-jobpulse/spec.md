# Template: Jobpulse (Job Search Form Bar)

## Purpose

A full-viewport job search form template with a solid blue background, centered heading, and a horizontal search bar containing keyword input, location input, budget dropdown, and a search button. Recreates the ColorLib "Search Form Bar 08" design.

## Source

- ColorLib slug: `search-form-bar-08`
- Preview URL: `https://preview.colorlib.com/theme/search-form-bar-08/` (404 — using screenshot as reference)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-08.jpg`

## Design Tokens (from screenshot)

- **Background**: Solid blue (`#4a90d9`) covering full viewport
- **Font**: Poppins (Google Fonts)
- **Heading**: White, large, centered
- **Input fields**: White background, light gray border, rounded corners, search icon
- **Budget dropdown**: White background, styled select
- **Search button**: Black background, white text, uppercase, rectangular
- **Footer**: White text on blue, links to Component Dock

## Requirements

1. **Full-viewport blue background** — The template SHALL render a solid blue background covering the entire viewport.
2. **Centered heading** — The template SHALL display "Find For A Jobs" in large white text, centered.
3. **Search form** — The template SHALL provide a horizontal search form with keyword input, location input, budget dropdown, and search button.
4. **Keyword input** — The search form SHALL include a text input for job keywords with placeholder "Keywords (e.g Job Title, Position...)" and a search icon.
5. **Location input** — The search form SHALL include a text input for location with placeholder "Location (City, Country...)" and a search icon.
6. **Budget dropdown** — The search form SHALL include a dropdown select for budget range with options from $100-$200 to $1000+.
7. **Search button** — The search form SHALL include a "Search Job" submit button styled with black background and white text.
8. **Form submission** — The search form SHALL call an onSearch callback with keywords, location, and budget values on submit.
9. **Responsive layout** — The search form SHALL stack vertically on small screens and display horizontally on larger screens.
10. **Footer** — The template SHALL include a footer linking to https://www.componentdock.com/ branded as "Component Dock".
11. **Accessibility** — The search form SHALL use semantic HTML with proper labels and ARIA attributes.

## Scenarios

### Scenario: Renders search form with all fields

- Given the template is rendered
- Then a search form is visible
- And a keyword input field is present
- And a location input field is present
- And a budget dropdown is present
- And a "Search Job" button is present

### Scenario: User can type in keyword field

- Given the template is rendered
- When the user types "developer" in the keyword field
- Then the keyword field contains "developer"

### Scenario: User can type in location field

- Given the template is rendered
- When the user types "New York" in the location field
- Then the location field contains "New York"

### Scenario: User can select budget option

- Given the template is rendered
- When the user selects "Budget: $400 - $600" from the budget dropdown
- Then the budget dropdown shows "Budget: $400 - $600"

### Scenario: Form submission triggers callback

- Given the template is rendered with an onSearch callback
- When the user fills in keywords "designer", location "London", budget "Budget: $600 - $800"
- And clicks "Search Job"
- Then onSearch is called with { keywords: "designer", location: "London", budget: "Budget: $600 - $800" }

### Scenario: Form submits with empty fields

- Given the template is rendered with an onSearch callback
- When the user clicks "Search Job" without entering any values
- Then onSearch is called with empty keywords, empty location, and default budget

### Scenario: Footer links to Component Dock

- Given the template is rendered
- Then a "Component Dock" link is visible in the footer
- And the link points to https://www.componentdock.com/
- And the link opens in a new tab
