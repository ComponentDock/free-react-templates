# Spec — Travenzo (ColorLib Search 15)

## Purpose

Recreation of ColorLib "Colorlib Search 15" — a travel/hotel booking search
form widget. Dark card overlay on a scenic background with tabbed search
(Hotels / Car / Flight), destination input, date pickers, traveller dropdown,
checkboxes, and a full-width green CTA button.

Source: https://colorlib.com/wp/template/colorlib-search-15/
Preview (screenshot only — live preview 404): ColorLib Search Form 15

## Design tokens (from screenshot analysis)

- Card background: dark navy/charcoal (#1a2238 approximately), semi-transparent
- Card border-radius: ~12px rounded corners
- Tabs: white text, active tab bolder/underlined
- Input fields: white background, rounded, subtle border
- Labels: small uppercase tracking-wide, muted gray
- Checkboxes: green accent (#28a745)
- Search button: full-width, green (#28a745), white text, rounded
- Background: scenic beach/nature image (use picsum.photos placeholder)
- Font: Inter (Google Fonts)
- Overall: single-page widget, centered on viewport

## Sections

1. **Full-page background** — scenic image (picsum.photos seed: travenzo-bg)
2. **Search Card** — centered, dark card with:
   - Tab bar: Hotels (active), Car, Flight
   - "Going To" input with location pin icon
   - "Check-In" and "Check-Out" date inputs (side by side)
   - "Travellers" dropdown (Adults, Children, Rooms)
   - "Add a flight" checkbox (default checked)
   - "Add a car" checkbox (default unchecked)
   - Full-width green "Search" button
3. **Footer** — simple footer with Component Dock link

## Scenarios (Gherkin)

### Render

- Given the app loads, Then the document title is "Travenzo — Travel Booking Search"
- Given the app loads, Then the "Hotels" tab is visible and active
- Given the app loads, Then the "Car" tab is visible
- Given the app loads, Then the "Flight" tab is visible
- Given the app loads, Then the "Going To" input is present with placeholder "Destination, hotel name"
- Given the app loads, Then the "Check-In" date input is present
- Given the app loads, Then the "Check-Out" date input is present
- Given the app loads, Then the "Travellers" dropdown shows "1 Adult, 0 Children, 1 Room"
- Given the app loads, Then the "Add a flight" checkbox is checked
- Given the app loads, Then the "Add a car" checkbox is unchecked
- Given the app loads, Then the green "Search" button is present

### Interaction

- When the user types in the "Going To" field, Then the field updates with the typed text
- When the user clicks the "Car" tab, Then it becomes active
- When the user clicks the "Flight" tab, Then it becomes active
- When the user clicks the "Hotels" tab, Then it becomes active again
- When the user toggles the "Add a flight" checkbox, Then its state changes
- When the user toggles the "Add a car" checkbox, Then its state changes
- When the user submits the form, Then the page does not reload

### Footer

- Given the app loads, Then the footer shows a link to https://www.componentdock.com/ labeled "Component Dock"
- Given the app loads, Then the footer shows a copyright line

## Files

- `apps/travenzo/` — new app folder
- `openspec/specs/template-travenzo/spec.md` — this spec
