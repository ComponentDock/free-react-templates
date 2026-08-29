# Specification: BtnFlow (Bootstrap Buttons 17 Recreation)

Recreation of ColorLib "Bootstrap Buttons 17" (`https://colorlib.com/wp/template/bootstrap-buttons-17/`). Preview URL: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-17/`. Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Purpose

BtnFlow is a comprehensive button showcase template featuring an extended collection of Bootstrap-style button variants — solid, outline, rounded, social, dropdown, grouped, checkbox, radio, and toggle-slide buttons. All buttons use a 3D box-shadow depth effect and are displayed in a single-page layout with section headings. The design uses Poppins font, a clean white background, and ten primary brand colors spanning the spectrum plus eight social-brand colors.

## Design Tokens

Extracted from the live preview CSS (`https://preview.colorlib.com/theme/bb/bootstrap-buttons-17/css/style.css`):

| Token                       | Value                                   | Usage                                               |
| --------------------------- | --------------------------------------- | --------------------------------------------------- |
| **Font family**             | `Poppins, sans-serif`                   | All text, loaded via Google Fonts (weights 300–800) |
| **Brand Blue**              | `#4f81c7`                               | Solid blue buttons, checkbox blue, radio blue       |
| **Brand Blue Shadow**       | `#3d73c0`                               | Box-shadow offset on blue buttons                   |
| **Brand Indigo**            | `#667eea`                               | Solid indigo buttons                                |
| **Brand Indigo Shadow**     | `#5a6fd6`                               | Box-shadow offset on indigo buttons                 |
| **Brand Purple**            | `#9b59b6`                               | Solid purple buttons                                |
| **Brand Purple Shadow**     | `#8e44ad`                               | Box-shadow offset on purple buttons                 |
| **Brand Pink**              | `#ff78ae`                               | Solid pink buttons                                  |
| **Brand Pink Shadow**       | `#ff5f9f`                               | Box-shadow offset on pink buttons                   |
| **Brand Red**               | `#e74c3c`                               | Solid red buttons                                   |
| **Brand Red Shadow**        | `#c0392b`                               | Box-shadow offset on red buttons                    |
| **Brand Orange**            | `#f39c12`                               | Solid orange buttons                                |
| **Brand Orange Shadow**     | `#d68910`                               | Box-shadow offset on orange buttons                 |
| **Brand Yellow**            | `#f1c40f`                               | Solid yellow buttons                                |
| **Brand Yellow Shadow**     | `#d4ac0d`                               | Box-shadow offset on yellow buttons                 |
| **Brand Green**             | `#2ecc71`                               | Solid green buttons                                 |
| **Brand Green Shadow**      | `#27ae60`                               | Box-shadow offset on green buttons                  |
| **Brand Teal**              | `#1abc9c`                               | Solid teal buttons                                  |
| **Brand Teal Shadow**       | `#16a085`                               | Box-shadow offset on teal buttons                   |
| **Brand Cyan**              | `#3498db`                               | Solid cyan buttons                                  |
| **Brand Cyan Shadow**       | `#2980b9`                               | Box-shadow offset on cyan buttons                   |
| **Facebook**                | `#3b5998`                               | Social buttons                                      |
| **Twitter**                 | `#1da1f2`                               | Social buttons                                      |
| **Google**                  | `#db4437`                               | Social buttons                                      |
| **GitHub**                  | `#333333`                               | Social buttons                                      |
| **LinkedIn**                | `#0077b5`                               | Social buttons                                      |
| **Instagram**               | `#e4405f`                               | Social buttons                                      |
| **YouTube**                 | `#ff0000`                               | Social buttons                                      |
| **Dribbble**                | `#ea4c89`                               | Social buttons                                      |
| **Dark/Disabled**           | `#343a40`                               | Disabled checkbox/radio                             |
| **Button Shadow**           | `3px 5px 0px 0px <color>`               | 3D depth effect on all solid buttons                |
| **Button Radius (Default)** | Not rounded (square corners by default) | Standard `.btn`                                     |
| **Button Radius (Rounded)** | `40px`                                  | `.btn-round` class                                  |
| **Button Padding**          | `12px 16px`                             | All buttons                                         |
| **Background**              | `#fff` (white)                          | Page background                                     |
| **Text Color**              | `#212529`                               | Body text                                           |
| **Section Padding**         | `7em 0`                                 | `.ftco-section`                                     |
| **Heading Font Size**       | `32px`                                  | `.heading-section`                                  |
| **Subheading Font Size**    | `16px`                                  | `.heading-section small`                            |

## Requirements

### Requirement: Page Title

The template SHALL display a heading "Button #06" at the top of the page.

#### Scenario: Page heading renders

- **WHEN** the page loads
- **THEN** the heading "Button #06" is visible at the top of the page in the `.heading-section` style (32px font)

### Requirement: Solid Buttons with Icons (10 Colors)

The template SHALL display a row of 10 solid buttons (blue, indigo, purple, pink, red, orange, yellow, green, teal, cyan) each with an icon on the right side.

#### Scenario: Solid icon buttons render

- **WHEN** the page loads
- **THEN** 10 solid buttons are visible in a responsive grid: "Like" (blue, heart icon), "Delete" (indigo, trash icon), "Send" (purple, paper-plane icon), "Download" (pink, cloud-download icon), "Share" (red, share icon), "Edit" (orange, edit icon), "Save" (yellow, save icon), "Print" (green, printer icon), "Settings" (teal, settings icon), "Home" (cyan, home icon)

#### Scenario: Solid buttons have 3D shadow

- **WHEN** the page loads
- **THEN** each solid button has a 3px 5px offset box-shadow in the button's shadow color

### Requirement: Outline Buttons (10 Colors)

The template SHALL display a row of 10 outline buttons labeled "Default" with colored borders and white backgrounds.

#### Scenario: Outline buttons render

- **WHEN** the page loads
- **THEN** 10 outline buttons are visible in a responsive grid below the solid buttons, each labeled "Default" with correct border colors

### Requirement: Rounded Solid Buttons (10 Colors)

The template SHALL display a row of 10 rounded solid buttons labeled "Default" with 40px border-radius.

#### Scenario: Rounded solid buttons render

- **WHEN** the page loads
- **THEN** 10 rounded buttons with solid fills are visible, each labeled "Default" with pill-shaped styling

### Requirement: Rounded Outline Buttons (10 Colors)

The template SHALL display a row of 10 rounded outline buttons labeled "Default".

#### Scenario: Rounded outline buttons render

- **WHEN** the page loads
- **THEN** 10 rounded outline buttons are visible, each labeled "Default" with pill-shaped styling

### Requirement: Social Brand Buttons with Labels (8 Brands)

The template SHALL display social media buttons (Facebook, Twitter, Google, GitHub, LinkedIn, Instagram, YouTube, Dribbble) in 4 columns showing: solid filled, outline, rounded solid, and rounded outline variants with brand icon and label text.

#### Scenario: Social brand buttons render

- **WHEN** the page loads
- **THEN** social brand buttons are visible for all 8 platforms in a 4-column grid, with icon+label combinations like "Facebook", "Twitter", "Google", "GitHub", "LinkedIn", "Instagram", "YouTube", "Find us on Dribbble"

### Requirement: Dropdown Buttons (8 Colors)

The template SHALL display a section with dropdown buttons in 8 colors (blue, indigo, purple, pink, red, orange, green, teal) each opening a dropdown menu with "Action", "Another action", "Something else here".

#### Scenario: Dropdown buttons render

- **WHEN** the page loads
- **THEN** a "Dropdown Buttons" subheading is visible and 8 dropdown buttons are shown in a responsive grid

#### Scenario: Dropdown menu opens

- **WHEN** the user clicks a dropdown button
- **THEN** a dropdown menu appears below the button with 3 menu items

### Requirement: Group Buttons (3 Groups)

The template SHALL display button groups with solid-outline-solid combinations for primary, secondary, and tertiary color sets.

#### Scenario: Group buttons render

- **WHEN** the page loads
- **THEN** a "Group Buttons" subheading is visible and 3 button groups are shown, each with 3 buttons (solid, outline, solid)

### Requirement: Custom Checkboxes (5 Variants)

The template SHALL display custom-styled checkboxes in 5 variants (primary, secondary, tertiary, quarternary, disabled) each checked by default.

#### Scenario: Checkboxes render

- **WHEN** the page loads
- **THEN** a "Checkboxes" subheading is visible and 5 custom checkboxes are shown, each with a colored checkmark in the variant color

### Requirement: Custom Radio Buttons (5 Variants)

The template SHALL display custom-styled radio buttons in 5 variants (primary, secondary, tertiary, quarternary, disabled) each selected by default.

#### Scenario: Radio buttons render

- **WHEN** the page loads
- **THEN** a "Radios Buttons" subheading is visible and 5 custom radio buttons are shown with colored fill when selected

### Requirement: Slide Toggle Buttons (2 Toggles)

The template SHALL display 2 toggle slide buttons with ON/OFF labels and smooth animation.

#### Scenario: Slide toggles render

- **WHEN** the page loads
- **THEN** a "Slide Button" subheading is visible and 2 toggle switches are shown, one showing "ON" state and one showing "OFF" state

#### Scenario: Toggle animation works

- **WHEN** the user clicks a toggle switch
- **THEN** the toggle animates between ON and OFF states with a color transition (brand blue for ON, brand red for OFF)

### Requirement: Social Icon-Only Buttons (8 Brands)

The template SHALL display social media icon-only buttons for Facebook, Twitter, Google, GitHub, LinkedIn, Instagram, YouTube, Dribbble in solid, rounded, outline, and rounded-outline variants.

#### Scenario: Social icon buttons render

- **WHEN** the page loads
- **THEN** a "Social Buttons" subheading is visible and rows of icon-only social buttons are shown for all 8 platforms in 4 variant columns

### Requirement: Action Buttons Row (5 Buttons)

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

- [ ] All 10 solid icon buttons render with correct colors and icons
- [ ] All 10 outline buttons render with correct border colors
- [ ] All 10 rounded solid buttons have 40px border-radius
- [ ] All 10 rounded outline buttons have pill shape
- [ ] Social brand buttons render in 4-column grid with correct colors for 8 platforms
- [ ] Dropdown buttons (8) open menus on click
- [ ] Button groups (3) render in solid-outline-solid pattern
- [ ] Custom checkboxes (5) show colored checkmarks
- [ ] Custom radio buttons (5) show colored selection
- [ ] Toggle switches (2) animate between ON/OFF
- [ ] Social icon-only buttons render for all 8 platforms in 4 variants
- [ ] Action buttons row (5) renders with icons and badge
- [ ] Footer links to Component Dock
- [ ] All buttons have 3px 5px box-shadow depth effect
- [ ] Poppins font is used throughout
- [ ] Responsive layout works at mobile widths
- [ ] TypeScript strict compilation passes
- [ ] Vitest coverage at 100% lines/functions/branches/statements
- [ ] App public/CNAME set to `btnflow.free.componentdock.com`
- [ ] Footer includes Component Dock branding link (`https://www.componentdock.com/`)
- [ ] Tailwind `@theme` configuration matches all design tokens
