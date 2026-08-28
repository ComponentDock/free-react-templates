# Template: Btnflare (Bootstrap Button Showcase & Component Library)

## Purpose

Recreation of ColorLib Bootstrap Buttons 07 (`https://colorlib.com/wp/template/bootstrap-buttons-07/`, preview: `https://preview.colorlib.com/theme/bootstrap-buttons-07/` — unreachable, 404). A clean, systematic UI component showcase featuring Bootstrap 4 inspired button variants organized by size scale (Large, Medium, Small), comprehensive color palette (18 variants: Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray), and a full-width block button, built with React 19, Tailwind CSS 4, and TypeScript.

## Requirements

### Requirement: Size Scale Showcase

The system SHALL render a size scale section with Large, Medium, and Small button variants with proportional padding and typography, each with a size label.

#### Scenario: Viewing button sizes

- **GIVEN** the user is on the Btnflare home page
- **WHEN** the user views the size scale section
- **THEN** they SHALL see Large, Medium, and Small button variants with proportional padding and typography
- **AND** each button SHALL have a label indicating its size
- **AND** all size buttons SHALL use the Primary color variant

### Requirement: Comprehensive Color Palette

The system SHALL render a comprehensive color palette section with all 18 Bootstrap 4 semantic color variants organized in three rows.

#### Scenario: Viewing color variants row 1

- **GIVEN** the user is viewing the color palette section
- **WHEN** the user scans the first row of buttons
- **THEN** they SHALL see Primary, Secondary, Success, Info, Warning, Danger, Light, and Orange button options
- **AND** each button SHALL display its semantic color correctly
- **AND** each button SHALL have a label with its color name

#### Scenario: Viewing color variants row 2

- **GIVEN** the user is viewing the color palette section
- **WHEN** the user scans the second row of buttons
- **THEN** they SHALL see Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, and Blue button options
- **AND** each button SHALL display its semantic color correctly
- **AND** each button SHALL have a label with its color name

#### Scenario: Viewing color variants row 3

- **GIVEN** the user is viewing the color palette section
- **WHEN** the user scans the third row of buttons
- **THEN** they SHALL see Brown and Blue Gray button options
- **AND** each button SHALL display its semantic color correctly
- **AND** each button SHALL have a label with its color name

#### Scenario: Interactive hover states on color buttons

- **GIVEN** the user is viewing any color variant button
- **WHEN** the user hovers over a button
- **THEN** the button SHALL display a subtle elevation/darken effect
- **AND** the transition SHALL be smooth (150-200ms)

### Requirement: Full Width Block Button

The system SHALL render a full-width block button section with a button that spans 100% of its container width.

#### Scenario: Viewing full width block button

- **GIVEN** the user is viewing the full width section
- **WHEN** the user checks the block button
- **THEN** it SHALL span 100% of its container width
- **AND** it SHALL use the Primary color variant
- **AND** it SHALL have a label indicating "Full width button"
- **AND** it SHALL have clear hover feedback

### Requirement: Responsive Layout and Component Dock Footer

The system SHALL render a responsive page that works on all viewports with proper attribution in the footer.

#### Scenario: Mobile responsive layout

- **GIVEN** the user views the page on a mobile viewport (640px or less)
- **WHEN** the page renders
- **THEN** button rows SHALL stack vertically or wrap gracefully
- **AND** the full-width button SHALL span the viewport width
- **AND** all text SHALL remain readable

#### Scenario: Footer attribution check

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is visible
- **THEN** the footer SHALL display "Made with Component Dock" linking to https://www.componentdock.com/
