# Spec: Paneline

Recreation of ColorLib Bootstrap Sidebar 08 (https://colorlib.com/wp/template/bootstrap-sidebar-08/).

## Purpose

Paneline is a sidebar navigation template featuring a right-aligned sidebar with collapsible product categories, a tag cloud, and a newsletter subscription form. The sidebar has a clean white design with pink accent color, designed for product catalogs and e-commerce dashboards.

## Requirements

### Requirement: Two-Column Layout

The page SHALL display a two-column flex layout with main content on the left and a 270px sidebar on the right. The sidebar SHALL have a white background with a left border of 1px solid rgba(0,0,0,0.05).

#### Scenario: Sidebar renders on the right side

- **WHEN** the page loads on desktop
- **THEN** the sidebar is visible on the right at 270px width

#### Scenario: Main content fills remaining space

- **WHEN** the page loads
- **THEN** the main content area fills the remaining horizontal space

### Requirement: Collapsible Category Accordion

The sidebar SHALL contain 4 collapsible category groups: Mens Shoes, Womens Shoes, Accessories, and Clothes. Each category SHALL have sub-items with chevron-right icons. Clicking a category heading SHALL expand or collapse its sub-items.

#### Scenario: Categories render with headings

- **WHEN** the sidebar is visible
- **THEN** all 4 category headings are shown

#### Scenario: Expand category on click

- **WHEN** a user clicks a category heading
- **THEN** its sub-items expand and become visible

#### Scenario: Collapse category on second click

- **WHEN** a user clicks an expanded category heading
- **THEN** its sub-items collapse and become hidden

### Requirement: Tag Cloud

The sidebar SHALL display a tag cloud section below the categories with 8 tags: dish, menu, food, sweet, tasty, delicious, desserts, drinks. Tags SHALL be uppercase with a 1px solid #ccc border and 4px border radius.

#### Scenario: Tag cloud renders all tags

- **WHEN** the sidebar is visible
- **THEN** the tag cloud section shows all 8 tags in uppercase

### Requirement: Newsletter Form

The sidebar SHALL include a newsletter subscription form below the tag cloud with a send icon and an email input field with placeholder "Enter Email Address".

#### Scenario: Newsletter form renders

- **WHEN** the sidebar is visible
- **THEN** the newsletter form is shown with a send icon and email input

### Requirement: Mobile Responsive

On mobile viewports (< 768px), the sidebar SHALL collapse and a toggle button SHALL appear. Tapping the toggle SHALL slide the sidebar in from the right. An overlay SHALL appear behind the sidebar and tapping it SHALL close the sidebar.

#### Scenario: Sidebar collapses on mobile

- **WHEN** viewport is below 768px
- **THEN** the sidebar is hidden and a toggle button is visible

#### Scenario: Toggle opens sidebar on mobile

- **WHEN** a user taps the toggle button
- **THEN** the sidebar slides in from the right

### Requirement: Footer with Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** the footer is visible
- **THEN** it contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Design tokens

| Token             | Value                                                       |
| ----------------- | ----------------------------------------------------------- |
| Font family       | Poppins, sans-serif                                         |
| Body font size    | 14px                                                        |
| Line height       | 1.8                                                         |
| Link/accent color | #fc7fb2 (pink)                                              |
| Body text color   | gray (#6c757d)                                              |
| Heading color     | #000 (black)                                                |
| Sidebar width     | 270px                                                       |
| Sidebar bg        | #ffffff (white)                                             |
| Sidebar border    | left 1px solid rgba(0,0,0,0.05)                             |
| Tag cloud border  | 1px solid #ccc, rounded 4px                                 |
| Newsletter input  | border 1px solid rgba(0,0,0,0.05), rounded 4px, height 44px |
| Page bg           | #fff (white)                                                |
