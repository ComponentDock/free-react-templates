# Template: Vizier (Model Agency Landing Page)

## Purpose

Recreation of ColorLib's **Mona** template as a modern model agency landing page.

- **Source slug:** `mona`
- **ColorLib page:** https://colorlib.com/wp/template/mona/
- **Live preview:** https://preview.colorlib.com/theme/mona/
- **New name:** `vizier`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Deploy target:** https://vizier.free.componentdock.com

## Design Tokens

| Token            | Value      | Notes                                     |
| ---------------- | ---------- | ----------------------------------------- |
| Primary / accent | `#ed489d`  | Pink — buttons, hover states, active tabs |
| Heading color    | `#232323`  | Dark charcoal for headings                |
| Body text        | `#666666`  | Medium gray for paragraphs                |
| Background gray  | `#f0f0f0`  | Light gray section backgrounds            |
| Border color     | `#ebebeb`  | Light borders                             |
| White            | `#ffffff`  | Card backgrounds                          |
| Dark / footer    | `#1a1a1a`  | Footer background                         |
| Body font        | HK Grotesk | Clean sans-serif from Google Fonts        |
| Button radius    | Rounded    | Rounded buttons (not pill)                |

## Requirements

### Requirement: Header / Navigation

The system SHALL render a fixed white navbar with the "Vizier" logo on the left, navigation links (Home, About, Projects, Models, Casting, Blog, Contact) in the center, a search icon, and a mobile hamburger menu.

#### Scenario: Desktop navigation content

- **GIVEN** the user views the page on a desktop viewport
- **WHEN** the header renders
- **THEN** the logo "Vizier" is visible
- **AND** all seven navigation links are visible

#### Scenario: Mobile menu toggle

- **GIVEN** the user views the page on a mobile viewport
- **WHEN** the user taps the hamburger menu button
- **THEN** the mobile navigation drawer opens
- **WHEN** the user taps a navigation link
- **THEN** the mobile drawer closes

### Requirement: Hero Carousel

The system SHALL render a full-screen hero section with a background image, model name, role subtitle, "View Profile" CTA, social links, and slide navigation.

#### Scenario: Hero slide content

- **GIVEN** the hero section loads
- **WHEN** the first slide displays
- **THEN** the model name "Jesse Edwards" is visible
- **AND** the role "Star Model 2019" is visible
- **AND** a "View Profile" button is visible

#### Scenario: Slide navigation with arrows

- **GIVEN** the hero section shows slide 1
- **WHEN** the user clicks the next arrow
- **THEN** slide 2 ("Naznin Niloy") is displayed
- **WHEN** the user clicks the previous arrow
- **THEN** slide 1 ("Jesse Edwards") is displayed again

#### Scenario: Slide navigation with indicators

- **GIVEN** the hero section shows slide 1
- **WHEN** the user clicks the third slide indicator
- **THEN** slide 3 ("Shaila Ritu") is displayed

### Requirement: About Section

The system SHALL render an about section with two portrait images and descriptive text about the agency.

#### Scenario: About content

- **GIVEN** the user scrolls to the about section
- **WHEN** the section renders
- **THEN** the heading "We Have 20+ Years Practical Experience in Agency" is visible
- **AND** two portrait images are visible
- **AND** descriptive paragraphs are visible

### Requirement: Services Section

The system SHALL render four service cards in a responsive grid.

#### Scenario: Service cards content

- **GIVEN** the user scrolls to the services section
- **WHEN** the section renders
- **THEN** four service cards are visible: Fashion Shows, Special Events, Commercial Photo, Model School
- **AND** each card has an icon and description text

### Requirement: Model Gallery with Tabs

The system SHALL render a tabbed model gallery with filter tabs (All, Model, Actor, Singer) and a grid of model cards.

#### Scenario: Default view shows all models

- **GIVEN** the user scrolls to the model gallery
- **WHEN** the "All" tab is active
- **THEN** 8 model cards are displayed

#### Scenario: Filtering by category

- **GIVEN** the model gallery shows all models
- **WHEN** the user clicks the "Actor" tab
- **THEN** only actor-category models are displayed
- **WHEN** the user clicks the "Singer" tab
- **THEN** only singer-category models are displayed
- **WHEN** the user clicks the "All" tab
- **THEN** all 8 models are displayed again

### Requirement: Client Feedback / Testimonials

The system SHALL render a testimonials section with a quote, client name, and portrait image.

#### Scenario: Testimonial content

- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the section renders
- **THEN** the heading "Client Feedback" is visible
- **AND** the client name "Sarah Johnson" is visible
- **AND** the role "Creative Director, Vogue" is visible

### Requirement: CTA Section

The system SHALL render a full-width pink CTA section with heading and button.

#### Scenario: CTA content

- **GIVEN** the user scrolls to the CTA section
- **WHEN** the section renders
- **THEN** the heading "Do You Want To Be A Model?" is visible
- **AND** a "Contact Us" button is visible

### Requirement: Blog / Latest News

The system SHALL render a blog section with a featured post and smaller posts in a grid layout.

#### Scenario: Blog content

- **GIVEN** the user scrolls to the blog section
- **WHEN** the section renders
- **THEN** the heading "Latest News" is visible
- **AND** 4 blog post cards are visible with titles and dates

### Requirement: Footer

The system SHALL render a dark footer with logo, links, contact info, social icons, and a Component Dock attribution.

#### Scenario: Footer content and attribution

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer renders
- **THEN** the "Vizier" logo is visible
- **AND** "Our Links" section with 8 navigation links is visible
- **AND** contact phone number "+01-3-8888-6868" is visible
- **AND** a link to https://www.componentdock.com/ labeled "Component Dock" is visible
- **AND** social media icon links (Facebook, Twitter, Instagram, YouTube) are visible
