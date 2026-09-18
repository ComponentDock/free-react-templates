# Template: JobHaven (Job Board / Recruitment)

## Purpose

Recreation of ColorLib's **Joblisting** template
(preview: https://preview.colorlib.com/theme/joblisting/).

JobHaven is a job board / recruitment marketplace single-page website with a
dark-overlay hero with search form, feature highlights, popular job carousel,
featured job categories, job listings with sidebar, call-to-action, app download
promo, and a newsletter footer. Built with React 19, Vite, Tailwind CSS 4, and
TypeScript.

Source slug: `joblisting`
Preview URL: https://preview.colorlib.com/theme/joblisting/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/joblisting-free-template.jpg

## Design tokens

Extracted from the ColorLib preview stylesheet (`css/main.css`):

| Token            | Value                    | Notes                                                              |
| ---------------- | ------------------------ | ------------------------------------------------------------------ |
| Brand primary    | `#49e4fa`               | Bright cyan/turquoise — primary accent on buttons, links, borders  |
| Brand hover      | `#4cd3e3`               | Slightly darker cyan for hover states                              |
| Text primary     | `#222222`               | Near-black headings and body                                       |
| Text secondary   | `#777777`               | Gray body text and descriptions                                    |
| Body background  | `#f9f9ff`               | Very light blue-white for alternating sections                     |
| White            | `#fff`                  | Card backgrounds, banner text                                      |
| Banner overlay   | `rgba(0,0,0,0.5)` approx | Dark semi-transparent overlay on hero banner                     |
| Font family      | `Poppins`, sans-serif   | Google Font — geometric sans-serif                                 |
| Button radius    | `3px` (small), `20px` (pill) | Small rounded for form buttons, pill for tags/CTAs            |
| Card radius      | `8px`                   | Category cards, post thumbnails                                    |
| Tag colors       | `#f44a40` (red), `#f4e700` (yellow), `#38a4ff` (blue), `#e66686` (pink), `#73fbaf` (green), `#6382e6` (purple) | Color-coded skill tags on job posts |
| Icons            | lucide-react in React version | Replaces Linearicons / Font Awesome                          |
| Section padding  | `100px` top (`.pt-100`)  | Generous vertical spacing                                          |

## Requirements

### Requirement: Navigation bar

The navbar SHALL display a logo/brand area, navigation links, and Signup/Login
CTA buttons in a sticky header.

#### Scenario: Navbar renders with brand and links

- **WHEN** the page loads
- **THEN** the navbar displays a brand logo/text
- **AND** navigation links include "Home", "About Us", "Category", "Price", "Blog", "Contact"
- **AND** two CTA buttons are visible: "Signup" and "Login"

#### Scenario: Navbar is sticky on scroll

- **WHEN** the user scrolls down the page
- **THEN** the navbar remains fixed at the top of the viewport

#### Scenario: Mobile hamburger toggle

- **WHEN** the viewport is mobile width and the hamburger button is clicked
- **THEN** the mobile nav toggles open/closed

### Requirement: Hero banner with search form

The hero banner SHALL display a dark-overlay background, a headline with a
stat counter, and a search form with keyword input, area/category dropdowns,
and a search button.

#### Scenario: Hero banner renders headline and search

- **WHEN** the page loads
- **THEN** the banner section displays "1500+ Jobs posted last week" as headline text
- **AND** a search form is visible with a text input ("what are you looking for?"), area dropdown, category dropdown, and Search button
- **AND** the background uses a dark overlay on a hero image

#### Scenario: Search tags displayed below form

- **WHEN** the hero banner renders
- **THEN** a "Search by tags:" line is shown with tags: Technology, Business, Consulting, IT Company, Design, Development

### Requirement: Feature highlights

The features section SHALL display 4 feature cards in a row on a white background.

#### Scenario: Four features render

- **WHEN** the features section is visible
- **THEN** 4 feature cards are displayed in a single row
- **AND** each card has a heading and description paragraph
- **AND** headings are "Searching", "Applying", "Security", "Notifications"

### Requirement: Popular job posts carousel

The popular-post section SHALL display a horizontally scrollable carousel of
job post cards, each with a thumbnail image, "view job post" button, title,
location, and description.

#### Scenario: Carousel renders job posts

- **WHEN** the popular-post section is visible
- **THEN** multiple job post cards are displayed in a carousel
- **AND** each card has a thumbnail image on the left, "view job post" button overlay, job title "Creative Designer", location "Los Angeles", and a description paragraph

#### Scenario: Carousel is scrollable

- **WHEN** the user interacts with the carousel
- **THEN** the carousel scrolls horizontally to reveal more job posts

### Requirement: Featured job categories

The categories section SHALL display 6 category icons in a grid with a section
heading "Featured Job Categories" and subtitle.

#### Scenario: Categories render in grid

- **WHEN** the featured categories section is visible
- **THEN** the heading reads "Featured Job Categories"
- **AND** subtitle reads "Who are in extremely love with eco friendly system."
- **AND** 6 category items are displayed in a grid
- **AND** categories are: Accounting, Development, Technology, Media & News, Medical, Government

### Requirement: Job listings with sidebar

The post section SHALL display a main area with job listing cards and a sidebar
with location filter, top-rated jobs carousel, category filter, and career
advice blog.

#### Scenario: Job listings render with filter tabs

- **WHEN** the job listings section is visible
- **THEN** filter tabs are displayed: "Recent", "Full Time", "Intern", "Part Time"
- **AND** multiple job post cards are shown below the tabs

#### Scenario: Job post card content

- **WHEN** a job post card renders
- **THEN** it shows a thumbnail image with color-coded skill tags (Art, Media, Design)
- **AND** a title "Creative Art Designer", company "Premium Labels Limited"
- **AND** a description, "Job Nature: Full time", location with map icon, salary range "15k - 25k"
- **AND** a heart/favorite icon and "Apply" button

#### Scenario: Load More button

- **WHEN** the user scrolls to the bottom of the job listings
- **THEN** a "Load More job Posts" button is visible

#### Scenario: Sidebar — Jobs by Location

- **WHEN** the sidebar renders
- **THEN** a "Jobs by Location" section lists cities with counts: New York (37), Park Montana (57), Atlanta (33), Arizona (36), Florida (47), Rocky Beach (27), Chicago (17)

#### Scenario: Sidebar — Top rated jobs carousel

- **WHEN** the sidebar renders
- **THEN** a "Top rated job posts" section shows a carousel of job cards with image, title, company, description, job nature, location, salary, and "Apply job" button

#### Scenario: Sidebar — Jobs by Category

- **WHEN** the sidebar renders
- **THEN** a "Jobs by Category" section lists categories with counts: Technology (37), Media & News (57), Government (33), Medical (36), Restaurants (47), Developer (27), Accounting (17)

#### Scenario: Sidebar — Career Advice Blog

- **WHEN** the sidebar renders
- **THEN** a "Career Advice Blog" section shows blog post cards with background image, title, time ago, heart/comment counts

### Requirement: Call to action

The CTA section SHALL display on a section-gap background with a heading,
description, and two action buttons.

#### Scenario: CTA renders

- **WHEN** the call-to-action section is visible
- **THEN** the heading reads "Join us today without any hesitation"
- **AND** a description paragraph is shown
- **AND** two buttons are visible: "I am a Candidate" and "Request Free Demo"

### Requirement: App download section

The download section SHALL display a mobile app mockup image on the left and
download information with App Store / Play Store buttons on the right.

#### Scenario: Download section renders

- **WHEN** the download section is visible
- **THEN** a mobile phone mockup image is displayed on the left
- **AND** the heading reads "Download the Job Listing App Today!"
- **AND** a description paragraph is shown
- **AND** two download buttons are visible: App Store (with Apple icon) and Play Store (with Android icon)

### Requirement: Footer

The footer SHALL display in a dark background with 4 columns: Top Products links,
Newsletter subscription form, Instagram feed, and social media icons.

#### Scenario: Footer renders with all sections

- **WHEN** the footer is visible
- **THEN** it has a "Top Products" column with links: Managed Website, Manage Reputation, Power Tools, Marketing Service
- **AND** a "Newsletter" column with email input and "Subscribe" button
- **AND** an "Instagram Feed" column with 8 thumbnail images
- **AND** social media icons (Facebook, Twitter, Dribbble, Behance)

#### Scenario: Footer copyright

- **WHEN** the footer bottom renders
- **THEN** it displays copyright text with a "Made with Component Dock" link to https://www.componentdock.com/

## Verification checklist

- [ ] Navbar renders with all links and Signup/Login buttons
- [ ] Hero banner has dark overlay, "1500+" headline, search form with dropdowns
- [ ] Search tags line renders below the form
- [ ] 4 feature cards render in a row
- [ ] Popular posts carousel renders with job cards
- [ ] Featured categories grid shows 6 items with icons
- [ ] Job listings show filter tabs and post cards
- [ ] Job post cards have thumbnail, tags, title, company, description, nature, location, salary
- [ ] Load More button is visible
- [ ] Sidebar renders Location list, Top rated carousel, Category list, Blog cards
- [ ] CTA section renders with heading, description, two buttons
- [ ] Download section renders with phone mockup, heading, two store buttons
- [ ] Footer renders 4 columns with newsletter, Instagram feed, social icons
- [ ] Footer copyright links to Component Dock
- [ ] All colors match extracted tokens (#49e4fa primary, #222 text, #f9f9ff bg, Poppins font)
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
