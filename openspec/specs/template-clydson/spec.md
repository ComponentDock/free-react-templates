# Template: Clydson (Personal Portfolio)

## Purpose

Recreation of the ColorLib "Clyde" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript personal portfolio site.

- **Source:** [ColorLib Clyde](https://colorlib.com/wp/template/clyde/)
- **Preview:** https://preview.colorlib.com/theme/clyde/
- **New name:** `clydson` (app folder: `apps/clydson`, package: `@free-react-templates/clydson`)
- **Category:** Personal / Portfolio

## Requirements

### Requirement: Navbar displays navigation

The navbar SHALL show a logo and navigation links with mobile hamburger toggle.

#### Scenario: Desktop navbar

- **WHEN** the user visits the homepage
- **THEN** the navbar shows the logo "Clydson." and navigation links for Home, About, Skills, Services, Projects, Blog, Contact

#### Scenario: Mobile hamburger menu

- **WHEN** the user is on a mobile viewport
- **THEN** a hamburger menu button is visible
- **WHEN** the user clicks the hamburger
- **THEN** the navigation links expand

### Requirement: Hero section with CTAs

The hero SHALL display a full-viewport section with heading, subtitle, and two CTA buttons.

#### Scenario: Hero content

- **WHEN** the user visits the homepage
- **THEN** a full-viewport hero section is shown
- **AND** the heading "Creative UI/UX Designer & Developer" is displayed
- **AND** a "Hire me" primary button is visible
- **AND** a "Download CV" outline button is visible

### Requirement: Counter stats section

The counter section SHALL display four statistics in a row.

#### Scenario: Stats display

- **WHEN** the user scrolls to the counter section
- **THEN** 4 stat cards are visible: Project Complete (750), Happy Clients (568), Cups of coffee (478), Years experienced (780)

### Requirement: About section with personal info

The about section SHALL show a background image, personal info list, and interests.

#### Scenario: About content

- **WHEN** the user scrolls to the about section
- **THEN** "About Me" heading is displayed
- **AND** personal info list shows Name, Date of birth, Address, Zip, Email, Phone
- **AND** interest icons for Music, Travel, Movie, Sports are displayed

### Requirement: Skills section with circular progress

The skills section SHALL show 6 circular progress cards in a 3-column grid.

#### Scenario: Skills display

- **WHEN** the user scrolls to the skills section
- **THEN** 6 circular progress cards are shown: CSS (95%), HTML (98%), jQuery (68%), Photoshop (92%), WordPress (83%), SEO (95%)
- **AND** each card shows Last week and Last month percentage values

### Requirement: Services section with 8 cards

The services section SHALL show 8 service cards in a 2x4 grid.

#### Scenario: Services display

- **WHEN** the user scrolls to the services section
- **THEN** 8 service cards are shown: Web Design, Web Application, Web Development, Banner Design, Branding, Icon Design, Graphic Design, SEO

### Requirement: CTA banner

The CTA section SHALL display a dark background with heading, description, and contact button.

#### Scenario: CTA content

- **WHEN** the user scrolls to the CTA section
- **THEN** "Have a project on your mind." heading is displayed
- **AND** a "Contact me" button is visible

### Requirement: Projects gallery

The projects section SHALL show 8 items in a 4x2 grid with hover overlay.

#### Scenario: Projects display

- **WHEN** the user scrolls to the projects section
- **THEN** 8 project items are shown in a grid
- **AND** each item has a background image with hover overlay showing title and category

### Requirement: Testimonials section

The testimonials section SHALL show client quotes on a blue background.

#### Scenario: Testimonials display

- **WHEN** the user scrolls to the testimonials section
- **THEN** a blue background section is displayed
- **AND** testimonial cards with quote, avatar, name, and role are visible

### Requirement: Blog section

The blog section SHALL show 3 blog post cards.

#### Scenario: Blog display

- **WHEN** the user scrolls to the blog section
- **THEN** 3 blog cards are shown with image, date, author, comments count, title, and excerpt

### Requirement: Contact form

The contact section SHALL display a form with 4 fields and contact info.

#### Scenario: Contact form display

- **WHEN** the user scrolls to the contact section
- **THEN** a form with Name, Email, Subject, Message fields and Send Message button is visible
- **AND** contact info (address, phone, email, website) is displayed

### Requirement: Footer with Component Dock link

The footer SHALL have 4 columns and link to Component Dock.

#### Scenario: Footer content

- **WHEN** the user scrolls to the footer
- **THEN** a dark footer with 4 columns is displayed
- **AND** columns include: intro text, Links, Services, and Questions (address/phone/email)
- **AND** social media icons are shown
- **AND** a "Component Dock" link to https://www.componentdock.com/ is present

### Requirement: No ColorLib references in app code

The app SHALL NOT contain any references to ColorLib in source files, comments, or data.

#### Scenario: No ColorLib strings

- **WHEN** searching the apps/clydson directory for "colorlib" (case-insensitive)
- **THEN** zero matches are found
