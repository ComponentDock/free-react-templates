# Template: Newsflow (Viral News Magazine)

## Purpose

Newsflow is a single-page viral news / magazine website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Viral" free template (source:
https://colorlib.com/wp/template/viral/), built under a DIFFERENT name
(**Newsflow** — evokes a flowing stream of trending news), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Requirements

### Requirement: Top bar displays welcome message and social links

The template SHALL render a top bar with a welcome message on the left and social media icon links on the right.

#### Scenario: Top bar content

- **WHEN** the page loads
- **THEN** a top bar is visible with text "Welcome to Newsflow."
- **AND** four social media link icons are rendered (Google, Pinterest, Facebook, Twitter)

### Requirement: Navbar displays logo, navigation, and CTA

The template SHALL render a navigation bar with the site logo, navigation links, a search button, and an "Add Post" CTA button.

#### Scenario: Navbar elements

- **WHEN** the page loads
- **THEN** the navbar displays the "Viral Story" logo
- **AND** six navigation links are visible (Top 10, Pages, Funny, Videos, Don't Miss, Mega Menu)
- **AND** a search button with aria-label is rendered
- **AND** an "Add Post" button with orange gradient is rendered

#### Scenario: Active nav link

- **WHEN** the page loads
- **THEN** the "Top 10" link is styled as the active link (brand color)

### Requirement: Trending stories section

The template SHALL render a trending stories section with three horizontal story cards.

#### Scenario: Trending stories content

- **WHEN** the page loads
- **THEN** three trending story cards are visible
- **AND** each card has a thumbnail image with alt text, a title, and a timestamp
- **AND** a magenta divider line is rendered below the section

### Requirement: Main content grid

The template SHALL render a magazine-style content grid with a large feature card and two smaller sidebar cards.

#### Scenario: Featured content layout

- **WHEN** the page loads
- **THEN** a large feature card is displayed on the left (2/3 width)
- **AND** two smaller cards are stacked on the right (1/3 width)
- **AND** each card has a category badge, title, timestamp, and background image

#### Scenario: Category badge colors

- **WHEN** a card has a category badge
- **THEN** the badge displays the category label in white text on a colored background

### Requirement: More stories section

The template SHALL render a "more stories" section with three story cards in a grid.

#### Scenario: More stories content

- **WHEN** the page loads
- **THEN** three story cards are displayed in a responsive grid
- **AND** each card has an image, category badge, title, and timestamp

### Requirement: Newsletter signup form

The template SHALL render a newsletter signup section with an email input and subscribe button.

#### Scenario: Newsletter form display

- **WHEN** the page loads
- **THEN** a newsletter section with dark background is visible
- **AND** an email input field and subscribe button are rendered

#### Scenario: Newsletter form submission

- **WHEN** the user enters a valid email and clicks Subscribe
- **THEN** a success message "Thanks for subscribing!" is displayed

#### Scenario: Newsletter empty email

- **WHEN** the user clicks Subscribe without entering an email
- **THEN** no success message is displayed

### Requirement: Footer with Component Dock link

The template SHALL render a footer with site info, navigation links, and a link to Component Dock.

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer displays the "Newsflow" brand name
- **AND** footer navigation links are rendered (About, Contact, Privacy Policy, Terms of Service)
- **AND** a link to https://www.componentdock.com/ labeled "Component Dock" is rendered with target="_blank"
- **AND** the footer has role="contentinfo"
