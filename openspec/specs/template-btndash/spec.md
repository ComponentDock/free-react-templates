# Template: BtnDash (Bootstrap Buttons V20)

## Purpose

BtnDash is a React implementation of the ColorLib Bootstrap Buttons V20 design
(preview: https://preview.colorlib.com/theme/bootstrap-buttons-20/), featuring
solid buttons, outline buttons, icon-augmented buttons, shape variants (pill/square),
size/state variations, and an interactive playground. Built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Bootstrap color palette: primary `#0d6efd`, secondary `#6c757d`,
  success `#198754`, danger `#dc3545`, warning `#ffc107`, info `#0dcaf0`
- Dark page background `#0a0f1e` (slate-950) with light text
- Typeface: Inter (Google Fonts via `<link>`)
- Rounded-lg buttons with hover darkening; outline variants with 2px borders
- Assets are NOT copied — lucide-react icons + inline SVG brand icons

BtnDash lives in `apps/btndash` and uses shared components from `packages/ui`.

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky navbar with the brand name "BtnDash", navigation
links (Showcase, Variants, Sizes, States, Code), a dark mode toggle, a GitHub
icon link, and a mobile hamburger menu on small screens.

#### Scenario: Render navbar

- **WHEN** the page loads
- **THEN** the navbar displays the brand name "BtnDash"
- **AND** navigation links are present with correct anchor hrefs

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle
- **THEN** the `dark` class is added to `<html>`
- **AND** the toggle icon switches to a sun icon

#### Scenario: Mobile menu

- **WHEN** the user taps the hamburger menu on mobile
- **THEN** a mobile navigation panel opens with all nav links
- **AND** tapping a link closes the mobile menu

### Requirement: Hero section

The system SHALL render a hero section with a heading "BtnDash — Modern Bootstrap
Button Showcase", a description, a badge label, and CTA buttons linking to
#showcase and #playground.

#### Scenario: Render hero content

- **WHEN** the page loads
- **THEN** the hero heading contains "BtnDash"
- **AND** CTA buttons link to showcase and playground sections

### Requirement: Solid button variants

The system SHALL render a showcase section with 18 solid button variants:
Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo,
Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray.

#### Scenario: Render solid buttons

- **WHEN** the page loads
- **THEN** all 18 solid variant buttons are visible

### Requirement: Outline button variants

The system SHALL render outline variants with transparent background and colored
borders that fill on hover: Primary, Secondary, Success, Info, Warning, Danger,
Light, Orange, Indigo, Dark.

#### Scenario: Render outline buttons

- **WHEN** the page loads
- **THEN** all 10 outline variant buttons are visible

### Requirement: Icon buttons

The system SHALL render icon-augmented buttons with lucide-react icons:
Download, Delete, Add to Cart, Continue, Favorite, Share, Contact, Notify.

#### Scenario: Render icon buttons

- **WHEN** the page loads
- **THEN** all 8 icon buttons are visible with their labels

### Requirement: Shape variants

The system SHALL render pill (rounded-full) and square (rounded-none) button
shapes across Primary, Secondary, Success, and Danger colors.

#### Scenario: Render shape variants

- **WHEN** the page loads
- **THEN** pill and square sub-sections are visible
- **AND** both contain Primary, Secondary, Success, and Danger buttons

### Requirement: Sizes and states

The system SHALL render Small, Medium, and Large size buttons, plus Active,
Disabled, and Loading state buttons.

#### Scenario: Render sizes

- **WHEN** the page loads
- **THEN** Small, Medium, and Large buttons are visible

#### Scenario: Render states

- **WHEN** the page loads
- **THEN** Active, Disabled, and Loading buttons are visible
- **AND** Disabled and Loading buttons are disabled

### Requirement: Interactive playground

The system SHALL render a playground section with variant/size/shape selectors,
disabled/loading checkboxes, a live button preview, and a copy-to-clipboard
code generator.

#### Scenario: Playground renders

- **WHEN** the page loads
- **THEN** the playground heading and preview button are visible

#### Scenario: Playground updates

- **WHEN** the user changes the variant, size, or shape selector
- **THEN** the preview button updates accordingly

#### Scenario: Playground checkboxes

- **WHEN** the user toggles the disabled or loading checkbox
- **THEN** the preview button state updates

#### Scenario: Copy code

- **WHEN** the user clicks the copy button
- **THEN** the generated JSX code is copied to the clipboard

### Requirement: Footer

The system SHALL render a footer with copyright text and a link to
Component Dock (https://www.componentdock.com/).

#### Scenario: Render footer

- **WHEN** the page loads
- **THEN** the footer contains a "Component Dock" link with href
  https://www.componentdock.com/
- **AND** the copyright text includes "BtnDash"
