# Clareo — Photography Portfolio Template

## Purpose

Recreation of ColorLib "Imahe" (https://colorlib.com/wp/template/imahe/) as a React 19 + Vite + Tailwind CSS 4 template. Photography portfolio with bold yellow accent, full-screen hero, services grid, about section, gallery, blog, instagram feed, and footer.

## Requirements

### Requirement: Navigation bar with responsive mobile menu

The template SHALL display a fixed navigation bar with logo and menu items, with a hamburger toggle on mobile.

#### Scenario: Desktop navigation

- **WHEN** the page loads on desktop
- **THEN** the navbar shows the logo "Clareo" with camera icon and all menu items (Home, Services, About, Gallery, Blog, Contact)

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** the mobile menu opens with all navigation links visible

#### Scenario: Mobile menu close

- **WHEN** the user clicks a navigation link in the mobile menu
- **THEN** the mobile menu closes

### Requirement: Hero section with background image

The template SHALL display a full-screen hero section with a background image, dark overlay, heading, subtitle, and CTA button.

#### Scenario: Hero content

- **WHEN** the hero section renders
- **THEN** it displays a heading "Classy Rebel Fashion Photoshoot", a subtitle, and a "View Gallery" button linking to the gallery section

### Requirement: Services section with three service cards

The template SHALL display three service cards in a row with icons, titles, and descriptions.

#### Scenario: Services display

- **WHEN** the services section renders
- **THEN** it shows Photography, Image Processing, and Videography cards with icons and descriptions

### Requirement: About section with split layout

The template SHALL display a split layout with an image on the left and text on the right.

#### Scenario: About content

- **WHEN** the about section renders
- **THEN** it displays the heading "We Are Clareo a Photography Studio" and descriptive paragraphs

### Requirement: Gallery section with image grid and hover captions

The template SHALL display a grid of gallery images that show captions on hover.

#### Scenario: Gallery grid

- **WHEN** the gallery section renders
- **THEN** it displays 8 images in a 4-column grid

#### Scenario: Hover caption

- **WHEN** the user hovers over a gallery image
- **THEN** a caption overlay becomes visible

### Requirement: Blog section with post cards

The template SHALL display three blog post cards with images, dates, and titles.

#### Scenario: Blog posts

- **WHEN** the blog section renders
- **THEN** it shows 3 blog posts with titles, dates, and author names

### Requirement: Instagram section with image tiles

The template SHALL display a row of 8 Instagram-style image tiles.

#### Scenario: Instagram feed

- **WHEN** the instagram section renders
- **THEN** it displays 8 image tiles with accessible labels

### Requirement: Footer with Component Dock link

The template SHALL display a footer with four columns and a copyright linking to Component Dock.

#### Scenario: Footer columns

- **WHEN** the footer renders
- **THEN** it shows About, Information, Recent Blog, and Contact Info columns

#### Scenario: Component Dock attribution

- **WHEN** the footer copyright renders
- **THEN** it contains a link to https://www.componentdock.com/ labeled "Component Dock"
