# Template: FootStack (Bootstrap Footer)

## Purpose

Recreation of ColorLib "Bootstrap Footer V06" — a clean, multi-column footer template built on the Bootstrap framework. Responsive footer with five link columns, social icons, copyright bar, and app download links.

- **Source:** [ColorLib Bootstrap Footer V06](https://colorlib.com/wp/template/bootstrap-footer-06/)
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-06/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design tokens (extracted from preview CSS)

| Token              | Value                                  | Notes                                  |
| ------------------ | -------------------------------------- | -------------------------------------- |
| Font (footer)      | `"Poppins", sans-serif`                | Google Fonts, weights 300/400/500      |
| Font (body)        | `"Roboto", sans-serif`                 | System fallback stack                  |
| Brand color        | `#4200ff` (indigo/purple)             | Hover state for nav links + social     |
| Nav link color     | `#777` (medium gray)                  | Default state for all nav links        |
| Social icon color  | `#ccc` (light gray)                   | Default state for social icons         |
| Background         | Bootstrap `bg-light` (`#f8f9fa`)       | Content area + body background         |
| Heading font size  | `16px` (h3 column headers)            | Bold weight                            |
| Nav link size      | `14px`                                | Block display, 10px bottom margin      |
| Footer padding     | `7rem 0`                              | Top and bottom padding                 |
| Border             | Bootstrap default `border-top`         | Divider between columns and bottom bar |
| Border radius      | None (sharp edges)                     | No rounded corners on footer elements  |

## Section structure (DOM order)

The template has two visual sections:

### 1. Content area (demo placeholder)
- Full-width light background (`bg-light`), 70vh height
- Centered heading: "Footer #6"
- This is a demo wrapper; the React version should show a minimal hero or content area above the footer

### 2. Footer
The footer (`.footer-95942`) contains three rows:

#### Row A — Link columns (5 columns)
- **Discover:** Website editors, Online retail, Get started, Services
- **About:** Contact, Services, Team
- **Services:** Events, News, Awards
- **Buy:** Where to Buy, Shop Online
- **Help:** FAQ, Support, Knowledge Base

Each column has:
- h3 heading (16px, bold, 20px bottom margin)
- Unordered list of links (14px, #777, block, 10px bottom margin each)
- Hover: color changes to #4200ff

Layout: centered row (`justify-content-center`), `col-md-8` container, inner row with `col-sm-6 col-md` columns. Responsive: 2 columns on small screens, 5 on medium+.

#### Row B — Divider
- `border-top` divider line (Bootstrap default)

#### Row C — Bottom bar (3 columns)
- **Left (col-md-4):** Social icons — Twitter, Facebook (icon-only, #ccc, hover #4200ff)
- **Center (col-md-4):** Copyright text — "© All Rights Reserved." (small text, centered)
- **Right (col-md-4):** App download links — Apple App Store, Google Play Store (13px, icon + label, #ccc)

Layout: `align-items-center` for vertical centering.

## Gherkin requirements

### Feature: FootStack footer template

  Background:
    Given the user loads the FootStack page
    Then the page displays a content area above the footer

  Scenario: Footer link columns render correctly
    Given the footer is visible
    Then there are 5 link columns: Discover, About, Services, Buy, Help
    And each column has a bold h3 heading
    And each column has 2-4 navigation links
    And all links are styled at 14px with color #777
    And hovering a link changes its color to #4200ff

  Scenario: Link columns are responsive
    Given the viewport is wider than 768px
    Then all 5 columns display in a single row
    Given the viewport is narrower than 768px
    Then columns stack into a 2-column grid

  Scenario: Social icons render in bottom bar
    Given the footer bottom bar is visible
    Then there are social icons for Twitter and Facebook on the left
    And the icons are styled at #ccc color
    And hovering an icon changes its color to #4200ff

  Scenario: Copyright text displays centered
    Given the footer bottom bar is visible
    Then the copyright text is centered between social icons and app links
    And the text reads "© All Rights Reserved."

  Scenario: App download links render on right
    Given the footer bottom bar is visible
    Then there are app download links on the right side
    And the links show "App Store" and "Google Store" with icons
    And the links are styled at 13px

  Scenario: Divider separates columns from bottom bar
    Given the footer is visible
    Then a horizontal border-top line separates the link columns from the bottom bar

  Scenario: Footer has correct padding and font
    Given the footer is visible
    Then the footer has 7rem top and bottom padding
    And the footer text uses the Poppins font family

  Scenario: Component Dock attribution in footer
    Given the footer is visible
    Then the footer includes a link to https://www.componentdock.com/
    And the link text mentions "Component Dock"

## Verification checklist

- [ ] Footer renders with 5 link columns matching original section order
- [ ] Column headings are bold, 16px, Poppins font
- [ ] Nav links are 14px, #777, block display, 10px bottom margin
- [ ] Hover states use #4200ff indigo color
- [ ] Social icons (Twitter, Facebook) render on bottom-left
- [ ] Copyright text is centered in bottom bar
- [ ] App download links (App Store, Google Store) render on bottom-right
- [ ] Border-top divider separates columns from bottom bar
- [ ] Footer padding is 7rem vertical
- [ ] Responsive: 2-column grid on small screens, 5 columns on medium+
- [ ] Footer links to componentdock.com (branded as "Component Dock")
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images use picsum.photos/seed/footstack-*
- [ ] Vite config registers injectUiSource()
- [ ] All tests pass with 100% coverage
