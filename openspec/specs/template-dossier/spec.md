# Spec: Dossier — Personal/CV Portfolio Template

## Purpose

Recreate the ColorLib "Alias" template (https://colorlib.com/wp/template/alias/) as a React 19 + Vite + Tailwind CSS 4 one-page personal/CV portfolio site under the name "Dossier".

## Requirements

### Requirement: Page renders all sections in correct order

The page MUST display all sections from top to bottom: Navbar, Hero, About, Skills, Testimonials, Services, Benefits, Portfolio, Resume, Blog, Contact, Footer.

#### Scenario: All sections are visible on load

- **WHEN** the page loads
- **THEN** the navbar, hero, about, skills, testimonials, services, benefits, portfolio, resume, blog, contact, and footer sections are rendered in order

### Requirement: Navbar with navigation links

The navbar MUST display the brand "Dossier" and navigation links: Home, About, Services, Portfolio, Resume, Blog, Contact. On mobile it MUST collapse to a hamburger menu.

#### Scenario: Desktop nav shows all links

- **WHEN** the viewport is desktop width
- **THEN** all seven navigation links are visible

#### Scenario: Mobile nav toggles

- **WHEN** the hamburger button is clicked on mobile
- **THEN** the mobile menu opens showing all navigation links

### Requirement: Hero section with name and CTAs

The hero MUST show a name heading, subtitle text, and two call-to-action buttons ("More On Me" and "Hire Me") over a background image with dark overlay.

#### Scenario: Hero displays greeting and CTAs

- **WHEN** the page loads
- **THEN** the hero heading shows "Howdy, I'm Alex Morgan"
- **AND** the subtitle is visible
- **AND** both CTA buttons are present

### Requirement: About section with portrait and buttons

The about section MUST show a heading "About Me", descriptive text, "Hire Me" and "Download CV" buttons, and a portrait image.

#### Scenario: About content renders

- **WHEN** the about section is visible
- **THEN** the heading, text, buttons, and portrait image are present

### Requirement: Skills with progress bars

The skills section MUST display 5 progress bars with labels (Design 85%, HTML5 98%, CSS3 97%, WordPress 88%, Bootstrap 92%) and correct ARIA attributes.

#### Scenario: Skills bars render with percentages

- **WHEN** the skills section is visible
- **THEN** five progressbar elements exist with correct aria-valuenow

### Requirement: Client testimonials

The testimonials section MUST display testimonial cards with quotes, author names, and roles.

#### Scenario: Testimonial cards render

- **WHEN** the testimonials section is visible
- **THEN** at least two testimonial cards are shown with author names and quotes

### Requirement: Services grid

The services section MUST show 6 service cards each with an icon, title, description, and "Learn More" link.

#### Scenario: All services render

- **WHEN** the services section is visible
- **THEN** six service cards are shown with titles and Learn More links

### Requirement: Benefits callout

The benefits section MUST display the heading "Big Benefits for Small Business", subheading "All in One Place", and descriptive text.

#### Scenario: Benefits content renders

- **WHEN** the benefits section is visible
- **THEN** both headings and the description are present

### Requirement: Portfolio image grid

The portfolio section MUST display a grid of 6 portfolio items with images and hover-overlay titles.

#### Scenario: Portfolio grid renders

- **WHEN** the portfolio section is visible
- **THEN** six portfolio items are shown with images

### Requirement: Resume timeline

The resume section MUST show two columns: Education and Experience, each with timeline entries including title, date, and description.

#### Scenario: Resume entries render

- **WHEN** the resume section is visible
- **THEN** education and experience entries are shown with dates and descriptions

### Requirement: Blog posts

The blog section MUST display 3 blog post cards with images, titles, dates, and excerpts.

#### Scenario: Blog posts render

- **WHEN** the blog section is visible
- **THEN** three blog posts are shown with titles and dates

### Requirement: Contact form and details

The contact section MUST show a form (name, email, subject, message fields + submit button) and contact details (address, phone, email).

#### Scenario: Contact form renders

- **WHEN** the contact section is visible
- **THEN** all four form fields and the submit button are present
- **AND** contact details are shown

### Requirement: Footer with Component Dock link

The footer MUST show copyright text and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is visible
- **THEN** the Component Dock link points to https://www.componentdock.com/
- **AND** the link opens in a new tab
