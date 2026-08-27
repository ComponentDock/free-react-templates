# Template: BtnCraft (UI Component Library)

## Purpose

Recreation of ColorLib **Bootstrap Buttons 01** (`https://colorlib.com/wp/template/bootstrap-buttons-01/`).
Note: The live preview URL returned 404, so replication fidelity is based on the official ColorLib screenshot and standard modern Bootstrap design principles.
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript · Lucide icons.
New Name: `btncraft` (Package: `@free-react-templates/btncraft`).

## Requirements

### Requirement: Navigation & Header

The app SHALL display a professional sticky navigation bar with a brand logo, navigation links, and a theme toggle.

#### Scenario: User views navigation

- **WHEN** the user visits BtnCraft
- **THEN** the header shows the brand logo "BtnCraft" and navigation links (Showcase, Variants, Sizes, States, Code)
- **AND** the sticky bar remains at the top on scroll

### Requirement: Hero & Introduction

The hero section SHALL feature a compelling headline, subtitle, and quick action buttons.

#### Scenario: User views hero

- **WHEN** the user lands on the page
- **THEN** the heading "BtnCraft — Modern Bootstrap Button Showcase" is visible
- **AND** CTA buttons link to #showcase and #playground

### Requirement: Solid Button Variants

The Solid Variants section SHALL display standard solid buttons across all semantic color intents.

#### Scenario: User views solid buttons

- **WHEN** the user scrolls to the Solid Variants section
- **THEN** all 8 semantic color buttons (Primary, Secondary, Success, Danger, Warning, Info, Light, Dark) are visible with correct styling

### Requirement: Outline Button Variants

The Outline Variants section SHALL display transparent background buttons with solid borders that fill on hover.

#### Scenario: User views outline buttons

- **WHEN** the user scrolls to the Outline Variants section
- **THEN** all 8 outline variant buttons are visible

### Requirement: Shape Variants

The Shape Variants section SHALL demonstrate pill (rounded-full) and square (rounded-none) button shapes.

#### Scenario: User views shape variants

- **WHEN** the user scrolls to the Shape Variants section
- **THEN** both Pill Buttons and Square Buttons subsections are displayed

### Requirement: Sizes & States

The Sizes & States section SHALL display small, medium, and large buttons, plus active, disabled, and loading states.

#### Scenario: User views sizes and states

- **WHEN** the user scrolls to the Sizes & States section
- **THEN** Small, Medium, and Large buttons are visible
- **AND** Active, Disabled, and Loading state buttons are rendered correctly

### Requirement: Icon Buttons

The Icon Buttons section SHALL display buttons augmented with Lucide icons.

#### Scenario: User views icon buttons

- **WHEN** the user scrolls to the Icon Buttons section
- **THEN** buttons with icons (Download, Delete, Add to Cart, etc.) are visible

### Requirement: Interactive Playground

The Interactive Playground SHALL allow users to customize button variant, size, shape, and state, and copy generated JSX code.

#### Scenario: User customizes button in playground

- **WHEN** the user selects a different variant in the playground
- **THEN** the preview button updates immediately to show the selected variant

#### Scenario: User copies button code

- **WHEN** the user clicks the "Copy code" button
- **THEN** the JSX/Tailwind code is copied to the clipboard

### Requirement: Footer

The footer SHALL contain copyright information and a mandatory link to Component Dock.

#### Scenario: User checks footer attribution

- **WHEN** the user scrolls to the bottom of the page
- **THEN** the footer displays a link to https://www.componentdock.com/ branded as "Component Dock"
