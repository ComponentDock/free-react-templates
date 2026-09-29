# Template: Roamgate (Search Form & Bar)

## Purpose

Recreation of ColorLib's "Search Form V18" — a travel-focused search box
template with tabbed search forms for Hotels, Car, and Flight queries.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-search-18/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-search-18/ (404 at time of prep — screenshot used as primary reference)
- **Category:** Search Form & Bar Templates
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from ColorLib page CSS and screenshot analysis:

| Token            | Value                                  | Notes                                      |
|------------------|----------------------------------------|--------------------------------------------|
| Brand color      | `#1a73e8` (blue)                       | Primary accent, button background           |
| Brand hover      | `#1464cc` (darker blue)                | Button hover state                          |
| Body text        | `#26282b` (near-black)                 | Body font color                             |
| Card background  | `rgba(20,25,40,0.85)` (dark navy)      | Semi-transparent dark overlay               |
| Field background | `#ffffff` (white)                       | Input fields background                     |
| Field border     | `#d1d5db` (light gray)                 | Subtle border on inputs                     |
| Tab active       | `#ffffff` (white)                       | Active tab text                             |
| Tab inactive     | `rgba(255,255,255,0.6)` (muted white)  | Inactive tab text                           |
| Font family      | System sans-serif (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif) | Clean sans-serif |
| Font weight      | 600 (tabs), 400 (fields)               | Semi-bold for tab labels                    |
| Button radius    | `8px` (rounded-lg)                      | Rounded search button                       |
| Field radius     | `8px` (rounded-lg)                      | Rounded input fields                        |
| Background image | Full-viewport travel photo (sunset beach)| Placeholder via picsum.photos              |

## Visual Design (from screenshot)

The template is a single full-viewport section centered vertically and
horizontally. A scenic travel photo (sunset beach with palm trees and
silhouette of a person) fills the entire viewport. Over this, a dark
semi-transparent card (dark navy/charcoal with rounded corners) is
centered and contains:

1. **Tab bar** at the top of the card — three tabs: HOTELS (active, white),
   CAR, FLIGHT (muted). Tabs are text-only, uppercase, semi-bold.
2. **Search fields** below the tabs — the form changes per tab:
   - **HOTELS:** Where field (full width, with magnifying glass icon on right),
     Check-In / Check-Out date fields (two-column), Travellers dropdown + SEARCH button (two-column).
   - **CAR:** Pickup Location field, Pick-Up Date/Time + Drop-Off Date/Time, Vehicle Type dropdown + SEARCH button.
   - **FLIGHT:** From/To fields (two-column), Departure/Return date fields,
     Passengers dropdown + SEARCH button.
3. All fields have white backgrounds, light gray borders, rounded corners,
   and placeholder text in light gray.
4. The SEARCH button is full-width of its column, blue (#1a73e8),
   white text, rounded corners, uppercase.

## Gherkin Requirements

### Scenario: Full-viewport background
```
Given the user opens Roamgate
Then a full-viewport background image is visible
And the background image covers the entire viewport
```

### Scenario: Search card is centered
```
Given the user opens Roamgate
Then a dark semi-transparent search card is centered on screen
And the card has rounded corners
```

### Scenario: Tab bar renders three tabs
```
Given the user opens Roamgate
Then three tabs are visible: "HOTELS", "CAR", "FLIGHT"
And "HOTELS" tab is active by default
```

### Scenario: Switching tabs changes the form
```
Given the Hotels tab is active
When the user clicks the "CAR" tab
Then the Hotels form is hidden
And a Car rental form is shown with fields: Pickup Location, Pick-Up Date/Time, Drop-Off Date/Time, Vehicle Type
```

```
Given the Hotels tab is active
When the user clicks the "FLIGHT" tab
Then the Hotels form is hidden
And a Flight search form is shown with fields: From, To, Departure, Return, Passengers
```

### Scenario: Hotels form fields
```
Given the Hotels tab is active
Then a "Where" text input is visible with placeholder "City, region or specific hotel"
And a "Check-In" date input is visible with placeholder "mm/dd/yyyy"
And a "Check-Out" date input is visible with placeholder "mm/dd/yyyy"
And a "Travellers" dropdown is visible with default "1 Adult, 0 Children, 1 Room"
And a "SEARCH" button is visible
```

### Scenario: Where field has search icon
```
Given the Hotels tab is active
Then the Where field displays a magnifying glass icon on the right side
```

### Scenario: Car form fields
```
Given the Car tab is active
Then a "Pickup Location" text input is visible
And a "Pick-Up Date/Time" input is visible
And a "Drop-Off Date/Time" input is visible
And a "Vehicle Type" dropdown is visible
And a "SEARCH" button is visible
```

### Scenario: Flight form fields
```
Given the Flight tab is active
Then a "From" text input is visible
And a "To" text input is visible
And a "Departure" date input is visible
And a "Return" date input is visible
And a "Passengers" dropdown is visible
And a "SEARCH" button is visible
```

### Scenario: SEARCH button styling
```
Given any tab is active
Then the SEARCH button has a blue background (#1a73e8)
And the SEARCH button text is white and uppercase
And the SEARCH button has rounded corners
```

### Scenario: Card transparency
```
Given the user opens Roamgate
Then the search card has a semi-transparent dark background
And the background image is partially visible through the card
```

### Scenario: Field styling
```
Given any tab is active
Then all input fields have white backgrounds
And all input fields have light gray borders
And all input fields have rounded corners
And all input fields have placeholder text in light gray
```

### Scenario: Responsive layout
```
Given the user opens Roamgate on a mobile device
Then the search card fills most of the viewport width
And the form fields stack vertically
And the date fields stack vertically instead of side-by-side
```

## Verification Checklist

- [ ] Full-viewport background image covers the entire screen
- [ ] Dark semi-transparent card centered with rounded corners
- [ ] Three tabs (HOTELS, CAR, FLIGHT) with HOTELS active by default
- [ ] Tab switching shows correct form for each tab
- [ ] Hotels form has Where, Check-In, Check-Out, Travellers, SEARCH
- [ ] Car form has Pickup Location, Pick-Up Date/Time, Drop-Off Date/Time, Vehicle Type, SEARCH
- [ ] Flight form has From, To, Departure, Return, Passengers, SEARCH
- [ ] Where field has magnifying glass search icon
- [ ] All fields have white backgrounds, light gray borders, rounded corners
- [ ] SEARCH button is blue (#1a73e8), white text, uppercase, rounded
- [ ] Card is semi-transparent (background image shows through)
- [ ] Responsive: fields stack vertically on mobile
- [ ] No references to ColorLib in any app code
- [ ] Footer links to ComponentDock
- [ ] CNAME: roamgate.free.componentdock.com
- [ ] Tests pass at 100% coverage
