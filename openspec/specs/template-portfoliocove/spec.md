# Template: PortfolioCove (Minimalist Portfolio)

## Purpose

PortfolioCove is a minimalist portfolio template recreation of ColorLib's "Po Portfolio" template.

- **Source:** https://colorlib.com/wp/template/po-portfolio/
- **Preview:** https://preview.colorlib.com/theme/po-portfolio/ (unreachable at prep time — design derived from screenshot)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Package:** `@free-react-templates/portfoliocove`
- **Deploy:** `https://portfoliocove.free.componentdock.com`

## Design Tokens

| Token              | Value                  | Usage                     |
| ------------------ | ---------------------- | ------------------------- |
| Background primary | `#ffffff` (white)      | Page background           |
| Background card    | `#f5f5f5` (light gray) | Image card backgrounds    |
| Text primary       | `#333333` (dark gray)  | Headings, logo            |
| Text secondary     | `#999999` (mid gray)   | Breadcrumb text           |
| Font family        | `Inter, sans-serif`    | Clean, minimal sans-serif |
| Grid gap           | `24px`                 | Between portfolio items   |
| Border radius      | `0` (square)           | No rounding on cards      |
| Card shadow        | none                   | Clean flat design         |
| Sidebar width      | `80px`                 | Fixed left sidebar        |

## Requirements

### Requirement: Fixed Left Sidebar

The sidebar is fixed to the left side of the viewport with brand logo and navigation toggle.

#### Scenario: Sidebar displays brand logo

- **WHEN** the page loads
- **THEN** the sidebar shows "Plinth." as the brand text
- **AND** the brand text is bold and dark colored

#### Scenario: Sidebar displays hamburger menu

- **WHEN** the page loads
- **THEN** the sidebar shows a hamburger menu icon button
- **AND** the button has aria-label "Toggle menu"
- **AND** clicking the button toggles the navigation panel open/closed

#### Scenario: Sidebar navigation links

- **WHEN** the hamburger menu is clicked open
- **THEN** navigation links are displayed (Home, Portfolio, About, Contact)
- **AND** each link is clickable

#### Scenario: Fixed sidebar layout

- **WHEN** the page loads
- **THEN** the sidebar is fixed to the left
- **AND** scrolling does not move the sidebar
- **AND** the main content area fills the remaining width

### Requirement: Breadcrumb Navigation

A breadcrumb shows the current page location at the top of the main content area.

#### Scenario: Breadcrumb shows current location

- **WHEN** the page loads
- **THEN** a breadcrumb shows "Home / Portfolio"
- **AND** "Home" is a clickable link with href "/"
- **AND** "Portfolio" is plain text (current page)

### Requirement: Portfolio Grid

A responsive grid of portfolio items displays images in a clean layout.

#### Scenario: Portfolio grid displays items

- **WHEN** the page loads
- **THEN** a grid of 12 portfolio items is visible
- **AND** each item shows an image on a light gray background
- **AND** each image has descriptive alt text

#### Scenario: Portfolio grid is responsive

- **WHEN** the viewport is desktop-width (>= 1024px)
- **THEN** the grid shows 4 columns
- **WHEN** the viewport is tablet-width (>= 640px)
- **THEN** the grid shows 2 columns
- **WHEN** the viewport is mobile-width (< 640px)
- **THEN** the grid shows 1 column

#### Scenario: Portfolio items are interactive

- **WHEN** the page loads
- **THEN** each portfolio item is a clickable button

### Requirement: Footer with Component Dock Attribution

The footer displays copyright and a Component Dock attribution link.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer is present with contentinfo role
- **AND** it contains a link to "https://www.componentdock.com/" labeled "Component Dock"
- **AND** the link opens in a new tab

#### Scenario: Footer shows copyright

- **WHEN** the page loads
- **THEN** the footer displays copyright text with "Plinth"

### Requirement: Document Title

The page sets a descriptive title for the browser tab.

#### Scenario: Title is set on mount

- **WHEN** the app renders
- **THEN** the document title is "Plinth — Minimalist Portfolio Template"
