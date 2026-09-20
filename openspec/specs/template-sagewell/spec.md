# Template: Sagewell (Education Landing — Teal Branded Learning Platform)

## Purpose

Sagewell is a single-page education landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Wiser" design (see TEMPLATES.md, Education category,
line 1663 — the `wiser` slug), built under a DIFFERENT name (**Sagewell** —
evoking wisdom + scholarship; per the monorepo naming mandate — never reuse
the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript (strict). No ColorLib references in app code —
provenance lives in this spec, TEMPLATES.md, and the PR.

The original design is an education/university landing page with a teal
(#1fc2d9) brand palette, Poppins font, hero slider, services strip,
tabbed programs, events list, admission form, news cards, and a multi-column
footer. The recreation matches section order, layout, and color tokens.

## Requirements

### Requirement: Navbar renders navigation and brand

Sagewell SHALL render a top bar with contact info and login/register links,
a sticky main navigation with Home, Courses, Blog (dropdown), Pages
(dropdown), Contact, and an Apply Now CTA button. Mobile view SHALL show
a hamburger menu toggle.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the Sagewell logo, Home, Courses, Blog, Pages, Contact links, and an Apply Now button

#### Scenario: Mobile menu toggles open and closed

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation panel opens with all nav links and Apply Now
- **WHEN** the user clicks a mobile nav link
- **THEN** the mobile menu closes

#### Scenario: Dropdown menus appear on hover

- **WHEN** the user hovers over Blog or Pages
- **THEN** a dropdown menu appears with sub-links

### Requirement: Hero section displays headline and CTAs

Sagewell SHALL render a full-width hero section with a background image,
gradient overlay, headline text "Boost up your skills with a new way of
learning.", and two CTA buttons (Get Started, Take a Tour).

#### Scenario: Hero renders headline and buttons

- **WHEN** the page loads
- **THEN** the hero section displays the headline and two CTA buttons

### Requirement: Services section shows service badges

Sagewell SHALL render a services strip with 3 icon+text service badges
("Scholarship Available") on a light background.

#### Scenario: Services displays three items

- **WHEN** the page loads
- **THEN** the services section shows 3 service items each with an icon, title, and subtitle

### Requirement: Programs section with tabbed navigation

Sagewell SHALL render a "Popular Programs" section with 4 tabs (Graduate,
Postgraduate, PhD Scholarships, Training) and 3 program cards per tab.

#### Scenario: Default tab shows Graduate programs

- **WHEN** the page loads
- **THEN** the Graduate tab is active and shows 3 program cards

#### Scenario: Clicking a tab switches visible programs

- **WHEN** the user clicks a different tab
- **THEN** the program cards update to show that tab's programs

### Requirement: Events section displays upcoming events

Sagewell SHALL render a "Recent Events" section with 3 event items, each
showing a date badge, title, and metadata (time, date, location).

#### Scenario: Events renders all three events

- **WHEN** the page loads
- **THEN** 3 event items are displayed with date, time, and location info

### Requirement: Admission form collects application data

Sagewell SHALL render an "Apply for Admission" form on a dark background
with fields for First Name, Last Name, Phone, Email, Message, and an
Apply Now submit button.

#### Scenario: Form renders all fields

- **WHEN** the page loads
- **THEN** the admission form shows all 5 input fields and a submit button

#### Scenario: Form accepts user input

- **WHEN** the user types in the form fields
- **THEN** the field values update accordingly

### Requirement: News section shows blog posts

Sagewell SHALL render a "Recent News" section with 2 blog post cards,
each showing an image, badge, title, date, and comment count.

#### Scenario: News renders two posts

- **WHEN** the page loads
- **THEN** 2 blog post cards are displayed with badges, dates, and comment counts

### Requirement: Footer with newsletter, links, and Component Dock

Sagewell SHALL render a footer with a newsletter signup form, social media
icons, 4 link columns (About Us, Campus, Study, Support), and a copyright
line linking to https://www.componentdock.com/ (branded "Component Dock").

#### Scenario: Footer renders newsletter and social links

- **WHEN** the page loads
- **THEN** the footer shows the newsletter form, social media icons, and 4 link columns

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the copyright area contains a link to https://www.componentdock.com/ labeled "Component Dock"
