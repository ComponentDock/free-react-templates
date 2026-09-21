# Template: PixVault (Photography Portfolio)

## Purpose

Recreation of ColorLib's **Capture** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page photography portfolio.

- **ColorLib source**: https://colorlib.com/wp/template/capture/
- **Live preview**: https://preview.colorlib.com/theme/capture/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/capture-free-template.jpg
- **New name**: `pixvault` (apps/pixvault, @free-react-templates/pixvault)
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Design tokens

Extracted from the live preview CSS (`css/style.css`) and inline font-face declarations.

### Fonts

| Role         | Family        | Weights     | Source        |
|-------------|---------------|-------------|---------------|
| Logo / headings | Poppins   | 700         | Google Fonts  |
| Navigation links | Montserrat | 400, 700  | Google Fonts  |
| Body text      | Work Sans   | 300, 400, 500, 600, 700 | Google Fonts |

### Colors

| Token             | Value                  | Usage                                    |
|-------------------|------------------------|------------------------------------------|
| `--brand`         | `#000000`              | Sidebar background, logo text            |
| `--accent`        | `#f46665`              | Hover accent (used sparingly)            |
| `--footer-bg`     | `#242423`              | Footer background (near-black)           |
| `--text-primary`  | `#000000`              | Headings, body text                      |
| `--text-secondary`| `rgba(0,0,0,0.7)`      | Nav links default state                  |
| `--text-footer`   | `rgba(255,255,255,0.5)`| Footer paragraph/link text               |
| `--white`         | `#ffffff`              | Footer headings, hover state             |
| `--overlay`       | `#000000` opacity 0→0.7| Gallery card overlay on hover            |
| `--border-subtle` | `rgba(255,255,255,0.1)`| Footer category list dividers            |
| `--surface-light` | `#f7f7f7` / `#fafafa`  | Alternate section backgrounds (if any)    |

### Border radius

- Buttons: `4px`
- Circular elements (avatar, social icons): `50%`

### Layout

- Sidebar: fixed left, 20% width on desktop (270px on mobile via slide-in)
- Main content: remaining 80% width
- Gallery: 3-column Bootstrap grid (col-md-4), no gutters, 280px height per entry
- Mobile (<992px): sidebar slides off-canvas, toggle button appears top-left

## Gherkin requirements

```gherkin
Feature: PixVault Photography Portfolio

  Background:
    Given the user visits the PixVault homepage

  Scenario: Sidebar navigation is visible
    Then the sidebar is displayed on the left
    And the sidebar shows a camera icon logo with text "PixVault"
    And the sidebar contains navigation links: Home, Gallery, About, Blog, Contact
    And social media icons (Facebook, Twitter, Instagram, LinkedIn) are shown

  Scenario: Sidebar navigation highlights active link
    Given the user is on the Home page
    Then the "Home" link is visually highlighted as active

  Scenario: Photo gallery grid displays
    Then a 3-column photo gallery grid is shown
    And each gallery item displays a background image
    And each gallery item is 280px tall
    And gallery items have no gaps between them (no gutters)

  Scenario: Gallery hover overlay effect
    Given a gallery item is not hovered
    Then the overlay is transparent (opacity 0)
    And the title text is invisible (opacity 0)
    When the user hovers over a gallery item
    Then the overlay fades to black at 70% opacity
    And the title text fades in showing the work title
    And a category tag appears below the title in uppercase with letter spacing

  Scenario: Gallery items show work title and category tag
    Then each gallery item has a title like "Work 01"
    And each gallery item has a category tag like "Model", "Nature", "Fashion", etc.

  Scenario: Footer layout
    Then the footer has a dark background (#242423)
    And the footer shows three columns: Category, Archives, and additional info
    And the Category column lists photography categories with counts
    And the Archives column lists months with counts
    And footer headings are white and bold
    And footer links are semi-transparent white, turning full white on hover
    And category list items have subtle bottom borders

  Scenario: Footer attribution
    Then the footer contains a link to "Component Dock" (https://www.componentdock.com/)

  Scenario: Responsive sidebar
    Given the viewport is narrower than 992px
    Then the sidebar is hidden off-canvas to the left
    And a hamburger toggle button appears in the top-left corner
    When the user taps the toggle button
    Then the sidebar slides in from the left at 270px width
    And the main content shifts right by 270px

  Scenario: Responsive gallery
    Given the viewport is narrower than 768px
    Then gallery items stack in a single column
    And gallery overlay and text are always visible (no hover needed)

  Scenario: Gallery lightbox
    Given the user clicks on a gallery item
    Then a lightbox popup opens showing the full image
    And the user can close the lightbox to return to the gallery
```

## Verification checklist

- [ ] Sidebar renders with camera icon, logo text, nav links, social icons
- [ ] Active nav link is visually distinguished
- [ ] Gallery grid is 3 columns on desktop, single column on mobile
- [ ] Gallery items are 280px height with background images (placeholder via picsum.photos)
- [ ] Hover overlay transitions from transparent to 70% black
- [ ] Hover reveals title + category tag with correct typography
- [ ] Footer has dark #242423 background, 3-column layout
- [ ] Footer Category and Archives lists render with counts
- [ ] Footer links have correct hover color change
- [ ] Mobile responsive: sidebar off-canvas with toggle
- [ ] Mobile responsive: gallery stacks single column
- [ ] Lightbox popup works on gallery click
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` contains `pixvault.free.componentdock.com`
- [ ] `package.json` homepage is `https://pixvault.free.componentdock.com`
- [ ] 100% test coverage
