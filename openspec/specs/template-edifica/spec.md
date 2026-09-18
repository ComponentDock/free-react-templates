# Spec: Edifica

Recreation of ColorLib "Homebuilder" (https://colorlib.com/wp/template/homebuilder/).

## Purpose

Edifica is a construction and home builder landing page template. It showcases services, company expertise, project portfolio, client testimonials, and a blog, with a newsletter signup and quote request form. The design uses a golden amber (#fdbe34) primary brand color, dark navy (#00043c) navbar, Poppins font, and a professional construction-industry aesthetic.

## Requirements

### Requirement: Navigation bar

The template SHALL display a dark navy navigation bar with the brand name "Edifica." and navigation links for Home, About, Services, Projects, Blog, and Contact, plus a search icon.

#### Scenario: Renders brand and nav links

- **WHEN** the page loads
- **THEN** the navbar displays the brand "Edifica." with a golden accent dot
- **AND** all six navigation links are visible (Home, About, Services, Projects, Blog, Contact)
- **AND** a search icon button is present

### Requirement: Hero section

The template SHALL display a fullscreen hero section with a background image, dark overlay, and centered white text including a subheading and main heading.

#### Scenario: Renders hero content

- **WHEN** the page loads
- **THEN** the hero section displays the subheading "We're here to help you"
- **AND** the main heading "Home Builder" is visible

### Requirement: Services grid

The template SHALL display a 4-column services grid with icons, headings, and descriptions for Construction, House Renovation, Painting, and Architecture Design.

#### Scenario: Renders all four services

- **WHEN** the page loads
- **THEN** four service cards are displayed with titles: Construction, House Renovation, Painting, Architecture Design
- **AND** each card has a descriptive paragraph

### Requirement: Features row

The template SHALL display a 3-column features row highlighting Expert & Professional, High Quality Work, and 24/7 Help Support.

#### Scenario: Renders all three features

- **WHEN** the page loads
- **THEN** three feature cards are displayed with titles: Expert & Professional, High Quality Work, 24/7 Help Support

### Requirement: About section with tabs

The template SHALL display a split about section with a video thumbnail on the left and tabbed content (Our Mission, Our Vision, Our Value) on the right.

#### Scenario: Renders about content with tabs

- **WHEN** the page loads
- **THEN** the heading "We create and turn into reality" is visible
- **AND** three tab buttons are present: Our Mission, Our Vision, Our Value
- **AND** the Mission tab is active by default showing its content

#### Scenario: Tab switching

- **WHEN** the user clicks the "Our Vision" tab
- **THEN** the vision content is displayed
- **AND** the vision tab is marked as selected

#### Scenario: Value tab switching

- **WHEN** the user clicks the "Our Value" tab
- **THEN** the value content is displayed

### Requirement: Counter statistics

The template SHALL display a statistics bar with four metrics: 50 Years Experienced, 8,500 Projects Done, 378 Professional Experts, 1,200 Machineries Equipments.

#### Scenario: Renders all statistics

- **WHEN** the page loads
- **THEN** the numbers 50, 8,500, 378, and 1,200 are displayed
- **AND** corresponding labels are visible

### Requirement: Project gallery

The template SHALL display a 3x2 grid of project images with hover overlay showing category and title.

#### Scenario: Renders project cards

- **WHEN** the page loads
- **THEN** six project images are displayed
- **AND** project titles are visible

### Requirement: Testimonials section

The template SHALL display a blue-background testimonials section with heading "Happy Clients" and three testimonial cards.

#### Scenario: Renders testimonials

- **WHEN** the page loads
- **THEN** the heading "Happy Clients" is visible
- **AND** three testimonial quotes are displayed with author names

### Requirement: Blog section

The template SHALL display a 3-column blog section with image cards showing date, author, comment count, and article title.

#### Scenario: Renders blog posts

- **WHEN** the page loads
- **THEN** three blog cards are displayed with titles and metadata

### Requirement: Newsletter signup

The template SHALL display a golden-background newsletter section with heading "Subscribe to our Newsletter", an email input, and a subscribe button.

#### Scenario: Renders newsletter form

- **WHEN** the page loads
- **THEN** the newsletter heading is visible
- **AND** an email input field and subscribe button are present

#### Scenario: Form interaction

- **WHEN** the user types an email address and clicks Subscribe
- **THEN** the email field is cleared

### Requirement: Footer

The template SHALL display a dark-background footer with About Us section, social links, Services/About/Resources link columns, a Request A Quote form, and a copyright line linking to Component Dock.

#### Scenario: Renders footer content

- **WHEN** the page loads
- **THEN** the footer displays the About Us section
- **AND** social media links (Facebook, Twitter, Instagram) are present
- **AND** Services, About, and Resources link columns are visible
- **AND** the Request A Quote form has Name, Email, Subject, Message fields and a Send button

#### Scenario: Footer copyright

- **WHEN** the page loads
- **THEN** the copyright line includes a link to https://www.componentdock.com/ labeled "Component Dock"

#### Scenario: Quote form submission

- **WHEN** the user fills in the quote form fields and clicks Send
- **THEN** all form fields are cleared
