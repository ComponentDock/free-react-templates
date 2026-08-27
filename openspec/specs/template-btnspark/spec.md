# Spec: BtnSpark (Bootstrap Buttons 02)

## Purpose

Recreation of ColorLib Bootstrap Buttons 02 as **BtnSpark**, a modern React button showcase and playground built with React 19, TypeScript, and Tailwind CSS 4.

## Requirements

### Requirement 1: Navbar

Users SHALL see a top navigation bar with the brand name, navigation links, a theme toggle (dark/light mode), and a GitHub icon link.

#### Scenario: Display navbar

- **WHEN** the user loads BtnSpark
- **THEN** they see a sticky navbar with brand name, nav links, theme toggle, and GitHub icon

#### Scenario: Toggle dark mode

- **WHEN** the user clicks the theme toggle button
- **THEN** the page switches between light and dark mode

### Requirement 2: Hero Section

Users SHALL see a hero section introducing BtnSpark with a badge, heading, subtitle, and call-to-action buttons.

#### Scenario: Display hero

- **WHEN** the user loads BtnSpark
- **THEN** they see a hero with badge label, main heading, subtitle text, and two CTA buttons

### Requirement 3: Solid Buttons

Users SHALL see a section displaying standard solid buttons across all semantic intents (primary, secondary, success, danger, warning, info, light, dark).

#### Scenario: Display solid buttons

- **WHEN** the user scrolls to the solid variants section
- **THEN** they see eight solid-colored buttons with semantic color coding

### Requirement 4: Outline Buttons

Users SHALL see a section showcasing transparent buttons with colored borders and hover-fill effects.

#### Scenario: Display outline buttons

- **WHEN** the user scrolls to the outline variants section
- **THEN** they see outline buttons with colored borders matching semantic intents

### Requirement 5: Shape Variants

Users SHALL see a section demonstrating pill (rounded-full) and square (rounded-none) button radii.

#### Scenario: Display shape variants

- **WHEN** the user scrolls to the shape variants section
- **THEN** they see pill-shaped and square button variants grouped under sub-headings

### Requirement 6: Sizes and States

Users SHALL see a section showcasing small, medium, and large buttons, plus active, disabled, and loading spinner states.

#### Scenario: Display sizes

- **WHEN** the user scrolls to the sizes and states section
- **THEN** they see small, medium, and large button size variants

#### Scenario: Display states

- **WHEN** the user views the states area
- **THEN** they see active, disabled, and loading spinner button states

### Requirement 7: Icon Buttons

Users SHALL see a section featuring buttons with leading and trailing Lucide icons.

#### Scenario: Display icon buttons

- **WHEN** the user scrolls to the icon buttons section
- **THEN** they see buttons with icons positioned before and after text labels

### Requirement 8: Interactive Playground

Users SHALL see an interactive playground enabling real-time customization of variants, sizes, shapes, and states with JSX code export.

#### Scenario: Customize button

- **WHEN** the user interacts with the playground controls
- **THEN** the preview button updates to reflect the selected variant, size, shape, and state

#### Scenario: Export code

- **WHEN** the user views the playground
- **THEN** they see generated JSX code matching their current configuration

### Requirement 9: Footer

Users SHALL see a footer with brand attribution and a mandatory Component Dock link.

#### Scenario: Display footer

- **WHEN** the user scrolls to the bottom of the page
- **THEN** they see the footer containing the Component Dock link
