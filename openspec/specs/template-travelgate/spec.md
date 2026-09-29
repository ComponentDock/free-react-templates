# Template: Travelgate (Travel Search Form)

## Purpose

Recreation of ColorLib Search Form V17 — a multi-tab travel search form widget for hotels, car rentals, and flights. The original is a standalone HTML/CSS search widget with no framework dependencies.

- **Source:** ColorLib Search Form 17
- **Preview:** https://colorlib.com/etc/searchf/colorlib-search-17/
- **ColorLib page:** https://colorlib.com/wp/template/colorlib-search-17/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Category:** Search Form / Widget

## Design Tokens

Extracted from the live preview CSS (`https://colorlib.com/etc/searchf/colorlib-search-17/css/style.css`).

### Colors
| Token | Value | Usage |
|---|---|---|
| `bg-page` | `#e2fbfd` | Full-page background (light mint/cyan) |
| `bg-card` | `#ffffff` | Card body and dropdown background |
| `text-label` | `#333333` | Field labels (bold, 18px) |
| `text-input` | `#666666` | Input text and checkbox text |
| `text-placeholder` | `#cccccc` | Placeholder text |
| `accent` | `#ff8300` | Active tab, submit button background |
| `accent-hover` | `#eb6f00` | Button hover state |
| `tab-inactive` | `rgba(85, 85, 85, 0.6)` | Inactive tab text |
| `border-input` | `#cccccc` | Input underline (2px solid) |
| `checkbox-check` | `#00ad5f` | Checkmark color when checked |
| `add-room-link` | `#00ad5f` | "Add room" link text |

### Typography
| Token | Value | Usage |
|---|---|---|
| `font-body` | `"Lato", sans-serif` | Body text (14px, weight 400) |
| `font-heading` | `"Poppins", sans-serif` | Tab links (22px, weight 500, uppercase) |
| `font-label` | Inherited Lato | Labels (18px, weight 700, capitalize) |
| `font-input` | Inherited Lato | Inputs (18px, weight 700) |
| `font-button` | Inherited Lato | Submit (16px, weight 700, uppercase) |

### Spacing & Layout
| Token | Value | Usage |
|---|---|---|
| `wrapper-max-width` | `680px` | Card wrapper max width |
| `card-padding-top` | `45px` | Tab area top padding |
| `card-padding-sides` | `34px` (tabs), `55px` (content) | Inner padding |
| `card-shadow` | `0px 8px 20px 0px rgba(0,0,0,0.15)` | Card box-shadow |
| `card-radius` | `10px` | Card/tab border-radius |
| `input-border-width` | `2px` | Underline border |
| `input-margin-bottom` | `41px` | Space between input groups |
| `button-height` | `50px` | Submit button line-height |
| `button-margin-top` | `32px` | Space above submit button |

### Interactions
- **Tab switch:** CSS/JS toggle of `.cl-active` class on `.tab-list__item` and `.cl-tab-pane`
- **Traveller dropdown:** Toggle `.cl-show` on `.dropdown-select`; +/- buttons change quantity inputs
- **Room add:** Dynamically appends room entry to `.list-room`
- **Button hover:** Background transitions to `#eb6f00` (0.4s ease)
- **Tab hover:** Color transitions to `#ff8300` (0.4s ease)

## Gherkin Requirements

### Feature: Multi-tab Travel Search Form

  Scenario: Page renders with Hotels tab active by default
    Given the user opens the travel search page
    Then a centered white card is displayed on a light mint background
    And three tabs are visible: "HOTELS", "CAR", "FLIGHT"
    And the "HOTELS" tab is highlighted in orange
    And the Hotels form is visible
    And the Car and Flight forms are hidden

  Scenario: Hotels tab form fields
    Given the Hotels tab is active
    Then the form shows a "Where:" text input with placeholder "City, region or specific hotel"
    And a "Check-In:" date input is displayed
    And a "Check-Out:" date input is displayed
    And a "Travellers:" field shows "1 Adult, 0 Children, 1 Room" with a chevron icon
    And two checkboxes are shown: "Add a flight" (checked) and "Add a car" (unchecked)
    And an orange "SEARCH" button spans the full width

  Scenario: Switch to Car tab
    Given the user clicks the "CAR" tab
    Then the Hotels form is hidden
    And the Car form is displayed with fields: "Location:", "Driver Age:" dropdown, "Car Group:" dropdown
    And "Pick Up:" date and "Time:" dropdown, "Drop Off:" date and "Time:" dropdown
    And a "SEARCH" button is shown

  Scenario: Switch to Flight tab
    Given the user clicks the "FLIGHT" tab
    Then the Hotels and Car forms are hidden
    And the Flight form is displayed with "Origin:" and "Destination:" text inputs
    And "Departing:" and "Returning:" date inputs
    And checkboxes: "First Class", "Business", "Economy" (Economy checked)
    And a "SEARCH" button is shown

  Scenario: Traveller dropdown interaction
    Given the Hotels tab is active
    When the user clicks the "Travellers:" field
    Then a dropdown appears showing "Room 1" with "Adults" and "Children" counters
    And +/- buttons are shown for each counter
    And an "Add room" link appears at the bottom

  Scenario: Increment traveller count
    Given the traveller dropdown is open
    When the user clicks the "+" button next to "Adults"
    Then the adult count increments from 1 to 2
    And the summary text updates to "2 Adult, 0 Children, 1 Room"

  Scenario: Decrement traveller count
    Given the traveller dropdown is open with 2 adults
    When the user clicks the "-" button next to "Adults"
    Then the adult count decrements to 1
    And the minimum count is 0 (cannot go below)

  Scenario: Add room
    Given the traveller dropdown is open
    When the user clicks "Add room"
    Then a "Room 2" section appears below Room 1
    And Room 2 has its own Adults and Children counters

  Scenario: Responsive layout
    Given the user views the form on a mobile device (width < 768px)
    Then the card padding reduces
    And two-column date fields stack vertically
    And tab items stack vertically instead of floating

  Scenario: Submit button hover
    Given the form is visible
    When the user hovers over the "SEARCH" button
    Then the button background transitions from #ff8300 to #eb6f00

  Scenario: Tab hover
    Given the form is visible
    When the user hovers over an inactive tab
    Then the tab text color transitions to orange (#ff8300)

## Verification Checklist

- [ ] Three tabs (Hotels, Car, Flight) render and switch correctly
- [ ] Hotels tab active by default with correct form fields
- [ ] Car tab shows location, driver age, car group, pickup/dropoff dates and times
- [ ] Flight tab shows origin, destination, departing/returning dates, class checkboxes
- [ ] Traveller dropdown opens/closes on click
- [ ] +/- counters increment and decrement correctly with min=0
  [ ] "Add room" dynamically adds a new room section
- [ ] Checkbox toggles work (Add a flight, Add a car, First Class, Business, Economy)
- [ ] Submit button full-width, orange (#ff8300), hover darkens to #eb6f00
- [ ] Card has rounded corners (10px), box shadow, white background
- [ ] Background is light mint (#e2fbfd)
- [ ] Labels are bold, capitalized, dark (#333)
- [ ] Input underlines are 2px solid #cccccc
- [ ] Responsive: stacks on mobile (<768px)
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
