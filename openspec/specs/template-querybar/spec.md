# Template: QueryBar (Flight Search Form)

## Purpose

Recreation of ColorLib **Colorlib Search Form V19** — a standalone flight search form widget with a gradient card overlay on a full-viewport background image.

## Source

- ColorLib slug: `colorlib-search-19`
- Preview: `https://colorlib.com/etc/searchf/colorlib-search-19/`
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-19.jpg`

## Design Tokens

- **Font:** Poppins (Google Fonts), sans-serif
- **Card gradient:** linear-gradient(to top, #c949fe 0%, #47a9ff 100%)
- **Card border-radius:** 10px
- **Card padding:** 59px 55px 71px (desktop), 40px 30px 55px (mobile)
- **Labels:** white (#fff), 18px, capitalize
- **Inputs:** border-radius 10px, padding 16.5px 20px, font-size 18px, white bg, color #666, placeholder #ccc
- **Submit button:** bg #00ad5f, border-radius 10px, height 60px, white text, bold, uppercase, hover #00994b
- **Background:** full-viewport cover image (ocean/cliff scene) — use picsum.photos placeholder

## Requirements

### Requirement: Page title

The app SHALL set the document title to "QueryBar — Flight Search" on mount.

#### Scenario: Document title on load

- **WHEN** the app loads
- **THEN** the document title is "QueryBar — Flight Search"

### Requirement: Search form fields

The form SHALL contain From, To, Passengers, Depart, Return fields and a Search button.

#### Scenario: From and To text inputs

- **WHEN** the app loads
- **THEN** two text inputs with placeholder "City, Region or Airport" are visible

#### Scenario: Depart date input

- **WHEN** the app loads
- **THEN** a date input labeled "Depart" is visible

#### Scenario: Return date input

- **WHEN** the app loads
- **THEN** a date input labeled "Return" is visible

#### Scenario: Passengers default value

- **WHEN** the app loads
- **THEN** the Passengers field shows "1 Adult, 0 Children, 1 Room"

#### Scenario: Search button

- **WHEN** the app loads
- **THEN** a button labeled "Search" is visible

### Requirement: Text input interaction

Users SHALL be able to type in the From and To fields.

#### Scenario: Type in From field

- **WHEN** the user types "New York" in the From field
- **THEN** the From field contains "New York"

#### Scenario: Type in To field

- **WHEN** the user types "London" in the To field
- **THEN** the To field contains "London"

### Requirement: Date input interaction

Users SHALL be able to set depart and return dates.

#### Scenario: Set depart date

- **WHEN** the user sets the depart date to "2026-12-25"
- **THEN** the depart date is "2026-12-25"

#### Scenario: Set return date

- **WHEN** the user sets the return date to "2026-12-30"
- **THEN** the return date is "2026-12-30"

### Requirement: Passengers dropdown

The Passengers field SHALL open a dropdown when clicked, showing room controls.

#### Scenario: Open dropdown on field click

- **WHEN** the user clicks the Passengers input
- **THEN** the dropdown is visible with "Room 1"

#### Scenario: Open dropdown on toggle button click

- **WHEN** the user clicks the passengers toggle button
- **THEN** the dropdown is visible with "Room 1"

### Requirement: Adult count controls

Users SHALL be able to increment and decrement adult counts with a minimum of 1.

#### Scenario: Increment adults

- **WHEN** the user clicks the adults plus button
- **THEN** the adults count increases by 1

#### Scenario: Decrement adults

- **WHEN** the user clicks the adults minus button
- **THEN** the adults count decreases by 1

#### Scenario: Adults minimum of 1

- **WHEN** the user clicks the adults minus button when count is 1
- **THEN** the adults count remains 1

### Requirement: Children count controls

Users SHALL be able to increment and decrement children counts with a minimum of 0.

#### Scenario: Increment children

- **WHEN** the user clicks the children plus button
- **THEN** the children count increases by 1

#### Scenario: Decrement children

- **WHEN** the user clicks the children minus button
- **THEN** the children count decreases by 1

#### Scenario: Children minimum of 0

- **WHEN** the user clicks the children minus button when count is 0
- **THEN** the children count remains 0

### Requirement: Room management

Users SHALL be able to add rooms and the summary text SHALL update.

#### Scenario: Add room

- **WHEN** the user clicks "Add room"
- **THEN** a second room appears and the summary shows "2 Rooms"

#### Scenario: Increment adults in room 2

- **WHEN** the user adds a room and clicks the second adults plus button
- **THEN** the summary shows "3 Adults"

#### Scenario: Decrement adults in room 2

- **WHEN** the user adds a room, increments, then decrements the second adults
- **THEN** the summary shows "2 Adults"

#### Scenario: Adults in room 2 minimum

- **WHEN** the user adds a room and clicks the second adults minus button
- **THEN** the second room adults count remains 1

#### Scenario: Increment children in room 2

- **WHEN** the user adds a room and clicks the second children plus button
- **THEN** the summary shows "1 Children"

#### Scenario: Decrement children in room 2

- **WHEN** the user adds a room, increments, then decrements the second children
- **THEN** the second room children count is 0

#### Scenario: Children in room 2 minimum

- **WHEN** the user adds a room and clicks the second children minus button
- **THEN** the second room children count remains 0

### Requirement: Form submission

The form SHALL submit without causing a page reload.

#### Scenario: Submit form

- **WHEN** the user clicks the Search button
- **THEN** the page does not reload and the form remains rendered

### Requirement: Footer

The footer SHALL display a Component Dock link and copyright.

#### Scenario: Component Dock link

- **WHEN** the app loads
- **THEN** the footer contains a link to "https://www.componentdock.com/" labeled "Component Dock"

#### Scenario: Copyright text

- **WHEN** the app loads
- **THEN** the footer shows "QueryBar. All rights reserved."
