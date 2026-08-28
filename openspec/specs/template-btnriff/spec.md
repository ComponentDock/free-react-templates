# Specification: BtnRiff (Bootstrap Buttons 15 Recreation)

Recreation of ColorLib "Bootstrap Buttons 15" (`https://colorlib.com/wp/template/bootstrap-buttons-15/`). Preview URL: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-15/`. Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Purpose

BtnRiff is a button showcase template featuring a comprehensive collection of Bootstrap-style button variants — solid, outline, rounded, social, dropdown, grouped, checkbox, radio, and toggle-slide buttons. All buttons use a 3D box-shadow depth effect and are displayed in a single-page layout with section headings. The design uses Poppins font, a clean white background, and four primary brand colors (blue, teal, green, pink) with social-brand colors for Facebook, Twitter, LinkedIn, Pinterest, and Dribbble.

## Design Tokens

Extracted from the live preview CSS (`https://preview.colorlib.com/theme/bb/bootstrap-buttons-15/css/style.css`):

| Token                        | Value                                   | Usage                                                              |
| ---------------------------- | --------------------------------------- | ------------------------------------------------------------------ |
| **Font family**              | `Poppins, sans-serif`                   | All text, loaded via Google Fonts (weights 300–800)                |
| **Brand primary (blue)**     | `#4f81c7`                               | Solid primary buttons, checkbox primary, radio primary             |
| **Brand primary shadow**     | `#3d73c0`                               | Box-shadow offset on primary buttons                               |
| **Brand secondary (teal)**   | `#40bfc1`                               | Solid secondary buttons, checkbox secondary, radio secondary       |
| **Brand secondary shadow**   | `#39adaf`                               | Box-shadow offset on secondary buttons                             |
| **Brand tertiary (green)**   | `#48da79`                               | Solid tertiary buttons, checkbox tertiary, radio tertiary          |
| **Brand tertiary shadow**    | `#33d669`                               | Box-shadow offset on tertiary buttons                              |
| **Brand quarternary (pink)** | `#ff78ae`                               | Solid quarternary buttons, checkbox quarternary, radio quarternary |
| **Brand quarternary shadow** | `#ff5f9f`                               | Box-shadow offset on quarternary buttons                           |
| **Facebook**                 | `#4f69a2`                               | Social buttons                                                     |
| **Twitter**                  | `#69b6f0`                               | Social buttons                                                     |
| **LinkedIn**                 | `#2884ba`                               | Social buttons                                                     |
| **Pinterest**                | `#d03940`                               | Social buttons                                                     |
| **Dribbble**                 | `#ea6294`                               | Social buttons                                                     |
| **Dark/disabled**            | `#343a40`                               | Disabled checkbox/radio                                            |
| **Button shadow**            | `3px 5px 0px 0px <color>`               | 3D depth effect on all solid buttons                               |
| **Button radius (default)**  | Not rounded (square corners by default) | Standard `.btn`                                                    |
| **Button radius (rounded)**  | `40px`                                  | `.btn-round` class                                                 |
| **Button padding**           | `12px 16px`                             | All buttons                                                        |
| **Background**               | `#fff` (white)                          | Page background                                                    |
| **Text color**               | `#212529`                               | Body text                                                          |
| **Section padding**          | `7em 0`                                 | `.ftco-section`                                                    |
| **Heading font size**        | `32px`                                  | `.heading-section`                                                 |
| **Subheading font size**     | `16px`                                  | `.heading-section small`                                           |

## Requirements

### Requirement: Page Title

The template SHALL display a heading "Button #05" at the top of the page.

#### Scenario: Page heading renders

- **WHEN** the page loads
- **THEN** the heading "Button #05" is visible at the top of the page in the `.heading-section` style (32px font)

### Requirement: Solid Buttons with Icons

The template SHALL display a row of 4 solid buttons (primary, secondary, tertiary, quarternary) each with an icon on the right side (heart, trash, paper-plane, cloud-download).

#### Scenario: Solid icon buttons render

- **WHEN** the page loads
- **THEN** 4 solid buttons are visible in a row: "Like" (blue, heart icon), "Delete" (teal, trash icon), "Send" (green, paper-plane icon), "Download" (pink, cloud-download icon)

#### Scenario: Solid buttons have 3D shadow

- **WHEN** the page loads
- **THEN** each solid button has a 3px 5px offset box-shadow in the button's shadow color

### Requirement: Outline Buttons

The template SHALL display a row of 4 outline buttons (outline-primary, outline-secondary, outline-tertiary, outline-quarternary) labeled "Default".

#### Scenario: Outline buttons render

- **WHEN** the page loads
- **THEN** 4 outline buttons are visible in a row below the solid buttons, each labeled "Default" with colored border and white background

### Requirement: Rounded Solid Buttons

The template SHALL display a row of 4 rounded solid buttons (primary, secondary, tertiary, quarternary) labeled "Default" with 40px border-radius.

#### Scenario: Rounded solid buttons render

- **WHEN** the page loads
- **THEN** 4 rounded buttons with solid fills are visible, each labeled "Default" with pill-shaped styling

### Requirement: Rounded Outline Buttons

The template SHALL display a row of 4 rounded outline buttons labeled "Default".

#### Scenario: Rounded outline buttons render

- **WHEN** the page loads
- **THEN** 4 rounded outline buttons are visible, each labeled "Default" with pill-shaped styling

### Requirement: Social Brand Buttons with Labels

The template SHALL display social media buttons (Twitter, Facebook, Dribbble) in 4 columns showing: solid filled, outline, rounded solid, and rounded outline variants with brand icon and label text.

#### Scenario: Social brand buttons render

- **WHEN** the page loads
- **THEN** social brand buttons are visible for Twitter, Facebook, and Dribbble in a 4-column grid, with icon+label combinations like "Twitter", "Facebook", "Find us on Dribbble"

### Requirement: Dropdown Buttons

The template SHALL display a section with dropdown buttons in 4 colors (primary, secondary, tertiary, quarternary) each opening a dropdown menu with "Action", "Another action", "Something else here".

#### Scenario: Dropdown buttons render

- **WHEN** the page loads
- **THEN** a "Dropdown Buttons" subheading is visible and 4 dropdown buttons are shown in a row

#### Scenario: Dropdown menu opens

- **WHEN** the user clicks a dropdown button
- **THEN** a dropdown menu appears below the button with 3 menu items

### Requirement: Group Buttons

The template SHALL display button groups with solid-outline-solid combinations for primary and secondary colors.

#### Scenario: Group buttons render

- **WHEN** the page loads
- **THEN** a "Group Buttons" subheading is visible and 2 button groups are shown, each with 3 buttons (solid, outline, solid)

### Requirement: Custom Checkboxes

The template SHALL display custom-styled checkboxes in 5 variants (primary, secondary, tertiary, quarternary, disabled) each checked by default.

#### Scenario: Checkboxes render

- **WHEN** the page loads
- **THEN** a "Checkboxes" subheading is visible and 5 custom checkboxes are shown, each with a colored checkmark in the variant color

### Requirement: Custom Radio Buttons

The template SHALL display custom-styled radio buttons in 5 variants (primary, secondary, tertiary, quarternary, disabled) each selected by default.

#### Scenario: Radio buttons render

- **WHEN** the page loads
- **THEN** a "Radios Buttons" subheading is visible and 5 custom radio buttons are shown with colored fill when selected

### Requirement: Slide Toggle Buttons

The template SHALL display 2 toggle slide buttons with ON/OFF labels and smooth animation.

#### Scenario: Slide toggles render

- **WHEN** the page loads
- **THEN** a "Slide Button" subheading is visible and 2 toggle switches are shown, one showing "ON" state and one showing "OFF" state

#### Scenario: Toggle animation works

- **WHEN** the user clicks a toggle switch
- **THEN** the toggle animates between ON and OFF states with a color transition (blue for ON, red for OFF)

### Requirement: Social Icon-Only Buttons

The template SHALL display social media icon-only buttons for Facebook, Twitter, LinkedIn, Pinterest, and Dribbble in solid, rounded, outline, and rounded-outline variants.

#### Scenario: Social icon buttons render

- **WHEN** the page loads
- **THEN** a "Social Buttons" subheading is visible and rows of icon-only social buttons are shown for Facebook (blue), Twitter (light blue), LinkedIn (dark blue), Pinterest (red), Dribbble (pink)

### Requirement: Action Buttons Row

The template SHALL display a final row of action buttons with icons: "Watch Photos", "Download", "Add Comment", "Like" with count badge, and "Create Account".

#### Scenario: Action buttons render

- **WHEN** the page loads
- **THEN** a row of action buttons is visible at the bottom with icons and labels, including a badge count on the "Like" button

### Requirement: Footer

The template SHALL display a footer linking to Component Dock.

#### Scenario: Footer renders

- **WHEN** the page loads
- **THEN** a footer is visible with a link to https://www.componentdock.com/ branded as "Component Dock"

## Verification Checklist

- [ ] All 4 solid icon buttons render with correct colors and icons
- [ ] All 4 outline buttons render with correct border colors
- [ ] All 4 rounded solid buttons have 40px border-radius
- [ ] All 4 rounded outline buttons have pill shape
- [ ] Social brand buttons render in 4-column grid with correct colors
- [ ] Dropdown buttons open menus on click
- [ ] Button groups render in solid-outline-solid pattern
- [ ] Custom checkboxes show colored checkmarks
- [ ] Custom radio buttons show colored selection
- [ ] Toggle switches animate between ON/OFF
- [ ] Social icon-only buttons render for all 5 platforms
- [ ] Action buttons row renders with icons and badge
- [ ] Footer links to Component Dock
- [ ] All buttons have 3px 5px box-shadow depth effect
- [ ] Poppins font is used throughout
- [ ] Responsive layout works at mobile widths
