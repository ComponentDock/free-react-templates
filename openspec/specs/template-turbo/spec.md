# Template: Turbo (Business Agency Landing)

## Purpose

Recreation of ColorLib Nitro (`https://colorlib.com/wp/template/nitro/`, preview: `https://preview.colorlib.com/theme/nitro/`). Built as a modern React 19 + Tailwind CSS 4 business agency landing template with hero, about, features, team, portfolio, services, testimonials, pricing, FAQ, blog, contact, and footer sections.

## Design Tokens

- **Font Family**: Open Sans, sans-serif
- **Primary Color**: Blue #0d6efd
- **Purple Accent**: #505288
- **Text Color**: Dark #212529
- **Muted Text**: #6c757d
- **Background**: White #ffffff
- **Light Background**: #f8f9fa
- **Border/Silver**: #dee2e6
- **Button Radius**: Rounded (0.375rem default)
- **Section Spacing**: Generous vertical padding (~4rem per section)

## Requirements

### Requirement 1: Navbar

The page shall display a sticky navbar with the "Turbo." logo and navigation links.

#### Scenario: Navbar renders logo and links

- **WHEN** the page loads
- **THEN** the navbar shall display the logo text "Turbo" with a blue dot accent
- **AND** the navbar shall contain links for Home, About, Team, Portfolio, Services, Testimonials, Blog, and Contact

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu shall appear
- **AND** the toggle button aria-label shall change to "Close menu"

### Requirement 2: Hero Section

The page shall display a full-width hero with background image, heading, subtitle, and CTA button.

#### Scenario: Hero displays welcome heading and CTA

- **WHEN** the page loads
- **THEN** the hero section shall display a "Welcome" heading
- **AND** the hero shall display descriptive text about digital solutions
- **AND** the hero shall display a "Get In Touch" button linking to #contact

### Requirement 3: About Section

The page shall display an About section with heading, description, and feature bullets.

#### Scenario: About section shows content

- **WHEN** the page loads
- **THEN** the about section shall display the heading "For the next great business"
- **AND** the about section shall display 4 feature bullet points with check icons

### Requirement 4: Features Section

The page shall display 3 feature cards with icons, titles, descriptions, and links.

#### Scenario: Features section shows three cards

- **WHEN** the page loads
- **THEN** the features section shall display headings for "Minimal and Modern Design", "Do things with love", and "Take your business online"
- **AND** each feature card shall have a "Learn More" link

### Requirement 5: Team Section

The page shall display 4 team member cards with photos, names, and titles.

#### Scenario: Team section shows members

- **WHEN** the page loads
- **THEN** the team section shall display 4 team members with names and "Product Manager" titles
- **AND** each team member shall have a profile image

### Requirement 6: Portfolio Section

The page shall display a filterable portfolio gallery with filter tabs.

#### Scenario: Portfolio shows all items by default

- **WHEN** the page loads
- **THEN** the portfolio section shall display 6 portfolio items
- **AND** the filter tabs shall show "All", "Web", "Design", and "Brand"

#### Scenario: Portfolio filters by category

- **WHEN** the user clicks the "Web" filter button
- **THEN** only portfolio items in the "Web" category shall be displayed

### Requirement 7: Services Section

The page shall display 6 service cards with icons, titles, descriptions, and links.

#### Scenario: Services section shows all services

- **WHEN** the page loads
- **THEN** the services section shall display Business Consulting, Market Analysis, User Monitoring, Insurance Consulting, Financial Investment, and Financial Management
- **AND** each service shall have a "Learn More" link

### Requirement 8: Testimonials Section

The page shall display testimonials with quotes, author names, and roles.

#### Scenario: Testimonials show quotes and authors

- **WHEN** the page loads
- **THEN** the testimonials section shall display 2 testimonial quotes
- **AND** each testimonial shall show an author name and role

### Requirement 9: Pricing Section

The page shall display 3 pricing tiers with feature lists and CTA buttons.

#### Scenario: Pricing shows three plans

- **WHEN** the page loads
- **THEN** the pricing section shall display Personal ($49), Business ($99), and Ultimate ($199) plans
- **AND** each plan shall have a "Get Started" button
- **AND** each plan shall list its features

### Requirement 10: FAQ Section

The page shall display an FAQ accordion with expandable question/answer pairs.

#### Scenario: FAQ questions are expandable

- **WHEN** the user clicks a FAQ question
- **THEN** the answer shall become visible
- **AND** the button aria-expanded attribute shall be "true"

#### Scenario: FAQ answers collapse

- **WHEN** the user clicks an expanded FAQ question again
- **THEN** the answer shall be hidden

### Requirement 11: Blog Section

The page shall display 3 blog cards with images, titles, authors, dates, and excerpts.

#### Scenario: Blog shows three posts

- **WHEN** the page loads
- **THEN** the blog section shall display 3 blog post cards
- **AND** each card shall have a title, author name, and "Continue Reading..." link

### Requirement 12: Contact Section

The page shall display contact information and a contact form.

#### Scenario: Contact form accepts input

- **WHEN** the user types into the First Name, Last Name, Email, Subject, and Message fields
- **THEN** each field shall display the typed text

#### Scenario: Contact form resets on submit

- **WHEN** the user fills the form and clicks Send
- **THEN** all form fields shall be cleared

### Requirement 13: Footer

The page shall display a footer with logo, quick links, social links, and Component Dock copyright.

#### Scenario: Footer shows branding and links

- **WHEN** the page loads
- **THEN** the footer shall display the "Turbo." logo
- **AND** the footer shall show Quick Links (About Us, Services, Testimonials, Contact Us)
- **AND** the footer shall show social links (Twitter, Facebook, Instagram)
- **AND** the footer shall display a copyright line with a link to https://www.componentdock.com/
