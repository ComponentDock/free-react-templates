# Template: JobQuest (Job Listings / Career Platform)

## Purpose

Recreation of ColorLib "Careers" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application. The original is a job board / career platform landing page with a hero search form, statistics counters, featured job listings, company logos, testimonials, and a call-to-action footer.

- **ColorLib source:** https://colorlib.com/wp/template/careers/
- **Live preview:** https://preview.colorlib.com/theme/careers/
- **New name:** `jobquest` (apps/jobquest, @free-react-templates/jobquest)
- **Deploy target:** https://jobquest.free.componentdock.com

## Requirements

### Requirement: Navbar renders correctly

The navbar displays the JobQuest logo, navigation links, and a Contact Us button.

#### Scenario: Navbar elements are visible

- **WHEN** the user visits the JobQuest landing page
- **THEN** the navbar is visible with the "JobQuest" logo
- **AND** navigation links "Home", "Job Listings", "About", "Services", "Blog" are displayed
- **AND** a "Contact Us" button is visible on the right

#### Scenario: Mobile hamburger menu toggles

- **WHEN** the user clicks the hamburger menu icon on mobile
- **THEN** the mobile menu opens showing all navigation links
- **AND** clicking a link closes the menu

### Requirement: Hero search form is interactive

The hero section displays a search form with keyword input, location dropdown, job type dropdown, and search button.

#### Scenario: Search form displays correctly

- **WHEN** the user sees the hero section
- **THEN** a search form with 3 inputs and 1 submit button is displayed
- **AND** the form submission is handled without page reload

### Requirement: Statistics section displays counters

The statistics section shows 4 counter values with labels.

#### Scenario: Counters are displayed

- **WHEN** the user scrolls to the statistics section
- **THEN** 4 stat counters are displayed (Candidates, Jobs Posted, Jobs Filled, Companies)
- **AND** each counter shows its numeric value

### Requirement: Job listings render correctly

The job listings section shows at least 6 job cards with details and pagination.

#### Scenario: Job cards display correctly

- **WHEN** the user views the job listings section
- **THEN** at least 6 job listing cards are displayed
- **AND** each card shows an image, job type badge, title, publisher, location, and salary range
- **AND** a pagination control is visible at the bottom

### Requirement: Company logos section displays

The company logos section shows a heading and logo placeholders.

#### Scenario: Company logos are visible

- **WHEN** the user scrolls to the company logos section
- **THEN** "Our Candidates Work In Company" heading is displayed
- **AND** at least 4 company logo placeholders are shown in a grid

### Requirement: Testimonials carousel works

The testimonials section shows a quote with avatar and attribution, with navigation controls.

#### Scenario: Testimonial navigation

- **WHEN** the user sees the testimonials section
- **THEN** a testimonial with avatar, quote, and attribution is displayed
- **AND** clicking the next button shows a different testimonial
- **AND** clicking the previous button wraps around correctly

### Requirement: CTA section renders correctly

The call-to-action section displays a heading, subtitle, and Sign Up button.

#### Scenario: CTA elements visible

- **WHEN** the user scrolls to the call-to-action section
- **THEN** "Looking For A Job?" heading is displayed
- **AND** a "Sign Up" button is visible

### Requirement: Footer renders correctly

The footer displays link columns, social icons, and Component Dock attribution.

#### Scenario: Footer links and attribution

- **WHEN** the user views the footer
- **THEN** 4 link columns are displayed (Search Trending, Company, Support, Contact Us)
- **AND** social media icon links are visible in the Contact Us column
- **AND** a Component Dock attribution link to componentdock.com is present

## Design Tokens (from live preview CSS analysis)

### Colors

| Token               | Hex                | Usage                                                                    |
| ------------------- | ------------------ | ------------------------------------------------------------------------ |
| brand-primary       | `#1644ba`          | Navbar logo, primary buttons, badge-primary, dropdown active, link hover |
| brand-primary-hover | `#1747c3`          | Button hover state                                                       |
| overlay-dark        | `rgba(0,0,0,0.45)` | Hero overlay, stats section overlay, CTA section overlay                 |
| text-primary        | `#212529`          | Default body text, headings                                              |
| text-secondary      | `#343a40`          | Dropdown links, secondary text                                           |
| text-muted          | `#7f848c`          | Meta captions, muted text                                                |
| bg-light            | `#f8f9fa`          | Light section backgrounds (testimonials bg-light)                        |
| bg-gray             | `#ebeef0`          | Dropdown hover, subtle backgrounds                                       |
| border-color        | `#dee2e6`          | Borders, dividers                                                        |
| white               | `#fff`             | Text on dark backgrounds, button text, logos                             |

### Typography

- **Primary font:** `"Nunito", sans-serif` (Google Fonts)
- **Headings:** bold weight (700), clean sans-serif
- **Body:** regular weight (400), Nunito

### Buttons

- **Primary btn:** bg `#1644ba`, text white, border-radius `4px`, padding generous
- **Warning btn:** bg warning color (yellow/orange), used for CTA "Sign Up"
- **Shape:** slightly rounded (`border-radius: 4px`), `btn-lg` variants

### Sections

- Hero: full-width background image + dark overlay
- Stats: full-width background image + primary-color overlay
- Jobs: white background, grid/list layout
- Company logos: white bg, centered logo grid
- Testimonials: light gray bg (`#f8f9fa`), carousel
- CTA: full-width background image + primary-color overlay
- Footer: dark bg (`#242424` / `#3c3c3c`), 4-column link layout

## Verification Checklist

- [ ] Navbar: logo, 5 nav links, Contact Us button
- [ ] Hero: background image overlay, headline, subtitle, 4-field search form
- [ ] Statistics: 4 counters with labels
- [ ] Job Listings: 6+ job cards with image, badge, title, meta, location, salary
- [ ] Pagination: previous/next + numbered pages
- [ ] Company Logos: heading + logo grid (placeholder images)
- [ ] Testimonials: carousel with avatar, quote, attribution
- [ ] CTA: heading, subtitle, Sign Up button, dark overlay
- [ ] Footer: 4 columns, social icons, Component Dock link
- [ ] Design tokens: Nunito font, #1644ba brand, dark overlays, 4px border-radius
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME + homepage configured for surge deploy
