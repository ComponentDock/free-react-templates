## Purpose

Treasury is a banking and finance landing page template, recreation of ColorLib "Banker" (https://colorlib.com/wp/template/banker/). It provides a professional single-page template with hero, features, team, gallery, pricing, FAQ, blog, contact, and footer sections.

## Requirements

### Requirement: Navbar with logo and navigation

The template SHALL display a sticky navbar with the "Treasury." logo, navigation links (Home, About, Services, Blog, Contact), and social media icons (Facebook, Twitter, LinkedIn).

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on desktop
- **THEN** the navbar displays the Treasury logo, all navigation links, and social icons

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu opens
- **WHEN** the user clicks a navigation link in the mobile menu
- **THEN** the mobile menu closes

### Requirement: Hero section with rotating headings

The template SHALL display a hero section with a background image, overlay, and rotating headings that cycle through "Banking Solutions", "Financing Solutions", and "Savings Accounts" every 3 seconds.

#### Scenario: Hero renders with initial heading

- **WHEN** the page loads
- **THEN** the hero displays "Banking Solutions" as the initial heading

#### Scenario: Headings rotate automatically

- **WHEN** 3 seconds pass
- **THEN** the heading changes to "Financing Solutions"
- **WHEN** another 3 seconds pass
- **THEN** the heading changes to "Savings Accounts"

### Requirement: Features section with three cards

The template SHALL display a features section with three cards: Money Savings, Online Shopping, and Credit/Debit Cards, each with an icon and description.

#### Scenario: All feature cards render

- **WHEN** the page loads
- **THEN** three feature cards are displayed with titles and descriptions

### Requirement: Newsletter subscription form

The template SHALL display a newsletter section with an email input and submit button.

#### Scenario: Valid email submission

- **WHEN** the user enters a valid email and clicks Submit
- **THEN** a success message "Thanks for subscribing!" is displayed

#### Scenario: Invalid email shows error

- **WHEN** the user clicks Submit without entering an email
- **THEN** an error message is displayed

### Requirement: About section

The template SHALL display an about section with heading "About Us", subheading "We Solve Your Financial Problem", descriptive text, and a "Learn More" CTA button.

#### Scenario: About section renders

- **WHEN** the page loads
- **THEN** the about section displays the heading, subheading, and CTA button

### Requirement: Team section with member cards

The template SHALL display a team section with four team member cards, each showing a photo, name, role, and social media links.

#### Scenario: All team members render

- **WHEN** the page loads
- **THEN** four team member cards are displayed with names and roles

### Requirement: Gallery with filter functionality

The template SHALL display a gallery section with filter buttons (All, Events, Party, Holidays) and an image grid that filters based on the selected category.

#### Scenario: All images shown by default

- **WHEN** the page loads
- **THEN** all gallery images are displayed

#### Scenario: Filtering by category

- **WHEN** the user clicks the "Events" filter button
- **THEN** only Events images are displayed

### Requirement: How It Works section

The template SHALL display a "How It Works" section with three steps: Online Applications, Get an Approval, and Card Delivery.

#### Scenario: Steps render in order

- **WHEN** the page loads
- **THEN** three step cards are displayed with numbers 01, 02, 03

### Requirement: Services section

The template SHALL display a services section with Business Consulting and Banking Consultation cards on a light background.

#### Scenario: Service cards render

- **WHEN** the page loads
- **THEN** two service cards are displayed with titles and descriptions

### Requirement: Testimonials section

The template SHALL display a testimonials section with customer quotes, avatars, names, and roles.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** three testimonial cards are displayed with quotes and author names

### Requirement: Pricing section with three tiers

The template SHALL display a pricing section with three tiers: Basic ($49/mo), Premium ($99/mo, marked as popular), and Professional ($149/mo).

#### Scenario: Pricing tiers render

- **WHEN** the page loads
- **THEN** three pricing cards are displayed with prices and feature lists

#### Scenario: Popular tier has elevated styling

- **WHEN** the Premium tier is displayed
- **THEN** it shows a "Popular" badge and has elevated shadow styling

### Requirement: FAQ accordion

The template SHALL display a FAQ section with an accordion that expands/collapses answers when questions are clicked.

#### Scenario: FAQ items render

- **WHEN** the page loads
- **THEN** four FAQ questions are displayed

#### Scenario: Expanding a question

- **WHEN** the user clicks a FAQ question
- **THEN** the answer expands and is visible

#### Scenario: Collapsing a question

- **WHEN** the user clicks an expanded FAQ question
- **THEN** the answer collapses and is hidden

### Requirement: Blog section

The template SHALL display a blog section with three post cards showing image, title, date, and excerpt.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** three blog post cards are displayed

### Requirement: Contact section with form

The template SHALL display a contact section with contact information (address, phone, email) and a contact form with fields for first name, last name, email, subject, and message.

#### Scenario: Contact info renders

- **WHEN** the page loads
- **THEN** contact information including address, phone, and email is displayed

#### Scenario: Form submission

- **WHEN** the user fills in the form and clicks Send Message
- **THEN** a success message "Thank you! Your message has been sent." is displayed

### Requirement: Footer with ComponentDock link

The template SHALL display a footer with about text, quick links, social icons, newsletter subscription form, and a "More templates at Component Dock" link to https://www.componentdock.com/.

#### Scenario: Footer renders all sections

- **WHEN** the page loads
- **THEN** the footer displays quick links, social icons, and newsletter form

#### Scenario: ComponentDock link present

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"
