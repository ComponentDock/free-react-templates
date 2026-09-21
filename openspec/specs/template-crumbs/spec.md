# Template: Crumbs (Cake Shop Landing)

## Purpose

Crumbs is a single-page cake shop landing template — a faithful React recreation
of the ColorLib "Cakes" template
(preview: https://preview.colorlib.com/theme/cakes/ — cake shop landing page),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

### Design tokens captured from the original

- **Brand orange:** `#F04506` (buttons, accents, links, hover states, phone number)
- **Dark navy:** `#140C40` (used sparingly)
- **Body font:** DM Sans (Google Fonts)
- **Heading font:** Quicksand (Google Fonts)
- **Display/decorative font:** Lobster (Google Fonts — used for hero watermark "Delicious")
- **Button style:** gradient orange (`#F04506` to `#d83e06`), `border-radius: 30px` (pill), orange shadow `rgba(240,69,6,0.27)`
- **Product card background:** `#FFF5F2` (light peach), rounded bottom-right corners
- **Section subtitle:** uppercase, letter-spacing 0.2em, DM Sans, orange
- **Footer background:** `#FFF7F3` (warm cream)
- **Footer text:** `#5E5E5E`
- **Assets are NOT copied** — picsum.photos seeded placeholders + lucide-react icons

### Provenance

Recreation of ColorLib "Cakes" (https://colorlib.com/wp/template/cakes/).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky navigation bar with the site name "Crumbs",
desktop navigation links (Home, Product, About, Blog, Contact), a phone number,
and an "Order Online" CTA button.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Crumbs" as a link to `#home`
- **AND** it SHALL show links to Home, Product, About, Blog and Contact
- **AND** it SHALL show a phone number "+10 (56) 745 3095"
- **AND** it SHALL show an "Order Online" button

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a small viewport
- **WHEN** the hamburger toggle is pressed
- **THEN** the mobile navigation menu SHALL become visible
- **AND** the toggle SHALL report `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu

### Requirement: Hero section

The system SHALL render a hero section with a background image, a large
decorative "Delicious" watermark, a heading "Delicious Cake For Everyone",
a descriptive paragraph, and an "Explore Menu" call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain the heading "Delicious Cake For Everyone"
- **AND** it SHALL contain the decorative "Delicious" watermark text
- **AND** it SHALL contain an "Explore Menu" button

### Requirement: Popular products section

The system SHALL render a "Most Popular" / "Our Exclusive Cakes" section with
three product cards (Chocolate, Sweetheart, Blackforest), each showing an
image, a title, a description, and an "Order Now" button with a price.

#### Scenario: Product cards

- **GIVEN** the page is rendered
- **WHEN** the popular products section is displayed
- **THEN** it SHALL show three product cards
- **AND** each card SHALL have a product image, title, description, and order button
- **AND** the order buttons SHALL display "$20 | Order Now"

#### Scenario: Product card count

- **GIVEN** the page is rendered
- **WHEN** the popular section is counted
- **THEN** it SHALL contain exactly three product cards

### Requirement: About section

The system SHALL render an about section with a split layout: a cake image on
the left and text content on the right including a "Fresh & Delicious" subtitle,
a heading "A Simple Way to Eating Delicious", a paragraph, and an "Our Story"
button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain the heading "A Simple Way to Eating Delicious"
- **AND** it SHALL contain an "Our Story" button
- **AND** it SHALL show a cake image with an accessible label

### Requirement: Services section

The system SHALL render a services section titled "Quality is Our First Priority"
with three feature cards, each having an icon, a title, and a description.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show three feature cards
- **AND** each card SHALL have an icon, a title, and a description

### Requirement: Testimonials section

The system SHALL render a testimonials section titled "What Customers Say" with
testimonial cards, each containing a quote, a founder image, a name, and a role.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show at least one testimonial
- **AND** each testimonial SHALL have a quote, image, name, and role

### Requirement: Footer

The system SHALL render a footer with a logo area, description text, quick links,
product categories, contact information, social links, and a copyright line.

#### Scenario: Footer with Component Dock branding

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain a link to "https://www.componentdock.com/" branded as "Component Dock"
- **AND** it SHALL show "Quick Links" and "Cakes" columns
- **AND** it SHALL show contact information

#### Scenario: Footer copyright

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain a copyright notice with the current year
