# Template: Flightseek (Search Form)
<!-- prep-status: shipped-as=flightly -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-search-20` design this prep describes already
> ships as `apps/flightly` (<https://flightly.free.componentdock.com>).
> Do not scaffold `apps/flightseek`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-flightly/spec.md`.

## Purpose

Recreation of ColorLib "Colorlib Search Form V20" — a flight search form widget
with from/to text inputs, date pickers, passenger selector dropdown, and a search
button, all overlaid on a full-viewport background image with a purple-to-blue
gradient card.

- **Source:** https://colorlib.com/wp/template/colorlib-search-20/
- **Live preview (archived):** https://colorlib.com/etc/searchf/colorlib-search-20/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the archived preview CSS (`css/style.css`) at
`https://colorlib.com/etc/searchf/colorlib-search-20/css/style.css`.

| Token                    | Value                                                                |
| ------------------------ | -------------------------------------------------------------------- |
| Font family              | `"Poppins", "Arial", "Helvetica Neue", sans-serif` (Google Fonts)   |
| Page background          | Full-viewport background image (`bg-img-03.jpg`), `center/cover`     |
| Card background gradient | `linear-gradient(to top, #3d2161 0%, #004d91 100%)` — purple to blue |
| Card opacity             | `0.9`                                                                |
| Card border-radius       | `10px`                                                               |
| Card padding (desktop)   | `60px 55px`                                                          |
| Card padding (mobile)    | `40px 30px`                                                          |
| Card max-width           | `900px`                                                              |
| Label color              | `#ffffff` (white)                                                    |
| Label font-size          | `18px`                                                               |
| Label font-weight        | `700` (bold)                                                         |
| Label text-transform     | `capitalize`                                                         |
| Label margin-bottom      | `12px`                                                               |
| Input font-size          | `18px`                                                               |
| Input padding            | `16.5px 20px`                                                        |
| Input placeholder color  | `#cccccc` (light gray)                                               |
| Button background        | `#ff4b5a` (coral-red)                                                |
| Button hover background  | `#eb3746` (darker red)                                               |
| Button text color        | `#ffffff` (white)                                                    |
| Button font-size         | `18px`                                                               |
| Button font-weight       | `700` (bold)                                                         |
| Button text-transform    | `uppercase`                                                          |
| Button border-radius     | `10px`                                                               |
| Button line-height       | `60px`                                                               |
| Button width             | `100%`                                                               |
| Quantity input width     | `55px`                                                               |
| Quantity input color     | `#555555`                                                            |
| Quantity input font-weight | `700`                                                              |
| Input icon color         | `#808080` (gray)                                                     |
| List room name color     | `#999999` (gray)                                                     |
| List room footer border  | `1px solid #e5e5e5`                                                  |
| Dropdown font-family     | `"Lato", "Arial", "Helvetica Neue", sans-serif`                      |
| Responsive breakpoint    | `767px` — card stacks vertically, full width                          |

## Visual description (from screenshot + archived preview)

A full-viewport section with a photographic background image (travel/flight
themed). Centered on the page is a translucent card with a purple-to-blue
gradient overlay (`#3d2161` → `#004d91`, 0.9 opacity) and `border-radius: 10px`.

The card contains a flight search form with a 2-column grid layout:

1. **Row 1:** "from" and "to" text inputs (placeholder: "City, Region or Airport")
2. **Row 2:** "Depart" and "Return" date pickers (native `<input type="date">`)
3. **Row 3:** "Passengers" dropdown selector (default: "1 Adult, 0 Children, 1 Room")
   with a `+` icon, plus a coral-red "search" button

Labels are white, bold, 18px, capitalized. Inputs have white backgrounds with
18px font. The search button is full-width coral-red (`#ff4b5a`) with rounded
corners (`10px`), white uppercase text, and hover darkens to `#eb3746`.

The passengers dropdown shows a room-based selector with adults/children counts
using +/- quantity controls, and an "Add room" link at the bottom.

On mobile (<767px), the card takes full width, columns stack vertically, and
padding adjusts.

## Requirements

### Section: Background

Feature: Background

#### Scenario: Full-viewport background image

- **GIVEN** the page loads
- **THEN** a full-viewport section is displayed
- **AND** the section has a background image covering the entire viewport

#### Scenario: Responsive background

- **GIVEN** the page is viewed on a mobile device
- **THEN** the background image scales to cover the viewport
- **AND** the section maintains full viewport height

### Section: Search card

Feature: Search card

#### Scenario: Card rendered

- **GIVEN** the page loads
- **THEN** a search card is displayed centered on the page
- **AND** the card has a purple-to-blue gradient background (#3d2161 to #004d91)
- **AND** the card has 0.9 opacity
- **AND** the card has border-radius of 10px
- **AND** the card has padding of 60px 55px on desktop

#### Scenario: Card max-width

- **GIVEN** the page loads
- **THEN** the card has a maximum width of 900px
- **AND** the card is horizontally centered

#### Scenario: Card responsive

- **GIVEN** the page is viewed on a screen narrower than 768px
- **THEN** the card takes full width
- **AND** the card padding reduces to 40px 30px

### Section: Form fields — From / To

Feature: From/To fields

#### Scenario: From field rendered

- **GIVEN** the page loads
- **THEN** a "from" text input is displayed
- **AND** the from input has placeholder "City, Region or Airport"
- **AND** the from input has a white label "From" above it

#### Scenario: To field rendered

- **GIVEN** the page loads
- **THEN** a "to" text input is displayed
- **AND** the to input has placeholder "City, Region or Airport"
- **AND** the to input has a white label "To" above it

#### Scenario: From/To side by side

- **GIVEN** the page is viewed on desktop
- **THEN** the from and to fields are displayed side by side in a 2-column layout

#### Scenario: Typing in From field

- **GIVEN** the page loads
- **WHEN** the user types "New York" into the from input
- **THEN** the from input value is "New York"

#### Scenario: Typing in To field

- **GIVEN** the page loads
- **WHEN** the user types "London" into the to input
- **THEN** the to input value is "London"

### Section: Form fields — Depart / Return

Feature: Depart/Return fields

#### Scenario: Depart date field rendered

- **GIVEN** the page loads
- **THEN** a "Depart" date picker is displayed
- **AND** the depart field has a white label "Depart" above it

#### Scenario: Return date field rendered

- **GIVEN** the page loads
- **THEN** a "Return" date picker is displayed
- **AND** the return field has a white label "Return" above it

#### Scenario: Depart/Return side by side

- **GIVEN** the page is viewed on desktop
- **THEN** the depart and return fields are displayed side by side in a 2-column layout

#### Scenario: Selecting depart date

- **GIVEN** the page loads
- **WHEN** the user selects "2026-12-15" as the depart date
- **THEN** the depart date field shows "2026-12-15"

#### Scenario: Selecting return date

- **GIVEN** the page loads
- **WHEN** the user selects "2026-12-22" as the return date
- **THEN** the return date field shows "2026-12-22"

### Section: Passengers selector

Feature: Passengers selector

#### Scenario: Passengers field rendered

- **GIVEN** the page loads
- **THEN** a "Passengers" field is displayed
- **AND** the passengers field shows "1 Adult, 0 Children, 1 Room" by default
- **AND** the passengers field has a white label "Passengers" above it
- **AND** a plus icon is visible next to the passengers field

#### Scenario: Opening passengers dropdown

- **GIVEN** the page loads
- **WHEN** the user clicks the passengers field or plus icon
- **THEN** a dropdown appears showing "Room 1" with Adults and Children counters

#### Scenario: Increasing adults count

- **GIVEN** the passengers dropdown is open
- **WHEN** the user clicks the "+" button next to Adults
- **THEN** the adults count increases by 1
- **AND** the passengers field text updates to reflect the new count

#### Scenario: Decreasing adults count

- **GIVEN** the passengers dropdown is open
- **AND** the adults count is 2
- **WHEN** the user clicks the "-" button next to Adults
- **THEN** the adults count decreases by 1

#### Scenario: Increasing children count

- **GIVEN** the passengers dropdown is open
- **WHEN** the user clicks the "+" button next to Children
- **THEN** the children count increases by 1

#### Scenario: Add room link

- **GIVEN** the passengers dropdown is open
- **THEN** an "Add room" link is visible at the bottom of the dropdown
- **AND** the "Add room" link is separated by a subtle border

### Section: Search button

Feature: Search button

#### Scenario: Search button rendered

- **GIVEN** the page loads
- **THEN** a coral-red "search" button is displayed
- **AND** the button has white uppercase text
- **AND** the button has border-radius of 10px
- **AND** the button takes full width of its column

#### Scenario: Search button hover

- **GIVEN** the search button is visible
- **WHEN** the user hovers over the search button
- **THEN** the button background darkens to #eb3746

#### Scenario: Clicking search with all fields filled

- **GIVEN** the from field has "New York"
- **AND** the to field has "London"
- **AND** the depart date is "2026-12-15"
- **AND** the return date is "2026-12-22"
- **WHEN** the user clicks the search button
- **THEN** the search action is triggered with the entered values

### Section: Responsive behavior

Feature: Responsive behavior

#### Scenario: Mobile layout

- **GIVEN** the page is viewed on a screen narrower than 768px
- **THEN** all form fields stack vertically (single column)
- **AND** the search button takes full width
- **AND** the card padding adjusts to 40px 30px

#### Scenario: Tablet layout

- **GIVEN** the page is viewed on a screen between 768px and 1024px
- **THEN** the form fields remain in 2-column layout
- **AND** the card width adapts to the viewport

## Verification checklist

- [ ] Full-viewport background image with travel/flight theme
- [ ] Centered card with purple-to-blue gradient (#3d2161 → #004d91) at 0.9 opacity
- [ ] Card border-radius: 10px, max-width: 900px
- [ ] "from" and "to" text inputs with "City, Region or Airport" placeholder
- [ ] "Depart" and "Return" native date pickers
- [ ] "Passengers" dropdown with adults/children counters and "Add room" link
- [ ] Coral-red (#ff4b5a) "search" button with white uppercase text, 10px radius
- [ ] Button hover darkens to #eb3746
- [ ] White bold labels (18px, capitalized) above each field
- [ ] 2-column grid layout on desktop, single column on mobile
- [ ] Responsive: card full-width on mobile (<768px), padding adjusts
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] package.json name: @free-react-templates/flightseek
- [ ] public/CNAME: flightseek.free.componentdock.com
- [ ] 100% test coverage
- [ ] Specs validated with npm run spec:validate
