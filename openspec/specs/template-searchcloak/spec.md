# Template: SearchCloak (Search Form Bar)

## Purpose

Recreation of ColorLib **Search Form Bar 20**
- Source slug: `search-form-bar-20`
- Source: https://colorlib.com/wp/template/search-form-bar-20/
- Preview: https://preview.colorlib.com/theme/bootstrap/search-form-bar-20/
- Description: A free header overlay search bar snippet that reveals over the entire navigation bar. Clicking the search icon in the navbar toggles a full-width search input overlay that covers the navbar area.
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens (from preview DOM + CSS analysis)

| Token | Value |
|-------|-------|
| Primary color (links) | `#007bff` (blue — nav links, brand link) |
| Primary hover | `#0056b3` (darker blue on link hover) |
| Background (page) | `#FFFFFF` (white) |
| Navbar background | `#FFFFFF` (white, with subtle border + shadow) |
| Navbar border | `#dae0e5` (1px solid bottom border) |
| Navbar shadow | `0 1px 5px 0 rgba(0, 0, 0, 0.1)` |
| Search overlay background | `#FFFFFF` (white) |
| Body text color | `#212529` (dark gray) |
| Paragraph text color | `#757575` (medium gray) |
| Paragraph font-weight | `300` (light) |
| Font family | `"Roboto"`, sans-serif (loaded via Google Fonts, weights 300, 400) |
| Close button color | `#ccc` (idle), `#000` (hover) |
| Search input height | `50px` |
| Search input background | `transparent` |
| Search input border | `none` |
| Search input padding-left | `20px` |
| Content section padding | `7rem 0` |
| Border-radius (input in nav) | `0.25rem` |
| Transitions | `.3s all ease` (links, overlay, search wrap) |

## Section Structure (from live preview DOM)

1. **Navbar** (`<nav class="custom-navbar">`)
   - Container: `.cl-container > .cl-row.cl-align-items-center`
   - Left: Brand name (`<h3><a>Brand</a></h3>`, col-md-3, centered on mobile, left on md+)
   - Right: Nav links (`<ul>` with `Home`, `About`, `Contact`, col-md-7, right-aligned on md+)
   - Far right: Search icon toggle (`.search-icon-toggle` with magnifying glass SVG)
   - Subtle bottom border + box-shadow

2. **Search Overlay** (`.search-wrap`, absolutely positioned over navbar)
   - Full-width white background, covers entire navbar height
   - Contains: text input (`placeholder="Type keyword and hit enter..."`) + close button (X icon)
   - Hidden by default (`opacity: 0; visibility: hidden`)
   - Toggled visible via `.active` class (`opacity: 1; visibility: visible`)
   - Input is borderless, transparent background, vertically centered
   - Close icon on the right, vertically centered, color `#ccc` → `#000` on hover
   - 0.3s ease transition on toggle

3. **Content Section** (`.content`)
   - Centered paragraph: "Please click the search icon 🔍 toggle button top right."
   - Color: `#757575`, font-weight: 300
   - Padded `7rem 0`
   - On a very tall page (200vh) to demonstrate scroll behavior

## Gherkin Requirements

### Navbar

```gherkin
Feature: Navbar

  Scenario: Brand name displayed
    Given the page loads
    Then the navbar shows "Brand" as a link on the left side
    And the brand link is styled in blue (#007bff)

  Scenario: Navigation links displayed
    Given the page loads
    Then the navbar shows links: "Home", "About", "Contact"
    And all nav links are positioned to the right of the brand

  Scenario: Search icon visible
    Given the page loads
    Then a magnifying glass search icon is displayed to the right of the nav links
    And the search icon is clickable

  Scenario: Navbar has subtle shadow
    Given the page loads
    Then the navbar has a bottom border (#dae0e5) and subtle box-shadow
```

### Search Overlay

```gherkin
Feature: Search Overlay

  Scenario: Overlay hidden by default
    Given the page loads
    Then the search overlay is not visible
    And the search input is hidden

  Scenario: Overlay opens on search icon click
    Given the page loads
    When the user clicks the search icon
    Then the search overlay appears over the entire navbar
    And the search input is visible with placeholder "Type keyword and hit enter..."
    And the close (X) button is visible on the right

  Scenario: Overlay closes on close button click
    Given the search overlay is open
    When the user clicks the close (X) button
    Then the search overlay hides
    And the navbar returns to its normal state

  Scenario: Overlay closes on Escape key
    Given the search overlay is open
    When the user presses the Escape key
    Then the search overlay hides

  Scenario: Search input is borderless
    Given the search overlay is open
    Then the search input has no visible border
    And the search input has a transparent background
    And the search input is 50px tall

  Scenario: Overlay transition
    Given the search overlay is open
    When the user clicks the close button
    Then the overlay fades out with a 0.3s ease transition
```

### Content Section

```gherkin
Feature: Content Section

  Scenario: Instruction text displayed
    Given the page loads
    Then a centered paragraph reads "Please click the search icon toggle button top right."
    And the text color is #757575
    And the text is styled with font-weight 300

  Scenario: Section padding
    Given the page loads
    Then the content section has vertical padding of 7rem
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer with Component Dock link
    Given the page loads
    Then a footer is present at the bottom
    And the footer links to "https://www.componentdock.com/"
```

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
