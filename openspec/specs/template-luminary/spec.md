# Template: Luminary (Inspiration / Creative Agency)

## Purpose

Recreation of ColorLib "Inspire" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `inspire`
- **Preview URL:** https://preview.colorlib.com/theme/inspire/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/inspire-free-template.jpg
- **New name:** `luminary` (app folder: `apps/luminary`, package: `@free-react-templates/luminary`)
- **Surge target:** `luminary.free.componentdock.com`

## Design Tokens (from live preview CSS)

| Token               | Value                 | Notes                                           |
| ------------------- | --------------------- | ----------------------------------------------- |
| Font family         | `"Rubik", sans-serif` | Google Fonts; weights 300, 400, 700             |
| Brand primary       | `#1daff3`             | Used for `.text-primary`, buttons, icons, links |
| Brand hover         | `#30b6f4`             | Lighter blue for button hover                   |
| Background          | `#ffffff`             | Page background                                 |
| Text color          | `#212121`             | Body text headings                              |
| Body text           | `#777777`             | Paragraph text                                  |
| Button radius       | `30px`                | Pill-shaped buttons                             |
| Service icon radius | `40%`                 | Rounded-square icon wraps                       |
| Play button radius  | `50%`                 | Circular play button in hero                    |
| Social icon radius  | `50%`                 | Circular social links                           |
| Section bg-light    | `#f8f9fa`             | Services and feature sections                   |
| Footer bg           | `#2c3e50`             | Dark footer background                          |

## Requirements

### Requirement: Navbar renders with logo and navigation links

The navbar MUST display the logo "Luminary" with a colored dot accent, navigation links (Home, Services, FAQ, About, Contact), and be sticky on scroll. The mobile hamburger MUST toggle the mobile menu.

#### Scenario: Desktop navbar renders logo and links

- **GIVEN** the user opens the Luminary page
- **WHEN** the navbar renders
- **THEN** the logo "Luminary" is displayed with a colored dot
- **AND** navigation links include Home, Services, FAQ, About, Contact
- **AND** the navbar is sticky on scroll

#### Scenario: Mobile menu toggle works

- **GIVEN** the user views the page on mobile
- **WHEN** the user taps the hamburger button
- **THEN** the mobile menu opens with all navigation links
- **AND** tapping a link closes the menu

### Requirement: Hero section displays headline and play button

The hero MUST display a full-width background image, centered headline, subtext, circular play button, and social icons.

#### Scenario: Hero renders headline and play button

- **GIVEN** the user views the hero section
- **WHEN** the page loads
- **THEN** a full-width background image is displayed
- **AND** the headline reads "We Inspire You To Create Great Things"
- **AND** a circular play button is visible
- **AND** social icons (Instagram, Twitter, Facebook) are displayed

### Requirement: Services section shows four service cards

The services section MUST display four cards in a row with icons, headings, and descriptions on a light background.

#### Scenario: Services cards render correctly

- **GIVEN** the user scrolls to the services section
- **WHEN** the section loads
- **THEN** four cards are displayed: Inspire, Create, Innovate, Publish
- **AND** each card has an icon, heading, and description
- **AND** a "See All Services" link is below the cards
- **AND** the section has a light background

### Requirement: About section displays features and image

The about section MUST show a heading, descriptive text with highlighted phrases, a 2x2 feature grid, and an image.

#### Scenario: About section renders correctly

- **GIVEN** the user scrolls to the about section
- **WHEN** the section loads
- **THEN** "Why Are We Awesome?" heading is displayed
- **AND** descriptive text appears
- **AND** a 2x2 grid of feature items is shown
- **AND** an image appears alongside the text

### Requirement: Concept section shows parallax background

The concept section MUST display a parallax background image, heading, description, and CTA button.

#### Scenario: Concept section renders with parallax

- **GIVEN** the user scrolls to the concept section
- **WHEN** the section loads
- **THEN** a parallax background image fills the section
- **AND** "Our Concept" heading is centered
- **AND** a "Get started" primary button is present

### Requirement: Testimonials carousel displays reviews

The testimonials section MUST show testimonial cards with images, quotes, names, and prev/next navigation.

#### Scenario: Testimonials display and navigate

- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the section loads
- **THEN** testimonial cards display person images, quotes, and names
- **AND** prev/next navigation arrows are available
- **AND** clicking next/prev navigates between testimonials

### Requirement: Feature CTA section shows sharing prompt

The feature CTA section MUST show a heading, description, author attribution, and image on a light background.

#### Scenario: Feature CTA renders correctly

- **GIVEN** the user scrolls to the feature section
- **WHEN** the section loads
- **THEN** "Help Us by Sharing Our Works" heading is displayed
- **AND** an author attribution is shown
- **AND** an image appears on the right
- **AND** the section has a light background

### Requirement: Footer contains contact info, links, and Component Dock

The footer MUST have a dark background, three-column layout, social icons, and a "Component Dock" link in the copyright.

#### Scenario: Footer renders with all elements

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer renders
- **THEN** a dark background footer is displayed
- **AND** "Help Us Spread Our Works" heading appears
- **AND** three columns show Contact, Sources, and Links
- **AND** social icons are displayed
- **AND** copyright with "Component Dock" link is shown
