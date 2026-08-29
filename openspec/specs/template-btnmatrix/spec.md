# Spec: BtnMatrix (Bootstrap Buttons 20 / UI Components)

## Purpose

Recreation of ColorLib [Bootstrap Buttons 20](https://colorlib.com/wp/template/bootstrap-buttons-20/) (preview URL: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-20/`).
Design category: UI Components & Buttons Showroom.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons (`lucide-react`).

## Requirements

### Requirement: Style showcase section

The app SHALL display a "Pick Your Style" section with default primary buttons (text, icon, icon-only) and outline primary buttons (text, icon, icon-only).

#### Scenario: User views style options

- **WHEN** the BtnMatrix app is loaded
- **THEN** the user sees "Pick Your Style" heading and default primary and outline primary buttons with text, icons, and icon-only states

### Requirement: Color variants section

The app SHALL display a "Pick Your Color" section with solid and outline buttons for Primary, Secondary, Tertiary, and Quarternary colors.

#### Scenario: User views color variants

- **WHEN** the BtnMatrix app is loaded
- **THEN** the user sees "Pick Your Color" heading and buttons for Primary, Secondary, Tertiary, and Quarternary in both solid and outline styles

### Requirement: Social action grid

The app SHALL display a 4-column social action grid with Twitter, Facebook, and Dribbble buttons in standard, outline, rounded, and outline-rounded configurations.

#### Scenario: User interacts with social grid

- **WHEN** the BtnMatrix app is loaded
- **THEN** the user sees Twitter, Facebook, and Dribbble buttons in 4 variant columns

### Requirement: Social brand buttons

The app SHALL display a "Social Buttons" section with rows for Facebook, Twitter, LinkedIn, Pinterest, and Dribbble featuring icon-only, round, outline, outline-round, and badge count variants.

#### Scenario: User views social badges

- **WHEN** the BtnMatrix app is loaded
- **THEN** the user sees "Social Buttons" heading and brand buttons with counts and share actions

### Requirement: Footer attribution

The app SHALL display a footer linking to https://www.componentdock.com/.

#### Scenario: User views footer attribution

- **WHEN** the user scrolls to the footer
- **THEN** they see a link pointing to https://www.componentdock.com/
