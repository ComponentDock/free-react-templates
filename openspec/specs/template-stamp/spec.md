# Spec: Stamp — Industrial Manufacturing Landing Template

Recreation of ColorLib "Supreme" (https://colorlib.com/wp/template/supreme/).

## Purpose

Provide a free, production-ready React recreation of the ColorLib "Supreme" industrial manufacturing landing page template, using the Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design Tokens

- **Font**: Barlow Condensed (Google Fonts), weights 300–800
- **Brand color (buttons)**: #fe5c24 (orange)
- **Heading color**: #191d34 (dark navy)
- **Body text**: #777777 (grey)
- **Link hover**: #ff7e5f (coral)
- **Section bg light**: #f7f7f7 (grey tint)
- **Button shape**: pill (rounded-full)

## Requirements

### Requirement: Navbar renders all navigation links and contact info

Users SHALL see a top bar with phone number and email, plus a navigation bar with links to Home, About, Industries, FAQ, Projects, Team, Blog, and Contact.

#### Scenario: Top bar displays contact info

- **WHEN** the page loads
- **THEN** the phone number "+02 89 365 3652" is visible
- **AND** the email "info@example.com" is visible

#### Scenario: Navigation links are present

- **WHEN** the page loads
- **THEN** links for Home, About, Industries, FAQ, Projects, Team, Blog, and Contact are present

#### Scenario: Mobile menu toggles on click

- **WHEN** the user clicks the mobile toggle button
- **THEN** the mobile navigation menu becomes visible
- **AND** the toggle button shows an expanded state

#### Scenario: Mobile menu closes when a link is clicked

- **WHEN** the mobile menu is open
- **AND** the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section displays headline and CTA

Users SHALL see a full-width hero banner with the "Since 1990" subtitle, "Real Solutions!" headline, manufacturing subtext, and a "Learn More" call-to-action button.

#### Scenario: Hero content is visible

- **WHEN** the page loads
- **THEN** the text "Real Solutions!" is displayed
- **AND** the text "1990" is visible
- **AND** the text "Manufacturing Relationships Distributing Quality" is displayed

#### Scenario: Hero CTA button links to about

- **WHEN** the page loads
- **THEN** a "Learn More" button is visible
- **AND** it links to the about section

### Requirement: Services section shows 4 service cards

Users SHALL see exactly 4 service cards, each with an icon, title, and description.

#### Scenario: All 4 services are rendered

- **WHEN** the page loads
- **THEN** cards for "Advance Technology", "World Quality Service", "Competitive Pricing", and "Lifetime Support" are visible

#### Scenario: Each service has a description

- **WHEN** the page loads
- **THEN** each service card contains descriptive text

### Requirement: About section displays commitment message

Users SHALL see the "We Are Committed To Customer Satisfaction" heading with an image and a "Read More" button.

#### Scenario: About content renders

- **WHEN** the page loads
- **THEN** the heading "We Are Committed To Customer Satisfaction" is visible
- **AND** a "Read More" button is visible

#### Scenario: About section has an image

- **WHEN** the page loads
- **THEN** an image with alt text "Manufacturing facility" is visible

### Requirement: Industries section shows 3 industry cards

Users SHALL see exactly 3 industry cards with images and titles.

#### Scenario: All 3 industries are rendered

- **WHEN** the page loads
- **THEN** cards for "Mechanical Engineering", "Chemical Research", and "Industrial Construction" are visible

#### Scenario: Each industry has an image

- **WHEN** the page loads
- **THEN** each industry card contains an image with appropriate alt text

### Requirement: FAQ section shows collapsible accordion

Users SHALL see a FAQ section with 3 collapsible accordion items. The first item is expanded by default.

#### Scenario: First FAQ item is open by default

- **WHEN** the page loads
- **THEN** the first FAQ question is expanded and its answer is visible
- **AND** the other FAQ items are collapsed

#### Scenario: Clicking a closed item opens it

- **WHEN** the user clicks a collapsed FAQ question
- **THEN** its answer becomes visible
- **AND** the button shows an expanded state

#### Scenario: Clicking an open item closes it

- **WHEN** the user clicks the same FAQ question again
- **THEN** its answer is hidden
- **AND** the button shows a collapsed state

### Requirement: Portfolio section shows project cards with overlay

Users SHALL see a portfolio grid with a title card, 4 project cards with overlay text, and a "More Projects" CTA.

#### Scenario: Portfolio renders project cards

- **WHEN** the page loads
- **THEN** cards for "Electrical Engineering", "Chemical Processing", "Structural Analysis", and "Industrial Automation" are visible

#### Scenario: Portfolio has CTA button

- **WHEN** the page loads
- **THEN** a "More Projects" button is visible

### Requirement: Team section displays 4 team members

Users SHALL see exactly 4 team member cards with photos, names, roles, and social links.

#### Scenario: All 4 team members are rendered

- **WHEN** the page loads
- **THEN** members "Andrew Flentop", "Sarah Mitchell", "James Crawford", and "Maria Santos" are visible
- **AND** their respective roles are displayed

#### Scenario: Social links are present for each member

- **WHEN** the page loads
- **THEN** social links (Facebook, Twitter, LinkedIn, Instagram) are visible for each team member

### Requirement: Blog section shows 3 blog posts

Users SHALL see 3 blog post cards with category tags, author, date, title, and excerpt.

#### Scenario: Blog posts render correctly

- **WHEN** the page loads
- **THEN** posts with categories "Chemical Research", "Construction", and "Engineering" are visible
- **AND** the author "Michal" is displayed for each post

### Requirement: Newsletter section has email subscription form

Users SHALL see a newsletter section with an email input and subscribe button.

#### Scenario: Newsletter form renders

- **WHEN** the page loads
- **THEN** the heading "Do You Have a Question?" is visible
- **AND** an email input field with placeholder "Enter email" is visible
- **AND** a "Subscribe" button is visible

#### Scenario: Form submission clears email

- **WHEN** the user types an email and clicks Subscribe
- **THEN** the email field is cleared

### Requirement: Footer links to Component Dock

Users SHALL see a footer with the "Component Dock" link pointing to https://www.componentdock.com/, along with services links, gallery thumbnails, and contact info.

#### Scenario: Footer contains Component Dock link

- **WHEN** the page loads
- **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is visible in the footer

#### Scenario: Footer contains contact info

- **WHEN** the page loads
- **THEN** the phone number, email, and address are visible

#### Scenario: Footer contains services list

- **WHEN** the page loads
- **THEN** services links including "Car accident", "Personal injury", and "Family law" are visible

#### Scenario: Footer contains gallery images

- **WHEN** the page loads
- **THEN** 6 gallery thumbnail images are visible
