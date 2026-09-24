---
name: template-editorial
description: Editorial — magazine and blog template with sidebar navigation, hero slider, and asymmetric blog grid
governed_by: TDD (100% coverage enforced)
---

## Purpose

Recreation of ColorLib "Megazine" (https://colorlib.com/wp/template/megazine/) as "Editorial" — a magazine and blog template featuring a fixed sidebar with navigation, a full-viewport hero image slider, an asymmetric blog post grid, and pagination.

## Requirements

### Requirement: Sidebar with navigation

The template SHALL render a fixed left sidebar containing a logo ("Editorial"), seven navigation links (Home, Style, Fashion, Travel, Sports, Video, Archives), and a footer with copyright text linking to Component Dock and social media icons.

#### Scenario: Logo renders

- **WHEN** the page loads
- **THEN** the text "Editorial" is displayed in the sidebar

#### Scenario: Navigation links render

- **WHEN** the page loads
- **THEN** seven navigation links are displayed: Home, Style, Fashion, Travel, Sports, Video, Archives

#### Scenario: Active state on first link

- **WHEN** the page loads
- **THEN** the "Home" link has active styling (font-semibold)

#### Scenario: Social icons render

- **WHEN** the page loads
- **THEN** four social media links are displayed (Facebook, Twitter, Instagram, LinkedIn)

#### Scenario: Footer Component Dock link

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is rendered in the sidebar footer

### Requirement: Hero image slider

The template SHALL render a full-viewport hero section that auto-advances through slides every 5 seconds, with dot indicators for manual navigation.

#### Scenario: First slide renders by default

- **WHEN** the page loads
- **THEN** the first slide's tag, heading, and description are displayed

#### Scenario: Auto-advance

- **WHEN** 5 seconds elapse
- **THEN** the next slide is displayed

#### Scenario: Manual navigation via indicators

- **WHEN** a user clicks a slide indicator dot
- **THEN** the corresponding slide is displayed

#### Scenario: Wrap-around

- **WHEN** the last slide is displayed and 5 seconds elapse
- **THEN** the first slide is displayed again

#### Scenario: Correct number of indicators

- **WHEN** the slider renders with N slides
- **THEN** N indicator dots are displayed

### Requirement: Blog post grid

The template SHALL render an asymmetric grid of blog post cards, each with a background image, dark overlay, category tag, title, and description.

#### Scenario: All posts render

- **WHEN** the page loads
- **THEN** all 13 blog post cards are displayed

#### Scenario: Card content

- **WHEN** a blog card renders
- **THEN** it displays a tag, title, and description

#### Scenario: Card sizing

- **WHEN** a card has size "tall" or "large"
- **THEN** it renders with height class h-80
- **WHEN** a card has size "small" or "wide"
- **THEN** it renders with height class h-48

### Requirement: Pagination

The template SHALL render a pagination component with numbered page buttons and previous/next arrows.

#### Scenario: Page numbers render

- **WHEN** pagination renders with 4 pages
- **THEN** buttons for pages 1 through 4 are displayed

#### Scenario: Current page marked

- **WHEN** current page is 2
- **THEN** the page 2 button has aria-current="page"

#### Scenario: Previous disabled on first page

- **WHEN** current page is 1
- **THEN** the previous button is disabled

#### Scenario: Next disabled on last page

- **WHEN** current page equals total pages
- **THEN** the next button is disabled

### Requirement: Design tokens

The template SHALL use the following design tokens from the original ColorLib Megazine template:

- Brand color: #F75940 (coral/red-orange)
- Font: Montserrat (weights 300, 400, 500, 600)
- Overlay: rgba(0,0,0,0.45)
- Background: white (#fff)

#### Scenario: Brand color applied

- **WHEN** the page renders
- **THEN** the brand color #F75940 is used for active indicators and accent elements
