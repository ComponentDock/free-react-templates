# Template: FindSpot (Search Form & Bar)

## Purpose

Recreation of ColorLib Search Form V15.
- **Source slug:** `colorlib-search-15`
- **Preview URL:** `https://preview.colorlib.com/theme/colorlib-search-15/`
- **ColorLib page:** `https://colorlib.com/wp/template/colorlib-search-15/`
- **Description:** Free advanced travel search bar with tabbed interface (Hotels / Car / Flight), date pickers, traveller dropdown, add-on checkboxes, and a full-width search button — over a full-viewport background image.
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

> **Note:** The live preview at `preview.colorlib.com` returned 404. Spec and tokens
> are derived from the ColorLib screenshot and the ColorLib description page.

## Design tokens

| Token              | Value                         | Source              |
|--------------------|-------------------------------|---------------------|
| card-bg            | `#2C3E50` (slate navy, ~90% opacity) | Screenshot card |
| card-bg-solid      | `#2C3E50`                    | Screenshot card     |
| brand-green        | `#5CB85C`                    | Screenshot button   |
| brand-green-hover  | `#4CA74C`                    | Inferred hover      |
| input-bg           | `#FFFFFF`                    | Screenshot inputs   |
| input-border       | `#D5D5D5`                    | Screenshot inputs   |
| input-radius       | `4px`                        | Screenshot inputs   |
| button-radius      | `4px`                        | Screenshot button   |
| label-color        | `#888888`                    | Screenshot labels   |
| placeholder-color  | `#AAAAAA`                    | Screenshot inputs   |
| tab-active-color   | `#FFFFFF`                    | Screenshot tabs     |
| tab-inactive-color | `#8899AA`                    | Screenshot tabs     |
| checkbox-active    | `#5CB85C`                    | Screenshot checkbox |
| font-family        | `"Open Sans", sans-serif`    | Typical ColorLib    |
| text-color         | `#FFFFFF` on card            | Screenshot          |
| background-image   | Full-viewport hero image     | Screenshot          |

## Gherkin requirements

### Background
Given the FindSpot search form page is loaded
When  the page renders
Then  a full-viewport background image is displayed
And   a centered dark semi-transparent search card is visible

### Tab navigation

Scenario: Default tab is Hotels
  Given  the search card is displayed
  Then   the "Hotels" tab is active and highlighted in white
  And    the "Car" tab is visible but inactive (muted)
  And    the "Flight" tab is visible but inactive (muted)

Scenario: Clicking Car tab activates it
  Given  the "Hotels" tab is active
  When   the user clicks the "Car" tab
  Then   the "Car" tab becomes active (white, bold)
  And    the "Hotels" tab becomes inactive (muted)

Scenario: Clicking Flight tab activates it
  Given  the "Hotels" tab is active
  When   the user clicks the "Flight" tab
  Then   the "Flight" tab becomes active (white, bold)
  And    the "Hotels" tab becomes inactive (muted)

### Hotels tab form fields

Scenario: Going To input is displayed
  Given  the "Hotels" tab is active
  Then   an input field labeled "Going To" is visible
  And    it has a location-pin icon on the left
  And    placeholder text "DESTINATION, HOTEL NAME"

Scenario: Check-In and Check-Out date fields are displayed side by side
  Given  the "Hotels" tab is active
  Then   a "Check-In" date input is visible with a calendar icon
  And    a "Check-Out" date input is visible with a calendar icon
  And    both have placeholder "MM/DD/YYYY"
  And    they are displayed in a two-column row

Scenario: Travellers dropdown is displayed
  Given  the "Hotels" tab is active
  Then   a "Travellers" dropdown is visible
  And    it has a person icon on the left
  And    default value shows "1 ADULT, 0 CHILDREN, 1 ROOM"
  And    a dropdown chevron is visible on the right

### Checkboxes

Scenario: Add a flight checkbox
  Given  the "Hotels" tab is active
  Then   a checkbox labeled "Add a flight" is visible
  And    it is checked by default (green)

Scenario: Add a car checkbox
  Given  the "Hotels" tab is active
  Then   a checkbox labeled "Add a car" is visible
  And    it is unchecked by default

Scenario: Toggling a checkbox updates its visual state
  Given  the "Add a car" checkbox is unchecked
  When   the user clicks it
  Then   it becomes checked with a green fill

### Search button

Scenario: Search button is displayed
  Given  the search form is visible
  Then   a full-width "Search" button is visible at the bottom of the form
  And    it has a green background (`#5CB85C`)
  And    white text centered

Scenario: Clicking Search triggers a search action
  Given  the search form is filled
  When   the user clicks the "Search" button
  Then   a search action is triggered (form submit or callback)

### Responsive layout

Scenario: Card is centered on desktop
  Given  the viewport width is >= 768px
  Then   the search card is horizontally centered
  And    the card width is approximately 500-600px

Scenario: Card adapts on mobile
  Given  the viewport width is < 768px
  Then   the search card takes full width with padding
  And    Check-In / Check-Out stack vertically

## Verification checklist

- [ ] Background image fills the full viewport
- [ ] Dark semi-transparent card is centered
- [ ] Tab navigation works (Hotels / Car / Flight) with active state styling
- [ ] "Going To" input has location pin icon and correct placeholder
- [ ] Check-In and Check-Out are side-by-side with calendar icons
- [ ] Travellers dropdown shows default "1 ADULT, 0 CHILDREN, 1 ROOM"
- [ ] "Add a flight" checkbox is checked by default
- [ ] "Add a car" checkbox is unchecked by default
- [ ] Checkboxes toggle with green fill on check
- [ ] Green full-width Search button at bottom
- [ ] Responsive: stacks on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
