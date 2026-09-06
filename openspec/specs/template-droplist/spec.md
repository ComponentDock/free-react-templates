# Spec: Droplist — Multi-Section Category Dropdown

> Recreation of ColorLib "Dropdown 20" (https://colorlib.com/wp/template/dropdown-20/)

## Purpose

A single-page React component showcase displaying a multi-section/sub-category dropdown navigation menu. The original ColorLib snippet offers multiple sections and elements within a single dropdown menu, organized by category and sub-category. This recreation implements the dropdown as a React + Tailwind CSS component with interactive toggle behavior.

## Source & References

- **ColorLib slug:** dropdown-20
- **ColorLib URL:** https://colorlib.com/wp/template/dropdown-20/
- **Preview URL:** https://preview.colorlib.com/theme/dropdown-20/ (404 — unreachable at time of prep)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-20.jpg (used as primary reference)
- **Description from ColorLib:** "If you would like to offer multiple-sections/elements in your dropdown menu, this free category and sub-category dropdown snippet is the right solution for you."
- **Fallback note:** Preview DOM returned 404. Design tokens and structure derived from screenshot + ColorLib description. Implementer should verify visual fidelity against the screenshot.

## Design Tokens

- **Font:** Poppins (Google Fonts) — standard for ColorLib Bootstrap snippets
- **Primary brand color:** #0071bc (ColorLib standard blue, derived from screenshot common palette)
- **Background:** #ffffff (white)
- **Text color:** #333333
- **Border color:** #dee2e6 (light gray borders on dropdown sections)
- **Button border-radius:** 4px (standard Bootstrap)
- **Dropdown shadow:** 0 2px 8px rgba(0,0,0,0.15)
- **Section divider:** 1px solid #dee2e6

## Requirements

### Requirement: Page structure and heading

The page SHALL render a centered heading "Dropdown" at the top, followed by the dropdown menu component, and a footer at the bottom.

#### Scenario: Page renders with all sections

- **WHEN** the user visits the Droplist page
- **THEN** a heading with text "Dropdown" is visible
- **AND** a dropdown trigger button is displayed
- **AND** a footer with "Component Dock" link is present

### Requirement: Multi-section dropdown menu

The dropdown menu SHALL contain multiple category sections, each with sub-category items organized in a structured layout.

#### Scenario: Clicking trigger opens multi-section menu

- **WHEN** the user clicks the dropdown trigger button
- **THEN** a dropdown menu appears with multiple category sections
- **AND** each section has a heading and list of sub-category items
- **AND** sections are visually separated by dividers or spacing

### Requirement: Category sections with sub-items

Each category section SHALL have a heading and a list of clickable sub-category links.

#### Scenario: Sub-category items are clickable

- **WHEN** the dropdown menu is open
- **AND** the user views a category section
- **THEN** each sub-category item is a clickable link
- **AND** items have hover styling (background color change or underline)

### Requirement: Dropdown toggle behavior

The dropdown menu SHALL toggle open/closed on button click.

#### Scenario: Clicking trigger toggles menu open

- **WHEN** the dropdown menu is closed
- **AND** the user clicks the trigger button
- **THEN** the dropdown menu becomes visible

#### Scenario: Clicking trigger again closes menu

- **WHEN** the dropdown menu is open
- **AND** the user clicks the trigger button
- **THEN** the dropdown menu closes

### Requirement: Click outside closes menu

Any open dropdown menu SHALL close when the user clicks outside the dropdown container.

#### Scenario: Click outside closes open menu

- **GIVEN** the dropdown menu is open
- **WHEN** the user clicks outside the menu area
- **THEN** the menu closes

### Requirement: Escape key closes menu

Any open dropdown menu SHALL close when the user presses the Escape key.

#### Scenario: Escape closes open menu

- **GIVEN** the dropdown menu is open
- **WHEN** the user presses Escape
- **THEN** the menu closes

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer has Component Dock link

- **WHEN** the user views the footer
- **THEN** a link to componentdock.com is present with text "Component Dock"
- **AND** the link opens in a new tab

### Requirement: Design token fidelity

The template SHALL use the following design tokens from the original ColorLib reference:

- Font: Poppins (Google Fonts)
- Primary brand color: #0071bc
- Button border-radius: 4px
- Background: #ffffff
- Dropdown shadow: 0 2px 8px rgba(0,0,0,0.15)

#### Scenario: Design tokens applied

- **WHEN** the page renders
- **THEN** the font family includes Poppins
- **AND** primary buttons use the #0071bc color
- **AND** the dropdown has a visible shadow
- **AND** button corners have 4px radius

### Requirement: Responsive layout

The dropdown component SHALL be responsive and work on mobile viewports.

#### Scenario: Mobile layout

- **WHEN** the viewport is 375px wide
- **THEN** the dropdown menu adjusts to full width
- **AND** sub-category items remain readable and tappable
