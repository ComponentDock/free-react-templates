---
name: brightpath
description: Education and online courses landing page
category: Education
source: ColorLib Edusmart
source_url: https://colorlib.com/wp/template/edusmart/
preview_url: https://preview.colorlib.com/theme/edusmart/
---

# BrightPath — Education & Online Courses Template

## Purpose

Recreation of ColorLib Edusmart as a React 19 + Vite + Tailwind 4 + TypeScript template. A free, production-ready online education landing page with hero search, feature highlights, department grid, course catalog, testimonials, countdown registration, events, and footer.

## Requirements

### Requirement: Navbar with top bar and navigation

Users SHALL see a top bar with phone/email and a main navigation with logo, links (Home, About, Pages, Blog, Contact), and a search icon. On mobile, a hamburger toggle opens/closes the mobile menu.

#### Scenario: Desktop navigation visible

- GIVEN the page loads
- WHEN viewing the header
- THEN the brand name "BrightPath" is visible
- AND navigation links Home, About, Pages, Blog, Contact are shown

#### Scenario: Mobile menu toggle

- GIVEN on a mobile viewport
- WHEN clicking the hamburger button
- THEN the mobile dropdown opens with all nav links

#### Scenario: Mobile menu close on link click

- GIVEN the mobile menu is open
- WHEN clicking a navigation link
- THEN the mobile menu closes

### Requirement: Hero section with search form

Users SHALL see a full-width gradient banner with the heading "We Rank the Best Courses on the Web", a description, and a course search form.

#### Scenario: Hero renders heading and form

- GIVEN the page loads
- WHEN viewing the hero section
- THEN the heading "We Rank the Best Courses on the Web" is visible
- AND a search input with placeholder "Search Courses" is present
- AND a Search button is present

### Requirement: Features section with three items

Users SHALL see three feature items (New Classes, Top Courses, Full E-Books) each with a gradient icon badge and description.

#### Scenario: Features render

- GIVEN the page loads
- WHEN viewing the features section
- THEN New Classes, Top Courses, and Full E-Books are shown with descriptions

### Requirement: Departments section with grid and CTA

Users SHALL see a 3-column staggered grid of 7 department icons (Languages, Business, Literature, Software, Design, Coaching, Development) alongside a description and "Explore Courses" CTA button.

#### Scenario: Departments render

- GIVEN the page loads
- WHEN viewing the departments section
- THEN all 7 department names are visible
- AND "Over 2500 Courses from 5 Platforms" heading is shown
- AND "Explore Courses" button is present

### Requirement: Popular Courses section with 4 cards

Users SHALL see 4 course cards, each with an image, author badge, title, description, student/comment counts, and a price (with color variants).

#### Scenario: Courses render

- GIVEN the page loads
- WHEN viewing the courses section
- THEN 4 course cards appear with titles, author names, prices, student and comment counts

### Requirement: Facts section with dark overlay

Users SHALL see a dark overlay section with 6 fact cards (Expert Mentors, 25000+ Courses, Student Membership, Lifetime Access, Source Files Included, Certified Programs), each with an icon and description.

#### Scenario: Facts render

- GIVEN the page loads
- WHEN viewing the facts section
- THEN all 6 fact titles and descriptions are shown

### Requirement: Testimonials section

Users SHALL see testimonial cards with quote icon, author name, star rating, and text, alongside a thumbnail strip with hover overlay.

#### Scenario: Testimonials render

- GIVEN the page loads
- WHEN viewing the testimonials
- THEN 3 testimonial names and quotes are visible

### Requirement: Registration section with countdown and form

Users SHALL see a gradient section with a countdown timer (Days/Hours/Mins/Secs) and a registration form (Name, Phone, Email, Submit).

#### Scenario: Registration renders

- GIVEN the page loads
- WHEN viewing the registration section
- THEN "Register Now" heading, countdown labels, and form fields are visible

#### Scenario: Countdown decrements

- GIVEN the countdown is displayed
- WHEN 2 seconds pass
- THEN the seconds value decrements by 2

#### Scenario: Countdown cascades seconds to minutes

- GIVEN the countdown is displayed
- WHEN 60 seconds pass
- THEN the minutes value decrements by 1

#### Scenario: Countdown cascades minutes to hours

- GIVEN the countdown is displayed
- WHEN 1 hour passes
- THEN the hours value decrements by 1

#### Scenario: Countdown cascades hours to days

- GIVEN the countdown is displayed with days=2
- WHEN 24 hours pass
- THEN the days value decrements by 1

#### Scenario: Days floor at zero

- GIVEN the countdown is at days=0, hours=0, minutes=0, seconds=1
- WHEN 3 seconds pass
- THEN the days value remains 0

#### Scenario: Registration form submits

- GIVEN the registration form is displayed
- WHEN filling name, phone, email and clicking Submit
- THEN the form submits without page navigation

### Requirement: Events section with 2 cards

Users SHALL see 2 event cards each with an image, date, title, and description.

#### Scenario: Events render

- GIVEN the page loads
- WHEN viewing the events section
- THEN 2 event titles, dates, and descriptions are visible

### Requirement: Footer with columns, newsletter, and Component Dock link

Users SHALL see a footer with 5 columns (Top Products, Quick Links, Features, Resources, Newsletter), a newsletter email form, social icons, and a "Component Dock" link.

#### Scenario: Footer renders

- GIVEN the page loads
- WHEN viewing the footer
- THEN 5 column headings are visible
- AND newsletter form with email input and Subscribe button is present
- AND social media links are present

#### Scenario: Footer Component Dock link

- GIVEN the footer is displayed
- WHEN clicking the Component Dock link
- THEN it opens https://www.componentdock.com/ in a new tab

#### Scenario: Newsletter form submits

- GIVEN the newsletter form is displayed
- WHEN typing an email and clicking Subscribe
- THEN the form submits without navigation
