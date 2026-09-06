# Template: FooterBreeze (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 07** — a dark-themed footer with a black background, four-column layout (brand description, two nav link columns, social + CTA), and a centered copyright bar with a top border.

- **Source:** Bootstrap Footer 07 — https://colorlib.com/wp/template/bootstrap-footer-07/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-07/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer

## Design Tokens

| Token                | Value                   | Source                                            |
| -------------------- | ----------------------- | ------------------------------------------------- |
| Font family          | `"Poppins", sans-serif` | `.footer-48201` via global body fallback          |
| Footer background    | `#000000` (black)       | `.footer-48201 { background-color: #000 }`        |
| Footer text color    | `#777777`               | `.footer-48201 { color: #777 }`                   |
| Logo color           | `#ffffff`               | `.footer-site-logo { color: #fff }`               |
| Logo font size       | `1.5rem`                | `.footer-site-logo { font-size: 1.5rem }`         |
| Nav link color       | `gray` (#808080)        | `.nav-links li a { color: gray }`                 |
| Nav link hover       | `#ffffff`               | `.nav-links li a:hover { color: #fff }`           |
| Social icon color    | `gray` (#808080)        | `.social li a { color: gray }`                    |
| Social icon hover    | `#ffffff`               | `.social li a:hover { color: #fff }`              |
| CTA button bg        | `#e42c64` (pink/red)    | `.btn.btn-tertiary { background-color: #e42c64 }` |
| CTA button color     | `#ffffff`               | `.btn.btn-tertiary { color: #fff }`               |
| CTA button radius    | `30px` (pill)           | `.btn.btn-tertiary { border-radius: 30px }`       |
| CTA button padding   | `10px 20px`             | `.btn.btn-tertiary { padding: 10px 20px }`        |
| Copyright border-top | `1px solid #404040`     | `.copyright { border-top: 1px solid #404040 }`    |
| Footer padding       | `7rem 0`                | `.footer-48201 { padding: 7rem 0 }`               |
| Nav link spacing     | `margin-bottom: 10px`   | `.nav-links li { margin-bottom: 10px }`           |

## Requirements

### Requirement: Preview content area

The application SHALL display a centered heading "Footer #7" on a light background, filling 70vh.

#### Scenario: Preview content area renders

- **WHEN** the page loads
- **THEN** a centered heading "Footer #7" is visible
- **AND** the content area uses a light background

### Requirement: Footer main content section

The footer SHALL have a black (#000) background with 7rem vertical padding and four columns: brand description, primary nav links, secondary nav links, and legal nav + social icons + CTA button.

#### Scenario: Footer displays dark background

- **WHEN** the footer renders
- **THEN** the footer background is black (#000)
- **AND** the footer has 7rem vertical padding

#### Scenario: Brand column shows logo and description

- **WHEN** the footer renders
- **THEN** a brand logo text "FooterBreeze" is displayed in white, 1.5rem
- **AND** a description paragraph in gray text appears below the logo

#### Scenario: Primary navigation links

- **WHEN** the footer renders
- **THEN** 5 navigation links are displayed vertically: Home, About Us, Portfolio, Services, Contact
- **AND** each link is gray (#808080) with 10px bottom margin
- **AND** hovering a link changes its color to white

#### Scenario: Secondary navigation links

- **WHEN** the footer renders
- **THEN** 5 navigation links are displayed vertically: Clients, Team, Career, Testimonials, Journal
- **AND** each link follows the same styling as primary nav

#### Scenario: Legal navigation links

- **WHEN** the footer renders
- **THEN** 3 navigation links are displayed vertically: Privacy Policy, Terms & Conditions, Partners
- **AND** each link follows the same styling as primary nav

#### Scenario: Social icons

- **WHEN** the footer renders
- **THEN** 5 social icons are displayed horizontally: Instagram, Twitter, Facebook, Pinterest, Dribbble
- **AND** each icon is gray (#808080) and changes to white on hover

#### Scenario: Contact Us CTA button

- **WHEN** the footer renders
- **THEN** a "Contact Us" button is displayed below the social icons
- **AND** the button has a pink (#e42c64) background with white text
- **AND** the button is pill-shaped (border-radius 30px)

### Requirement: Copyright bar

A full-width centered copyright row with a top border (#404040) and extra padding SHALL be present at the bottom of the footer.

#### Scenario: Copyright bar renders

- **WHEN** the footer renders
- **THEN** a copyright row is centered at the bottom
- **AND** the row has a top border (#404040)
- **AND** the text reads "© 2019-2020 All Rights Reserved." in small muted text

### Requirement: Accessibility

All interactive elements SHALL have accessible names and appropriate ARIA attributes.

#### Scenario: Social link accessibility

- **WHEN** the footer renders
- **THEN** each social icon link has a descriptive aria-label (e.g. "Instagram", "Twitter")

#### Scenario: CTA button accessibility

- **WHEN** the footer renders
- **THEN** the Contact Us button has an accessible name

### Requirement: Responsive behavior

The footer layout SHALL adapt responsively: single-column on mobile, four-column grid on desktop.

#### Scenario: Mobile layout stacks vertically

- **WHEN** the viewport width is below 768px
- **THEN** all footer columns stack vertically
- **AND** social icons center-align

#### Scenario: Desktop layout uses four columns

- **WHEN** the viewport width is 768px or above
- **THEN** the footer displays in a four-column grid
- **AND** the social icons and CTA center-align in the fourth column

### Requirement: Component Dock attribution

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present
- **AND** the link text reads "Component Dock"

### Requirement: No ColorLib references

The application SHALL NOT contain any references to ColorLib in source files.

#### Scenario: App code contains no ColorLib strings

- **WHEN** any source file in apps/footerbreeze/ is inspected
- **THEN** no file contains the string "colorlib" (case-insensitive)
