## Purpose

Digger is a construction and mining landing page template recreated from the ColorLib Unearth design. It features a gradient top bar, sticky navigation, hero carousel, alternating services blocks, feature cards, about section with stats, team showcase, pricing tiers, FAQ accordion, press entries, testimonials, blog posts, contact form, and a branded footer.

## Requirements

### Requirement: Top bar with contact info and social links

The template SHALL display a gradient top bar with email and phone contact information on the left and social media links on the right.

#### Scenario: Renders contact details

- **WHEN** the page loads
- **THEN** the email "info@digger.com" is visible
- **AND** the phone number "+1 234 567 890" is visible
- **AND** Twitter and Instagram social icons are present

### Requirement: Sticky navigation with logo

The template SHALL display a sticky navigation bar with the "Digger" brand name and navigation links to all sections.

#### Scenario: Renders navigation links

- **WHEN** the page loads
- **THEN** the "Digger" logo text is visible
- **AND** links for Home, Services, About, Press, Testimonials, Blog, and Contact are present

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu opens with all navigation links

### Requirement: Hero section with CTA

The template SHALL display a full-width hero section with a background image, heading text, subtitle, and a call-to-action button.

#### Scenario: Renders hero content

- **WHEN** the page loads
- **THEN** the heading "Welcome to Digger" is visible
- **AND** a "Get in touch" CTA button is present

### Requirement: Services section with alternating blocks

The template SHALL display two service blocks with alternating image-text layouts.

#### Scenario: Renders service blocks

- **WHEN** the page loads
- **THEN** "Land & Property" and "Surface Mining" sections are visible
- **AND** each section has a checkmark list

### Requirement: Feature cards

The template SHALL display six feature cards with icons on a light background.

#### Scenario: Renders all features

- **WHEN** the page loads
- **THEN** six feature cards are visible with titles: Safety First, Land Development, Resource Extraction, Earth Moving, Construction, Mining Solutions

### Requirement: About section with stats

The template SHALL display an about section on a dark background with a video placeholder and four counter stats.

#### Scenario: Renders about content

- **WHEN** the page loads
- **THEN** the "About Digger" heading is visible
- **AND** stats for Years Experience, Engineers, Employees, and Projects Done are displayed

### Requirement: Team section

The template SHALL display three team member cards with photos, names, and roles.

#### Scenario: Renders team members

- **WHEN** the page loads
- **THEN** team members Jean Smith, Bob Carry, and Ricky Fisher are visible with their roles

### Requirement: Pricing section

The template SHALL display three pricing tiers with prices and feature lists.

#### Scenario: Renders pricing tiers

- **WHEN** the page loads
- **THEN** Basic ($47), Premium ($200), and Professional ($750) tiers are visible
- **AND** each tier has a "Buy Now" button

### Requirement: FAQ section

The template SHALL display an FAQ section with 8 questions in a 2-column layout with toggle functionality.

#### Scenario: Renders FAQ items

- **WHEN** the page loads
- **THEN** all 8 FAQ questions are visible in a 2-column grid

#### Scenario: Toggle FAQ answer

- **WHEN** the user clicks an FAQ question
- **THEN** the answer becomes visible
- **AND** the ChevronUp icon replaces the ChevronDown icon

### Requirement: Press section

The template SHALL display three press/news entries with dates and descriptions.

#### Scenario: Renders press articles

- **WHEN** the page loads
- **THEN** three press articles with dates and titles are visible

### Requirement: Testimonials section

The template SHALL display testimonial quotes with client names and photos.

#### Scenario: Renders testimonials

- **WHEN** the page loads
- **THEN** testimonial quotes from Michael Torres, Lisa Chen, and Robert Johnson are visible

### Requirement: Blog section

The template SHALL display two blog post cards with images, titles, dates, and excerpts.

#### Scenario: Renders blog posts

- **WHEN** the page loads
- **THEN** two blog posts with "Read More" links are visible

### Requirement: Contact form

The template SHALL display a contact form with name, email, message fields and a submit button, plus an info section with a "Get Started" CTA.

#### Scenario: Renders contact form

- **WHEN** the page loads
- **THEN** First Name, Last Name, Email, and Your Message inputs are visible
- **AND** a "Send Message" submit button is present
- **AND** a "Get Started" CTA button is present

### Requirement: Footer with Component Dock link

The template SHALL display a dark footer with about text, feature links, newsletter form, social icons, and a copyright line linking to Component Dock.

#### Scenario: Renders footer content

- **WHEN** the page loads
- **THEN** the "Made with Component Dock" link is present with href "https://www.componentdock.com/"
- **AND** a newsletter email input and "Subscribe" button are visible
