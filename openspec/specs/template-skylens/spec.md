# Template: SkyLens (Drone Photography)

## Purpose

Recreation of ColorLib "Drone Photography" as a React 19 + Vite + Tailwind 4 + TypeScript template under the name **SkyLens**.

- **Source:** https://colorlib.com/wp/template/dronephotography/
- **Preview:** https://preview.colorlib.com/theme/dronephotography/
- **New name:** `skylens` (apps/skylens, @free-react-templates/skylens)
- **Deploy target:** https://skylens.free.componentdock.com
- **Category:** Business / Photography Services

## Requirements

### Requirement: Hero displays centered headline and CTA

SkyLens SHALL display a hero section with background image, dark overlay, centered heading, subheading, and white-bordered CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the user opens the SkyLens homepage
- **THEN** a hero section is visible with background image
- **AND** the heading "Capturing Every Angle" is displayed centered
- **AND** a subheading paragraph is shown below the heading
- **AND** an "Explore Services" button with white border is displayed
- **AND** the hero section has a dark overlay

#### Scenario: Hero button has white border style

- **WHEN** the hero section is loaded
- **THEN** the hero button has a transparent background with 2px white border
- **AND** on hover the button fills white with orange text

### Requirement: Navigation is transparent over hero, becomes sticky

SkyLens SHALL display a transparent navigation bar over the hero that becomes sticky with orange background on scroll.

#### Scenario: Transparent header on hero

- **WHEN** the user opens the homepage
- **THEN** the navigation bar is transparent and overlays the hero
- **AND** the nav links are white text on the dark hero background

#### Scenario: Sticky header appears on scroll

- **WHEN** the user scrolls past the hero
- **THEN** the header becomes sticky with orange background

### Requirement: About section with two-column layout

SkyLens SHALL display an about section with heading, paragraphs, black CTA, drone image, and "20 Years" badge.

#### Scenario: Two-column about section

- **WHEN** the user scrolls to the about section
- **THEN** a left column shows heading "Hassle-Free Drone Photography"
- **AND** descriptive paragraphs are below the heading
- **AND** a black "Explore Services" button is shown
- **AND** the right column shows a drone image
- **AND** a "20 Years of Experience" badge overlays the image

### Requirement: Services grid with three cards

SkyLens SHALL display three service cards with icon, title, and description.

#### Scenario: Three service cards displayed

- **WHEN** the user scrolls to the services section
- **THEN** 3 service cards are displayed in a row
- **AND** each card has an icon, a title, and description text
- **AND** service titles include "Residential Real Estate Photography", "Commercial Real Estate Photography", "Construction Site Monitoring"

### Requirement: Video/How We Work section with steps

SkyLens SHALL display a dark-background section with play button, heading, numbered steps, and CTA.

#### Scenario: Video section with dark background and steps

- **WHEN** the user scrolls to the video section
- **THEN** a dark background image covers the section
- **AND** a video play button (circle with play icon) is centered
- **AND** the heading "How We Work" is displayed on the left
- **AND** 3 numbered steps are shown on the right
- **AND** a "Start a Project" black button is below the heading

### Requirement: Recent projects split layout

SkyLens SHALL display a split layout with project image on left and text on right.

#### Scenario: Split layout projects showcase

- **WHEN** the user scrolls to the recent projects section
- **THEN** a split layout is displayed
- **AND** the left side shows a project image
- **AND** the right side shows heading "Recent Projects" with description text

### Requirement: Second services row with icon-only cards

SkyLens SHALL display three additional service cards with icon and title only.

#### Scenario: Second services row

- **WHEN** the user scrolls past the projects section
- **THEN** 3 more service cards are displayed in a row
- **AND** each has an icon and title (no description)

### Requirement: Testimonial carousel on dark background

SkyLens SHALL display a testimonial carousel with dark background, quote, founder info, and dot navigation.

#### Scenario: Testimonial carousel

- **WHEN** the user scrolls to the testimonial section
- **THEN** a dark background image covers the section
- **AND** a quote icon is displayed above the testimonial text
- **AND** the testimonial text is displayed in white
- **AND** the founder name and role are shown below
- **AND** dot navigation is available for multiple testimonials

#### Scenario: Switching testimonials via dots

- **WHEN** the user clicks a different dot
- **THEN** the displayed testimonial changes to the corresponding one

### Requirement: Contact form with fields

SkyLens SHALL display a contact form with Name, Email, Phone, Topic, and Message fields.

#### Scenario: Contact form with fields

- **WHEN** the user scrolls to the contact section
- **THEN** a "Get a Quote" heading is displayed
- **AND** the form has fields: Name, Email, Phone, Topic (select), Message
- **AND** a full-width orange "Send Message" submit button is at the bottom

### Requirement: Footer with four columns and Component Dock link

SkyLens SHALL display a four-column footer on dark background with logo, navigation, services, and social links.

#### Scenario: Four-column footer

- **WHEN** the user scrolls to the footer
- **THEN** a dark background image covers the footer
- **AND** column 1 shows logo, description, phone and email
- **AND** column 2 shows Navigation links
- **AND** column 3 shows Services links
- **AND** column 4 shows social media icons

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is visible
- **THEN** a "Component Dock" link points to https://www.componentdock.com/

### Requirement: Scroll-to-top button

SkyLens SHALL display a circular orange back-to-top button that appears on scroll.

#### Scenario: Back-to-top button appears on scroll

- **WHEN** the user scrolls down the page
- **THEN** a circular orange back-to-top button appears at bottom-right
- **AND** clicking it scrolls the page to the top
