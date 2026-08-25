# Spec: Pulsewave — Digital Agency Template

> Recreation of ColorLib "Unbrew" (https://colorlib.com/wp/template/unbrew/).

## Purpose

Pulsewave is a digital agency / business landing template with a purple gradient hero, services grid, team showcase, testimonials carousel, features section, portfolio gallery, pricing plans, blog cards, newsletter signup, and a dark footer with Component Dock branding.

## Design Tokens

| Token           | Value                                              | Usage                                           |
| --------------- | -------------------------------------------------- | ----------------------------------------------- |
| Brand purple    | `#553be6`                                          | Hero gradient start, CTA buttons, feature icons |
| Accent lavender | `#a87ffa`                                          | Hero gradient end                               |
| Accent blue     | `#1fb6fc`                                          | Service hover, icon color, footer contact icons |
| Icon bg         | `#eff2ff`                                          | Service icon background                         |
| Text dark       | `#212529`                                          | Headings, body text                             |
| Text muted      | `#88879e`                                          | Paragraphs, secondary text                      |
| Font            | Poppins (Google Fonts)                             | Body and headings                               |
| Button radius   | `rounded-full`                                     | All CTA buttons                                 |
| Hero gradient   | `linear-gradient(45deg, #553be6 0%, #a87ffa 100%)` | Hero + Features + Newsletter                    |

## Requirements

### Requirement: Navbar

Users SHALL see a fixed-top navigation bar with the "Pulsewave." brand, 7 navigation links (Home, About Us, Services, Pricing, Work, Blog, Contact Us), and a mobile hamburger menu.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on desktop
- **THEN** the navbar shows "Pulsewave." and all 7 navigation links

#### Scenario: Mobile menu toggle

- **WHEN** the user is on a mobile viewport
- **AND** taps the hamburger button
- **THEN** the mobile menu opens with all navigation links
- **AND** the button label changes to "Close menu"

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open
- **AND** the user taps a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero

Users SHALL see a hero section with a purple gradient background, the heading "Boost Personal Productivity", a CTA button, phone number, and social media icons.

#### Scenario: Hero content renders

- **WHEN** the page loads
- **THEN** the hero displays "Boost Personal Productivity" as the main heading
- **AND** shows "Start A Project" CTA button
- **AND** shows phone number "+01 2345 5678 910"
- **AND** shows Facebook, Twitter, Instagram, LinkedIn social icons

### Requirement: Services

Users SHALL see a services section with 6 service cards (Marketing, SEO, UI/UX Design, Creative, Optimization, Business Strategy) that highlight on hover.

#### Scenario: All service cards render

- **WHEN** the user scrolls to the services section
- **THEN** all 6 service cards are visible with titles and descriptions

### Requirement: About

Users SHALL see an about section with a heading, descriptive text, an image, and a "More About us" CTA button.

#### Scenario: About section renders

- **WHEN** the user scrolls to the about section
- **THEN** the heading "Pulsewave A Digital Agency Company" is visible
- **AND** the "More About us" button is present

### Requirement: Team

Users SHALL see a team section with 4 team member cards, each showing a photo, name, role, and 4 social media icons.

#### Scenario: All team members render

- **WHEN** the user scrolls to the team section
- **THEN** all 4 team members are visible with names and social links

### Requirement: Testimonials

Users SHALL see a testimonials section with a carousel showing customer quotes and pagination dots.

#### Scenario: Testimonials carousel works

- **WHEN** the user scrolls to the testimonials section
- **THEN** the first testimonial is displayed
- **AND** clicking pagination dot 2 switches to the second testimonial

### Requirement: Features

Users SHALL see a features section on a gradient background with 4 feature cards (Easy Management, Protect Your Profile, Private Community, 24/7 Help Support).

#### Scenario: Feature cards render

- **WHEN** the user scrolls to the features section
- **THEN** all 4 feature cards are visible on a gradient background

### Requirement: Portfolio

Users SHALL see a portfolio section with 4 work items that show a hover overlay with the title.

#### Scenario: Portfolio items render

- **WHEN** the user scrolls to the portfolio section
- **THEN** all 4 portfolio items are visible
- **AND** a "VIEW MORE PORTFOLIO" button is present

### Requirement: Pricing

Users SHALL see a pricing section with 3 tiers (Basic $49, Standard $99, Premium $199), with the Standard tier visually highlighted.

#### Scenario: Pricing tiers render

- **WHEN** the user scrolls to the pricing section
- **THEN** all 3 pricing tiers are visible with prices
- **AND** the Standard tier has a highlighted ring

### Requirement: Blog

Users SHALL see a blog section with 4 blog post cards showing images, dates, and author names.

#### Scenario: Blog posts render

- **WHEN** the user scrolls to the blog section
- **THEN** all 4 blog posts are visible with titles and author names

### Requirement: Newsletter

Users SHALL see a newsletter section with an email input and subscribe button on a gradient background.

#### Scenario: Newsletter form works

- **WHEN** the user types an email and clicks subscribe
- **THEN** the email field is cleared

### Requirement: Footer

Users SHALL see a dark footer with brand column, Explore links, Quick Links, Recent Posts, contact info, a contact form, and a Component Dock attribution link.

#### Scenario: Footer renders all sections

- **WHEN** the user scrolls to the footer
- **THEN** brand, explore, quick links, and recent posts columns are visible
- **AND** the Component Dock link points to https://www.componentdock.com/

#### Scenario: Footer contact form works

- **WHEN** the user submits the contact form
- **THEN** the email field is cleared
