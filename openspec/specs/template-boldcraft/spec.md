# Spec: BoldCraft

> Recreation of ColorLib "Calvin" (https://colorlib.com/wp/template/calvin/)
> Preview: https://preview.colorlib.com/theme/calvin/

## Purpose

BoldCraft is a personal portfolio/agency template with a bold, modern aesthetic. It features a transparent sticky header, full-width hero with portrait and headline, about info bar, services grid, portfolio gallery with hover overlays, about section with skill progress bars, brand logo carousel, testimonial carousel, blog cards, and a two-part black footer with CTA and copyright linking to Component Dock.

## Requirements

### Requirement: Header

The template SHALL render a transparent sticky header with the "BoldCraft" brand, 5 navigation links (Home, Work, Service, Blog, Contact), and a "Let's Talk" border button.

#### Scenario: Brand and navigation visible

- **WHEN** the page loads
- **THEN** the brand "BoldCraft" is displayed
- **THEN** all 5 navigation links are visible
- **THEN** a "Let's Talk" button is visible in the header

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the navigation links become visible in a dropdown
- **WHEN** the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero Section

The template SHALL render a full-width hero section with a background image, a portrait image on the left, and a headline with subtitle on the right.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the headline "My name is Marcus Cole. Digital Product Designer" is displayed
- **THEN** the subtitle "Head of design at Creative Studio" is displayed
- **THEN** a portrait image of Marcus Cole is displayed

### Requirement: About Info Bar

The template SHALL render an info bar overlaid at the bottom of the hero with three columns: design expertise, phone, and email.

#### Scenario: Info bar content

- **WHEN** the hero section is visible
- **THEN** the info bar shows "Design For" with "Web & Mobile"
- **THEN** the info bar shows a phone number "(+01) 234 567 88"
- **THEN** the info bar shows an email "hello@boldcraft.com" with an envelope icon

### Requirement: Services Section

The template SHALL render a services section titled "My Expertise" with a 2×2 grid of 4 service cards, each with an icon, title, description, and link.

#### Scenario: Services grid

- **WHEN** the user scrolls to the Services section
- **THEN** the section title "My Expertise" is displayed
- **THEN** 4 service cards are displayed in a 2×2 grid
- **THEN** each card has an icon, title, description, and browse link

### Requirement: Gallery Section

The template SHALL render a gallery section titled "My Works" with a 2×2 grid of portfolio items with orange overlay on hover.

#### Scenario: Gallery grid and overlay

- **WHEN** the user scrolls to the Gallery section
- **THEN** the section title "My Works" is displayed
- **THEN** 4 portfolio items are displayed in a 2×2 grid
- **THEN** a "More Work" button is displayed below the grid

### Requirement: About Me Section

The template SHALL render a two-column About Me section with descriptive text on the left and 3 skill progress bars on the right.

#### Scenario: About Me content

- **WHEN** the user scrolls to the About Me section
- **THEN** the section title "About Me" is displayed
- **THEN** descriptive text is shown on the left
- **THEN** 3 skill progress bars are shown with labels: User Interface Design, User Experience, Illustration

### Requirement: Brand Area

The template SHALL render a horizontal row of partner/client logos.

#### Scenario: Brand logos

- **WHEN** the user scrolls past the About Me section
- **THEN** 6 partner logo placeholders are displayed in a row

### Requirement: Testimonials Section

The template SHALL render a testimonials section titled "Client Testimonial" with quote cards showing founder image, name, and role.

#### Scenario: Testimonial cards

- **WHEN** the user scrolls to the Testimonials section
- **THEN** the section title "Client Testimonial" is displayed
- **THEN** testimonial cards with quotes are displayed
- **THEN** each card shows a founder image, name, and role

### Requirement: Blog Section

The template SHALL render a blog section titled "Latest News" with 3 blog post cards.

#### Scenario: Blog cards

- **WHEN** the user scrolls to the Blog section
- **THEN** the section title "Latest News" is displayed
- **THEN** 3 blog post cards are displayed
- **THEN** each card has an image, category tag, date, author, and title

### Requirement: Footer

The template SHALL render a two-part footer: a black CTA section with logo, description, social icons, and buttons; and a bottom bar with copyright linking to Component Dock.

#### Scenario: Footer CTA and copyright

- **WHEN** the user scrolls to the footer
- **THEN** a black background CTA section is visible with the BoldCraft logo and description
- **THEN** social media icons are shown
- **THEN** "Let's Talk" and "Download CV" buttons are present
- **THEN** a copyright line links to https://www.componentdock.com/

### Requirement: Mobile Responsiveness

The template SHALL be responsive on mobile devices with stacked layouts.

#### Scenario: Mobile layout

- **WHEN** the user views the page on a mobile device
- **THEN** the header shows a hamburger menu
- **THEN** the hero section stacks vertically
- **THEN** service cards stack in a single column
- **THEN** gallery items stack in a single column
- **THEN** the footer stacks vertically

### Requirement: Design Tokens

The template SHALL use the correct design tokens: brand orange #FF8553, DM Sans + Roboto Condensed fonts, and correct border radii.

#### Scenario: Token application

- **WHEN** the page renders
- **THEN** the brand orange #FF8553 is used for buttons, links, and accents
- **THEN** DM Sans is used for body text
- **THEN** Roboto Condensed is used for headings

### Requirement: No ColorLib References

The template SHALL NOT contain any references to "ColorLib" in source code, comments, or filenames.

#### Scenario: Clean provenance

- **WHEN** the source code is inspected
- **THEN** no file in apps/boldcraft/ contains the string "colorlib" (case-insensitive)
