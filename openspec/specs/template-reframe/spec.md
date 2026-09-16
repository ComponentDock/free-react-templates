# Spec: template-reframe

## Purpose

Recreate ColorLib "Pivot" (https://colorlib.com/wp/template/pivot/) as a React 19 + Tailwind CSS 4 + TypeScript template named "Reframe". The original is a construction company landing page with hero, about, projects, services, news, testimonials, CTA, and footer sections.

## Requirements

### Requirement: Navbar with sticky behavior and mobile toggle

The template SHALL display a fixed navbar with logo, navigation links (Home, Services dropdown, Projects, News, About, Contact), and a "Quotation" button. The navbar SHALL become opaque on scroll and SHALL support a mobile hamburger menu.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the logo "Reframe", all nav links, and the "Quotation" button

#### Scenario: Navbar becomes opaque on scroll

- **WHEN** the user scrolls past 60px
- **THEN** the navbar background changes from transparent to white with a shadow

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger icon on a mobile viewport
- **THEN** a mobile menu with all navigation links is displayed

#### Scenario: Services dropdown

- **WHEN** the user hovers over "Services" on desktop
- **THEN** a dropdown shows Pre-Construction, General Construction, and House Renovation sub-links

### Requirement: Hero section with background image and CTA

The template SHALL display a full-width hero section with a dark overlay, construction background image, heading text, subtitle, and a "Get Started" CTA button.

#### Scenario: Hero content renders

- **WHEN** the hero section loads
- **THEN** the heading "We Are Leading The Way Construction Works" and subtitle are visible with a "Get Started" button linking to #contact

### Requirement: About section with text and image

The template SHALL display an about section with a heading, blue accent underline, descriptive paragraphs, and a construction worker image in a two-column layout.

#### Scenario: About content renders

- **WHEN** the about section loads
- **THEN** the heading, blue underline accent, text, and image are visible

### Requirement: Projects grid section

The template SHALL display a projects section with a heading and a 3-column grid of project cards, each with an image and title.

#### Scenario: Projects render

- **WHEN** the projects section loads
- **THEN** three project cards appear with titles "House Renovation", "General Construction Building", and "Pre-Construction"

### Requirement: Services section with icon cards

The template SHALL display a services section with 3 service cards, each containing an icon, title, and description.

#### Scenario: Services render

- **WHEN** the services section loads
- **THEN** three service cards appear with icons, titles, and descriptions

### Requirement: News section with article cards

The template SHALL display a news section with 4 article cards in a grid, each with an image, date, and title.

#### Scenario: News articles render

- **WHEN** the news section loads
- **THEN** four news cards appear with images, dates, and titles

### Requirement: Testimonials section

The template SHALL display a testimonials section with customer quotes and author attributions.

#### Scenario: Testimonials render

- **WHEN** the testimonials section loads
- **THEN** at least two testimonial cards appear with quotes and author names

### Requirement: CTA section

The template SHALL display a call-to-action section with a heading and a "Get Started" button.

#### Scenario: CTA renders

- **WHEN** the CTA section loads
- **THEN** the heading "Contact Us For Projects or Need a Quotation" and a "Get Started" button are visible

### Requirement: Footer with Component Dock link

The template SHALL display a dark footer with company info (address, phone, email), quick links, social links, and a copyright line linking to https://www.componentdock.com/ branded as "Component Dock". The footer SHALL NOT contain any ColorLib references.

#### Scenario: Footer renders with contact info

- **WHEN** the footer loads
- **THEN** address, phone, email, quick links, and social links are visible

#### Scenario: Footer links to Component Dock

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present

#### Scenario: No ColorLib references in footer

- **WHEN** the footer renders
- **THEN** no text containing "colorlib" (case-insensitive) is present
