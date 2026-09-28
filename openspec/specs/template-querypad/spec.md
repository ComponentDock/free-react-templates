# Template: Querypad (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search Form V15" — a versatile advanced
travel search bar with tabbed forms for hotels, cars, and flights.

- **Source:** https://colorlib.com/wp/template/colorlib-search-15/
- **Preview URL:** https://colorlib.com/etc/searchf/colorlib-search-15/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Category:** Search Form / Travel Booking

## Design Tokens

Extracted from `https://colorlib.com/etc/searchf/colorlib-search-15/css/style.css`:

| Token | Value |
|---|---|
| Font family | `"Poppins", "Arial", "Helvetica Neue", sans-serif` |
| Font weights | 400 (body), 500 (tabs), 700 (labels, button) |
| Body font size | 14px |
| Brand / button color | `#00ad5f` (green) |
| Button hover | `#00994b` |
| Button text | `#fff` |
| Button border-radius | `10px` |
| Button height | 50px line-height |
| Card background | `rgba(17, 25, 54, 0.9)` (dark navy, 90% opacity) |
| Card border-radius | `10px` |
| Input group background | `#ffffff` |
| Input group border-radius | `10px` |
| Input text color | `#808080` (uppercase) |
| Input font size | 16px |
| Label color | `#555` |
| Label font size | 12px, bold |
| Tab link color (inactive) | `#999` |
| Tab link color (active) | `#fff` |
| Tab link font size | 24px, weight 500 |
| Icon color (inputs) | `#ccc` |
| Page background | full-viewport background image (travel scene) |
| Page padding-top | 165px (desktop), 120px (mobile) |
| Page padding-bottom | 100px (desktop), 250px (mobile) |
| Wrapper max-width | 720px, centered |
| Dropdown shadow | `0px 8px 20px 0px rgba(0, 0, 0, 0.15)` |
| Checkbox/radio bg | `#fff` |
| Link/add-room color | `#00ad5f` |
| Transition | `all 0.4s ease` |

## Structure (section order, 1:1)

1. **Background wrapper** — full-viewport background image with padding
2. **Card** — dark semi-transparent card centered at 720px max-width
3. **Tab navigation** — horizontal tab bar: "hotels", "car", "flight"
4. **Hotels tab pane** — form with:
   - "Going to" text input with pin icon
   - Check-in / Check-out date inputs (2-column row)
   - "Travellers" input with dropdown (adults/children/rooms selector)
   - "Add a flight" / "Add a car" checkboxes
   - "search" button (green, full-width)
5. **Car tab pane** — form with:
   - "Location" text input with pin icon
   - Driver age select / Car group select (2-column row)
   - Pick up date / Time select (2-column row)
   - Drop off date / Time select (2-column row)
   - "search" button
6. **Flight tab pane** — form with:
   - "Origin" text input with pin icon
   - "Destination" text input with pin icon
   - Departing / Returning date inputs (2-column row)
   - Class radio buttons: First Class / Business / Economy
   - "search" button

## Gherkin Scenarios

### Background

Given a user visits the Querypad page, a full-viewport travel-themed background image is visible and a dark semi-transparent card is centered on the page.

### Tab Navigation

Scenario: Default tab is hotels
  Given the page loads
  Then the "hotels" tab is active by default
  And the hotels form pane is visible
  And the car and flight panes are hidden

Scenario: Switch to car tab
  Given the page loads
  When the user clicks the "car" tab
  Then the car form pane becomes visible
  And the hotels and flight panes are hidden
  And the "car" tab is visually active

Scenario: Switch to flight tab
  Given the page loads
  When the user clicks the "flight" tab
  Then the flight form pane becomes visible
  And the hotels and car panes are hidden
  And the "flight" tab is visually active

### Hotels Form

Scenario: Hotels form fields are present
  Given the hotels tab is active
  Then a "Going to" text input with placeholder "Destination, hotel name" is visible
  And a check-in date input is visible
  And a check-out date input is visible
  And a "Travellers" input showing "1 Adult, 0 Children, 1 Room" is visible
  And an "Add a flight" checkbox is visible and checked by default
  And an "Add a car" checkbox is visible and unchecked by default
  And a green "search" button is visible

Scenario: Traverer dropdown opens
  Given the hotels tab is active
  When the user clicks the travellers input
  Then a dropdown appears with Room 1 containing Adults and Children counters
  And an "Add room" link is visible

Scenario: Traveller counter increment
  Given the travellers dropdown is open
  When the user clicks the "+" button on Adults counter
  Then the adults count increases by 1

Scenario: Traveller counter decrement
  Given the travellers dropdown is open
  When the users clicks the "-" button on Adults counter
  Then the adults count decreases by 1 (minimum 0)

### Car Form

Scenario: Car form fields are present
  Given the car tab is active
  Then a "Location" text input is visible
  And a "Driver age" select with values (23–26, default 25) is visible
  And a "Car group" select with values (Group S-car, Group 1, 2, 3) is visible
  And a "Pick up" date input is visible
  And a "Time" select for pick-up is visible (default 10:00 AM)
  And a "Drop off" date input is visible
  And a "Time" select for drop-off is visible (default 10:00 AM)
  And a green "search" button is visible

### Flight Form

Scenario: Flight form fields are present
  Given the flight tab is active
  Then an "Origin" text input with placeholder "City or airport" is visible
  And a "Destination" text input with placeholder "City or airport" is visible
  And a "Departing" date input is visible
  And a "Returning" date input is visible
  And radio buttons for First Class, Business, Economy are visible
  And Economy is selected by default
  And a green "search" button is visible

Scenario: Flight class selection
  Given the flight tab is active
  When the user clicks "First Class" radio
  Then First Class becomes selected
  And Economy becomes deselected

### Visual Design

Scenario: Card styling
  Given the page loads
  Then the card has a dark navy background at 90% opacity
  And the card has 10px border-radius
  And form input groups have white backgrounds with 10px border-radius
  And the submit button is green (#00ad5f) with white text and 10px border-radius

Scenario: Responsive layout
  Given the page loads on a mobile viewport (< 768px)
  Then 2-column rows stack to single column
  And the card padding adjusts for smaller screens
  And tab links reduce to 22px font size

## Verification Checklist

- [ ] Background image covers full viewport
- [ ] Card is centered with 720px max-width, dark semi-transparent background
- [ ] Three tabs render: hotels, car, flight
- [ ] Active tab link is white; inactive tabs are #999
- [ ] Hotels form: destination, check-in/out dates, travellers dropdown, checkboxes, search button
- [ ] Car form: location, driver age, car group, pick-up/drop-off date+time, search button
- [ ] Flight form: origin, destination, departing/returning dates, class radios, search button
- [ ] Traveraller dropdown with room management (adults/children counters, add room)
- [ ] Green (#00ad5f) submit buttons with 10px radius, 50px height
- [ ] Input groups have white bg, 10px radius, uppercase gray text
- [ ] Form icons (pin, calendar, clock, user, chevron) render correctly
- [ ] Responsive: columns stack on mobile, padding adjusts
- [ ] Tab switching works (only one pane visible at a time)
- [ ] Counter +/- buttons work in traveller dropdown
- [ ] No references to ColorLib in app code
- [ ] Footer links to Component Dock
