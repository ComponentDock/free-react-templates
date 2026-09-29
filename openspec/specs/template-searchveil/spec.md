# Template: Searchveil (Fullscreen Search Overlay)

## Purpose

Recreation of ColorLib **Search Form Bar 16** — a fullscreen/viewport-height search overlay snippet. When toggled, it covers the entire viewport with a clean, centered search input and minimal chrome. Designed as a modal search experience.

- **Source:** [ColorLib Search Form Bar 16](https://colorlib.com/wp/template/search-form-bar-16/)
- **Preview:** https://preview.colorlib.com/theme/search-form-bar-16/ (404 — unreachable at prep time; screenshot used as sole reference)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-16.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

> Extracted from screenshot analysis (preview DOM unreachable).

| Token                    | Value                              | Notes                                 |
| ------------------------ | ---------------------------------- | ------------------------------------- |
| **Overlay background**   | `#FFFFFF`                          | Solid white, fullscreen               |
| **Text color (heading)** | `#AAAAAA`                          | Light gray for "PRESS [ESC] TO CLOSE" |
| **Input text color**     | `#333333`                          | Dark gray for typed text              |
| **Input placeholder**    | `#999999`                          | Muted gray for "Type here to search"  |
| **Input border**         | `#E0E0E0`                          | Light gray underline, full width      |
| **Close button color**   | `#333333`                          | Dark × icon, top-right corner         |
| **Font family**          | `"Inter", "Roboto", sans-serif`    | Clean sans-serif                      |
| **Close text**           | uppercase, letter-spacing          | "PRESS [ESC] TO CLOSE" in caps        |
| **Layout**               | Centered vertically + horizontally | Input centered in viewport            |
| **Input style**          | Underline only (no box)            | Bottom border, no background/shadow   |

## Requirements

### Requirement: Fullscreen search overlay renders correctly

The system SHALL render a fullscreen overlay that covers the entire viewport with a white (#FFFFFF) background when the search mode is active.

#### Scenario: Search overlay opens fullscreen

- **GIVEN** the user triggers the search overlay
- **WHEN** the overlay appears
- **THEN** a fullscreen overlay covers the entire viewport
- **AND** the overlay background is white (#FFFFFF)
- **AND** a close (×) button appears in the top-right corner

### Requirement: Hint text is displayed

The system SHALL display the text "PRESS [ESC] TO CLOSE" centered near the top of the overlay in uppercase with letter-spacing and light gray color.

#### Scenario: Heading text is displayed

- **GIVEN** the search overlay is open
- **WHEN** the overlay renders
- **THEN** the text "PRESS [ESC] TO CLOSE" appears centered near the top
- **AND** the text is uppercase with letter-spacing
- **AND** the text color is light gray (#AAAAAA)

### Requirement: Search input is centered and styled

The system SHALL render a search input centered in the viewport with a full-width underline border and no background or box shadow.

#### Scenario: Search input is centered and styled

- **GIVEN** the search overlay is open
- **WHEN** the overlay renders
- **THEN** a search input appears centered in the viewport
- **AND** the input has placeholder text "Type here to search"
- **AND** the input has a full-width underline border (#E0E0E0)
- **AND** the input has no background or box shadow

### Requirement: Search input accepts text

The system SHALL allow the user to type text into the search input.

#### Scenario: Search input accepts text

- **GIVEN** the search overlay is open
- **WHEN** the user types "react components" into the search input
- **THEN** the input displays "react components"

### Requirement: Overlay is dismissed via close button

The system SHALL close the overlay when the user clicks the close (×) button.

#### Scenario: Overlay is dismissed via close button

- **GIVEN** the search overlay is open
- **WHEN** the user clicks the close (×) button
- **THEN** the overlay closes and a "Search closed" message is shown

### Requirement: Overlay is dismissed via Escape key

The system SHALL close the overlay when the user presses the Escape key.

#### Scenario: Overlay is dismissed via Escape key

- **GIVEN** the search overlay is open
- **WHEN** the user presses the Escape key
- **THEN** the overlay closes

### Requirement: Footer links to Component Dock

The system SHALL render a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer with Component Dock link

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain a link to https://www.componentdock.com/
- **AND** the link text SHALL include "Component Dock"
- **AND** the link SHALL open in a new tab

### Requirement: Accessibility

The system SHALL provide proper accessibility attributes for the search overlay.

#### Scenario: Accessibility attributes

- **GIVEN** the search overlay is open
- **WHEN** the overlay renders
- **THEN** the overlay has role="dialog" and aria-modal="true"
- **AND** the search input has an accessible label
- **AND** the close button has an aria-label ("Close search")
- **AND** pressing Escape closes the overlay

### Requirement: Responsive layout on mobile

The system SHALL maintain usability on small viewports.

#### Scenario: Responsive layout — mobile

- **GIVEN** the user opens the search overlay on a 375px viewport
- **WHEN** the overlay renders
- **THEN** the overlay still covers the full viewport
- **AND** the input remains centered and usable
- **AND** the close button remains accessible

## Verification checklist

- [ ] Overlay opens fullscreen on trigger
- [ ] "PRESS [ESC] TO CLOSE" text displayed uppercase, gray
- [ ] Search input centered with underline border
- [ ] Input accepts text
- [ ] Close button (×) visible top-right
- [ ] Escape key closes overlay
- [ ] Smooth open/close animation
- [ ] Responsive on mobile
- [ ] Keyboard accessible
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
