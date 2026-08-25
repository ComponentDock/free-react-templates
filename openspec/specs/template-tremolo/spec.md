# Template: Tremolo (Food Menu Accordion)

## Purpose

Recreation of ColorLib `accordion-02` (Free Food Menu Accordion), previewed at `https://colorlib.com/wp/template/accordion-02/`. Built as a modern, interactive food menu and category accordion featuring categorized dishes, expandable accordions, price tags, high-quality dish imagery, dietary badges, and a responsive layout using Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Brand Colors**:
  - Primary Accent: Amber Orange (`#f59e0b` / `#d97706`)
  - Secondary/Dark: Slate Charcoal (`#1e293b` / `#0f172a`)
  - Background: Warm light gray/off-white (`#f8fafc`)
  - Surface/Card: Pure white (`#ffffff`) with subtle shadows and border radii (`rounded-xl`)
- **Typography**:
  - Font Family: Inter / system-ui sans-serif
  - Headings: Bold font weights (`font-bold tracking-tight`), large display headers for categories
- **Component Styles**:
  - Accordion cards: Expandable panels with smooth transitions, chevron indicators, and clear distinction between active and collapsed states.
  - Buttons and Badges: Pill-shaped dietary tags (Vegetarian, Spicy, Chef's Special), crisp CTA order buttons.

## Requirements

### Requirement 1: Hero and Header Section

#### Scenario: Page renders with hero banner

- **WHEN** the user loads the Tremolo food menu app
- **THEN** it displays a stylish header banner with title "Exquisite Food, Crafted with Passion"
- **AND** a descriptive subtitle about the seasonal menu
- **AND** a call-to-action button labeled "Explore Menu"

### Requirement 2: Categorized Food Accordion Sections

#### Scenario: Expand accordion category

- **WHEN** the user clicks on an accordion category header (e.g. "Starters")
- **THEN** the accordion expands smoothly to reveal individual menu items
- **AND** each item shows its title, description, price, and food thumbnail photo

#### Scenario: Collapse accordion category

- **WHEN** an accordion category is expanded
- **AND** the user clicks the header again
- **THEN** the panel collapses and hides the menu items

#### Scenario: Toggle between categories

- **WHEN** an accordion category is expanded
- **AND** the user clicks a different category header
- **THEN** the first category collapses and the new one expands

### Requirement 3: Interactive Item Details and Dietary Badges

#### Scenario: Display menu item details

- **WHEN** menu items are visible inside an expanded accordion
- **THEN** each item displays its price formatted correctly (e.g. "$14.50")
- **AND** dietary badges (Vegetarian, Spicy, Gluten-Free, Chef's Special) where applicable
- **AND** a high-resolution food image from Picsum

### Requirement 4: Footer and Component Dock Attribution

#### Scenario: Footer shows Component Dock link

- **WHEN** the user scrolls to the bottom of the page
- **THEN** the footer displays the Tremolo brand name and social media links
- **AND** a visible "More templates at Component Dock" link pointing to `https://www.componentdock.com/`
