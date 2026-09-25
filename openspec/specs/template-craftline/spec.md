# Craftline — Personal Resume & Portfolio Template

## Purpose

Recreate the ColorLib **Jackson** (https://colorlib.com/wp/template/jackson/) personal resume and portfolio template as a React 19 + Tailwind CSS 4 + TypeScript application. The template features a fixed left sidebar navigation, full-height hero slideshow, and scrollable content sections for about, services, skills, education, experience, work portfolio, blog, and contact.

## Requirements

### Requirement: Fixed sidebar navigation

The template SHALL display a fixed left sidebar (280px) with profile photo, name, title, navigation links, dark mode toggle, social links, and copyright.

#### Scenario: Sidebar renders on desktop

- **WHEN** the page loads on a desktop viewport
- **THEN** the sidebar is visible on the left with all navigation links

#### Scenario: Mobile sidebar toggle

- **WHEN** the user clicks the mobile hamburger menu
- **THEN** the sidebar slides in from the left as an overlay

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle button
- **THEN** the html element receives the "dark" class

### Requirement: Hero section

The template SHALL display a full-height hero section with background image, greeting text, subtitle, and CTA button.

#### Scenario: Hero renders greeting

- **WHEN** the page loads
- **THEN** the hero section displays "Hi!" and "I'm Alex" headings

#### Scenario: Hero CTA button

- **WHEN** the page loads
- **THEN** a "Download CV" button is visible in the hero section

### Requirement: About section

The template SHALL display an about section with heading, description text, and a 4-column service icons grid.

#### Scenario: About section content

- **WHEN** the user scrolls to the about section
- **THEN** "Who Am I?" heading and service icons (Graphic Design, Web Design, Software, Application) are visible

### Requirement: Counters section

The template SHALL display a counters section with animated statistics over a parallax background.

#### Scenario: Counter stats

- **WHEN** the user scrolls to the counters section
- **THEN** four stats (Cups of coffee, Projects, Clients, Partners) are displayed

### Requirement: Services section

The template SHALL display a services section with 6 service cards in a 3x2 grid.

#### Scenario: Service cards

- **WHEN** the user scrolls to the services section
- **THEN** 6 service cards with icons and descriptions are visible

### Requirement: Skills section

The template SHALL display a skills section with 6 progress bars showing skill levels.

#### Scenario: Progress bars

- **WHEN** the user scrolls to the skills section
- **THEN** 6 progress bars with correct percentages are rendered

### Requirement: Education section

The template SHALL display an education section with accordion entries for different degrees.

#### Scenario: Accordion toggle

- **WHEN** the user clicks an education entry
- **THEN** the entry expands to show its content

### Requirement: Experience section

The template SHALL display an experience section with a timeline of work entries.

#### Scenario: Timeline entries

- **WHEN** the user scrolls to the experience section
- **THEN** 5 work experience entries with titles and periods are visible

### Requirement: Work portfolio section

The template SHALL display a work section with a filterable portfolio grid.

#### Scenario: Filter by category

- **WHEN** the user clicks a category filter button
- **THEN** only portfolio items matching that category are displayed

### Requirement: Blog section

The template SHALL display a blog section with a featured post and side posts.

#### Scenario: Blog posts

- **WHEN** the user scrolls to the blog section
- **THEN** a featured blog post and 2 side posts are visible

### Requirement: Contact section

The template SHALL display a contact section with contact information and a form.

#### Scenario: Contact form

- **WHEN** the user fills in the contact form and clicks Send Message
- **THEN** the form submits without error

### Requirement: Footer with Component Dock link

The template SHALL display a footer with copyright and a link to https://www.componentdock.com/.

#### Scenario: Footer link

- **WHEN** the user scrolls to the footer
- **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is visible

### Requirement: Design tokens

The template SHALL use Inter font from Google Fonts and a blue accent color (#0066ff).

#### Scenario: Brand color

- **WHEN** the template renders
- **THEN** primary accent elements use the #0066ff blue color

### Requirement: No ColorLib references

The template SHALL NOT contain any references to "colorlib" in app source files.

#### Scenario: Clean source

- **WHEN** searching apps/craftline/src for "colorlib"
- **THEN** no matches are found
