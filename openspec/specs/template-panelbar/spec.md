## Purpose

Recreation of ColorLib Bootstrap Sidebar 04 as a React template named "Panelbar". A fixed left sidebar with a blue brand bar, icon-enhanced navigation links, hamburger toggle, and a clean white content area.

## Requirements

### Requirement: Sidebar layout

The template SHALL render a fixed left sidebar (250px wide) with a dark background (#212121) and a main content area to its right.

#### Scenario: Desktop sidebar visibility

- **WHEN** the page loads on a desktop viewport (>= 992px)
- **THEN** the sidebar is visible on the left side of the page
- **AND** the sidebar width is 250px
- **AND** the main content area is shifted right by 250px

#### Scenario: Mobile sidebar hidden by default

- **WHEN** the page loads on a mobile viewport (< 992px)
- **THEN** the sidebar is hidden off-screen to the left
- **AND** a hamburger toggle button is visible

### Requirement: Brand bar

The sidebar SHALL display a blue brand bar (#2f89fc) at the top containing the template name "Panelbar" in white bold text.

#### Scenario: Brand bar renders

- **WHEN** the sidebar is rendered
- **THEN** a blue bar is displayed at the top of the sidebar
- **AND** the brand text "Panelbar" is visible in white
- **AND** the brand text links to the home section

### Requirement: Navigation links

The sidebar SHALL render six navigation links with lucide-react icons: Homepage (Home), Dashboard (LayoutDashboard), Friends (Users), Subscription (CreditCard), Settings (Settings), and Information (Info).

#### Scenario: Nav items render with icons

- **WHEN** the sidebar renders
- **THEN** six navigation links are displayed
- **And** each link has an icon to its left
- **And** the first link (Homepage) is styled as active

#### Scenario: Nav link hover effect

- **WHEN** the user hovers over a navigation link
- **Then** the link background changes to brand blue (#2f89fc)
- **And** the link text becomes white

#### Scenario: Nav link border separation

- **WHEN** the sidebar renders
- **THEN** each navigation link has a bottom border of rgba(255,255,255,0.1)

### Requirement: Mobile sidebar toggle

The sidebar SHALL slide in from the left on mobile when the hamburger button is clicked, and slide out when the overlay is clicked.

#### Scenario: Toggle sidebar open

- **WHEN** the user clicks the hamburger toggle button on mobile
- **THEN** the sidebar slides in from the left
- **AND** a semi-transparent overlay appears behind it

#### Scenario: Toggle sidebar closed

- **WHEN** the sidebar is open on mobile and the user clicks the overlay
- **THEN** the sidebar slides out to the left
- **AND** the overlay disappears

### Requirement: Main content

The main content area SHALL display a heading "Sidebar #04" followed by two paragraphs of descriptive text on a white background.

#### Scenario: Content renders

- **WHEN** the page loads
- **THEN** the heading "Sidebar #04" is visible
- **AND** two paragraphs of text are rendered below the heading

### Requirement: Footer with Component Dock link

The template SHALL include a footer that links to https://www.componentdock.com/ with the text "Component Dock".

#### Scenario: Footer link renders

- **WHEN** the page loads
- **THEN** a footer section is visible at the bottom of the main content
- **AND** it contains a link with text "Component Dock" pointing to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: Typography

The template SHALL use the Poppins font family (weights 400, 500, 700) loaded from Google Fonts.

#### Scenario: Font loads

- **WHEN** the page loads
- **THEN** the Poppins font is applied to the body text
