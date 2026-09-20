# Spec: Ethos — Education Landing Template

> Recreation of ColorLib "University" (https://colorlib.com/wp/template/university/)

## Purpose

Ethos is an education-focused landing page template that recreates the ColorLib "University" design under a different name. It provides a course search hero, feature highlights, stats counters, course listings, teacher profiles, news/blog section, newsletter signup, and a branded footer — all built with React 19, Vite, Tailwind CSS 4, and TypeScript.

## Requirements

### Requirement: Navbar with navigation and contact info

The template SHALL display a fixed navbar with the "Ethos" logo, navigation links (Home, About, Courses, News, Contact), and contact information (phone, email).

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the "Ethos" logo, all navigation links, and contact info

#### Scenario: Mobile hamburger toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu opens or closes

### Requirement: Hero section with search form

The template SHALL display a full-width hero with a dark overlay background image, the headline "Find Online Courses That Suit You", and a search form with text input, category dropdown, difficulty dropdown, and submit button.

#### Scenario: Hero renders search form

- **WHEN** the page loads
- **THEN** the hero section displays the headline and a search form with all four inputs

#### Scenario: Search form submission

- **WHEN** the user fills in the search form and clicks submit
- **THEN** the form handles submission without errors

### Requirement: Welcome section

The template SHALL display a split welcome section with an image on the left and "Welcome to Ethos" heading with body text and a "Read More" button on the right.

#### Scenario: Welcome renders heading and CTA

- **WHEN** the page loads
- **THEN** the welcome section displays the "Welcome to Ethos" heading and a "Read More" button

### Requirement: Knowledge feature cards

The template SHALL display a 4-column grid of feature cards, each with an icon, heading ("Knowledge is power", "Senior High School", "College of Arts & Sciences", "Unmatched Professors"), description text, and a "Read More" link.

#### Scenario: Four feature cards render

- **WHEN** the page loads
- **THEN** four feature cards are visible with icons, headings, descriptions, and links

### Requirement: Stats counter section

The template SHALL display a teal-background section with "Education is Life" heading and four stat counters (Students: 1250, Schools: 45, Books: 3200, Graduates: 890).

#### Scenario: Stats render with values

- **WHEN** the page loads
- **THEN** four stat counters are visible with their labels and values

#### Scenario: Stats section has brand background

- **WHEN** the page loads
- **THEN** the stats section has a teal background color

### Requirement: Popular courses section

The template SHALL display a "Popular Courses" heading and a grid of course cards, each with an image, title, description, and price badge.

#### Scenario: Course cards render

- **WHEN** the page loads
- **THEN** multiple course cards are visible with images, titles, descriptions, and prices

### Requirement: Teachers section

The template SHALL display a "Teachers" heading and a 3-column grid of teacher cards with photo, name, role, and social media icon links.

#### Scenario: Teacher cards render

- **WHEN** the page loads
- **THEN** three teacher cards are visible with photos, names, roles, and social links

### Requirement: News section

The template SHALL display a news section with a video embed card on the left and two blog post cards on the right, each with an image, date, title, and excerpt.

#### Scenario: News cards render

- **WHEN** the page loads
- **THEN** a video card and two blog post cards are visible

### Requirement: Newsletter subscription

The template SHALL display a teal-background newsletter section with a "Subscribe" heading, email input field, and submit button.

#### Scenario: Newsletter renders form

- **WHEN** the page loads
- **THEN** the newsletter section displays an email input and submit button on a teal background

### Requirement: Footer with Component Dock branding

The template SHALL display a dark footer with four columns (brand info, navigation links, recent posts, contact info), a copyright line, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders all columns

- **WHEN** the page loads
- **THEN** the footer displays four content columns and a copyright line

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ with "Component Dock" text
