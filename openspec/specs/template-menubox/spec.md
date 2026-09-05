# Spec: Menubox — Profile Dropdown Menu Template

> Recreation of ColorLib "Dropdown V02" (https://colorlib.com/wp/template/dropdown-02/)

## Purpose

A single-page React component showcase displaying a profile dropdown menu with user avatar, icons, and hover effects. The profile button reveals a dropdown containing user info and action items (Settings, Profile, Dashboard, Logout). Serves as a reference implementation for profile/user menus built with React and Tailwind CSS.

## Requirements

### Requirement: Profile button display

The page SHALL render a centered profile button displaying a circular avatar image, user name, and a dropdown chevron indicator.

#### Scenario: Profile button renders with avatar and name

- **WHEN** the user visits the Menubox page
- **THEN** a profile button is visible with a circular avatar image
- **AND** the user name "Alex Morgan" is displayed
- **AND** a chevron icon indicates dropdown capability

### Requirement: Dropdown toggle on click

Clicking the profile button SHALL toggle the dropdown menu open and closed.

#### Scenario: Clicking profile button opens menu

- **WHEN** the user clicks the profile button
- **THEN** a dropdown menu appears below the button
- **AND** the menu contains user info (name, email, role)
- **AND** the menu contains action items with icons
- **AND** aria-expanded is "true" on the profile button

#### Scenario: Clicking profile button again closes menu

- **GIVEN** the dropdown menu is open
- **WHEN** the user clicks the profile button again
- **THEN** the dropdown menu closes
- **AND** aria-expanded is "false"

### Requirement: User info header in dropdown

The dropdown menu SHALL display a user info section at the top with name, email, and role.

#### Scenario: User info section displays correctly

- **WHEN** the dropdown menu opens
- **THEN** the user name "Alex Morgan" is displayed
- **AND** the email "alex.morgan@email.com" is displayed
- **AND** the role "Senior Developer" is displayed

### Requirement: Menu items with icons

The dropdown menu SHALL contain action items, each with an icon from lucide-react and a label.

#### Scenario: Menu items render with icons

- **WHEN** the dropdown menu opens
- **THEN** menu items are visible: Settings, Profile, Dashboard, Logout
- **AND** each item has a corresponding icon (Settings, User, LayoutDashboard, LogOut)

### Requirement: Menu item hover effect

Menu items SHALL have a hover effect that changes the background color with a smooth transition.

#### Scenario: Hover effect on menu items

- **WHEN** the user hovers over a menu item
- **THEN** the item background changes color
- **AND** the transition is smooth (not instant)

### Requirement: Click outside closes dropdown

The dropdown menu SHALL close when the user clicks outside the dropdown container.

#### Scenario: Click outside closes open menu

- **GIVEN** the dropdown menu is open
- **WHEN** the user clicks outside the menu area
- **THEN** the menu closes

### Requirement: Escape key closes dropdown

The dropdown menu SHALL close when the user presses the Escape key.

#### Scenario: Escape closes open menu

- **GIVEN** the dropdown menu is open
- **WHEN** the user presses Escape
- **THEN** the menu closes

### Requirement: Menu item click closes dropdown

Clicking a menu item SHALL close the dropdown menu.

#### Scenario: Clicking menu item closes menu

- **GIVEN** the dropdown menu is open
- **WHEN** the user clicks a menu item
- **THEN** the menu closes

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer has Component Dock link

- **WHEN** the user views the footer
- **THEN** a link to componentdock.com is present with text "Component Dock"
- **AND** the link opens in a new tab

### Requirement: Design token fidelity

The template SHALL use the following design tokens from the original ColorLib preview:

- Font: Inter (Google Fonts)
- Primary brand color: #0075f6
- Background: #f8f9fa (light gray)
- Card shadow: elevated with soft shadow
- Avatar: circular with border

#### Scenario: Design tokens applied

- **WHEN** the page renders
- **THEN** the font family includes Inter
- **AND** primary buttons use the #0075f6 color
- **AND** the background is light gray
