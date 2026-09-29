# Template: QueryBar (Search Form & Bar)

## Purpose

Recreation of [Colorlib Search Form V18](https://colorlib.com/wp/template/colorlib-search-18/).

- **Preview URL (live):** https://colorlib.com/etc/searchf/colorlib-search-18/
- **Preview URL (official):** https://preview.colorlib.com/theme/colorlib-search-18/ (404 — use live URL or screenshot as reference)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-18.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Description:** A travel search form widget with tab navigation (hotels / car / flight), each tab containing a different search form. Full-screen background image with a centered dark card. No footer — this is a standalone search widget, not a full-page site.

## Design Tokens

| Token              | Value                                  | Source                |
| ------------------ | -------------------------------------- | --------------------- |
| Font (headings)    | `"Poppins", sans-serif`               | CSS `font-family`     |
| Font (inputs/labels)| `"Lato", sans-serif`                  | CSS `font-family`     |
| Brand primary      | `#6c7ae0` (indigo)                    | `.btn-submit` bg      |
| Brand primary hover| `#5866cc` (darker indigo)             | `.btn-submit:hover`   |
| Card background    | dark (#1a1a2e approx)                 | `.card-4` CSS         |
| Card border-radius | `4px`                                 | `.cl-card` CSS        |
| Submit button radius| `10px`                                | `.btn-submit` CSS     |
| Input background   | `#ffffff`                             | `.input--style-1`     |
| Input border       | `1px solid #aaa`                      | `.input--style-1`     |
| Input border-radius| `4px`                                 | `.input--style-1`     |
| Body background    | Full-screen travel/landscape image    | `.bg-img-1` CSS       |
| Text color         | `#333` (primary), `#666` (secondary)  | CSS                   |
| Placeholder color  | `#ccc`                                | CSS                   |
| Tab active color   | `#fff` (white, bold)                  | `.cl-active` CSS      |
| Tab inactive color | `#ccc` (light gray)                   | CSS                   |

## Section Structure

1. **Background layer** — Full-screen travel/landscape background image (beach sunset), applied via CSS `background: url(...) center/cover`.
2. **Search card** — Centered dark semi-transparent card (`max-width: 900px`), containing:
   - **Tab bar** — Three text tabs: Hotels (active), Car, Flight. Uppercase, bold when active.
   - **Hotels tab** (default active):
     - Where: text input with search icon (full width)
     - Check-In / Check-Out: two date inputs side-by-side
     - Travellers: dropdown showing "1 Adult, 0 Children, 1 Room" with chevron icon + Search button (side-by-side)
   - **Car tab**:
     - Location: text input with search icon
     - Driver Age / Car Group: two select dropdowns side-by-side
     - Pick Up date / Time: date input + select side-by-side
     - Drop Off date / Time: date input + select side-by-side
     - Search button (full width)
   - **Flight tab**:
     - Origin: text input with search icon
     - Destination: text input with search icon
     - Departure date / Return date: date inputs side-by-side
     - Passengers / Class: select dropdowns side-by-side
     - Search button (full width)

## Gherkin Requirements

### Background
- Given the user visits the page
- Then a full-screen background image is displayed covering the entire viewport
- And a centered dark search card is visible on top of the background

### Tab Navigation
- Given the search card is displayed
- Then three tabs are visible: "Hotels", "Car", "Flight"
- And the "Hotels" tab is active by default
- When the user clicks the "Car" tab
- Then the "Car" tab becomes active and the car search form is shown
- And the hotels and flight forms are hidden
- When the user clicks the "Flight" tab
- Then the "Flight" tab becomes active and the flight search form is shown
- And the hotels and car forms are hidden

### Hotels Tab
- Given the Hotels tab is active
- Then a "Where:" text input with search icon is displayed full-width
- And "Check-In:" and "Check-Out:" date inputs are displayed side-by-side
- And a "Travellers:" dropdown showing "1 Adult, 0 Children, 1 Room" is displayed
- And a "Search" button is displayed next to the travellers dropdown
- When the user fills in the where field and clicks "Search"
- Then the form submits (or shows a placeholder action)

### Car Tab
- Given the Car tab is active
- Then a "Location:" text input with search icon is displayed full-width
- And "Driver Age:" and "Car Group:" select dropdowns are displayed side-by-side
- And "Pick Up:" date input and "Time:" select are displayed side-by-side
- And "Drop Off:" date input and "Time:" select are displayed side-by-side
- And a "Search" button is displayed full-width below the fields

### Flight Tab
- Given the Flight tab is active
- Then an "Origin:" text input with search icon is displayed full-width
- And a "Destination:" text input with search icon is displayed full-width
- And "Departure Date" and "Return Date" date inputs are displayed side-by-side
- And "Passengers:" and "Class:" select dropdowns are displayed side-by-side
- And a "Search" button is displayed full-width below the fields

### Responsive Design
- Given the viewport width is less than 768px
- Then the search card stacks its inputs vertically
- And the tab bar remains visible and horizontally scrollable if needed

## Verification Checklist

- [ ] Background image covers full viewport
- [ ] Dark card is centered (max-width ~900px)
- [ ] Three tabs render and switch correctly
- [ ] Hotels tab: where input, date inputs, travellers dropdown, search button
- [ ] Car tab: location input, age/group selects, pick-up/drop-off date+time, search
- [ ] Flight tab: origin, destination, dates, passengers/class selects, search
- [ ] All inputs have proper labels and placeholder text
- [ ] Search icon SVG appears in text inputs
- [ ] Submit button uses brand indigo (#6c7ae0) with 10px radius
- [ ] Card has dark background with rounded corners
- [ ] Typography matches: Poppins headings, Lato body/inputs
- [ ] Responsive: inputs stack on mobile
- [ ] Footer links to https://www.componentdock.com/ (Component Dock)
