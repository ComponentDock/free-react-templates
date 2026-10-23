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

## Requirements

### Background

#### Scenario: Background

- **GIVEN** a user visits the Querypad page, a full-viewport travel-themed background image is visible and a dark semi-transparent card is centered on the page

### Tab Navigation

#### Scenario: Default tab is hotels

- **GIVEN** the page loads
- **THEN** the "hotels" tab is active by default
- **AND** the hotels form pane is visible
- **AND** the car and flight panes are hidden

#### Scenario: Switch to car tab

- **GIVEN** the page loads
- **WHEN** the user clicks the "car" tab
- **THEN** the car form pane becomes visible
- **AND** the hotels and flight panes are hidden
- **AND** the "car" tab is visually active

#### Scenario: Switch to flight tab

- **GIVEN** the page loads
- **WHEN** the user clicks the "flight" tab
- **THEN** the flight form pane becomes visible
- **AND** the hotels and car panes are hidden
- **AND** the "flight" tab is visually active

### Hotels Form

#### Scenario: Hotels form fields are present

- **GIVEN** the hotels tab is active
- **THEN** a "Going to" text input with placeholder "Destination, hotel name" is visible
- **AND** a check-in date input is visible
- **AND** a check-out date input is visible
- **AND** a "Travellers" input showing "1 Adult, 0 Children, 1 Room" is visible
- **AND** an "Add a flight" checkbox is visible and checked by default
- **AND** an "Add a car" checkbox is visible and unchecked by default
- **AND** a green "search" button is visible

#### Scenario: Traverer dropdown opens

- **GIVEN** the hotels tab is active
- **WHEN** the user clicks the travellers input
- **THEN** a dropdown appears with Room 1 containing Adults and Children counters
- **AND** an "Add room" link is visible

#### Scenario: Traveller counter increment

- **GIVEN** the travellers dropdown is open
- **WHEN** the user clicks the "+" button on Adults counter
- **THEN** the adults count increases by 1

#### Scenario: Traveller counter decrement

- **GIVEN** the travellers dropdown is open
- **WHEN** the users clicks the "-" button on Adults counter
- **THEN** the adults count decreases by 1 (minimum 0)

### Car Form

#### Scenario: Car form fields are present

- **GIVEN** the car tab is active
- **THEN** a "Location" text input is visible
- **AND** a "Driver age" select with values (23–26, default 25) is visible
- **AND** a "Car group" select with values (Group S-car, Group 1, 2, 3) is visible
- **AND** a "Pick up" date input is visible
- **AND** a "Time" select for pick-up is visible (default 10:00 AM)
- **AND** a "Drop off" date input is visible
- **AND** a "Time" select for drop-off is visible (default 10:00 AM)
- **AND** a green "search" button is visible

### Flight Form

#### Scenario: Flight form fields are present

- **GIVEN** the flight tab is active
- **THEN** an "Origin" text input with placeholder "City or airport" is visible
- **AND** a "Destination" text input with placeholder "City or airport" is visible
- **AND** a "Departing" date input is visible
- **AND** a "Returning" date input is visible
- **AND** radio buttons for First Class, Business, Economy are visible
- **AND** Economy is selected by default
- **AND** a green "search" button is visible

#### Scenario: Flight class selection

- **GIVEN** the flight tab is active
- **WHEN** the user clicks "First Class" radio
- **THEN** First Class becomes selected
- **AND** Economy becomes deselected

### Visual Design

#### Scenario: Card styling

- **GIVEN** the page loads
- **THEN** the card has a dark navy background at 90% opacity
- **AND** the card has 10px border-radius
- **AND** form input groups have white backgrounds with 10px border-radius
- **AND** the submit button is green (#00ad5f) with white text and 10px border-radius

#### Scenario: Responsive layout

- **GIVEN** the page loads on a mobile viewport (< 768px)
- **THEN** 2-column rows stack to single column
- **AND** the card padding adjusts for smaller screens
- **AND** tab links reduce to 22px font size

## Verification checklist

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
