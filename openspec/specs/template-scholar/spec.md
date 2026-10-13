# Scholar — Online Courses Template

> Recreation of the ColorLib "Onedu" design for the free-react-templates monorepo.

## Purpose

Scholar is an online courses template. It recreates the ColorLib **Onedu** design (https://colorlib.com/wp/template/onedu/, preview: https://preview.colorlib.com/theme/onedu/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Requirements

### Feature: Navbar

#### Scenario: Renders logo, search, nav links, cart, and sign-in button

- **GIVEN** the page is loaded
- **THEN** the navbar shows the "Scholar" logo link
- **AND** a search input is visible
- **AND** the following nav links are present: "Home", "Browse Courses", "About", "Blog", "Contact"
- **AND** a cart icon with badge is visible
- **AND** a "Sign In" button is visible

### Feature: Hero Section

#### Scenario: Displays headline, subtext, and search form

- **GIVEN** the page is loaded
- **THEN** the hero heading "Learn new skills online with top educators" is visible
- **AND** the subtext "Learn 100% online with world-class universities and industry experts." is visible
- **AND** a search form with a search button is visible
- **AND** a hero image is displayed

### Feature: Popular Courses

#### Scenario: Shows course cards with images, prices, titles, instructors, and ratings

- **GIVEN** the page is loaded
- **THEN** the heading "The world's largest selection of courses" is visible
- **AND** 5 course cards are rendered
- **AND** each course card shows a price "$118"
- **AND** each course card shows a star rating "4.9"

### Feature: About Split

#### Scenario: Displays heading, description, and browse button with an image

- **GIVEN** the page is loaded
- **THEN** the heading "The world's largest selection of online courses" is visible
- **AND** a "Browse Courses" button is visible
- **AND** an about image is displayed

### Feature: Students Viewing

#### Scenario: Shows "Students are viewing" heading and course cards

- **GIVEN** the page is loaded
- **THEN** the heading "Students are viewing" is visible
- **AND** 5 course cards are rendered in the students section

### Feature: Testimonial

#### Scenario: Shows student testimonial with quote, avatar, name, and role

- **GIVEN** the page is loaded
- **THEN** the heading "Student says about us" is visible
- **AND** the quote text is visible
- **AND** the name "Petey Cruiser" is visible
- **AND** the role "Student at Scholar" is visible

### Feature: Categories Grid

#### Scenario: Displays category cards with images and view-courses links

- **GIVEN** the page is loaded
- **THEN** the heading "Explore top categories" is visible
- **AND** 8 category cards are rendered
- **AND** each category card has a "View Courses" link
- **AND** the categories include "Programming", "VFX", "App Development", "Technology", "Graphics Design", "Music", "Product Design", "Video Editing"

### Feature: Become Instructor

#### Scenario: Shows heading, description, features, and CTA button

- **GIVEN** the page is loaded
- **THEN** the heading "Become an Instructor" is visible in the instructor section
- **AND** 3 checkmark features are visible
- **AND** a "Become an Instructor" button is visible
- **AND** a "Watch Video" link is visible

### Feature: Footer

#### Scenario: Displays columns, newsletter form, and Component Dock link

- **GIVEN** the page is loaded
- **THEN** the footer content info is visible
- **AND** a newsletter form with email input and subscribe button is visible
- **AND** a link to "https://www.componentdock.com/" branded "Component Dock" is visible
- **AND** the copyright text is visible
- **AND** the footer contains "Subjects", "Community", and "Company" column headings

### Feature: Back to Top

#### Scenario: Button appears after scrolling and scrolls to top on click

- **GIVEN** the page is loaded
- **THEN** the back-to-top button is not visible
- **WHEN** the user scrolls down
- **THEN** the back-to-top button becomes visible
- **WHEN** the user clicks the back-to-top button
- **THEN** the page scrolls to the top
