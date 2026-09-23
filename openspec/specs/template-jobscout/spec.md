# Template: JobScout (Job Board Landing)

## Purpose

JobScout is a single-page job board landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Jobfinderportal"
free template (source: https://colorlib.com/wp/template/jobfinderportal/),
built under a DIFFERENT name (**JobScout**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/jobfinderportal/
- **Preview:** https://preview.colorlib.com/theme/jobfinderportal/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/jobfinderportal-free-tempate.jpg
- **New name:** `jobscout`
- **App folder:** `apps/jobscout`
- **Package:** `@free-react-templates/jobscout`
- **Surge target:** `jobscout.free.componentdock.com`

## Design tokens

| Token              | Value                                                 | Notes                                          |
| ------------------ | ----------------------------------------------------- | ---------------------------------------------- |
| Brand color        | `#fb246a`                                             | Hot pink — buttons, section subtitles, accents |
| Brand hover        | `#da2461`                                             | Darker pink on hover                           |
| Navy               | `#28395a`                                             | Headings, hero caption                         |
| Dark navy          | `#010b1d`                                             | Footer background                              |
| Accent purple      | `#8b92dd`                                             | Job type tags, link hovers                     |
| Process background | `#26317f`                                             | How It Works section background                |
| Body text          | `#506172`                                             | Paragraph text                                 |
| Footer text        | `#868c98`                                             | Footer paragraph/link text                     |
| Heading font       | `"Barlow", sans-serif`                                | Google Font — nav, headings                    |
| Body font          | `"Muli", sans-serif`                                  | Google Font — body, sections                   |
| Button primary     | Pink `#fb246a`, white text, uppercase, letter-spacing | CTA buttons                                    |
| Button outlined    | Border `#8b92dd`, text `#8b92dd`, hover fill          | Browse All, Upload CV                          |

## Requirements

### Requirement: Navbar displays brand and navigation

The navbar SHALL display the "JobScout" brand text, navigation links (Home, Find Jobs, About, Contact), a "Register" pink button, and a "Login" outlined pink button. The navbar SHALL be fixed at the top of the viewport. On mobile viewports, a hamburger icon SHALL toggle the mobile menu.

#### Scenario: Navbar renders brand and links

- **WHEN** the user visits the page
- **THEN** the navbar SHALL show the brand text "JobScout"
- **AND** it SHALL have links: Home, Find Jobs, About, Contact
- **AND** "Register" and "Login" buttons SHALL be visible

#### Scenario: Mobile hamburger menu toggle

- **WHEN** the user clicks the hamburger icon
- **THEN** the mobile menu SHALL open with nav links visible
- **WHEN** the user clicks the close icon
- **THEN** the mobile menu SHALL close

### Requirement: Hero displays headline and search form

The hero section SHALL display a background image with dark overlay, the headline "Find the most exciting startup jobs", and a search form with a keyword text input, a location select dropdown, and a "Find Job" pink button. The form SHALL use role="search".

#### Scenario: Hero renders heading and search

- **WHEN** the user visits the page
- **THEN** the heading "Find the most exciting startup jobs" SHALL be visible
- **AND** a search form with text input, select, and button SHALL be present

### Requirement: Categories section shows job categories

The categories section SHALL display 8 category cards in a responsive grid. Each card SHALL show an icon, a category name, and a count. A "Browse All Sectors" outlined button SHALL appear below the grid.

#### Scenario: Category cards render correctly

- **WHEN** the categories section is visible
- **THEN** 8 category cards SHALL be shown
- **AND** each card SHALL have a name and count
- **AND** a "Browse All Sectors" button SHALL be visible

### Requirement: CV Upload CTA section

The CV upload CTA section SHALL display a background image with dark overlay, the subtitle "Upload Your Resume", the heading "Make a Difference with Your Online Resume!", and an "Upload your CV" outlined button.

#### Scenario: CTA section renders correctly

- **WHEN** the CTA section is visible
- **THEN** the heading SHALL be visible
- **AND** the "Upload your CV" button SHALL be present

### Requirement: Featured Jobs listing

The featured jobs section SHALL display 4 job listing cards. Each card SHALL show a company icon, job title, company name, location, salary, a type badge (Full Time / Part Time), and a time-ago indicator.

#### Scenario: Job cards render with details

- **WHEN** the featured jobs section is visible
- **THEN** 4 job cards SHALL be shown
- **AND** each card SHALL show title, company, location, salary, and type badge

### Requirement: How It Works process steps

The process section SHALL display 3 step cards on a dark background. Each card SHALL show an icon, a step title ("1. Search a job", "2. Apply for job", "3. Get your job"), and a description.

#### Scenario: Process steps render correctly

- **WHEN** the process section is visible
- **THEN** 3 step cards SHALL be shown
- **AND** step titles SHALL match "1. Search a job", "2. Apply for job", "3. Get your job"

### Requirement: Testimonial section

The testimonial section SHALL display star ratings, a blockquote, the founder's name "Margaret Lawson", role "Creative Director", an avatar image, and dot navigation indicators.

#### Scenario: Testimonial renders correctly

- **WHEN** the testimonial section is visible
- **THEN** the quote text SHALL be visible
- **AND** "Margaret Lawson" and "Creative Director" SHALL be shown
- **AND** dot indicators SHALL be present

### Requirement: Company Stats section

The company stats section SHALL display the subtitle "What we are doing", the heading "24k Talented people are getting Jobs", descriptive text, a "Post a Job" pink button, a background image, and a "Since 1994" badge.

#### Scenario: Stats section renders correctly

- **WHEN** the stats section is visible
- **THEN** the heading "24k Talented people are getting Jobs" SHALL be visible
- **AND** a "Post a Job" button SHALL be present
- **AND** the "Since 1994" badge SHALL be visible

### Requirement: Blog section

The blog section SHALL display 2 blog cards in a 2-column grid. Each card SHALL show an image, a date badge, a category label, a title, and a "Read more" link.

#### Scenario: Blog cards render correctly

- **WHEN** the blog section is visible
- **THEN** 2 blog cards SHALL be shown
- **AND** each card SHALL have a title and "Read more" link

### Requirement: Footer with Component Dock link

The footer SHALL have a dark navy background with 4 columns (About Us, Contact Info, Important Links, Newsletter), a stats row (5000+, 451, 568), a copyright line with a link to https://www.componentdock.com/ branded "Component Dock", and social media icon links (Facebook, Twitter, Behance).

#### Scenario: Footer renders all columns

- **WHEN** the footer is visible
- **THEN** "About Us", "Contact Info", "Important Links", "Newsletter" headers SHALL be shown
- **AND** stats "5000+", "451", "568" SHALL be visible
- **AND** a link to "https://www.componentdock.com/" SHALL be present
- **AND** social icon links SHALL be present
