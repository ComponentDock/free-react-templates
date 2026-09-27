# template-gallery

## Purpose

Gallery is a creative portfolio and resources landing page template. It recreates the ColorLib "Reopen" design (https://colorlib.com/wp/template/reopen/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. The template features a centered logo, navigation, hero section, masonry-style portfolio grid with hover overlays, a load-more action, and a footer with copyright and social links.

## Requirements

### Requirement: Navbar with logo, navigation links, and dark mode toggle

The template SHALL render a sticky navbar with the "Gallery" brand text, navigation links (Home, About, Story, Blog, Contact), and a dark mode toggle button.

#### Scenario: Navbar renders all elements

- **WHEN** the page loads
- **THEN** the navbar displays the "Gallery" logo text
- **AND** all five navigation links are rendered
- **AND** a dark mode toggle button is present

#### Scenario: Dark mode toggle works

- **WHEN** the user clicks the dark mode toggle
- **THEN** the dark class is added to the document root
- **AND** the toggle text changes to "Light mode"

#### Scenario: Dark mode cleans up on unmount

- **WHEN** the navbar component unmounts with dark mode active
- **THEN** the dark class is removed from the document root

### Requirement: Hero section with heading and subtitle

The template SHALL render a hero section with a large heading about design resources and a subtitle about free downloads.

#### Scenario: Hero displays heading

- **WHEN** the page loads
- **THEN** an h1 heading containing "design resources" is visible

#### Scenario: Hero displays subtitle

- **WHEN** the page loads
- **THEN** text containing "free downloads only on fridays" is visible

### Requirement: Portfolio grid with 9 items and hover overlays

The template SHALL render a responsive 3-column masonry grid of 9 portfolio items, each with a placeholder image and a hover overlay showing category and type labels.

#### Scenario: Grid renders all items

- **WHEN** the page loads
- **THEN** 9 portfolio images are rendered
- **AND** category labels such as "Smartphone", "Starlight", and "Bottle" are visible

#### Scenario: Grid is responsive

- **WHEN** the page loads
- **THEN** the grid uses sm:grid-cols-2 and md:grid-cols-3 breakpoints

### Requirement: Load more button

The template SHALL render a centered load-more button below the portfolio grid.

#### Scenario: Load more button is visible

- **WHEN** the page loads
- **THEN** a button with aria-label "Load more" is present

### Requirement: Footer with Component Dock link and social icons

The template SHALL render a footer with copyright text, a link to Component Dock, and social media icon links.

#### Scenario: Footer shows copyright

- **WHEN** the page loads
- **THEN** copyright text with the current year is displayed

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present
- **AND** the link opens in a new tab

#### Scenario: Footer shows social icons

- **WHEN** the page loads
- **THEN** social media links for Twitter, Behance, Dribbble, and Facebook are rendered

### Requirement: App renders all sections and sets document title

The template SHALL compose all sections and set the page title on mount.

#### Scenario: All sections render

- **WHEN** the app loads
- **THEN** the header, main content, and footer are all present in the DOM

#### Scenario: Document title is set

- **WHEN** the app loads
- **THEN** the document title is "Gallery — Creative Portfolio Template"
