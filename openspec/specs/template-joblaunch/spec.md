# Template: JobLaunch (Job Portal)

## Purpose

Recreation of ColorLib's **Jobstart** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/jobstart/
- **Preview:** https://preview.colorlib.com/theme/jobstart/
- **New name:** `joblaunch`
- **App folder:** `apps/joblaunch`
- **Package:** `@free-react-templates/joblaunch`
- **Surge target:** `joblaunch.free.componentdock.com`

## Design tokens

| Token            | Value                       | Notes                                            |
| ---------------- | --------------------------- | ------------------------------------------------ |
| Brand color      | `#26baee`                   | Cyan/teal blue — primary buttons, links, accents |
| Text primary     | `#25262a`                   | Dark for headings/body                           |
| Text muted       | `#4d4d4d`                   | Medium grey for secondary text                   |
| Background dark  | `#393e46`                   | Dark footer background                           |
| Background light | `#f8f9fa`                   | Light grey sections                              |
| Background alt   | `#e6e7e9`                   | Alternate section bg                             |
| Border light     | `#edf0f5`                   | Subtle borders                                   |
| Font family      | `"Nunito Sans", sans-serif` | Google Font                                      |
| Button primary   | bg `#26baee`, text `#fff`   | Pill/rounded style                               |
| Newsletter bg    | `#26baee` (primary)         | Full-width blue banner                           |

## Section structure (page order)

1. **Header/Navbar** — Brand "JobLaunch" (first part bold), nav: Home, Category dropdown, Blog, About, Contact, "+ Post a Job" (blue badge button)
2. **Hero** — Background image with parallax, headline "Largest Job Site On The Net", tabbed search form (Find A Job / Find A Candidate) with keyword, category, location, Search button
3. **Recent Jobs** — Light bg, "Recent Jobs" heading, "+ Post a Job" button, 9 job items with title/badge/company/location/heart/apply, pagination
4. **Features** — White bg, "Why JobLaunch" heading, 6 feature cards (hexagon icons): Search Millions of Jobs, Location Search, Top Careers, Search Expert Candidates, Easy To Manage Jobs, Online Reviews
5. **Testimonials** — Light bg, "Happy Employers" heading, owl carousel of testimonial cards (avatar, name, role, quote)
6. **Blog** — White bg, "Latest Blog" heading, 4-column blog cards (image, author, date, title, excerpt)
7. **Newsletter** — Blue bg, "Subscribe Newsletter" heading, email input + "Send" button
8. **Footer** — Dark bg, 5 columns: For Candidates, For Employers, Archives, Company, Contact Info, copyright with Component Dock link

## Requirements

### Requirement: Navbar displays brand and navigation

The navbar SHALL show "JobLaunch" as the brand name and navigation links for Home, Category, Blog, About, and Contact, plus a "+ Post a Job" CTA button.

#### Scenario: Navbar renders brand and links

- **WHEN** the user visits the page
- **THEN** the navbar shows "JobLaunch" as the brand
- **AND** it has links: Home, Category, Blog, About, Contact
- **AND** a "+ Post a Job" button is visible

#### Scenario: Category dropdown on hover

- **WHEN** the user hovers over "Category"
- **THEN** a dropdown shows: Full Time, Part Time, Freelance, Internship, Temporary

#### Scenario: Dropdown hides on mouse leave

- **WHEN** the user moves the mouse away from the Category dropdown
- **THEN** the dropdown menu is hidden

### Requirement: Hero section with tabbed search form

The hero SHALL display a headline "Largest Job Site On The Net" with a tabbed search form supporting both job seekers and employers.

#### Scenario: Hero displays headline and tabs

- **WHEN** the user visits the page
- **THEN** a headline "Largest Job Site On The Net" is visible
- **AND** tab pills show "Find A Job" and "Find A Candidate"

#### Scenario: Find A Job tab shows job search form

- **WHEN** the "Find A Job" tab is active
- **THEN** a search form has fields: keyword, category dropdown, location
- **AND** a "Search" button is present

#### Scenario: Tab switching between job and candidate

- **WHEN** the user clicks "Find A Candidate" tab
- **THEN** the "Find A Job" content hides and candidate form shows

### Requirement: Recent Jobs section with listings and pagination

The recent jobs section SHALL display at least 9 job items with type badges, company info, location, favorite button, and apply button, plus pagination controls.

#### Scenario: Job listings display

- **WHEN** the user scrolls to recent jobs
- **THEN** a "Recent Jobs" heading is visible
- **AND** at least 9 job items are rendered
- **AND** each item shows: title, type badge, company, location, heart button, "Apply Job" button

#### Scenario: Job type badges with colors

- **WHEN** the job listings are displayed
- **THEN** badges use colors: blue for Part Time, yellow for Full Time, cyan for Freelance, grey for Internship, red for Temporary

#### Scenario: Pagination controls

- **WHEN** the user scrolls past job items
- **THEN** pagination controls show numbers 1-5 with prev/next arrows

### Requirement: Features section with 6 cards

The features section SHALL display 6 feature cards in a grid, each with an icon, title, and description.

#### Scenario: Features grid displays

- **WHEN** the user scrolls to features
- **THEN** a "Why JobLaunch" heading is visible
- **AND** 6 feature cards are displayed
- **AND** each card has an icon, title, and description
- **AND** titles are: Search Millions of Jobs, Location Search, Top Careers, Search Expert Candidates, Easy To Manage Jobs, Online Reviews

### Requirement: Testimonials section

The testimonials section SHALL display employer testimonials with avatars, names, roles, and quotes.

#### Scenario: Testimonial cards display

- **WHEN** the user scrolls to testimonials
- **THEN** a "Happy Employers" heading is visible
- **AND** testimonial cards show avatar, name, role, and quote

### Requirement: Blog section with cards

The blog section SHALL display 4 blog cards in a grid with images, author info, dates, titles, and excerpts.

#### Scenario: Blog cards display

- **WHEN** the user scrolls to blog
- **THEN** a "Latest Blog" heading is visible
- **AND** 4 blog cards are shown
- **AND** each card has: image, author, date, title, and excerpt

### Requirement: Newsletter subscription form

The newsletter section SHALL display a subscription form with email input and send button on a blue background.

#### Scenario: Newsletter form renders

- **WHEN** the user scrolls to newsletter
- **THEN** a "Subscribe Newsletter" heading is on a blue background
- **AND** an email input and "Send" button are present

### Requirement: Footer with columns and Component Dock link

The footer SHALL display 5 columns of links, contact information, and a copyright line linking to Component Dock.

#### Scenario: Footer content

- **WHEN** the user scrolls to the bottom
- **THEN** the footer shows columns: For Candidates, For Employers, Archives, Company, Contact Info
- **AND** contact info shows address, telephone, email
- **AND** a copyright line links to https://www.componentdock.com/

## Verification checklist

- [x] All sections match original structure and order (1:1)
- [x] Brand color `#26baee` used for buttons, links, accents
- [x] Font "Nunito Sans" loaded via Google Fonts
- [x] Hero has tabbed search form with two tabs
- [x] Recent Jobs shows 9+ items with colored type badges
- [x] Features section has 6 cards with icons
- [x] Testimonial cards with avatars
- [x] Blog section shows 4 cards
- [x] Newsletter on blue background
- [x] Footer links to Component Dock
- [x] No references to ColorLib in app code
- [x] Placeholder images via picsum.photos
- [x] Responsive: mobile hamburger, stacked layout
- [x] Tests: 100% coverage
- [x] TypeCheck, Lint, Build pass
