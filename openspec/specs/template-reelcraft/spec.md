# Template: ReelCraft (Video Production / Portfolio)

## Purpose

Recreation of the ColorLib **Videograph** template — a dark, cinematic
video production / videographer portfolio site.

- **Source:** https://colorlib.com/wp/template/videograph/
- **Preview:** https://preview.colorlib.com/theme/videograph/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/videograph-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Transparent header overlay

The page SHALL display a transparent header positioned absolute over the hero section.

#### Scenario: Header renders with logo and navigation

- **WHEN** the page loads
- **THEN** the header contains a logo on the left
- **AND** the header contains navigation links (Home, About, Services, Portfolio, Team, Contact)
- **AND** the header contains a "Get a Quote" CTA button

#### Scenario: Sticky header on scroll

- **WHEN** the user scrolls past the hero section
- **THEN** the header gains a dark semi-transparent background for readability

### Requirement: Hero section with slider

The page SHALL display a full-width hero section with background image and text overlay.

#### Scenario: Hero displays content

- **WHEN** the page loads
- **THEN** a full-width hero section is displayed with a dark background image
- **AND** a subtitle text is shown ("For website and video editing")
- **AND** a heading is shown ("Videographer's Portfolio")
- **AND** a CTA button is shown ("See more about us")
- **AND** pagination dots are visible at the bottom

### Requirement: Services section

The page SHALL display a services section with a title column and a 2x2 grid of service items.

#### Scenario: Services layout

- **WHEN** the user views the Services section
- **THEN** a left column shows the section title ("What We do?") with description text and "View all services" button
- **AND** a right column shows 4 service items in a 2x2 grid
- **AND** each service item has an icon, title, and description paragraph

#### Scenario: Service items content

- **WHEN** the Services section renders
- **THEN** the items are: Motion graphics, Scriptwriting and editing, Video distribution, Video hosting

### Requirement: Work gallery

The page SHALL display a masonry-style portfolio gallery with hover effects.

#### Scenario: Work gallery grid

- **WHEN** the user views the Work section
- **THEN** a grid of portfolio items is displayed
- **AND** each item has a background image
- **AND** each item has a play button icon overlay
- **AND** hovering an item reveals a title overlay

### Requirement: Counter stats

The page SHALL display animated counter statistics.

#### Scenario: Counter section displays stats

- **WHEN** the user scrolls the Counter section into view
- **THEN** 4 stat items are displayed in a row
- **AND** each stat has an icon, an animated number, and a label
- **AND** the stats are: Completed Projects (230), Happy clients (1068), Perspective clients (230), Awards Won (230)

### Requirement: Team section

The page SHALL display team member cards with hover reveals.

#### Scenario: Team section layout

- **WHEN** the user views the Team section
- **THEN** a background image fills the section
- **AND** a centered section title ("OUR Team") with subtitle ("Nice to meet") is shown
- **AND** 4 team member cards are displayed in a row
- **AND** each card has a background image, name, role, and social icon links

#### Scenario: Team member card hover

- **WHEN** the user hovers a team member card
- **THEN** the card reveals the member's name, role, and social media links

### Requirement: Blog section

The page SHALL display blog post cards.

#### Scenario: Blog posts

- **WHEN** the user views the Latest Blog section
- **THEN** a centered section title ("Blog Update") with subtitle ("Our Blog") is shown
- **AND** 3 blog post cards are displayed
- **AND** each card shows a title, date, comment count, excerpt, and "Read more" link

### Requirement: Call to action

The page SHALL display a CTA section with dark background and heading.

#### Scenario: CTA section

- **WHEN** the user views the CTA section
- **THEN** a dark background image is displayed
- **AND** a large heading text is shown ("Fresh Ideas, Fresh Moments Giving Wings to your Stories.")
- **AND** a subtext line is shown ("INC5000, Best places to work 2031")
- **AND** a CTA button is shown ("Start your stories")

### Requirement: Footer

The page SHALL display a multi-column dark footer with Component Dock link.

#### Scenario: Footer layout

- **WHEN** the user views the Footer
- **THEN** the footer has a top row with logo on the left and social icons on the right
- **AND** the footer has an options row with 4 columns: About us, Who we are, Our work, Newsletter
- **AND** the Newsletter column has description text, an email input, and a submit button

#### Scenario: Footer copyright

- **WHEN** the user views the footer bottom
- **THEN** a copyright line is displayed with "All rights reserved" and "Component Dock" link to https://www.componentdock.com/

### Requirement: Design tokens

The template SHALL use the correct brand colors and fonts from the original design.

#### Scenario: Brand colors

- **WHEN** the template renders
- **THEN** the brand color is #00bfe7 (cyan)
- **AND** the dark CTA surface is #100028
- **AND** the dark footer surface is #0a0119

#### Scenario: Typography

- **WHEN** the template renders
- **THEN** headings and buttons use the Play font family
- **AND** body text uses the Josefin Sans font family

### Requirement: No ColorLib references

The template SHALL NOT contain any references to ColorLib in app source files.

#### Scenario: Provenance isolation

- **WHEN** any source file in apps/reelcraft/ is inspected
- **THEN** no string contains "colorlib" (case-insensitive)
- **AND** provenance exists only in the spec, TEMPLATES.md, and the PR

### Requirement: Placeholder images

The template SHALL use picsum.photos seeded placeholders instead of original assets.

#### Scenario: Placeholder images

- **WHEN** the template renders images
- **THEN** all images use https://picsum.photos/seed/reelcraft-<n>/<w>/<h> URLs
- **AND** no original ColorLib assets are used

### Requirement: Icons from lucide-react

The template SHALL use lucide-react for icons, with inline SVGs for brand icons.

#### Scenario: Icon usage

- **WHEN** the template renders icons
- **THEN** non-brand icons use lucide-react components
- **AND** brand/social icons use inline SVG elements
