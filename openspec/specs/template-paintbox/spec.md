# Spec: PaintBox

> Recreation of ColorLib "Five Star" (https://colorlib.com/wp/template/five-star/)
> Preview: https://preview.colorlib.com/theme/five-star/
> Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/five-star-art-crafting-website-template.jpg

## Purpose

PaintBox is an art/crafting website template with a bold red brand accent on a clean light background. It features a transparent header, full-width hero with dark overlay, experience section with image grid and text, a service carousel on a dark image background, a services icon grid, a video showcase section, a projects gallery grid, a two-column contact area, and a dark footer with nav, newsletter, social links, and Instagram feed.

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#f5204b` | Buttons, links, headings, icons, accents |
| Body text | `#777777` | Paragraphs, body copy |
| Headings | `#222222` | h1–h6 |
| Background light | `#f9faff` | Service area, contact area, alternating sections |
| Background dark | `#222222` | Contact form, footer |
| Overlay | `rgba(0,0,0,0.75)` | Banner hero, video area |
| Overlay carousel | `rgba(0,0,0,0.25)` | Carousel background |
| Selection | `#f5204b` | `::selection` |
| Font family | `"Poppins", sans-serif` | All text (weights 300, 400, 500, 600) |
| Body font size | `14px` | Base text |
| Heading sizes | h1: 60px, h2: 30px, h3: 36px, h4: 18px, h5: 16px, h6: 14px | Headings |
| Button radius | `20px` | `.primary-btn` pill shape |
| Button border | `1px solid #eee` | Default state |
| Button hover | `#f5204b` bg, white text, `#f5204b` border | Hover state |
| Section padding | `120px 0` | `.section-gap` |
| Service icon bg | `#fff` | White circles on light bg |
| Service icon bg alt | `#f9faff` | Light bg circles on service-area-2 |
| Icon color | `#f5204b` | Service and address icons |
| Address icon hover | `#f5204b` bg, white icon | Contact icons |
| Footer nav hover | `#f5204b` | Footer links |
| Footer bottom text | `#fff` | Copyright and footer text |
| Footer accent | `#f5204b` | Footer heart icon, links |

## Requirements

### Requirement: Header

The template SHALL render a transparent sticky header with the "PaintBox" brand logo and a navigation bar with 3 links (Home, Generic, Elements) and a hamburger menu icon on mobile.

#### Scenario: Brand and navigation visible

- **WHEN** the page loads
- **THEN** the brand logo is displayed in the header
- **THEN** the navigation links "Home", "Generic", and "Elements" are visible
- **THEN** a hamburger menu icon (lnr-menu) is visible for mobile

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the navigation links become visible
- **WHEN** the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero Banner

The template SHALL render a full-width hero banner with a background image, dark overlay, a large heading in brand red, and a subtitle in white.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the heading "Crafting Best Experience" is displayed in brand red (#f5204b) at 60px
- **THEN** the subtitle "Art and Crafting / Acting and Philosophy" is displayed in white
- **THEN** the banner has a dark overlay (rgba(0,0,0,0.75))
- **THEN** the banner is full-width and vertically centered

### Requirement: Experience Section

The template SHALL render an experience section with two image thumbnails on the left and a text block on the right including a heading, sub-heading, paragraph, and "View Details" button.

#### Scenario: Experience content

- **WHEN** the user scrolls to the Experience section
- **THEN** two image thumbnails are displayed side by side on the left
- **THEN** the heading "From the root of experience We dig out the best talent" is displayed
- **THEN** a sub-heading describing the experience is shown
- **THEN** a paragraph of body text is displayed
- **THEN** a "View Details" button with pill shape is visible

### Requirement: Service Carousel

The template SHALL render a service carousel section with a dark image background, overlay, and a white card carousel with prev/next navigation arrows.

#### Scenario: Carousel items

- **WHEN** the user scrolls to the Carousel section
- **THEN** a white carousel card is displayed with a heading in brand red and paragraph text
- **THEN** prev/next arrow buttons are visible for navigation
- **THEN** the background has a dark overlay

#### Scenario: Carousel navigation

- **WHEN** the user clicks the next arrow
- **THEN** the carousel advances to the next item
- **WHEN** the user clicks the previous arrow
- **THEN** the carousel goes back to the previous item

### Requirement: Services Grid

The template SHALL render a services section with 4 service cards in a row, each with a circular icon, title, and description.

#### Scenario: Services layout

- **WHEN** the user scrolls to the Services section
- **THEN** 4 service cards are displayed in a single row on desktop
- **THEN** each card has a 130×130 white square icon container with brand red icon
- **THEN** each card has a title and description below the icon
- **THEN** the section background is light (#f9faff)

#### Scenario: Service icon hover

- **WHEN** the user hovers over a service icon
- **THEN** the icon transitions smoothly (0.3s ease)

### Requirement: Video Section

The template SHALL render a video section with a two-column layout: a video thumbnail with play button on the left and descriptive text on the right.

#### Scenario: Video content

- **WHEN** the user scrolls to the Video section
- **THEN** a video thumbnail with a dark overlay is displayed
- **THEN** a play button is centered on the thumbnail
- **THEN** a heading and paragraph are displayed to the right of the thumbnail
- **THEN** the section has a background image with dark overlay

### Requirement: Projects Gallery

The template SHALL render a projects gallery section with a grid of project images.

#### Scenario: Gallery layout

- **WHEN** the user scrolls to the Projects section
- **THEN** project images are displayed in a grid layout
- **THEN** each image has proper spacing and responsive sizing

### Requirement: Contact Area

The template SHALL render a two-column contact section with a dark contact form on the right and contact information with address icons on the left.

#### Scenario: Contact form

- **WHEN** the user scrolls to the Contact section
- **THEN** a dark background (#222222) contact form is displayed on the right
- **THEN** the form has input fields for name, email, subject, and a message textarea
- **THEN** a "Send Message" button is visible

#### Scenario: Contact information

- **WHEN** the user scrolls to the Contact section
- **THEN** contact address information is displayed on the left
- **THEN** each address item has an icon in a white square container
- **THEN** address details include location, email, and phone information
- **THEN** hovering an address icon turns it brand red with white icon

#### Scenario: Contact area background

- **WHEN** the page renders
- **THEN** the contact area background is light (#f9faff)

### Requirement: Footer

The template SHALL render a dark footer with navigation links, social media icons, newsletter subscription, Instagram feed, and a copyright bar linking to Component Dock.

#### Scenario: Footer navigation

- **WHEN** the user scrolls to the footer
- **THEN** the footer has a dark background (#222222)
- **THEN** navigation links are displayed in white
- **THEN** hovering a nav link turns it brand red (#f5204b)

#### Scenario: Footer newsletter

- **WHEN** the user scrolls to the newsletter area in the footer
- **THEN** a newsletter heading "Newsletter" is displayed
- **THEN** a subscription input and "Get Started" button are visible
- **THEN** helper text says "You can trust us. we only send promo offers, not a single spam."

#### Scenario: Footer social and Instagram

- **WHEN** the user scrolls to the footer
- **THEN** social media icons (Facebook, Twitter, Dribbble, Behance) are visible
- **THEN** an Instagram feed grid is displayed
- **THEN** a copyright bar at the bottom links to https://www.componentdock.com/

### Requirement: Mobile Responsiveness

The template SHALL be responsive on mobile devices with stacked layouts.

#### Scenario: Mobile layout

- **WHEN** the user views the page on a mobile device
- **THEN** the header shows a hamburger menu
- **THEN** the hero banner stacks vertically
- **THEN** service cards stack in a single column
- **THEN** the contact form stacks below the address info
- **THEN** the footer stacks vertically

### Requirement: Design Tokens

The template SHALL use the correct design tokens: brand red #f5204b, Poppins font, and correct button shapes.

#### Scenario: Token application

- **WHEN** the page renders
- **THEN** brand red #f5204b is used for buttons, links, icons, and accents
- **THEN** Poppins is used for all text (body and headings)
- **THEN** buttons have 20px border-radius (pill shape)

### Requirement: No ColorLib References

The template SHALL NOT contain any references to "ColorLib" in source code, comments, or filenames.

#### Scenario: Clean provenance

- **WHEN** the source code is inspected
- **THEN** no file in apps/paintbox/ contains the string "colorlib" (case-insensitive)
