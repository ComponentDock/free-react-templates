# Template: Cairn (Bootstrap Footer 05)

## Purpose

Recreation of ColorLib "Bootstrap Footer 05" — a clean white footer with
a blue accent, email subscribe form, horizontal navigation links, social
icons, and a centered logo in the bottom bar.

- **Source:** ColorLib Bootstrap Footer 05 (https://colorlib.com/wp/template/bootstrap-footer-05/)
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap-footer-05/
- **New name:** `cairn` (a stone marker at the base of a path)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token             | Value                       | Notes                          |
| ----------------- | --------------------------- | ------------------------------ |
| Brand / accent    | `#3e64ff` (blue)            | Logo color, nav link hover     |
| Background        | `#fff` (white)              | Footer background              |
| Text color        | `#777` (grey)               | Nav links, copyright text      |
| Logo color        | `#3e64ff` (blue)            | Site logo                      |
| Logo size         | `30px`, weight 900          | `.site-logo a`                 |
| Link color        | `#777` (grey)               | `.nav-links li a` default      |
| Link hover        | `#3e64ff` (blue)            | `.nav-links li a:hover`        |
| Input background  | `#e6e6e6` (light grey)      | Email subscribe input          |
| Input height      | `45px`                      | Email input field              |
| Input placeholder | `#b3b3b3`, 14px             | Placeholder text               |
| Divider           | `#efefef` (very light grey) | `border-top` / `border-bottom` |
| Copyright color   | `#777` (grey)               | `.copyright` text              |
| Font family       | `Poppins`                   | Loaded via Google Fonts        |
| Footer padding    | `4rem 0`                    | Top/bottom footer padding      |

### Visual Design (from screenshot + preview)

- Clean, minimal white footer with subtle top border (#efefef)
- Blue accent color (#3e64ff) for logo and hover states
- Three-column top row: email subscribe (left) | nav links (center) | social (right)
- Divider (border-bottom) separates top row from bottom bar
- Bottom row: legal links (left) | logo (center) | copyright (right)
- Poppins font family throughout
- Light, airy, modern aesthetic — opposite of the dark Bootstrap Footer 04

## Requirements

### Requirement: Footer renders with white background

The footer component SHALL render with a white (#fff) background and a subtle top border in light grey (#efefef).

#### Scenario: Footer background styling

- **WHEN** the Cairn component is rendered
- **THEN** the footer element has a white background (#fff)
- **AND** the footer has a top border in light grey (#efefef)

### Requirement: Email subscribe form is displayed

The footer SHALL display an email subscribe form with a grey input field and a blue submit button.

#### Scenario: Email input field

- **WHEN** the user views the top section of the footer
- **THEN** an email input field is displayed with grey background (#e6e6e6)
- **AND** the input has placeholder text "Enter your email"
- **AND** the input is 45px tall with no border

#### Scenario: Subscribe button

- **WHEN** the user views the top section of the footer
- **THEN** a subscribe button is positioned next to the email input
- **AND** the button has blue background (#3e64ff) and white text

### Requirement: Navigation links are displayed inline

The footer SHALL display horizontal navigation links (Features, Blog, Pricing, Services) centered in the top section.

#### Scenario: Navigation link content

- **WHEN** the user views the top section of the footer
- **THEN** navigation links are displayed inline and centered horizontally
- **AND** each link has 10px padding

#### Scenario: Navigation link hover styling

- **WHEN** the user hovers over a navigation link
- **THEN** the link color changes from grey (#777) to blue (#3e64ff)
- **AND** the transition is smooth (0.3s ease)

### Requirement: Social media icons are displayed

The footer SHALL display social media icons (Twitter, Instagram, Facebook, Pinterest) right-aligned in the top section.

#### Scenario: Social icon links

- **WHEN** the user views the top section of the footer
- **THEN** social icons are displayed inline and right-aligned on desktop
- **AND** each icon is wrapped in a link with target="_blank"

### Requirement: Divider separates top and bottom sections

The footer SHALL display a border-bottom divider between the top and bottom sections.

#### Scenario: Divider styling

- **WHEN** the user views the footer
- **THEN** a border-bottom line separates the top section from the bottom bar
- **AND** the divider color is light grey (#efefef)

### Requirement: Bottom bar with logo centered

The footer SHALL display a bottom bar with legal links on the left, logo centered, and copyright on the right.

#### Scenario: Logo display

- **WHEN** the user views the bottom bar
- **THEN** the logo text "Cairn" is centered
- **AND** the logo is displayed in blue (#3e64ff) with 30px font-size and weight 900

#### Scenario: Legal links

- **WHEN** the user views the bottom bar
- **THEN** legal links (Terms, About, Privacy, Contact) are displayed inline on the left

#### Scenario: Copyright text

- **WHEN** the user views the bottom bar
- **THEN** copyright text is displayed on the right in small font, grey (#777)

### Requirement: Component Dock attribution

The footer SHALL include a "Component Dock" attribution link pointing to https://www.componentdock.com/.

#### Scenario: Attribution link

- **WHEN** the user scrolls to the bottom of the footer
- **THEN** a "Component Dock" link is displayed
- **AND** the link points to https://www.componentdock.com/

### Requirement: Responsive layout

The footer SHALL stack sections vertically on mobile devices.

#### Scenario: Mobile layout

- **WHEN** the user views the footer on a mobile device
- **THEN** the top section stacks vertically
- **AND** the bottom bar stacks with logo on top, links below, copyright at bottom
