# Template: Briefly (Law Firm Template)

> Recreation of ColorLib "Lawful"
> (https://colorlib.com/wp/template/lawful/).

## Purpose

Briefly is a law-firm landing page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Lawful"
template design, built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/lawful/
Preview URL: https://preview.colorlib.com/theme/lawful/

## Requirements

### Requirement: Navbar with brand, navigation, CTA, and dark mode toggle

The template SHALL render a sticky top navbar with the "Briefly" brand logo, navigation links (Home, About, Services, Team, Blog, Contact), a "Get Free Quote" CTA button, and a dark-mode toggle button.

#### Scenario: Renders brand and nav links

- **WHEN** the app is rendered
- **THEN** I should see the "Briefly" logo
- **AND** I should see nav links: Home, About, Services, Team, Blog, Contact
- **AND** I should see a "Get Free Quote" CTA button

#### Scenario: Dark mode toggle works

- **WHEN** I click the dark mode toggle button
- **THEN** the document should have the "dark" class
- **AND** when I click the toggle again
- **THEN** the document should not have the "dark" class

### Requirement: Hero section with background image and CTA

The template SHALL render a full-width hero section with a background image, dark overlay, heading "We Combine Business with Finance", subtext, and a gradient CTA button.

#### Scenario: Renders hero content

- **WHEN** the app is rendered
- **THEN** I should see the heading "We Combine Business with Finance"
- **AND** I should see a "Get Free Quote" CTA button

### Requirement: Stats counters section

The template SHALL render a four-column stats section with icons and counters for Qualified Lawyers (596+), Solved Cases (20,650+), Trusted Clients (2.5k), and Achievements (50+).

#### Scenario: Renders all stat counters

- **WHEN** the app is rendered
- **THEN** I should see 596+ Qualified Lawyers
- **AND** I should see 20,650+ Solved Cases
- **AND** I should see 2.5k Trusted Clients
- **AND** I should see 50+ Achievements

### Requirement: About video section with play button and author attribution

The template SHALL render a two-column about section with a video/image placeholder on the left, heading, description, "Learn More" CTA, and author attribution on the right.

#### Scenario: Renders about section with video and author

- **WHEN** the app is rendered
- **THEN** I should see the heading "Get to Know Project Estimate?"
- **AND** I should see a "Learn More" button
- **AND** I should see the play video button
- **AND** I should see author attribution "Marvel Maison"

### Requirement: Success cards section

The template SHALL render four "Road to Success" feature cards in a grid layout, each with an icon, title, and description.

#### Scenario: Renders four success cards

- **WHEN** the app is rendered
- **THEN** I should see four "Road to Success" cards

### Requirement: Services section with three service cards

The template SHALL render a services section with heading "Services Offered By Us" and three service cards, each with an image, title, and description.

#### Scenario: Renders service cards

- **WHEN** the app is rendered
- **THEN** I should see the heading "Services Offered By Us"
- **AND** I should see three service cards

### Requirement: Service detail split section

The template SHALL render a two-column service detail section with heading, description, and author quote on the left, and a 2x2 image grid on the right.

#### Scenario: Renders service detail section

- **WHEN** the app is rendered
- **THEN** I should see the heading and description
- **AND** I should see the author attribution

### Requirement: Team section with three members

The template SHALL render a team section with heading "Meet Our Experienced Team" and three team member cards with photos, names, and roles.

#### Scenario: Renders team members

- **WHEN** the app is rendered
- **THEN** I should see the heading "Meet Our Experienced Team"
- **AND** I should see three team members

### Requirement: CTA banner section

The template SHALL render a full-width dark-overlay CTA banner with heading, description, and "Get Free Estimate" gradient button.

#### Scenario: Renders call-to-action section

- **WHEN** the app is rendered
- **THEN** I should see the heading "Get to Know Project Estimate?"
- **AND** I should see a "Get Free Estimate" button

### Requirement: Blog section with three posts

The template SHALL render a blog section with heading "Latest From Our Blog Posts" and three blog post cards with images, dates, authors, titles, and descriptions.

#### Scenario: Renders blog posts

- **WHEN** the app is rendered
- **THEN** I should see the heading "Latest From Our Blog Posts"
- **AND** I should see three blog post cards

### Requirement: Footer with Component Dock attribution

The template SHALL render a four-column footer with About, Navigation Links, Newsletter form, and Instagram Feed. The copyright bar SHALL link to https://www.componentdock.com/ (branded "Component Dock").

#### Scenario: Renders footer with Component Dock link

- **WHEN** the app is rendered
- **THEN** I should see the "Briefly" brand
- **AND** I should see a link to https://www.componentdock.com/
- **AND** I should see social links
- **AND** I should see a newsletter form
- **AND** I should see an Instagram feed grid
