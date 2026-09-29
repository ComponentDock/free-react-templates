# Template: SearchCloak (Search Form Bar)

## Purpose

Recreation of ColorLib **Search Form Bar 20**

- Source slug: `search-form-bar-20`
- Source: https://colorlib.com/wp/template/search-form-bar-20/
- Preview: https://preview.colorlib.com/theme/bootstrap/search-form-bar-20/
- Description: A free header overlay search bar snippet that reveals over the entire navigation bar. Clicking the search icon in the navbar toggles a full-width search input overlay that covers the navbar area.
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens (from preview DOM + CSS analysis)

| Token                        | Value                                                              |
| ---------------------------- | ------------------------------------------------------------------ |
| Primary color (links)        | `#007bff` (blue — nav links, brand link)                           |
| Primary hover                | `#0056b3` (darker blue on link hover)                              |
| Background (page)            | `#FFFFFF` (white)                                                  |
| Navbar background            | `#FFFFFF` (white, with subtle border + shadow)                     |
| Navbar border                | `#dae0e5` (1px solid bottom border)                                |
| Navbar shadow                | `0 1px 5px 0 rgba(0, 0, 0, 0.1)`                                   |
| Search overlay background    | `#FFFFFF` (white)                                                  |
| Body text color              | `#212529` (dark gray)                                              |
| Paragraph text color         | `#757575` (medium gray)                                            |
| Paragraph font-weight        | `300` (light)                                                      |
| Font family                  | `"Roboto"`, sans-serif (loaded via Google Fonts, weights 300, 400) |
| Close button color           | `#ccc` (idle), `#000` (hover)                                      |
| Search input height          | `50px`                                                             |
| Search input background      | `transparent`                                                      |
| Search input border          | `none`                                                             |
| Search input padding-left    | `20px`                                                             |
| Content section padding      | `7rem 0`                                                           |
| Border-radius (input in nav) | `0.25rem`                                                          |
| Transitions                  | `.3s all ease` (links, overlay, search wrap)                       |

## Requirements

### Requirement: Navbar

The navbar SHALL display a brand name on the left and navigation links on the right.

#### Scenario: Brand name displayed

- **GIVEN** the page loads
- **THEN** the navbar shows "Brand" as a link on the left side
- **AND** the brand link is styled in blue (#007bff)

#### Scenario: Navigation links displayed

- **GIVEN** the page loads
- **THEN** the navbar shows links: "Home", "About", "Contact"
- **AND** all nav links are positioned to the right of the brand

#### Scenario: Search icon visible

- **GIVEN** the page loads
- **THEN** a magnifying glass search icon is displayed to the right of the nav links
- **AND** the search icon is clickable

#### Scenario: Navbar has subtle shadow

- **GIVEN** the page loads
- **THEN** the navbar has a bottom border (#dae0e5) and subtle box-shadow

### Requirement: Search Overlay

The search overlay SHALL cover the entire navbar area when opened and hide when closed.

#### Scenario: Overlay hidden by default

- **GIVEN** the page loads
- **THEN** the search overlay is not visible
- **AND** the search input is hidden

#### Scenario: Overlay opens on search icon click

- **GIVEN** the page loads
- **WHEN** the user clicks the search icon
- **THEN** the search overlay appears over the entire navbar
- **AND** the search input is visible with placeholder "Type keyword and hit enter..."
- **AND** the close (X) button is visible on the right

#### Scenario: Overlay closes on close button click

- **GIVEN** the search overlay is open
- **WHEN** the user clicks the close (X) button
- **THEN** the search overlay hides
- **AND** the navbar returns to its normal state

#### Scenario: Overlay closes on Escape key

- **GIVEN** the search overlay is open
- **WHEN** the user presses the Escape key
- **THEN** the search overlay hides

#### Scenario: Search input is borderless

- **GIVEN** the search overlay is open
- **THEN** the search input has no visible border
- **AND** the search input has a transparent background
- **AND** the search input is 50px tall

#### Scenario: Overlay transition

- **GIVEN** the search overlay is open
- **WHEN** the user clicks the close button
- **THEN** the overlay fades out with a 0.3s ease transition

### Requirement: Content Section

The content section SHALL display centered instruction text.

#### Scenario: Instruction text displayed

- **GIVEN** the page loads
- **THEN** a centered paragraph reads "Please click the search icon toggle button top right."
- **AND** the text color is #757575
- **AND** the text is styled with font-weight 300

#### Scenario: Section padding

- **GIVEN** the page loads
- **THEN** the content section has vertical padding of 7rem

### Requirement: Footer

The footer SHALL link to Component Dock.

#### Scenario: Footer with Component Dock link

- **GIVEN** the page loads
- **THEN** a footer is present at the bottom
- **AND** the footer links to "https://www.componentdock.com/"

## Verification Checklist

- [ ] Navbar renders with brand text and nav links (Home, About, Contact)
- [ ] Search icon (magnifying glass) is visible in the navbar
- [ ] Search overlay is hidden by default
- [ ] Clicking search icon opens the overlay with full-width input
- [ ] Overlay covers the entire navbar area (white background, absolute positioned)
- [ ] Close (X) button closes the overlay with fade transition
- [ ] Search input is borderless with "Type keyword and hit enter..." placeholder
- [ ] Input height is 50px, transparent background
- [ ] Content section shows centered instruction text in gray (#757575, weight 300)
- [ ] Font is Roboto (loaded via Google Fonts link in index.html)
- [ ] Navbar has bottom border (#dae0e5) and subtle shadow
- [ ] Transitions are smooth (0.3s ease)
- [ ] Footer includes Component Dock link
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] `public/CNAME` contains `searchcloak.free.componentdock.com`
- [ ] `package.json` homepage is `https://searchcloak.free.componentdock.com`
- [ ] No asset copying — placeholder images via picsum.photos if needed
