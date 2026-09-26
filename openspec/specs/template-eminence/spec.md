# Template: Eminence (Personal Portfolio & Resume)

## Purpose

Eminence is a single-page personal portfolio/resume website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Meetme" free template (source:
https://colorlib.com/wp/template/meetme/), built under a DIFFERENT name
(**Eminence**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

**Preview URL:** https://preview.colorlib.com/theme/meetme/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/meetme-free-template.jpg

The original is a Bootstrap 4 + jQuery page with parallax effects, an Owl
Carousel testimonials slider, isotope gallery filters, nice-select dropdowns,
and a sticky navbar. It targets a personal portfolio/resume: hero with profile
photo and contact info, about section with stats and skill bars, experience
and education tabs, services, project gallery with filters, testimonials, and
a footer with newsletter and social links.

## Design tokens (extracted from preview CSS)

| Token                      | Value                                   | Usage                                |
| -------------------------- | --------------------------------------- | ------------------------------------ |
| **Primary brand**          | `#298cdf` (blue)                        | Buttons, icons, links, active states |
| **Accent purple**          | `#766dff`                               | Secondary accent                     |
| **Accent teal**            | `#2ebccd`                               | Tertiary accent                      |
| **Dark background**        | `#04091e` (navy)                        | Hero section, footer                 |
| **Light background**       | `#f9f9ff`                               | Alternating sections                 |
| **Font family (headings)** | `"Heebo"`, sans-serif (Google Fonts)    | h1-h6                                |
| **Font family (body)**     | `"Roboto"`, sans-serif (Google Fonts)   | Body text                            |
| **Body text color**        | `#222222`                               | Default text                         |
| **Secondary text**         | `#777777`                               | Descriptions, labels                 |
| **Button style**           | Rounded pill, brand blue bg, white text | CTAs                                 |

## Requirements

### Requirement: Navigation bar with logo and links

The template SHALL display a fixed navigation bar with the "Eminence" logo
text and links to Home, About, Services, Gallery, Testimonials, and Contact.
On mobile, a hamburger menu toggles a dropdown of nav links.

#### Scenario: Desktop navigation renders all links

- **GIVEN** the page loads on a desktop viewport
- **WHEN** the user views the navbar
- **THEN** the logo "Eminence" and links for Home, About, Services, Gallery, Testimonials, and Contact are visible

#### Scenario: Mobile menu toggles on button click

- **GIVEN** the page loads on a mobile viewport
- **WHEN** the user clicks the hamburger menu button
- **THEN** a dropdown menu with all nav links appears
- **AND** clicking a link closes the menu

### Requirement: Hero section with profile info

The template SHALL display a hero section with a profile photo, name
("Donald McKinney"), title ("Junior UI/UX Developer"), a bio paragraph,
contact information (date, phone, email, address), and social media links
(Facebook, Twitter, LinkedIn).

#### Scenario: Hero renders profile details

- **GIVEN** the page loads
- **WHEN** the hero section is visible
- **THEN** the profile photo, name, title, and bio text are displayed
- **AND** contact info items (date, phone, email, address) are shown
- **AND** social links for Facebook, Twitter, and LinkedIn are present

### Requirement: About section with stats and skills

The template SHALL display an "About Myself" section with a bio paragraph,
three stat boxes (Total Donation $2.5M, Total Projects 1465, Total Volunteers
3965), and five skill progress bars (After Effects 85%, Photoshop 90%,
Illustrator 70%, Sublime 95%, Sketch 75%).

#### Scenario: Stats are displayed

- **GIVEN** the about section is visible
- **WHEN** the user views the stats
- **THEN** three stat boxes show Total Donation $2.5M, Total Projects 1465, and Total Volunteers 3965

#### Scenario: Skill bars show correct percentages

- **GIVEN** the about section is visible
- **WHEN** the user views the skill bars
- **THEN** five progress bars are displayed with correct percentage labels and ARIA attributes

### Requirement: Experience and education tabs

The template SHALL display a tabbed section with "My Experiences" and "My
Education" tabs. The experiences tab is active by default. Each tab shows a
timeline of entries with period, company/school, role/degree, and location.

#### Scenario: Experiences tab is active by default

- **GIVEN** the tabs section loads
- **WHEN** the user views the tabs
- **THEN** the "My Experiences" tab is selected and experience entries are shown

#### Scenario: Clicking education tab switches content

- **GIVEN** the tabs section is visible
- **WHEN** the user clicks "My Education"
- **THEN** education entries are displayed and the experiences tab is deselected

### Requirement: Services section with three offerings

The template SHALL display three service cards: Architecture, Interior Design,
and Concept Design, each with an icon, title, and description.

#### Scenario: All three services are displayed

- **GIVEN** the services section is visible
- **WHEN** the user views the section
- **THEN** cards for Architecture, Interior Design, and Concept Design are shown with descriptions

### Requirement: Project gallery with filters

The template SHALL display a filterable project gallery with filter tabs (All,
Vector, Raster, UI/UX, Printing) and six project cards with images, titles,
and "Client Project" labels. A "Load More Items" button is shown below.

#### Scenario: All projects shown by default

- **GIVEN** the gallery section loads
- **WHEN** the "All" filter is active
- **THEN** six project cards are displayed

#### Scenario: Filtering by category

- **GIVEN** the gallery section is visible
- **WHEN** the user clicks the "Raster" filter
- **THEN** only projects tagged with "raster" category are shown

### Requirement: Testimonials section with star ratings

The template SHALL display three testimonial cards with quote text, author
name, and star ratings (4.5 or 5 stars).

#### Scenario: Testimonials render correctly

- **GIVEN** the testimonials section is visible
- **WHEN** the user views the section
- **THEN** three testimonial cards are shown with quotes, author names, and star ratings

### Requirement: Footer with newsletter and social links

The template SHALL display a footer with three columns: About Me with
Component Dock copyright link, Newsletter signup form with email input and
submit button, and Follow Me social links (Facebook, Twitter, Dribbble,
Behance).

#### Scenario: Footer renders all sections

- **GIVEN** the footer is visible
- **WHEN** the user views the footer
- **THEN** About Me text, Newsletter form, and social links are displayed
- **AND** the copyright links to Component Dock (https://www.componentdock.com/)

#### Scenario: Newsletter form submission

- **GIVEN** the newsletter form is visible
- **WHEN** the user types an email and clicks Subscribe
- **THEN** the email input is cleared
