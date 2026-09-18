# Template: Domicile (Business / Finance Agency)

## Purpose

Recreation of ColorLib "Occupy" — a business/finance agency website template with
a bold lime-green accent and image-heavy hero slider.

- **Source slug:** `occupy`
- **ColorLib page:** https://colorlib.com/wp/template/occupy/
- **Preview URL:** https://preview.colorlib.com/theme/occupy/
- **New name:** domicile
- **App folder:** `apps/domicile`
- **Package:** `@free-react-templates/domicile`
- **Deploy URL:** `https://domicile.free.componentdock.com`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview)

### Colors

| Token         | Value                | Usage                              |
| ------------- | -------------------- | ---------------------------------- |
| brand-primary | `#a7cb00`            | Buttons, accent text, hover states |
| hero-overlay  | `rgba(34,34,34,0.8)` | Dark overlay on hero/banner images |
| body-text     | `#666666`            | Default body paragraph text        |
| heading-text  | `#000000`            | Headings                           |
| footer-bg     | `#f9f9ff`            | Light gray-blue footer background  |
| footer-text   | `#777777`            | Footer paragraph text              |
| body-bg       | `#ffffff`            | Main content background            |
| border-light  | `#eeeeee`            | Subtle borders and dividers        |

### Fonts

| Token        | Value                   |
| ------------ | ----------------------- |
| font-body    | `"Raleway", sans-serif` |
| font-heading | `"Oswald", sans-serif`  |

## Requirements

### Requirement: Sticky navigation bar with social links

The page SHALL display a sticky header with a "Domicile" logo, navigation links (Home, About, Services, Pages, Blog, Contact), social icons (Facebook, Twitter, Dribbble, Behance), and a mobile hamburger toggle.

#### Scenario: Desktop navigation

- **WHEN** the user views on desktop
- **THEN** all navigation links are visible in the sticky header
- **AND** social icon links are displayed on the right

#### Scenario: Mobile navigation toggle

- **WHEN** the user clicks the hamburger button
- **THEN** a mobile navigation menu opens with all links
- **AND** clicking a link closes the menu

### Requirement: Full-width hero slider with CTA

The page SHALL display a full-width image slider with 3 slides, each with a dark overlay, heading "We Combine Business with Finance", and two CTA buttons ("Explore Us" green, "Get Free Quote" outline). The slider SHALL auto-advance.

#### Scenario: Manual slide navigation

- **WHEN** the user clicks prev/next buttons or dot indicators
- **THEN** the corresponding slide is displayed

#### Scenario: Auto-advance

- **WHEN** the user waits 5 seconds without interaction
- **THEN** the slider advances to the next slide automatically

### Requirement: Mission section with image and text

The page SHALL display a 2-column mission section with an image on the left and a text carousel on the right with items "Road to Success" and "About Our Mission".

#### Scenario: Navigate mission items

- **WHEN** the user clicks prev/next or dots
- **THEN** the corresponding mission text item is displayed

### Requirement: Success/achievements section

The page SHALL display alternating rows of text content and images in the success section.

#### Scenario: Content display

- **WHEN** the user scrolls to the success section
- **THEN** text and image rows are displayed in alternating layout

### Requirement: Project portfolio grid

The page SHALL display 6 project items in a 3-column grid with image hover overlay showing project title, category, and "View More" link.

#### Scenario: Project hover interaction

- **WHEN** the user hovers over a project card
- **THEN** a dark overlay with title, category, and "View More" link is revealed

### Requirement: Team section

The page SHALL display 4 team member cards showing photo, name, position, and social links on hover.

#### Scenario: Team member display

- **WHEN** the user views the team section
- **THEN** 4 team member cards are visible with names, roles, and social icons on hover

### Requirement: Project CTA banner

The page SHALL display a full-width dark overlay banner with heading "Get to Know Project Estimate?" and a white "Get Free Estimate" button.

#### Scenario: CTA visibility

- **WHEN** the user scrolls past the team section
- **THEN** the CTA banner is visible with the heading and button

### Requirement: Blog post cards

The page SHALL display 4 blog post cards in a grid, each with image, date/author meta, title, and excerpt.

#### Scenario: Blog content

- **WHEN** the user scrolls to the blog section
- **THEN** 4 blog cards are visible with all metadata fields

### Requirement: Site footer

The page SHALL display a footer with light gray-blue background (#f9f9ff), 4 columns (About, Navigation Links, Newsletter form, InstaFeed), and a copyright line linking to Component Dock (https://www.componentdock.com/).

#### Scenario: Newsletter form submission

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the form submits and the email input clears

#### Scenario: Component Dock link

- **WHEN** the user views the footer
- **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"

### Requirement: Responsive design

The page SHALL be responsive across mobile, tablet, and desktop. Grids SHALL stack to single column on mobile. The navbar SHALL collapse to a hamburger menu on small screens.

#### Scenario: Mobile layout

- **WHEN** the user views on a mobile device
- **THEN** the navbar collapses to a hamburger menu
- **AND** grid sections stack vertically

### Requirement: Accessibility

The page SHALL provide keyboard and screen reader support. All interactive elements SHALL be focusable. Form inputs SHALL have associated labels. Images SHALL have alt text.

#### Scenario: Keyboard navigation

- **WHEN** the user navigates with keyboard
- **THEN** all interactive elements are focusable in logical order

## Verification checklist

- [ ] Brand color `#a7cb00` used for primary accents
- [ ] Font families: "Raleway" and "Oswald" loaded via Google Fonts
- [ ] Hero is full-width slider with dark overlay
- [ ] Mission section uses text carousel
- [ ] CTA banner has dark overlay background
- [ ] Footer background is #f9f9ff with proper column layout
- [ ] All 9 sections present in correct order
- [ ] Blog section has 4 cards
- [ ] Newsletter form in footer
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Responsive breakpoints work
