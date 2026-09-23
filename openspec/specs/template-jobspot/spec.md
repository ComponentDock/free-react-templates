# Template: JobSpot (Job Board)

## Purpose

JobSpot is a single-page job board landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "JobPro" design (https://colorlib.com/wp/template/jobpro/),
built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based job portal with a dark navbar, full-height hero
with background image and job count, a tabbed search bar (Find a Job / Find a
Candidate), 4-column services grid, category carousel, featured job listings,
CTA banner, testimonials carousel, candidate profiles, recent blog grid,
newsletter parallax section, and a 5-column dark footer.

## Design reference (replication findings)

- Brand primary: #007bff (Bootstrap blue — buttons, links, accents)
- Brand secondary: #91c235 (Lime green — CTA button on navbar, nav accent)
- Dark backgrounds: #1d2124 (navbar/footer), #171717 (overlays)
- Light sections: #f8f9fa / #f7f7f7 alternating
- Parallax/newsletter: #46b3e6 fallback
- Font: Source Sans 3 (Google Fonts)
- Button radius: subtle rounded (0.25rem)
- Section padding: generous vertical rhythm

## Requirements

### Requirement: Navbar

The system SHALL render a dark navbar (#1d2124) with brand name "JobSpot." on the left, navigation links (Home, Find Jobs, Candidates, Blog, Contact) on the right, and a "Post a Job" CTA button styled with secondary green (#91c235). The navbar SHALL collapse into a hamburger menu on mobile viewports.

#### Scenario: Navbar renders all navigation elements

- **WHEN** the user views the page
- **THEN** the navbar displays the "JobSpot." brand
- **AND** the navbar contains links: Home, Find Jobs, Candidates, Blog, Contact
- **AND** the navbar contains a "Post a Job" CTA button

#### Scenario: Navbar mobile toggle

- **WHEN** the user is on a mobile viewport
- **THEN** a hamburger toggle button is visible
- **AND** clicking the toggle shows/hides the mobile navigation menu

### Requirement: Hero section

The system SHALL render a full-height hero section with a background image, dark overlay, centered text including a subtitle, headline with job count ("10,650+ Jobs Listed Here!"), descriptive paragraph, and two CTA buttons ("Contact us" primary, "Search Job" secondary).

#### Scenario: Hero displays job listing headline

- **WHEN** the user views the hero section
- **THEN** a subtitle reads "Love what you do? Thousands are looking for you!"
- **AND** a heading shows "10,650+ Jobs Listed Here!"
- **AND** a descriptive paragraph is displayed
- **AND** a "Contact us" primary button is rendered
- **AND** a "Search Job" secondary button is rendered

### Requirement: Job search bar

The system SHALL render a dark gray search bar section with two pill-style tabs ("Find a Job" and "Find a Candidate"). Each tab shows a form with keyword input, category select, location input, and a Search button. The "Find a Job" tab SHALL be active by default.

#### Scenario: Search bar tab switching

- **WHEN** the user views the search bar
- **THEN** the "Find a Job" tab is active by default
- **AND** the active tab shows keyword, category, and location fields with a Search button
- **WHEN** the user clicks "Find a Candidate"
- **THEN** the candidate form fields are shown with a Search button

#### Scenario: Popular keywords

- **WHEN** the user views the search bar
- **THEN** "Browse Top Keywords:" text is displayed with clickable keyword links

### Requirement: Services section

The system SHALL render a 4-column grid of service cards, each with an icon, heading, and description. Headings: "Search Millions of Jobs", "Easy To Manage Jobs", "Top Careers", "Search Expert Candidates".

#### Scenario: Services display four feature cards

- **WHEN** the user views the services section
- **THEN** 4 service cards are displayed
- **AND** each card has an icon, heading, and description

### Requirement: Categories section

The system SHALL render a horizontal scrollable carousel of category cards. Each card shows an icon, category name, and open position count. The section heading reads "Explore by Category".

#### Scenario: Categories display job categories

- **WHEN** the user views the categories section
- **THEN** the heading reads "Explore by Category"
- **AND** at least 6 category cards are visible
- **AND** each card shows name and open position count

### Requirement: Featured jobs section

The system SHALL render a list of job cards with type badge, title, company, location, category tag, date, salary, "Apply Job" button, and heart/favorite icon. The section heading reads "Featured Jobs Posts For This Week".

#### Scenario: Featured jobs display job postings

- **WHEN** the user views the featured jobs section
- **THEN** each job card shows a type badge, title, company, location, and salary
- **AND** each job card has an "Apply Job" button
- **AND** each job card has a heart/favorite icon

### Requirement: CTA banner

The system SHALL render a centered CTA section with heading "Get Started Your New Job With Us", a description paragraph, and a "Get Started" secondary button.

#### Scenario: CTA banner encourages sign-up

- **WHEN** the user views the CTA banner
- **THEN** the heading reads "Get Started Your New Job With Us"
- **AND** a "Get Started" button is displayed

### Requirement: Testimonials section

The system SHALL render a dark background image section with overlay, heading "Happy Clients", and a carousel of testimonial cards with quote text, avatar, name, and position.

#### Scenario: Testimonials display client reviews

- **WHEN** the user views the testimonials section
- **THEN** the heading reads "Happy Clients"
- **AND** testimonial cards show a quote, avatar, name, and position

### Requirement: Latest candidates section

The system SHALL render a carousel of candidate profile cards with photo, name, location, and short bio. The section heading reads "Latest Candidates".

#### Scenario: Candidates display profiles

- **WHEN** the user views the candidates section
- **THEN** the heading reads "Latest Candidates"
- **AND** candidate cards show a photo, name, location, and bio

### Requirement: Recent blog section

The system SHALL render a 4-column grid of blog cards with thumbnail image, date/author/comments metadata, title, and excerpt. The section heading reads "Recent Blog".

#### Scenario: Blog displays recent posts

- **WHEN** the user views the blog section
- **THEN** the heading reads "Recent Blog"
- **AND** 4 blog cards are displayed
- **AND** each card has a thumbnail, date, author, comment count, title, and excerpt

### Requirement: Newsletter section

The system SHALL render a parallax background section (blue #46b3e6 fallback) with heading "Subscribe to our Newsletter", description text, email input, and "Subscribe" button.

#### Scenario: Newsletter collects email subscriptions

- **WHEN** the user views the newsletter section
- **THEN** the heading reads "Subscribe to our Newsletter"
- **AND** an email input field is displayed
- **AND** a "Subscribe" button is displayed

### Requirement: Footer

The system SHALL render a dark footer (#1d2124) with 5 columns: brand blurb + social icons, Employers links, Candidate links, Account links, Contact info. The footer SHALL include a copyright bar linking to https://www.componentdock.com/ (branded "Component Dock").

#### Scenario: Footer contains brand info and link columns

- **WHEN** the user views the footer
- **THEN** the footer shows the "JobSpot." brand and description
- **AND** the footer shows Employer, Candidate, and Account link columns
- **AND** the footer shows contact information
- **AND** the footer links to https://www.componentdock.com/

### Requirement: Accessibility and standards

The system SHALL not reference ColorLib in any app source code. All placeholder images SHALL use picsum.photos. The Google Font "Source Sans 3" SHALL be loaded via index.html.

#### Scenario: No ColorLib references

- **WHEN** the app source code is inspected
- **THEN** no "colorlib" strings exist in apps/jobspot (comments included)

#### Scenario: Placeholder images

- **WHEN** any image is rendered
- **THEN** the src uses picsum.photos with seed-based URLs

#### Scenario: Google Font loaded

- **WHEN** the page loads
- **THEN** Source Sans 3 is loaded from Google Fonts
