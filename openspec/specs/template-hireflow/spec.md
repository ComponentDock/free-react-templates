# Template: HireFlow (Job Listing / Recruitment Platform)

## Purpose

Recreation of ColorLib "Joblisting" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application. The original is a job listing / recruitment platform landing page with a hero search, features grid, popular job posts carousel, featured categories, recent job listings, CTA banner, app download section, and footer.

- **ColorLib source:** https://colorlib.com/wp/template/joblisting/
- **Live preview:** https://preview.colorlib.com/theme/joblisting/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/joblisting-free-template.jpg
- **New name:** `hireflow` (apps/hireflow, @free-react-templates/hireflow)
- **Deploy target:** https://hireflow.free.componentdock.com

## Requirements

### Requirement: Navbar with navigation and auth buttons

The template SHALL display a sticky navbar with logo, navigation links (Home, About Us, Category, Price, Blog, Contact), and Signup/Login pill buttons. The navbar SHALL be responsive with a mobile menu toggle.

#### Scenario: Desktop navbar renders all navigation links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the HireFlow logo, six navigation links, and Signup/Login buttons

#### Scenario: Mobile menu toggles on button click

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu expands with all links visible

### Requirement: Hero banner with search form

The template SHALL display a full-width hero banner with a purple gradient overlay, a headline showing "1500+ Jobs posted last week", and a search form with text input, location dropdown, category dropdown, and search button.

#### Scenario: Hero headline displays job count

- **WHEN** the hero section renders
- **THEN** the headline "1500+ Jobs posted last week" is displayed

#### Scenario: Search form prevents default submission

- **WHEN** the user clicks the Search button
- **THEN** the form does not navigate away (preventDefault)

### Requirement: Features section with four cards

The template SHALL display four feature cards (Searching, Applying, Security, Notifications) each with an icon, title, and description.

#### Scenario: All four features render

- **WHEN** the features section renders
- **THEN** four cards are displayed with titles Searching, Applying, Security, and Notifications

### Requirement: Popular posts with job cards

The template SHALL display a grid of job post cards, each with a thumbnail image, title, location, description, and "View Job Post" button.

#### Scenario: Job post cards render with details

- **WHEN** the popular posts section renders
- **THEN** at least four job post cards are displayed with titles and locations

### Requirement: Featured job categories

The template SHALL display six category cards (Accounting, Development, Technology, Media & News, Medical, Marketing) with icons and labels.

#### Scenario: All six categories render

- **WHEN** the categories section renders
- **THEN** six category cards are displayed with their names

### Requirement: Recent job listings

The template SHALL display recent job listing cards with job title, company, location, type, salary, and "Apply Now" button.

#### Scenario: Job listings render with details

- **WHEN** the recent jobs section renders
- **THEN** four job listings are displayed with titles, companies, and Apply Now buttons

### Requirement: CTA banner with action buttons

The template SHALL display a call-to-action banner with purple gradient background, headline "Join us today without any hesitation", and two buttons: "I am a Candidate" and "Request Free Demo".

#### Scenario: CTA section renders headline and buttons

- **WHEN** the CTA section renders
- **THEN** the headline and both CTA buttons are visible

### Requirement: Download app section

The template SHALL display a download section with a phone mockup image, headline "Download the HireFlow App Today!", description text, and App Store / Play Store download buttons.

#### Scenario: Download section renders store buttons

- **WHEN** the download section renders
- **THEN** App Store and Play Store download buttons are visible

### Requirement: Footer with newsletter and Component Dock link

The template SHALL display a footer with Top Products links, Newsletter signup form, social media icons, and copyright text linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** the footer renders
- **THEN** the copyright text contains a link to https://www.componentdock.com/ labeled "Component Dock"

#### Scenario: Newsletter form prevents default submission

- **WHEN** the user clicks the Subscribe button in the newsletter form
- **THEN** the form does not navigate away (preventDefault)
