# Template: Soleplate (Clean White Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer V09** template as a modern React component.

- **Source:** [colorlib.com/wp/template/bootstrap-footer-09/](https://colorlib.com/wp/template/bootstrap-footer-09/)
- **Preview:** [preview.colorlib.com/theme/bft/bootstrap-footer-09/](https://preview.colorlib.com/theme/bft/bootstrap-footer-09/)
- **Source slug:** `bootstrap-footer-09`
- **New name:** `soleplate` (never reuse ColorLib source name)
- **Package:** `@free-react-templates/soleplate`
- **Deploy URL:** `https://soleplate.free.componentdock.com`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Footer

## Design Tokens

Extracted from the live preview CSS:

| Token          | Value                           | Notes            |
| -------------- | ------------------------------- | ---------------- |
| Brand / accent | `#4200ff` (vibrant blue-purple) | Logo + nav hover |
| Footer font    | `Poppins`                       | Google Fonts     |
| Body font      | `Roboto`                        | Google Fonts     |
| Logo size      | `2rem`, font-weight 900         | Centered top     |
| Nav link color | `#000000` (black)               | Default state    |
| Nav hover      | `#4200ff` (blue-purple)         | Hover transition |
| Social heading | `#000000`, bold, 18px           | "Stay in touch"  |
| Instagram      | `#df588a` (pink)                | Social icon      |
| Twitter        | `#15b8ff` (sky blue)            | Social icon      |
| Facebook       | `#3742d0` (deep blue)           | Social icon      |
| Dribbble       | `#fa38c1` (magenta)             | Social icon      |
| Pinterest      | `#dd4d5a` (red)                 | Social icon      |
| Copyright      | `#999999` (gray)                | Bottom text      |
| Footer bg      | white                           | No image overlay |
| Footer padding | `7rem 0`                        | Vertical spacing |

### Visual Design

- Clean white background, centered single-column layout (max-width ~4xl)
- Logo at top: "Soleplate" in large bold blue-purple text
- Horizontal nav links inline below logo
- "Stay in touch" heading + colorful social icons
- Gray copyright bar at bottom with Component Dock attribution

## Requirements

### Requirement: Footer renders with white background

The footer component SHALL render with a white background and Poppins font family.

#### Scenario: Footer background and font

- **WHEN** the footer component is mounted
- **THEN** the footer has a white background
- **AND** the footer uses Poppins font family
- **AND** the footer has 7rem vertical padding

### Requirement: Site logo display

The footer SHALL display a centered site logo in blue-purple.

#### Scenario: Logo styling

- **WHEN** the footer is rendered
- **THEN** the site logo text "Soleplate" is visible
- **AND** the logo is centered
- **AND** the logo uses blue-purple (#4200ff) color
- **AND** the logo has font-weight 900

### Requirement: Horizontal navigation links

The footer SHALL render horizontal inline navigation links.

#### Scenario: Navigation links

- **WHEN** the footer is rendered
- **THEN** navigation links include About, Services, Press, Careers, FAQ, Legal, Contact
- **AND** links are displayed horizontally
- **AND** link text is black (#000) by default
- **AND** links have 10px horizontal padding

### Requirement: Social media icons with brand colors

The footer SHALL display social media icons each in their brand color.

#### Scenario: Social icons

- **WHEN** the footer is rendered
- **THEN** a "Stay in touch" heading is shown (bold, black)
- **AND** social icons are displayed for Instagram, Twitter, Facebook, Dribbble, Pinterest
- **AND** each icon has its brand color (pink, sky blue, deep blue, magenta, red)
- **AND** social icons open in new tabs with noreferrer

### Requirement: Copyright bar with Component Dock link

The footer SHALL display a centered copyright bar linking to Component Dock.

#### Scenario: Copyright and attribution

- **WHEN** the footer is rendered
- **THEN** a copyright line is centered at the bottom
- **AND** the copyright text is gray (#999)
- **AND** a "Component Dock" link points to https://www.componentdock.com/

### Requirement: Accessibility

The footer SHALL be accessible with proper ARIA attributes and keyboard navigation.

#### Scenario: Accessible elements

- **WHEN** the footer is rendered
- **THEN** all links are keyboard-focusable
- **AND** social icon links have aria-label attributes
- **AND** SVG icons have aria-hidden="true"
- **AND** the footer uses semantic `<footer>` with role="contentinfo"

### Requirement: Responsive layout

The footer SHALL be responsive on mobile devices.

#### Scenario: Mobile responsiveness

- **WHEN** the footer is rendered on a narrow viewport
- **THEN** navigation links wrap gracefully
- **AND** the footer remains centered and readable
