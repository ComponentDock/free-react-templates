# Template: Craft (Creative Portfolio)

## Purpose

Craft is a single-page creative portfolio template — a personal portfolio
for UI/UX designers and developers. It is an original React recreation of
the ColorLib free "Clyde" template
(preview: https://preview.colorlib.com/theme/clyde/ — personal/creative portfolio),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Font: Poppins (Google Fonts via `<link>`)
- Primary: dark navbar, white content areas
- Accent: Bootstrap primary blue (#007bff)
- Light background: #f8f9fa (counter section)
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Craft lives in `apps/craft` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark navbar with the site name "Craft", a hamburger
toggle for mobile, and navigation links (Home, About, Skills, Services,
Projects, Blog, Contact).

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show "Craft" as the site name
- **AND** it SHALL show links to Home, About, Skills, Services, Projects, Blog, Contact

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on mobile
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible

### Requirement: Hero section

The system SHALL render a hero with a background image, a subheading,
a headline with highlighted text, and two CTA buttons ("Hire me" and "Download CV").

#### Scenario: Hero content

- **GIVEN** the hero section renders
- **WHEN** I read the content
- **THEN** I SHALL see the subheading "Hello! This is Craft"
- **AND** I SHALL see a headline with "Creative" and "UI/UX Designer & Developer"
- **AND** I SHALL see "Hire me" and "Download CV" buttons

### Requirement: Counter section

The system SHALL render a counter section with 4 statistics (Project Complete,
Happy Clients, Awards Won, Coffee Cups).

#### Scenario: Counter items

- **GIVEN** the counter section renders
- **WHEN** I count the statistics
- **THEN** I SHALL see 4 counter items with numbers and labels

### Requirement: About section

The system SHALL render an about section with a heading, description paragraph,
and personal info list.

#### Scenario: About content

- **GIVEN** the about section renders
- **WHEN** I read the content
- **THEN** I SHALL see an "About Me" heading
- **AND** I SHALL see a description paragraph
- **AND** I SHALL see personal info items

### Requirement: Skills section

The system SHALL render a skills section with progress bars showing skill
percentages.

#### Scenario: Skill bars

- **GIVEN** the skills section renders
- **WHEN** I look for skill indicators
- **THEN** I SHALL see at least 4 skill bars with labels and percentages

### Requirement: Services section

The system SHALL render a services section with service cards.

#### Scenario: Service cards

- **GIVEN** the services section renders
- **WHEN** I count the service cards
- **THEN** I SHALL see at least 3 service items with icons, titles, and descriptions

### Requirement: Projects section

The system SHALL render a projects section with a filterable portfolio grid.

#### Scenario: Project items

- **GIVEN** the projects section renders
- **WHEN** I count the project items
- **THEN** I SHALL see at least 4 project items with images and titles

### Requirement: Blog section

The system SHALL render a blog section with recent posts.

#### Scenario: Blog posts

- **GIVEN** the blog section renders
- **WHEN** I count the blog posts
- **THEN** I SHALL see at least 3 blog post cards with images, titles, and dates

### Requirement: Contact section

The system SHALL render a contact section with a form and contact details.

#### Scenario: Contact form

- **GIVEN** the contact section renders
- **WHEN** I look for the form
- **THEN** I SHALL see name, email, subject, and message fields + submit button

### Requirement: Footer

The system SHALL render a footer with copyright text and a link to
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer attribution

- **GIVEN** the footer renders
- **WHEN** I look for the attribution
- **THEN** I SHALL see a link to https://www.componentdock.com/
- **AND** the link text SHALL mention "Component Dock"
