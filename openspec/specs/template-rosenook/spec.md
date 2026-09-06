# Template: Rosenook (Feminine Footer)

## Purpose

Recreation of ColorLib **Bootstrap Footer 13** (`bootstrap-footer-13`), a feminine multi-column footer template targeting fashion/lifestyle sites. Light pink background (#f8f1f1), salmon/coral accent (#f17e7e), three link columns (Men, Women, Kids), social icons as 40x40 circles, newsletter subscription form, and copyright bar.

- **Source:** Bootstrap Footer 13 — https://colorlib.com/wp/template/bootstrap-footer-13/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-13/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer

## Design Tokens

| Token                  | Value                       | Source                                                   |
| ---------------------- | --------------------------- | -------------------------------------------------------- |
| Font family            | `"Poppins", sans-serif`     | Google Fonts (Poppins 300–900)                           |
| Footer background      | `#f8f1f1` (very light pink) | `.footer-03 { background: #f8f1f1 }`                     |
| Footer padding         | `7em 0`                     | `.footer-03 { padding: 7em 0 }`                          |
| Section background     | `#f8f8f8` (light gray)      | `.ftco-section { background: #f8f8f8 }`                  |
| Section padding        | `12em 0`                    | `.ftco-section { padding: 12em 0 }`                      |
| Accent color           | `#f17e7e` (salmon coral)    | `.footer-03 a { color: #f17e7e }`                        |
| Text primary           | `rgba(0,0,0,0.4)`           | Copyright text                                           |
| Text link              | `rgba(0,0,0,0.3)`           | Footer list link color                                   |
| Input background       | `rgba(0,0,0,0.05)`          | Input field background                                   |
| Social icon background | `rgba(0,0,0,0.05)`          | `.ftco-footer-social a { background: rgba(0,0,0,0.05) }` |
| Border top             | `rgba(0,0,0,0.1)`           | Separator above copyright                                |
| Heading font-size      | `14px`                      | Footer headings                                          |
| Heading text-transform | `uppercase`                 | Footer headings                                          |
| Heading letter-spacing | `2px`                       | Footer headings                                          |
| Heading font-weight    | `500`                       | Footer headings                                          |
| Social icon size       | `40px`                      | `.ftco-footer-social a { width: 40px; height: 40px }`    |
| Social icon radius     | `50%`                       | Circle shape                                             |
| Social icon margin     | `10px`                      | Gap between icons                                        |
| Input height           | `52px`                      | Subscribe input                                          |
| Button width           | `130px`                     | Subscribe button                                         |
| Button height          | `52px`                      | Subscribe button                                         |
| Button background      | `#f17e7e`                   | Subscribe button                                         |
| Button color           | `#fff`                      | Subscribe button text                                    |
| Button border-radius   | `0`                         | Square corners                                           |

## Requirements

### Requirement: Footer background and layout

The application SHALL display a footer with a light pink background (#f8f1f1) and 7em vertical padding, containing a two-column layout with link columns on the left and social/subscribe content on the right.

#### Scenario: Footer renders with correct background

- **WHEN** the page loads
- **THEN** the footer has background color #f8f1f1
- **AND** the footer has padding of approximately 7em top and bottom
- **AND** the left column contains three link sections
- **AND** the right column contains social icons and a subscription form

### Requirement: Three-column link section

The footer SHALL display three link columns (Men, Women, Kids) on the left side, each with an uppercase heading and a list of links.

#### Scenario: Men column renders

- **WHEN** the footer renders
- **THEN** the Men column contains links: Jeans, Jumpers, Leather, Shorts, Boots, Watches
- **AND** the heading is uppercase with 2px letter-spacing

#### Scenario: Women column renders

- **WHEN** the footer renders
- **THEN** the Women column contains links: Dresses, Jumpsuits, Shirts, T-shirts, Sweatshirts, Jackets, Coats

#### Scenario: Kids column renders

- **WHEN** the footer renders
- **THEN** the Kids column contains links: Shirts, T-shirts, Polos, Sweaters, Sweatshirts, Jackets, Watches

### Requirement: Social icons

The footer SHALL display four circular social icons (Twitter, Facebook, Instagram, LinkedIn) with a 40x40px circle shape, accent color #f17e7e, and white on hover.

#### Scenario: Social icons render

- **WHEN** the footer renders
- **THEN** four social icon links are displayed (Twitter, Facebook, Instagram, LinkedIn)
- **AND** each icon is in a 40x40px circle with 50% border-radius
- **AND** the icon color is #f17e7e (salmon coral)
- **AND** hovering an icon turns the background to the accent color with white text

### Requirement: Newsletter subscription form

The footer SHALL include a newsletter subscription form with an email input and a "Subscribe" button, both 52px tall with square corners.

#### Scenario: Subscribe form renders

- **WHEN** the footer renders
- **THEN** a "Subscribe Us" heading is displayed
- **AND** an email input with placeholder "Enter email address" is shown
- **AND** a "Subscribe" button with background #f17e7e and white text is shown
- **AND** both input and button are 52px tall with no border-radius

### Requirement: Copyright and legal links

The footer SHALL display a copyright bar at the bottom with a thin top border separator, copyright text on the left, and Terms & Conditions / Privacy links on the right.

#### Scenario: Copyright bar renders

- **WHEN** the footer renders
- **THEN** a thin top border separates the copyright bar from main content
- **AND** the left side shows copyright text with the current year
- **AND** the right side shows "Terms & Conditions" and "Privacy" links

### Requirement: Component Dock branding

The footer SHALL link to https://www.componentdock.com/ with "More templates at Component Dock" text.

#### Scenario: Component Dock link renders

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ is present
- **AND** the link text includes "Component Dock"

### Requirement: Responsive layout

The footer SHALL be responsive, stacking columns vertically on mobile viewports.

#### Scenario: Mobile layout stacks columns

- **WHEN** the viewport is below the md breakpoint
- **THEN** the three link columns stack vertically
- **AND** the social/subscribe section stacks below the links
- **AND** the copyright row stacks with full-width items

### Requirement: Typography

The footer SHALL use Poppins font family with uppercase headings, 2px letter-spacing, and specific link colors.

#### Scenario: Typography styles apply

- **WHEN** the footer renders
- **THEN** headings use Poppins font, 14px, uppercase, 2px letter-spacing, weight 500
- **AND** list links use color rgba(0,0,0,0.3)
- **AND** all interactive elements use the accent color #f17e7e

### Requirement: No ColorLib references

The application SHALL NOT contain any references to ColorLib in app source code, comments, or data files.

#### Scenario: No ColorLib strings in app code

- **WHEN** inspecting apps/rosenook/src/
- **THEN** no file contains the string "colorlib" or "ColorLib"
