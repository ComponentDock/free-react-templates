# Spec: Pillar — Architecture & Interior Design Template

> Recreation of ColorLib "Archs" — https://colorlib.com/wp/template/archs/
> Preview: https://preview.colorlib.com/theme/archs/

## Purpose

Pillar is an architecture and interior design landing page template recreating the ColorLib "Archs" design in React 19 + Tailwind CSS 4 + TypeScript. It features a sticky navbar, full-width hero, feature cards, about section, team grid, pricing plans, FAQ accordion, testimonials, project gallery, blog posts, services, contact form, and a four-column footer with newsletter signup.

## Design Tokens

- **Brand accent**: `#ff5733` (orange-red — form focus, hover states, active links)
- **Font**: Inter (Google Fonts)
- **Body text**: `gray` / `#6b7280`
- **Headings**: `#000` / `#111827`
- **Footer background**: `#333333` / `gray-800`
- **Footer text**: `#737373`
- **Section alt bg**: `#f8f9fa` / `gray-50`

## Requirements

### Requirement: Navbar renders with logo and navigation links

The template SHALL display a sticky navigation bar with the "Pillar" logo and links to Home, About, Team, Pricing, Projects, Blog, Services, and Contact sections.

#### Scenario: Desktop navbar displays all links

- **WHEN** the page loads on desktop
- **THEN** I see the "Pillar" logo linking to #home
- **AND** I see navigation links for Home, About, Team, Pricing, Projects, Blog, Services, Contact

#### Scenario: Mobile navbar toggles menu

- **WHEN** I am on a mobile viewport and tap the hamburger button
- **THEN** the mobile menu expands showing all navigation links
- **AND** tapping a link closes the menu

### Requirement: Hero section displays with heading and CTA

The template SHALL display a full-width hero section with a dark overlay background image, the heading "Interior Design", a subtitle, and a "Get Started" call-to-action button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** I see the "Interior Design" heading
- **AND** I see a "Get Started" button linking to #contact

### Requirement: Features section displays three feature cards

The template SHALL display a features section with three icon cards: Innovative Structure, Architectural Design, and Interior Design.

#### Scenario: Features render three cards

- **WHEN** I scroll to the features section
- **THEN** I see three feature cards with icons and descriptions

### Requirement: About section displays with image and text

The template SHALL display an about section with a split layout: an image on the left and "About Us" text with bullet points and a CTA on the right.

#### Scenario: About section renders content

- **WHEN** I scroll to the about section
- **THEN** I see the "About Us" heading
- **AND** I see bullet points and a "Read More About Us" button

### Requirement: Team section displays six team members

The template SHALL display a team section with six members in a 3-column grid, each with a photo, name, role, and social media icons.

#### Scenario: Team section renders members

- **WHEN** I scroll to the team section
- **THEN** I see six team members with names and roles

### Requirement: Pricing section displays three plans

The template SHALL display a pricing section with three plans: Starter ($99/yr), Professional ($199/yr), and Enterprise ($299/yr), each with a features list and "Buy Now" button.

#### Scenario: Pricing renders three plans

- **WHEN** I scroll to the pricing section
- **THEN** I see three pricing cards with prices and "Buy Now" buttons

### Requirement: FAQ section displays expandable questions

The template SHALL display an FAQ section with five expandable questions using an accordion pattern.

#### Scenario: FAQ accordion toggles

- **WHEN** I click a collapsed FAQ question
- **THEN** the answer expands and becomes visible
- **AND** clicking it again collapses the answer

### Requirement: Testimonials section displays client quotes

The template SHALL display a testimonials section with client quotes in a grid layout.

#### Scenario: Testimonials render

- **WHEN** I scroll to the testimonials section
- **THEN** I see client names, roles, and quoted text

### Requirement: Projects section displays project gallery

The template SHALL display a projects section with six project cards in a 3-column grid, each with an image, title, and category label.

#### Scenario: Projects render six cards

- **WHEN** I scroll to the projects section
- **THEN** I see six project cards with titles and categories

### Requirement: Blog section displays recent posts

The template SHALL display a blog section with three post cards showing dates, images, and titles, plus a "View All Posts" link.

#### Scenario: Blog renders posts

- **WHEN** I scroll to the blog section
- **THEN** I see three blog post cards with dates

### Requirement: Services section displays service items

The template SHALL display a services section with six service items in a 3-column grid, each with an icon, title, and description.

#### Scenario: Services render six items

- **WHEN** I scroll to the services section
- **THEN** I see six service items with icons and titles

### Requirement: Contact section displays a form

The template SHALL display a contact section with a form containing Full Name, Email, and Message fields, plus a "Send Message" submit button.

#### Scenario: Contact form is interactive

- **WHEN** I fill in the name, email, and message fields
- **AND** I click "Send Message"
- **THEN** the form submits without navigation

### Requirement: Footer displays navigation, newsletter, and Component Dock link

The template SHALL display a four-column footer with About, Navigation, More Links, and Recent News sections, a newsletter signup form, social media links, and a copyright line linking to Component Dock.

#### Scenario: Footer renders Component Dock link

- **WHEN** I look at the footer
- **THEN** I see a link to https://www.componentdock.com/ labeled "Component Dock"
- **AND** the link opens in a new tab
