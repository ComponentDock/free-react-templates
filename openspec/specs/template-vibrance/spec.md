# Vibrance — Design Studio Landing Template

Recreation of ColorLib **Taxx** (https://colorlib.com/wp/template/taxx/).
Live preview: https://preview.colorlib.com/theme/taxx/

## Purpose

Vibrance is a design studio landing page template featuring a hero with background image, event calendar, portfolio grid, client logos, stats counter, blog section, and a footer linking to Component Dock.

## Design Tokens

- **Primary gradient**: `#ff6a00` (orange) to `#FE018F` (hot pink)
- **Body font**: Poppins (Google Fonts), weight 400/500/600/700
- **Script accent font**: Allura (Google Fonts), weight 400
- **Body text**: `#333`, paragraphs `#777`, light `#999`, dark `#444`
- **Section padding**: 80px top, 50px bottom
- **Button radius**: 0 (sharp corners), letter-spacing 2px
- **Footer background**: `#222` dark

## Requirements

### Requirement: Navbar

Users SHALL see a fixed navigation bar with the Vibrance logo and links to Home, About, Services, Portfolio, Blog, and Contact.

#### Scenario: Desktop navigation

- **WHEN** the page loads on desktop
- **THEN** the navbar displays the "Vibrance" logo and all six navigation links

#### Scenario: Mobile hamburger menu

- **WHEN** the user is on mobile and clicks the hamburger button
- **THEN** the navigation links become visible in a dropdown

### Requirement: Hero section

Users SHALL see a full-screen hero with background image, heading "Vibrance Design", script text "Studio", and a gradient CTA button.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the hero displays "Get your free template now" pre-heading, "Vibrance Design" heading, and "Studio" in script font

#### Scenario: Hero CTA

- **WHEN** the user views the hero
- **THEN** a "DISCOVER IT" gradient button is visible

### Requirement: Social bar

Users SHALL see a social media bar with links to Facebook, Twitter, LinkedIn, and Dribbble.

#### Scenario: Social icons

- **WHEN** the social bar renders
- **THEN** four social media icon links are displayed with labels

### Requirement: Intro section

Users SHALL see a split layout with an image and text about Vibrance being perfect for business.

#### Scenario: Intro content

- **WHEN** the intro section renders
- **THEN** a heading with "Vibrance" in brand color and a description paragraph are visible

### Requirement: Event calendar

Users SHALL see an event calendar section with 4 event cards showing date, title, organizer, description, and read-more link.

#### Scenario: Event cards

- **WHEN** the events section renders
- **THEN** four event cards are displayed in a 2-column grid

### Requirement: Portfolio grid

Users SHALL see a 6-item portfolio grid with hover overlays showing title and category.

#### Scenario: Portfolio items

- **WHEN** the portfolio section renders
- **THEN** six portfolio items with images and hover overlays are visible

### Requirement: Client logos

Users SHALL see a row of 5 client logos.

#### Scenario: Client display

- **WHEN** the client section renders
- **THEN** five client logo images are displayed

### Requirement: About section

Users SHALL see a split layout with image and text about brand expertise.

#### Scenario: About content

- **WHEN** the about section renders
- **THEN** a heading "Brand experts with +10y of experience" and description are visible

### Requirement: Counter section

Users SHALL see 4 statistics: 14 Years, +1000 Clients, 14K Followers, 732 Projects.

#### Scenario: Stats display

- **WHEN** the counter section renders
- **THEN** four stat items with icons, values, and labels are visible

### Requirement: Blog section

Users SHALL see 3 blog post cards with category, date, title, author, and read-more button.

#### Scenario: Blog cards

- **WHEN** the blog section renders
- **THEN** three blog cards with metadata and read-more buttons are visible

### Requirement: Footer

Users SHALL see a footer with office locations and a link to Component Dock.

#### Scenario: Footer content

- **WHEN** the footer renders
- **THEN** three office location columns and a "Component Dock" link to https://www.componentdock.com/ are visible
