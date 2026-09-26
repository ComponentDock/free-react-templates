# Template: ShotLab (Photography Portfolio)

## Purpose

ShotLab is a single-page PHOTOGRAPHY PORTFOLIO recreation of ColorLib's "Mostudio" template.

- **Source:** https://colorlib.com/wp/template/mostudio/
- **Preview:** https://preview.colorlib.com/theme/mostudio/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Package:** `@free-react-templates/shotlab`
- **Deploy:** `https://shotlab.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and inline styles:

| Token | Value | Usage |
|-------|-------|-------|
| Brand accent | `#f3c623` (golden yellow) | Buttons, hover borders, decorative line, active states |
| Background primary | `#000000` (black) | Main background, sidebar, portfolio text areas |
| Text primary | `#ffffff` | Body text, headings, nav links |
| Text secondary | `rgba(255,255,255,0.6)` | Subheadings, descriptions, pricing labels |
| Text muted | `rgba(255,255,255,0.2)` | Category labels on portfolio items |
| Border accent | `#f3c623` | Button borders, hover icon borders |
| Font heading | `"Abril Fatface", cursive` | Hero headings, portfolio titles, section titles |
| Font body | `"Poppins", Arial, sans-serif` | Body text, navigation, team names |
| Button radius | `30px` (fully rounded) | All primary buttons |
| Button style | Outline on hover: transparent bg + `#f3c623` text/border | Primary CTA buttons |
| Section padding | `5em 0` (desktop), `3em 0` (mobile) | Standard sections |
| Overlay opacity | `0.3` on black | Image overlays in pricing/about backgrounds |

## Visual Design Notes (from preview + screenshot)

The template is a dark, moody photography portfolio with a LEFT SIDEBAR navigation. Key visual characteristics:

1. **Sidebar layout:** Fixed left sidebar with logo (background image), nav links, newsletter signup, and copyright. Collapses to hamburger on mobile.
2. **Portfolio grid:** Full-width alternating rows — each row is 50/50 image + text, alternating left/right. Black background with white text, golden accent.
3. **Typography:** Large serif headings (Abril Fatface) in white on black, with golden yellow accent on hover. Small uppercase category labels with wide letter-spacing.
4. **About section:** Full-width image background with dark overlay, white heading with golden span highlight, team member circular photos below.
5. **Pricing:** 4-column grid of pricing cards on a dark image background with overlay. Each card has a title, price, feature list, and CTA button.
6. **Contact:** Dark background with form fields (transparent bg, bottom-border only). Send button.
7. **Footer:** Dark, minimal — copyright line with heart icon.
8. **Color palette:** Strictly black + white + golden yellow (#f3c623). No other accent colors.

## Gherkin Requirements

### Sidebar Navigation

```gherkin
Feature: Sidebar Navigation

  Scenario: Desktop sidebar is visible on large screens
    Given the viewport width is >= 992px
    When the page loads
    Then a fixed left sidebar is displayed
    And the sidebar contains the logo with a background image
    And the sidebar contains navigation links: Home, Gallery, About, Pricing, Contact
    And the sidebar contains a newsletter signup form with email input
    And the sidebar contains a copyright footer

  Scenario: Mobile sidebar collapses to hamburger
    Given the viewport width is < 992px
    When the page loads
    Then the sidebar is hidden off-screen
    And a hamburger toggle button is visible in the top-left corner
    When the hamburger is clicked
    Then the sidebar slides in from the left
    And clicking a nav link closes the sidebar

  Scenario: Active nav link is highlighted
    Given the sidebar is visible
    Then the current section's nav link has an active class with golden underline
```

### Portfolio Gallery

```gherkin
Feature: Portfolio Gallery

  Scenario: Portfolio items display in alternating rows
    Given the portfolio section is visible
    Then there are at least 8 portfolio items
    And odd items show image on the left and text on the right
    And even items show image on the right and text on the left

  Scenario: Each portfolio item has required elements
    Given a portfolio item is rendered
    Then it displays a category label (uppercase, wide letter-spacing)
    And it displays a title in Abril Fatface font
    And it displays a description paragraph
    And it displays a "View Portfolio" CTA button with golden border
    And hovering the image shows a zoom icon overlay

  Scenario: Portfolio text alternates alignment
    Given odd portfolio items exist
    Then the text content is left-aligned
    Given even portfolio items exist
    Then the text content is right-aligned (text-md-right)
```

### About Section

```gherkin
Feature: About Section

  Scenario: About section displays founder info
    Given the about section is visible
    Then it shows a heading with founder name highlighted in golden yellow
    And it shows a team section with 3 circular member photos
    And each team member has a name and role label

  Scenario: About section has dark background
    Given the about section is rendered
    Then the background is black with a subtle dark image overlay
    And all text is white
```

### Pricing Section

```gherkin
Feature: Pricing Section

  Scenario: Pricing section displays 4 plans
    Given the pricing section is visible
    Then there are 4 pricing cards displayed in a row

  Scenario: Each pricing card has required elements
    Given a pricing card is rendered
    Then it displays a plan title (e.g. "Model Photography")
    And it displays a price in large bold white text
    And it displays a list of features
    And it displays a CTA button with golden border
```

### Contact Section

```gherkin
Feature: Contact Section

  Scenario: Contact form is displayed
    Given the contact section is visible
    Then it shows form fields: name, email, subject, message
    And each field has a transparent background with bottom-border only
    And there is a "Send Message" button with golden border

  Scenario: Form fields have placeholder text
    Given the contact form is rendered
    Then each input has placeholder text in white with reduced opacity
```

### Newsletter Sidebar

```gherkin
Feature: Newsletter Sidebar

  Scenario: Newsletter signup form in sidebar
    Given the sidebar is visible
    Then a newsletter heading is displayed
    And an email input field is shown
    And a submit button with paper-plane icon is present
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer displays copyright
    Given the footer is visible
    Then it shows copyright text with current year
    And it links to https://www.componentdock.com/ (Component Dock)
```

## Verification Checklist

- [ ] Sidebar navigation matches ColorLib structure (logo, nav, newsletter, copyright)
- [ ] Portfolio items alternate image/text left/right correctly
- [ ] Abril Fatface font is loaded for headings
- [ ] Poppins font is loaded for body text
- [ ] Brand accent #f3c623 is used consistently for buttons and highlights
- [ ] Dark theme (black background, white text) throughout
- [ ] About section has circular team member photos
- [ ] Pricing section shows 4 cards with correct structure
- [ ] Contact form has transparent inputs with bottom-border styling
- [ ] Footer links to Component Dock
- [ ] Responsive: sidebar collapses to hamburger on mobile
- [ ] No references to ColorLib in app code
- [ ] All images use picsum.photos placeholders
