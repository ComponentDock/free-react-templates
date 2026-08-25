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
  - Buttons & Badges: Pill-shaped dietary tags (Vegetarian, Spicy, Chef's Special), crisp CTA order buttons.

## Requirements

### Requirement 1: Hero & Header Section

- **Description**: The template must feature a prominent header introducing the restaurant or menu collection with a bold title, subtitle, and quick category filter tabs.
- **Scenarios**:
  - Given the user loads the Tremolo food menu app, when the page renders, then it displays a stylish header banner with title "Tremolo Culinary Menu", a descriptive subtitle, and navigation tabs for categories.

### Requirement 2: Categorized Food Accordion Sections

- **Description**: The core menu must be organized into clear categories (e.g., Starters, Main Courses, Specialties, Desserts, Beverages) using interactive accordion components.
- **Scenarios**:
  - Given the menu is displayed, when a user clicks on an accordion category header (e.g., "Starters"), then the accordion expands smoothly to reveal individual menu items with titles, descriptions, prices, and food thumbnail photos.
  - Given an accordion category is expanded, when the user clicks the header again or opens another category, then the panel collapses/toggles appropriately.

### Requirement 3: Interactive Item Details & Dietary Badges

- **Description**: Each menu item inside the accordions must present clear pricing, appetizing descriptions, and visual badges for dietary preferences (e.g., Spicy, Vegan, Gluten-Free).
- **Scenarios**:
  - Given menu items are visible, when inspecting an item, then it displays its price formatted correctly (e.g., "$14.50"), dietary badges, and a high-resolution food image from Picsum.

### Requirement 4: Footer & Component Dock Attribution

- **Description**: The page footer must display copyright, quick links, and a mandatory link to `https://www.componentdock.com/` ("Component Dock").
- **Scenarios**:
  - Given the user scrolls to the bottom of the page, when the footer renders, then it shows the copyright notice and a visible "More templates at Component Dock" link pointing to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] Vite dev server starts successfully with zero type errors.
- [ ] All accordion categories expand and collapse correctly on click.
- [ ] Dietary badges and prices render correctly for every dish.
- [ ] Footer contains the required Component Dock link.
- [ ] Vitest unit tests pass with 100% code coverage.
