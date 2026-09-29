# Template: SkyQuest (Travel Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search 19" (`colorlib-search-19`).
Preview URL: https://preview.colorlib.com/theme/colorlib-search-19/ (unreachable 404 at time of research — spec based on screenshot).
Source page: https://colorlib.com/wp/template/colorlib-search-19/

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.
App name: `skyquest` (package `@free-react-templates/skyquest`).
Deploy target: `skyquest.free.componentdock.com`.

## Replication Reference

- **Preview DOM**: unreachable (404). Spec derived entirely from screenshot.
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-19.jpg
- **CSS tokens**: not available (preview down). Tokens estimated from screenshot.

### Design Tokens (from screenshot)

| Token              | Value                                  | Notes                                         |
| ------------------ | -------------------------------------- | --------------------------------------------- |
| Background image   | Full-viewport coastal cliff/ocean      | Use `picsum.photos/seed/skyquest-hero/1920/1080` |
| Card gradient left | `#6a9cf5` (blue)                       | Semi-transparent overlay on image              |
| Card gradient right| `#b37ce8` (purple-pink)               | Horizontal gradient, ~80% opacity              |
| Card background    | Gradient: `linear-gradient(90deg, #6a9cf5, #b37ce8)` | Semi-transparent |
| Card border-radius | ~12px rounded corners                  |                                               |
| Label color        | `#ffffff` (white, bold)                |                                               |
| Input background   | `#ffffff` (white)                      |                                               |
| Input border-radius| ~6px                                   |                                               |
| Button color       | `#4ecdc4` → `#44b09e` (teal-green gradient) | Rounded, ~6px radius              |
| Button text        | `#ffffff` (white, uppercase, bold)     |                                               |
| Font family        | System / sans-serif (screenshot-based) | Google Fonts link recommended                 |

## Gherkin Requirements

### Scenario: Full-viewport background
- **Given** the user loads the SkyQuest page
- **Then** a full-viewport background image covers the entire screen
- **And** the background image is a coastal/nature scene (or placeholder equivalent)

### Scenario: Search form card visibility
- **Given** the page has loaded
- **Then** a centered search form card is visible
- **And** the card has a blue-to-purple gradient background
- **And** the card has rounded corners (~12px)
- **And** the card is semi-transparent over the background image

### Scenario: From field
- **Given** the search card is visible
- **Then** a "From" label is displayed in white bold text
- **And** a text input with placeholder "City, Region or Airport" is present
- **And** the input has a white background and rounded corners

### Scenario: To field
- **Given** the search card is visible
- **Then** a "To" label is displayed in white bold text
- **And** a text input with placeholder "City, Region or Airport" is present
- **And** the input has a white background and rounded corners

### Scenario: From and To are side-by-side
- **Given** the search card is visible
- **Then** the From and To fields are displayed in a two-column row

### Scenario: Passengers field
- **Given** the search card is visible
- **Then** a "Passengers" label is displayed in white bold text
- **And** a dropdown/input shows "1 Adult, 0 Children, 1 Room +"
- **And** the field has a white background and rounded corners

### Scenario: Depart date field
- **Given** the search card is visible
- **Then** a "Depart" label is displayed in white bold text
- **And** a date picker input with placeholder "mm/dd/yyyy" is present
- **And** the input has a white background and rounded corners

### Scenario: Return date field
- **Given** the search card is visible
- **Then** a "Return" label is displayed in white bold text
- **And** a date picker input with placeholder "mm/dd/yyyy" is present
- **And** the input has a white background and rounded corners

### Scenario: Search button
- **Given** the search card is visible
- **Then** a "SEARCH" button is displayed with teal-green gradient background
- **And** the button text is white, uppercase, and bold
- **And** the button has rounded corners

### Scenario: Bottom row layout
- **Given** the search card is visible
- **Then** the Passengers, Depart, Return, and Search button are in a single row below the From/To row

### Scenario: Mobile responsiveness
- **Given** the viewport is narrow (< 768px)
- **Then** the search fields stack vertically
- **And** the form card remains centered
- **And** all fields remain usable

### Scenario: Footer
- **Given** the page has loaded
- **Then** a footer is present with a link to Component Dock

## Verification Checklist

- [ ] Full-viewport background image loads
- [ ] Gradient card is visible and centered
- [ ] From field has correct label and placeholder
- [ ] To field has correct label and placeholder
- [ ] Passengers field shows default "1 Adult, 0 Children, 1 Room +"
- [ ] Depart date picker has correct placeholder
- [ ] Return date picker has correct placeholder
- [ ] SEARCH button has teal-green gradient
- [ ] Bottom row layout matches screenshot (4 items in a row)
- [ ] Responsive: fields stack on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds
