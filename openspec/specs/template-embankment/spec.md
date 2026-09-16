# Template: Embankment (Construction Company)

## Purpose

Embankment is a single-page construction company website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Builder" free template, built under a DIFFERENT name
(**Embankment**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

- TypeScript.

## Requirements

### Requirement: Top menu bar with social icons and CTA

The page SHALL display a thin top menu bar with social media icons (Facebook, Twitter, Dribbble), a language selector dropdown, and a golden "Free Quote!" button.

#### Scenario: Social icons are visible

- **WHEN** the page loads
- **THEN** social media icons for Facebook, Twitter, and Dribbble are displayed in the top bar
- **AND** a language selector dropdown is present
- **AND** a golden "Free Quote!" button is visible

### Requirement: Navigation bar with dropdowns

The page SHALL display a white navigation bar with a logo, 5 nav links (Home, About, Services, Pages with dropdown, Blog with dropdown, Contact), and a search icon. The navbar SHALL become sticky with a shadow on scroll.

#### Scenario: Nav links and search icon

- **WHEN** the page loads
- **THEN** the Embankment logo is displayed
- **AND** nav links include Home, About, Services, Pages, Blog, Contact
- **AND** a search icon is visible

#### Scenario: Sticky navbar on scroll

- **WHEN** the user scrolls down past 70px
- **THEN** the navbar gains a shadow and stays fixed at the top

### Requirement: Hero banner with centered content

The page SHALL display a full-width hero banner with a background image, centered heading "Build Your Dream" (with "Dream" in golden), a subtitle, and a dark "Discover Now" CTA button.

#### Scenario: Hero content

- **WHEN** the hero banner is visible
- **THEN** the heading "Build Your Dream" is centered
- **AND** "Dream" is styled in golden accent color
- **AND** a subtitle paragraph is below the heading
- **AND** a dark "Discover Now" CTA button with golden text is present

### Requirement: Services section with 3 cards

The page SHALL display 3 service cards (Building Drawings, Painting Constructions, Repairing Constructions) each with an icon, title link, and description.

#### Scenario: Service cards

- **WHEN** the user scrolls to the services section
- **THEN** 3 service cards are displayed in a row
- **AND** each card has an icon, title link, and description

### Requirement: Latest projects gallery with hover overlay

The page SHALL display 6 project cards in a 3-column grid. Each card shows a construction project image, and hovering reveals centered title and description text.

#### Scenario: Project grid

- **WHEN** the user scrolls to the projects section
- **THEN** 6 project cards are displayed in a 3-column grid
- **AND** each card shows a construction project image

### Requirement: Team section with golden hover overlay

The page SHALL display 4 team member cards with photos, names, and positions. Hovering shows a golden semi-transparent overlay with social icons.

#### Scenario: Team members

- **WHEN** the user scrolls to the team section
- **THEN** 4 team member cards are displayed
- **AND** each card shows a photo, name, and position

### Requirement: Counter statistics bar

The page SHALL display a golden background section with 5 animated stat blocks (Projects Completed, Happy Clients, Total Tasks, Cups of Coffee, In House Professionals).

#### Scenario: Counter stats

- **WHEN** the user scrolls to the counter section
- **THEN** a golden background section is visible
- **AND** 5 stat blocks are displayed with labels

### Requirement: Features section with bordered cards

The page SHALL display 6 feature cards in a 3-column grid, each with a line icon, title, and description, on white background with subtle border.

#### Scenario: Feature cards

- **WHEN** the user scrolls to the features section
- **THEN** 6 feature cards are displayed
- **AND** each card has an icon, title, and description

### Requirement: Testimonials carousel

The page SHALL display a carousel of testimonials with avatar images, quote text, names, and roles on a light purple-gray background.

#### Scenario: Testimonial navigation

- **WHEN** the user views the testimonials section
- **THEN** a testimonial with avatar, quote, name, and role is displayed
- **AND** next/previous buttons navigate between testimonials

### Requirement: Client logos

The page SHALL display a row of grayscale client logos that brighten on hover.

#### Scenario: Client logos

- **WHEN** the user scrolls to the clients section
- **THEN** 5 client logo images are displayed

### Requirement: Footer with newsletter and Component Dock

The page SHALL display a dark footer with About Us, Contact Us, and Newsletter sections, a newsletter form with email input and golden submit button, social media icons, and a copyright line with a Component Dock link.

#### Scenario: Footer content

- **WHEN** the user scrolls to the footer
- **THEN** About Us, Contact Us, and Newsletter sections are displayed
- **AND** the newsletter has an email input with a golden submit button
- **AND** a copyright line includes a link to Component Dock

#### Scenario: Newsletter form submission

- **WHEN** the user enters an email and clicks submit
- **THEN** the email input is cleared

### Requirement: Responsive layout

The page SHALL adapt to mobile widths with a hamburger menu toggle, stacked service cards, fewer project grid columns, and stacked team cards.

#### Scenario: Mobile navigation

- **WHEN** the viewport is narrow (mobile)
- **THEN** a hamburger menu toggle button is visible
- **AND** clicking it toggles the mobile navigation menu

## Design tokens (from live preview stylesheet + rendered page)

| Token           | Value                                     | CSS Source                                                    |
| --------------- | ----------------------------------------- | ------------------------------------------------------------- |
| Accent/brand    | `#fab700` (golden yellow)                 | Used throughout: active links, CTA bg, counter bg, team hover |
| Dark/ink        | `#222222`                                 | Headings, footer bg, CTA bg, nav links                        |
| Body text       | `#777777`                                 | Paragraph text, muted elements                                |
| Heading font    | `'Oswald', sans-serif`                    | h2, h3, h4 throughout                                         |
| Body font       | `'Roboto', sans-serif`                    | body, paragraphs                                              |
| Accent font     | `'Poppins', sans-serif`                   | banner subtitle                                               |
| Hero CTA        | bg `#222222`, color `#fab700`, radius 5px | `.black_btn`                                                  |
| Counter bg      | `#fab700` (golden)                        | `.counter_area`                                               |
| Testimonials bg | `#f9f9ff` (light purple-gray)             | `.testimonials_area`                                          |
| Footer bg       | `#222222` (dark charcoal)                 | `.footer-area`                                                |
