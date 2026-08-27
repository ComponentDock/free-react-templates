# Spec: BtnQuint (Bootstrap Buttons 05)

## Purpose

Recreation of ColorLib **Bootstrap Buttons 05** as **BtnQuint**, a modern React button showcase and playground built with React 19, TypeScript, and Tailwind CSS 4.

## Requirements

### Requirement 1: Navbar

Users SHALL see a top navigation bar with the brand name and navigation links.

#### Scenario: Display navbar

- **WHEN** the user loads BtnQuint
- **THEN** they see a sticky navbar with brand name and navigation links

### Requirement 2: Hero Section

Users SHALL see a hero section introducing BtnQuint with a heading and subtitle.

#### Scenario: Display hero

- **WHEN** the user loads BtnQuint
- **THEN** they see a hero with the main heading "#05 — Bootstrap Buttons" and subtitle text

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

Users SHALL see a section showing buttons in three sizes (large, default, small) and disabled/active states.

#### Scenario: Display size variants

- **WHEN** the user scrolls to the sizes and states section
- **THEN** they see large, default, and small buttons alongside disabled and active state buttons

### Requirement 7: Icon Buttons

Users SHALL see a section showcasing buttons with leading or trailing icons.

#### Scenario: Display icon buttons

- **WHEN** the user scrolls to the icon buttons section
- **THEN** they see buttons with icon + label combinations

### Requirement 8: Playground

Users SHALL see an interactive playground section with a preview button that demonstrates the current configuration.

#### Scenario: Display playground

- **WHEN** the user scrolls to the playground section
- **THEN** they see a heading and a preview button demonstrating the current button style

### Requirement 9: Footer

Users SHALL see a footer with a link to https://www.componentdock.com/.

#### Scenario: Display footer

- **WHEN** the user scrolls to the bottom of the page
- **THEN** they see a footer with a link to Component Dock
