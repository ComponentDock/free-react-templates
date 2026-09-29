# Template: SeekQuest (Property Search Form)

## Purpose
Recreation of ColorLib **Search Form Bar 07** — a property/booking search form with four filter fields (Location, Property Type, Property Status, Price Limit) and a prominent pink CTA button. Desktop layout is a horizontal 4-column row with a full-width submit button; stacks vertically on mobile.

- **Source slug:** `search-form-bar-07`
- **Preview URL:** https://preview.colorlib.com/theme/search-form-bar-07/ (404; bootstrap variant: https://preview.colorlib.com/theme/bootstrap/search-form-bar-07/)
- **Screenshot URL:** https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-07.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Note:** Primary reference extracted from bootstrap variant CSS + HTML structure. Screenshot is AVIF format (analyzed from CSS tokens and DOM).

## Design Tokens
Extracted from the bootstrap preview CSS (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| **Brand color** | `#ff62a5` (hot pink) | Used on labels, links, primary button |
| **Brand hover** | `#000000` (black) | Button hover background |
| **Background** | `#fafafa` (off-white) | Page/body background |
| **Form background** | `#ffffff` (white) | Booking form container |
| **Text color** | `gray` (body), `#000` (headings) | Body text gray, headings black |
| **Placeholder color** | `rgba(0,0,0,0.7)` | Dark semi-transparent placeholder |
| **Input placeholder** | `#000` (black) | Form field placeholders |
| **Font family** | `"Poppins", Arial, sans-serif` | Google Fonts — Poppins |
| **Body font-size** | `16px` | Line-height 1.8 |
| **Heading font-size** | `28px` | Normal weight (400) |
| **Label font-size** | `12px` | Uppercase, bold (700), letter-spacing 1px, color #ff62a5 |
| **Button font-size** | `14px` | Uppercase, weight 500 |
| **Button radius** | `0` (square) | Sharp corners, no border-radius |
| **Input border-radius** | `0` (square) | Sharp corners inside form |
| **Input height** | `40px` | Consistent across fields |
| **Input border** | `1px solid rgba(0,0,0,0.05)` | Very subtle border |
| **Input background** | `transparent` | Transparent inside form |
| **Section padding** | `7em 0` | Vertical spacing around section |
| **Form padding (desktop)** | `30px left` | Horizontal padding on md+ |
| **Form padding (mobile)** | `20px` | All sides on mobile |
| **Icon color** | `rgba(0,0,0,0.3)` | Search/dropdown icons |
| **Focus border** | `#fff` | White border on focus/active |
| **Transition** | `0.3s all ease` | On links/buttons |

## Component Structure
The template is a property/booking search form component:

1. **Page title** — "Search Form/Bar #07" (Poppins, 28px, normal weight, black, centered)
2. **Search form** (`.booking-form`) — white background, horizontal flex layout
   - **Location field** — text input with search icon (magnifying glass), placeholder "City/Locality Name"
   - **Property Type field** — select dropdown with options: Commercial, Office, Residential, Villa, Condominium, Apartment
   - **Property Status field** — select dropdown with options: Rent, Sale
   - **Price Limit field** — select dropdown with options: $5,000 to $2,000,000
   - **Search Availability button** — full-width hot pink (#ff62a5) button with text "SEARCH AVAILABILITY" and subtitle "Best Price Guaranteed!"
3. **Responsive behavior** — 4 columns on desktop (md+), stacks vertically on mobile with 20px padding
4. **Form labels** — uppercase, 12px, bold, hot pink color, letter-spacing 1px
5. **Dropdown icons** — down-arrow icons positioned absolutely on the right side of select fields
6. **Search icon** — magnifying glass SVG positioned absolutely on the right of the Location input

## Gherkin Scenarios

```gherkin
Feature: SeekQuest property search form

  Background:
    Given the SeekQuest component is rendered on the page

  Scenario: renders the form heading
    Then a heading "SearchQuest" should be visible above the search form

  Scenario: renders all four filter fields
    Then a Location text input should be visible with placeholder "City/Locality Name"
    And a Property Type select should be visible with options including "Commercial", "Residential", "Villa"
    And a Property Status select should be visible with options "Rent" and "Sale"
    And a Price Limit select should be visible with options from "$5,000" to "$2,000,000"

  Scenario: renders the search button
    Then a "Search Availability" button should be visible
    And the button should display "Best Price Guaranteed!" as subtitle

  Scenario: form fields are interactive
    When the user types "New York" in the Location input
    Then the Location input should contain "New York"

  Scenario: property type can be selected
    When the user selects "Villa" from the Property Type dropdown
    Then the Property Type dropdown should show "Villa"

  Scenario: property status can be selected
    When the user selects "Rent" from the Property Status dropdown
    Then the Property Status dropdown should show "Rent"

  Scenario: price limit can be selected
    When the user selects "$100,000" from the Price Limit dropdown
    Then the Price Limit dropdown should show "$100,000"

  Scenario: form submission
    Given the user has filled in all form fields
    When the user clicks the "Search Availability" button
    Then the form should submit

  Scenario: responsive layout on mobile
    Given the viewport width is less than 768px
    Then the form fields should be stacked vertically
    And the form should have 20px padding

  Scenario: responsive layout on desktop
    Given the viewport width is 768px or greater
    Then the form fields should be arranged in a horizontal row
    And the form should have 30px left padding
```

## Verification Checklist
- [ ] Component renders with correct heading
- [ ] All four form fields present (Location, Property Type, Property Status, Price Limit)
- [ ] Location field has search icon and correct placeholder
- [ ] Dropdown fields have correct options
- [ ] Button is hot pink (#ff62a5) with white text
- [ ] Button hover state changes to black background
- [ ] Form labels are uppercase, 12px, bold, pink
- [ ] Form layout is horizontal on desktop, vertical on mobile
- [ ] Form has white background on #fafafa page
- [ ] Input fields have transparent background with subtle border
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] 100% test coverage
