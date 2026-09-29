# Spec: Sidewell

Recreation of ColorLib Bootstrap Sidebar 07 (https://colorlib.com/wp/template/bootstrap-sidebar-07/).

## Purpose

Sidewell is a sidebar navigation template featuring a fixed blue sidebar with icon-labeled navigation, a sticky top bar with navigation links, and a clean white content area. Designed for dashboards, portfolios, and documentation sites.

## Requirements

### Requirement: Sidebar Navigation

The sidebar SHALL display a logo ("M.") and five navigation items (Home, About, Blog, Services, Contacts) with lucide-react icons on a royal blue (#4361ee) background. The active item SHALL be visually highlighted.

#### Scenario: Sidebar renders with logo and nav items

- **WHEN** the page loads
- **THEN** the sidebar displays "M." logo and five nav links with icons

#### Scenario: Active nav item is highlighted

- **WHEN** the page loads
- **THEN** the Home link has bold/semibold font weight

### Requirement: Mobile Sidebar Toggle

The sidebar SHALL be hidden on mobile (below lg breakpoint) and slide in from the left when the hamburger button is tapped. An overlay SHALL appear behind the sidebar and tapping it SHALL close the sidebar.

#### Scenario: Open sidebar on mobile

- **WHEN** the user taps the hamburger button
- **THEN** the sidebar slides in and an overlay appears

#### Scenario: Close sidebar via overlay

- **WHEN** the sidebar is open and the user taps the overlay
- **THEN** the sidebar closes and the overlay disappears

### Requirement: Top Bar

A sticky top bar SHALL display navigation links (Home, About, Portfolio, Contact) right-aligned on a white background. On mobile, a blue hamburger button SHALL be shown on the left.

#### Scenario: Top bar renders nav links

- **WHEN** the page loads
- **THEN** four navigation links are visible in the top bar

#### Scenario: Mobile hamburger in top bar

- **WHEN** the page loads on mobile
- **THEN** a blue circular hamburger button is visible in the top bar

### Requirement: Main Content

The main content area SHALL display a "Sidebar #07" heading and two paragraphs of body text on a white background.

#### Scenario: Heading and body text

- **WHEN** the page loads
- **THEN** "Sidebar #07" heading and at least two paragraphs of text are visible

### Requirement: Footer

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock link in footer

- **WHEN** the page loads
- **THEN** the footer contains a link to componentdock.com labeled "Component Dock" with target="_blank"

### Requirement: Design Tokens

The template SHALL use Poppins font (Google Fonts), royal blue (#4361ee) brand color, white page background, and #212529 heading text.

#### Scenario: Brand color applied

- **WHEN** the page loads
- **THEN** the sidebar background is blue and the page background is white
