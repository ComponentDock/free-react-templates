# Template: Proxy (Real Estate Agent Landing)

## Purpose

Proxy is a professional real estate agent landing page template in the
free-react-templates monorepo. It is a React recreation of the ColorLib free
"YourAgent" website template design (source: https://colorlib.com/wp/template/youragent/),
built under a DIFFERENT name (**Proxy** — evoking the intermediary role of a real
estate agent) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Requirements

### Requirement: Navbar with mobile toggle

The template SHALL render an absolute-positioned transparent navbar with the logo "Proxy",
four navigation links (Home, About, Blog, Contact), and a hamburger button for mobile.

#### Scenario: Desktop navigation

- **GIVEN** the page loads on a desktop viewport
- **WHEN** I look at the header
- **THEN** I see the "Proxy" logo and four navigation links

#### Scenario: Mobile menu toggle

- **GIVEN** the page loads on a mobile viewport
- **WHEN** I click the hamburger button
- **THEN** the mobile menu opens with all four navigation links

#### Scenario: Mobile menu closes on link click

- **GIVEN** the mobile menu is open
- **WHEN** I click any navigation link
- **THEN** the menu closes

### Requirement: Hero section with CTAs

The template SHALL render a full-width hero section with a dark overlay background image,
a heading "I'm Your Realtor, Get Your Key", descriptive subtext, and two CTA buttons.

#### Scenario: Hero content

- **GIVEN** the page loads
- **WHEN** I look at the hero section
- **THEN** I see the heading, subtext, "Get In Touch" button, and "Download" button

### Requirement: Property listings grid

The template SHALL render a "Popular Properties" section with an 8-card grid showing
property images, prices, and addresses.

#### Scenario: Property cards

- **GIVEN** the page loads
- **WHEN** I look at the properties section
- **THEN** I see 8 property cards each with a price and address

### Requirement: Customer testimonials

The template SHALL render a "Happy Customers" section with 3 testimonial cards,
each containing a circular avatar, a blockquote, and the author's name.

#### Scenario: Testimonial content

- **GIVEN** the page loads
- **WHEN** I look at the testimonials section
- **THEN** I see 3 testimonials with avatars, quotes, and author names

### Requirement: About section

The template SHALL render a split-layout About section with a large image on the left
and "About Me" heading with bio text on the right.

#### Scenario: About content

- **GIVEN** the page loads
- **WHEN** I look at the about section
- **THEN** I see an image, "About Me" heading, and bio paragraphs

### Requirement: Features section

The template SHALL render a 3-column features section with icons, titles, and descriptions
for "Deal On Time", "Good Reviews", and "24/7 Support".

#### Scenario: Feature cards

- **GIVEN** the page loads
- **WHEN** I look at the features section
- **THEN** I see 3 feature cards with icons, titles, and descriptions

### Requirement: Blog section

The template SHALL render a "Recent Blog Post" section on a light gray background
with 3 blog post cards showing images, dates, and titles.

#### Scenario: Blog posts

- **GIVEN** the page loads
- **WHEN** I look at the blog section
- **THEN** I see 3 blog post cards with dates and titles

### Requirement: Footer with Component Dock link

The template SHALL render a footer on a blue background with 4-column layout
(nav links, contact info, newsletter form), copyright text linking to
https://www.componentdock.com/, and social media icons.

#### Scenario: Footer content

- **GIVEN** the page loads
- **WHEN** I look at the footer
- **THEN** I see the Component Dock link, nav links, contact info, and newsletter form

#### Scenario: Newsletter form

- **GIVEN** the footer newsletter form is visible
- **WHEN** I type an email and click submit
- **THEN** the email input clears

### Requirement: Design tokens match original

The template SHALL use the original design tokens: primary blue #007bff,
Mukta Mahee body font, Playfair Display heading font, rounded buttons
(border-radius 50px), and the section structure matching the original 1:1.

#### Scenario: Visual fidelity

- **GIVEN** the page loads
- **WHEN** I inspect the rendered output
- **THEN** the fonts, colors, and layout match the original ColorLib design
