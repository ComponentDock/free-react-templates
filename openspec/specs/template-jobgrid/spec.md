# Template: JobGrid (Job Board Landing Page)

## Purpose

JobGrid is a single-page job board landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Jobhub" free
template (source: https://colorlib.com/wp/template/jobhub/), built under a
DIFFERENT name (**JobGrid**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based job board landing with a dark hero area,
search form, partner logos, category cards, stats section, job listings,
testimonial carousel, and dark footer. Design tokens extracted from the
preview stylesheet: brand blue `#367FFF`, dark navy `#1D2547`, Raleway font.

## Requirements

### Requirement: Navbar with logo, navigation, and CTA

The page SHALL display a sticky navbar with the JobGrid logo, desktop navigation links (Home, Categories, Pages, Log in), and a "Post a Job" CTA button. On mobile, the navbar SHALL collapse into a hamburger menu.

#### Scenario: Navbar displays logo and navigation links

- **WHEN** the user loads the page
- **THEN** the navbar shows the "JobGrid" logo on the left
- **AND** the navbar contains links: "Home", "Categories", "Pages", "Log in"
- **AND** a "Post a Job" button is visible on the right side

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu expands
- **AND** the mobile menu contains the same navigation links

### Requirement: Hero section with search form

The page SHALL display a hero section with a "Find your dream job" heading, a search form (keyword input, location input, category dropdown, search button), and popular search tags.

#### Scenario: Hero displays heading and search form

- **WHEN** the user loads the page
- **THEN** a heading "Find your dream job" is visible
- **AND** a keyword search input is displayed
- **AND** a location search input is displayed
- **AND** a category dropdown is displayed
- **AND** a "Search" button is visible

#### Scenario: Popular search tags are displayed

- **WHEN** the user loads the page
- **THEN** a row of popular search tags is visible below the search form
- **AND** tags include "#User experience designer", "#Marketing", "#Programmer", "#Finance", "#UI designer"

### Requirement: Brand logos row

The page SHALL display a row of 6 partner/company logos as social proof.

#### Scenario: Partner logos are displayed

- **WHEN** the user scrolls to the brand logos section
- **THEN** 6 partner logo placeholders are visible in a horizontal row

### Requirement: Services category cards

The page SHALL display a "Browse from over 2000+ jobs" heading and 6 category cards in a 3-column grid, each with an icon, title, description, and "Browse Job" link.

#### Scenario: Category cards are rendered

- **WHEN** the user scrolls to the services section
- **THEN** 6 category cards are displayed
- **AND** each card contains an icon, title, description, and "Browse Job" link

#### Scenario: Categories match the original

- **WHEN** the services section is visible
- **THEN** categories include "Design & creatives", "Telecommunication", "Restaurant", "Programming", "Architecture", "Marketing"

### Requirement: About section with stats

The page SHALL display an about section with a stats counter ("89027+"), a "Want to hire perfect person?" heading, description text, and a "Browse Job" CTA button.

#### Scenario: Stats and heading are displayed

- **WHEN** the user scrolls to the about section
- **THEN** the number "89027+" is visible
- **AND** the text "Talented waiting for hire" is displayed
- **AND** the heading "Want to hire perfect person?" is displayed

### Requirement: Top jobs listing

The page SHALL display a "Browse top jobs" heading and 6 job listing cards in a 3-column grid, each with a job title, company name, and "Apply Now" button.

#### Scenario: Job cards are rendered

- **WHEN** the user scrolls to the top jobs section
- **THEN** 6 job cards are displayed
- **AND** each card contains a job title and "Apply Now" button

### Requirement: Job post feature section

The page SHALL display a dark-background section with 2 feature cards: "Post a job" and "Browse for job", each with a description and CTA button.

#### Scenario: Feature cards are displayed

- **WHEN** the user scrolls to the job post section
- **THEN** 2 feature cards are displayed side by side
- **AND** the first card has heading "Post a job"
- **AND** the second card has heading "Browse for job"

### Requirement: Testimonials carousel

The page SHALL display customer testimonials with quote text, avatar, name, role, and dot navigation for switching between testimonials.

#### Scenario: Testimonial navigation

- **WHEN** the user clicks a testimonial navigation dot
- **THEN** the displayed testimonial changes to the selected one
- **AND** the testimonial shows quote, name, and role

### Requirement: CTA banner

The page SHALL display a "Start finding your dream job" banner with a description and "Browse Job" CTA button.

#### Scenario: CTA banner is visible

- **WHEN** the user scrolls to the CTA banner
- **THEN** the heading "Start finding your dream job" is displayed
- **AND** a "Browse Job" CTA button is visible

### Requirement: Footer with columns and newsletter

The page SHALL display a dark footer with: logo + description + social links, "Top categories" column, "For employer" column, "Company" column, newsletter subscribe form, and copyright with Component Dock link.

#### Scenario: Footer columns are displayed

- **WHEN** the user scrolls to the footer
- **THEN** "Top categories", "For employer", and "Company" columns are displayed

#### Scenario: Newsletter form is functional

- **WHEN** the user enters an email and clicks "Subscribe"
- **THEN** the form handles the submission

#### Scenario: Component Dock link is present

- **WHEN** the user scrolls to the footer
- **THEN** a "Component Dock" link is present
- **AND** the link points to "https://www.componentdock.com/"

### Requirement: Responsive design

The page SHALL be responsive across mobile, tablet, and desktop viewports.

#### Scenario: Mobile layout

- **WHEN** the user views the page on a 375px viewport
- **THEN** the navbar collapses into a hamburger menu
- **AND** category and job cards stack vertically

### Requirement: Accessibility

All form inputs SHALL have associated labels or aria-labels. All images SHALL have alt text.

#### Scenario: Form inputs are accessible

- **WHEN** any form input is rendered
- **THEN** the input has an associated label or aria-label
