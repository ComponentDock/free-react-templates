# Template: Syllabus (Education / Courses)

## Purpose

Syllabus is a single-page education/courses landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Course" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Requirements

### Requirement: Navbar with logo, nav links, and phone sidebar

The template SHALL render a navigation bar with the brand logo text "syllabus",
desktop nav links (Home, About Us, Courses, Elements, News, Contact), and a
phone number sidebar trigger.

#### Scenario: Desktop nav links visible

- **WHEN** the page loads on a desktop viewport
- **THEN** the brand text "syllabus" and all nav links (Home, About Us, Courses, Elements, News, Contact) are visible

#### Scenario: Phone number display

- **WHEN** the page loads
- **THEN** a phone number is accessible via the sidebar

### Requirement: Hero section with background image

The template SHALL render a full-width hero section with a background image and
a centered heading "Get your Education today!" where "Education" is highlighted
in the brand accent color.

#### Scenario: Hero heading rendered

- **WHEN** the page loads
- **THEN** a heading containing "Get your" and "Education today!" is displayed

#### Scenario: Accent highlight on "Education"

- **WHEN** the hero section is visible
- **THEN** the word "Education" appears in the brand accent color

### Requirement: HeroBoxes with three info cards

The template SHALL render three info boxes below the hero: Online Courses (globe icon),
Our Library (books icon), and Our Teachers (professor icon), each with a
"view more" link.

#### Scenario: Three hero boxes rendered

- **WHEN** the page loads
- **THEN** three info boxes are displayed with titles "Online Courses", "Our Library", and "Our Teachers"

#### Scenario: Each box has a view more link

- **WHEN** the hero boxes section is visible
- **THEN** each box has a "view more" link

### Requirement: PopularCourses section with three course cards

The template SHALL render a "Popular Courses" section with three course cards
containing an image, title, description, author info (avatar + name), and a
price badge showing "$29".

#### Scenario: Section title rendered

- **WHEN** the page loads
- **THEN** a heading "Popular Courses" is displayed

#### Scenario: Three course cards rendered

- **WHEN** the Popular Courses section is visible
- **THEN** three course cards are displayed each with a title, description, author name, and price "$29"

### Requirement: Register section with promo and search form

The template SHALL render a split register section: left side has promo text
"Register now and get a discount 50% discount until 1 January" with a CTA
button, right side has a background image with a course search form (3 inputs

- submit button).

#### Scenario: Promo text visible

- **WHEN** the page loads
- **THEN** text containing "Register now" and "50% discount" is displayed

#### Scenario: Search form has three inputs

- **WHEN** the register section is visible
- **THEN** a form with three input fields and a submit button is present

### Requirement: Services section with six service cards

The template SHALL render an "Our Services" section with six service cards
arranged in 2 rows of 3: Online Courses, Indoor Courses, Amazing Library,
Exceptional Professors, Top Programs, Graduate Diploma. Each card has an icon,
title, and description.

#### Scenario: Section title rendered

- **WHEN** the page loads
- **THEN** a heading "Our Services" is displayed

#### Scenario: Six service cards rendered

- **WHEN** the Services section is visible
- **THEN** six service cards are displayed with the correct titles

### Requirement: Testimonials section

The template SHALL render a testimonials section with a parallax background
image, section title "What our students say", and testimonial cards with
quote text, author image, name, and title.

#### Scenario: Section title rendered

- **WHEN** the page loads
- **THEN** a heading "What our students say" is displayed

#### Scenario: Testimonial cards rendered

- **WHEN** the testimonials section is visible
- **THEN** at least one testimonial card with author name and title is displayed

### Requirement: Events section with three event items

The template SHALL render an "Upcoming Events" section with three event items,
each with a date block (day + month), event image, event name, location, and
description.

#### Scenario: Section title rendered

- **WHEN** the page loads
- **THEN** a heading "Upcoming Events" is displayed

#### Scenario: Three event items rendered

- **WHEN** the Events section is visible
- **THEN** three event items are displayed with event names and locations

### Requirement: Footer with newsletter, columns, and copyright

The template SHALL render a footer with a newsletter section (email input +
subscribe button), four footer columns (logo + about, Menu links, Useful
Links, Contact info), and a copyright bar linking to Component Dock.

#### Scenario: Newsletter section rendered

- **WHEN** the page loads
- **THEN** a newsletter section with an email input and subscribe button is visible

#### Scenario: Footer columns rendered

- **WHEN** the footer is visible
- **THEN** four columns with "Syllabus", "Menu", "Useful Links", and "Contact" headings are displayed

#### Scenario: Copyright links to Component Dock

- **WHEN** the footer copyright is visible
- **THEN** a link to "https://www.componentdock.com/" branded as "Component Dock" is present
