# Template: Batterly (Bakery / Cake Shop)

## Purpose

Recreation of ColorLib's "Cakes" template for a bakery / cake-shop website.

- **ColorLib source:** https://colorlib.com/wp/template/cakes/
- **Preview URL:** https://preview.colorlib.com/theme/cakes/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cakes-colorlib-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **New name:** `batterly` (apps/batterly, @free-react-templates/batterly)
- **Deploy URL:** https://batterly.free.componentdock.com

## Design tokens (from preview CSS)

| Token                | Value                                                 | Notes                                                                 |
| -------------------- | ----------------------------------------------------- | --------------------------------------------------------------------- |
| Brand color          | `#F04506`                                             | Orange-red, used for buttons, accents, links, subtitles, hover states |
| Brand gradient       | `linear-gradient(to left, #F04506, #d83e06, #F04506)` | Primary `.btn` background                                             |
| Card background      | `#FFF5F2`                                             | Warm pink-cream for product cards                                     |
| Footer background    | `#FFF7F3`                                             | Warm cream                                                            |
| Body text            | `#000` / `#5E5E5E`                                    | Headings black, body muted grey                                       |
| Section title span   | `color: #F04506`, `letter-spacing: 0.2em`             | Subtitle/accent text above headings                                   |
| Body font            | `"DM Sans", sans-serif`                               | 16px body text                                                        |
| Heading font         | `"Quicksand", sans-serif`                             | h1–h6, buttons, nav                                                   |
| Decorative font      | `"Lobster", cursive`                                  | Hero watermark "Delicious" text                                       |
| Button border-radius | `30px`                                                | All primary buttons are pill-shaped                                   |
| Button shadow        | `0px 17px 27px rgba(240,69,6,0.27)`                   | Orange-tinted drop shadow                                             |
| Section padding      | `110px` top/bottom                                    | `.section-padding40`                                                  |
| Card border-radius   | `0 0 60px 0`                                          | Bottom-right rounded corners on product cards                         |

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky white header with the site name "Batterly", section links (Home, Product, About, Blog, Contact), a phone number link, an "Order Online" pill button with orange border, and a hamburger toggle that opens a mobile menu on small screens.

#### Scenario: Desktop navigation displays all links

- **WHEN** the page loads on a desktop viewport
- **THEN** I SHALL see navigation links for Home, Product, About, Blog, and Contact
- **AND** I SHALL see a phone number "+10 (56) 745 3095"
- **AND** I SHALL see an "Order Online" button

#### Scenario: Mobile menu toggle

- **WHEN** I click the hamburger menu button
- **THEN** the mobile navigation menu SHALL become visible
- **AND** the button SHALL change to a close icon

#### Scenario: Mobile menu closes on link click

- **WHEN** I open the mobile menu and click a navigation link
- **THEN** the mobile menu SHALL close

### Requirement: Hero section

The system SHALL render a hero section with a decorative "Delicious" watermark text in Lobster font, the heading "Delicious Cake For Everyone", a description paragraph, an "Explore Menu" CTA button with orange gradient, and a hero image.

#### Scenario: Hero displays heading and CTA

- **WHEN** the page loads
- **THEN** I SHALL see the heading "Delicious Cake For Everyone"
- **AND** I SHALL see an "Explore Menu" button

#### Scenario: Hero has decorative watermark

- **WHEN** the page loads
- **THEN** I SHALL see the decorative text "Delicious" styled with a cursive font

### Requirement: Popular items section

The system SHALL render a product section with the subtitle "Most Popular", the heading "Our Exclusive Cakes", and at least 3 product cards each showing a cake image, name, description, price, and "Order Now" button.

#### Scenario: Product cards display cake information

- **WHEN** the page loads
- **THEN** I SHALL see at least 3 product cards
- **AND** each card SHALL show a cake name, description, price, and order button

### Requirement: About section

The system SHALL render a split-layout about section with an image on the left, the subtitle "Fresh & Delicious", the heading "A Simple Way to Eating Delicious", a description paragraph, and an "Our Story" CTA button.

#### Scenario: About section shows bakery story

- **WHEN** the page loads
- **THEN** I SHALL see the heading "A Simple Way to Eating Delicious"
- **AND** I SHALL see an "Our Story" button
- **AND** I SHALL see a bakery image

### Requirement: Services / features section

The system SHALL render a features section with the subtitle "Our Features", the heading "Quality is Our First Priority", and 3 feature cards with icons, titles, and descriptions.

#### Scenario: Features section displays bakery services

- **WHEN** the page loads
- **THEN** I SHALL see at least 3 feature cards with icons and descriptions
- **AND** each card SHALL have a title and description text

### Requirement: Video section

The system SHALL render a full-width dark video section with a background image and a centered play button overlay.

#### Scenario: Video section has play button

- **WHEN** the page loads
- **THEN** I SHALL see a play button in the video section
- **AND** the button SHALL be clickable

### Requirement: Testimonials section

The system SHALL render a testimonials section with the subtitle "Testimonial", the heading "What Customers Say", and at least 2 testimonial cards each with a star rating, quote, author avatar, name, and role.

#### Scenario: Testimonials show customer reviews

- **WHEN** the page loads
- **THEN** I SHALL see at least 2 testimonial cards
- **AND** each card SHALL show a quote, author name, and role

### Requirement: Instagram feed section

The system SHALL render a full-width Instagram gallery section with multiple image tiles and a hover overlay.

#### Scenario: Instagram feed displays images

- **WHEN** the page loads
- **THEN** I SHALL see multiple image tiles in the Instagram section
- **AND** all images SHALL have alt text

### Requirement: Footer

The system SHALL render a 4-column footer with a warm cream background containing a logo and description, social media icons, quick navigation links, cake variety links, contact information, a copyright line, and a link to Component Dock.

#### Scenario: Footer shows site information

- **WHEN** the page loads
- **THEN** I SHALL see a footer with 4 columns
- **AND** I SHALL see quick navigation links
- **AND** I SHALL see contact information

#### Scenario: Footer has Component Dock attribution

- **WHEN** I scroll to the footer
- **THEN** I SHALL see a link to "https://www.componentdock.com/"
- **AND** it SHALL be labeled "Component Dock"

### Requirement: Accessibility

The system SHALL use semantic HTML elements and ensure all images have alt text and all interactive elements are keyboard-focusable.

#### Scenario: Page is accessible

- **WHEN** the page loads
- **THEN** all images SHALL have alt text
- **AND** all interactive elements SHALL be keyboard-focusable
- **AND** the page SHALL use semantic HTML elements (header, main, section, footer, nav)

### Requirement: No ColorLib references in app code

The system SHALL NOT contain any references to ColorLib in application source files, comments, or data. Provenance lives only in the spec and TEMPLATES.md.

#### Scenario: Clean source code

- **WHEN** I inspect any file in apps/batterly/
- **THEN** I SHALL NOT find any mention of "colorlib" or "ColorLib"
