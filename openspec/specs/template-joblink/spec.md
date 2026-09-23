# Template: JobLink (Job Board Landing)

## Purpose

JobLink is a single-page job board landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Jobhub"
free template (source: https://colorlib.com/wp/template/jobhub/),
built under a DIFFERENT name (**JobLink**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/jobhub/
- **Preview:** https://preview.colorlib.com/theme/jobhub/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/jobhub-free-template.jpg
- **New name:** `joblink`
- **App folder:** `apps/joblink`
- **Package:** `@free-react-templates/joblink`
- **Surge target:** `joblink.free.componentdock.com`

## Design tokens

| Token              | Value                              | Notes                                                    |
| ------------------ | ---------------------------------- | -------------------------------------------------------- |
| Brand color        | `#367FFF`                          | Blue — navbar, hero gradient, sticky header, buttons     |
| Brand hover        | `#2d6ae6`                          | Slightly darker blue on hover                            |
| Accent green       | `#11E276`                          | Green — search button, CTAs, "Browse Job" links, badges  |
| Accent green hover | `#0fc969`                          | Darker green on hover                                    |
| Light background   | `#f7f7f7`                          | Section alternating background                           |
| White              | `#fff`                             | Card backgrounds, section backgrounds                    |
| Dark text          | `#1f2b7b`                          | Headings (deep navy)                                     |
| Body text          | `#555`                             | Paragraph text                                           |
| Footer background  | `#111`                             | Dark footer                                              |
| Heading font       | `"Raleway", sans-serif`            | Google Font — headings, nav, hero                        |
| Body font          | `"Muli", sans-serif`               | Google Font — body, section text                         |
| Button primary     | Green `#11E276`, white text, rounded 30px | Search button, CTAs                              |
| Button outlined    | Border white, text white, rounded  | "Post a Job" in header                                   |
| Button border-blue | Border `#367FFF`, text `#367FFF`   | "Browse Job" links in service cards                      |
| Search bar radius  | Rounded (pill shape)               | Hero search form inputs                                  |
| Card radius        | `0` (no rounding) or `10px` top    | Job cards are flat; service cards rounded top corners     |

## Requirements

### Requirement: Navbar displays brand and navigation

The navbar SHALL display the "JobLink" brand text with a location-pin icon,
navigation links (Home, Categories, Pages dropdown, Log in), and a
"Post a Job" outlined white button. The navbar SHALL be sticky at the top
of the viewport. On mobile viewports, a hamburger icon SHALL toggle the
mobile menu.

#### Scenario: Navbar renders brand and links

- **WHEN** the user visits the page
- **THEN** the navbar SHALL show the brand text "JobLink"
- **AND** it SHALL have links: Home, Categories, Pages (with dropdown: About, Blog, Blog Details, Element), Log in
- **AND** "Post a Job" outlined button SHALL be visible

#### Scenario: Mobile hamburger menu toggle

- **WHEN** the user clicks the hamburger icon
- **THEN** the mobile menu SHALL open with nav links visible
- **WHEN** the user clicks the close icon
- **THEN** the mobile menu SHALL close

### Requirement: Hero displays headline and search form

The hero section SHALL display a blue gradient background, the headline
"Find your dream job.", a subtitle paragraph, and a search form with three
fields: "Job title or keywords" text input, "Where?" text input, and a
"Category" select dropdown. A green "Search" button SHALL be on the right.
Below the form, "Popular search:" with tag links (#User experience designer,
#Marketing, #Programmer, #Finance, #UI designer) SHALL be displayed.

#### Scenario: Hero renders heading and search

- **WHEN** the user visits the page
- **THEN** the heading "Find your dream job." SHALL be visible
- **AND** a search form with three inputs and a green Search button SHALL be present
- **AND** popular search tags SHALL be displayed below the form

### Requirement: Brand logos carousel

A brand logos section SHALL display a horizontal row of client/partner logos
in a scrolling carousel. Logos SHALL be grayscale with hover effect.

#### Scenario: Brand logos render

- **WHEN** the brand section is visible
- **THEN** at least 5 brand logos SHALL be displayed in a horizontal row
- **AND** logos SHALL have grayscale styling

### Requirement: Services/Categories section shows job categories

The services section SHALL display the heading "Browse From Over 2000+ Jobs"
with a subtitle, followed by a responsive grid of 6 category cards. Each
card SHALL show an icon, a category name, a short description, and a
"Browse Job" outlined link. Cards SHALL have a white background with
rounded top corners and a subtle shadow.

#### Scenario: Category cards render correctly

- **WHEN** the categories section is visible
- **THEN** the heading "Browse From Over 2000+ Jobs" SHALL be displayed
- **AND** 6 category cards SHALL be shown
- **AND** each card SHALL have an icon, name, description, and "Browse Job" link

### Requirement: Counter/stats section

A stats section SHALL display a large counter number "89027+" with the
text "Talented waiting for hire" on a blue gradient background with
a light pattern overlay.

#### Scenario: Counter renders

- **WHEN** the stats section is visible
- **THEN** the number "89027+" SHALL be displayed
- **AND** the text "Talented waiting for hire" SHALL be visible

### Requirement: Talent CTA section

A talent CTA section SHALL display the heading "Want to hire perfect person?"
with a descriptive paragraph and a green "Browse Talents" button. The section
SHALL have a white background.

#### Scenario: Talent CTA renders

- **WHEN** the talent CTA section is visible
- **THEN** the heading "Want to hire perfect person?" SHALL be displayed
- **AND** a "Browse Talents" green button SHALL be visible

### Requirement: Top Jobs listing section

The top jobs section SHALL display the heading "Browse top jobs" with a
subtitle, followed by a responsive grid of 6 job listing cards. Each card
SHALL show a category icon, a category name, a short description, an
"Apply Now" green button, and a "Remote" tag badge.

#### Scenario: Job listing cards render

- **WHEN** the top jobs section is visible
- **THEN** the heading "Browse top jobs" SHALL be displayed
- **AND** 6 job cards SHALL be shown
- **AND** each card SHALL have a category, description, "Apply Now" button, and "Remote" tag

### Requirement: Job Post CTA section

A two-column CTA section SHALL display "Post a job" and "Browse for job"
side by side, each with a description paragraph and a button (green and
blue respectively).

#### Scenario: Dual CTA renders

- **WHEN** the job post CTA section is visible
- **THEN** "Post a job" and "Browse for job" columns SHALL be displayed
- **AND** each SHALL have a button

### Requirement: Testimonial section

A testimonial section SHALL display a carousel of testimonials. Each
testimonial SHALL show a blockquote, the author name, their title
("Creative designer at Colorlib" — to be paraphrased), and a circular
avatar. Dot navigation indicators SHALL be present.

#### Scenario: Testimonial renders

- **WHEN** the testimonial section is visible
- **THEN** at least one testimonial SHALL be displayed
- **AND** it SHALL have a quote, author name, title, and avatar

### Requirement: Newsletter/CTA banner

A full-width CTA banner SHALL display the heading "Start finding your dream
job" on a blue background with a green "Subscribe" button and an email
input field.

#### Scenario: Newsletter CTA renders

- **WHEN** the newsletter section is visible
- **THEN** the heading "Start finding your dream job" SHALL be displayed
- **AND** an email input and subscribe button SHALL be present

### Requirement: Footer displays links and newsletter

The footer SHALL have a dark background with four columns: a brand
description column, "Top categories" links, "For employer" links,
"Company" links, and a "Subscribe newsletter" column with email input.
A copyright line with "Made with Component Dock" link SHALL appear
at the bottom.

#### Scenario: Footer renders all columns

- **WHEN** the footer is visible
- **THEN** four link columns SHALL be displayed
- **AND** a newsletter subscription form SHALL be present
- **AND** a copyright line with "Component Dock" link SHALL be visible

## Verification checklist

- [ ] Navbar: sticky, brand + links + Post a Job button, mobile hamburger
- [ ] Hero: blue gradient, headline, 3-field search form, popular tags
- [ ] Brand logos: horizontal carousel, grayscale
- [ ] Services: 6 category cards with icons, names, descriptions, Browse Job links
- [ ] Stats: counter "89027+" on blue gradient background
- [ ] Talent CTA: heading, description, Browse Talents button
- [ ] Top Jobs: 6 job cards with category, description, Apply Now, Remote tag
- [ ] Job Post CTA: two-column layout with Post a job / Browse for job
- [ ] Testimonials: carousel with quotes, author, avatar, dots
- [ ] Newsletter: heading, email input, subscribe button
- [ ] Footer: 4 columns, newsletter form, copyright with Component Dock link
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] picsum.photos for placeholder images, lucide-react for icons
- [ ] Google Fonts loaded: Muli + Raleway
