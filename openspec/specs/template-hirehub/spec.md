# Template: HireHub (Job Board / Career Platform)

## Purpose

Recreation of ColorLib "Jobfinder" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application. The original is a job board / career platform landing page with a hero search form, popular categories grid, recent jobs listing with featured jobs carousel, testimonial section, CTA banner, features grid, blog carousel, and footer.

- **ColorLib source:** https://colorlib.com/wp/template/jobfinder/
- **Live preview:** https://preview.colorlib.com/theme/jobfinder/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/jobfinder-free-template.jpg (AVIF format)
- **New name:** `hirehub` (apps/hirehub, @free-react-templates/hirehub)
- **Deploy target:** https://hirehub.free.componentdock.com

## Section Structure (order from live preview)

1. **Navbar** — sticky white bar with "JobFinder" logo, nav links (For Candidates, For Employees dropdown, Contact), and "Post New Job" green pill button
2. **Hero Cover** — full-width background image with dark overlay, headline "Find Job", search form (job title input + location input + Search button), category links below
3. **Popular Categories** — 8 category cards in 4-col grid, each with icon + name + job count
4. **Recent Jobs + Featured Jobs** — two-column: left is a bordered list of 4 job items (logo, title, company, location, salary, badge), right is a carousel of featured job cards
5. **Testimonies** — split: left is an image with play overlay, right is a quote with attribution
6. **CTA Banner** — full-width background image with overlay, "Your Dream Job / Is Waiting For You" heading, Find Jobs + Apply For A Job buttons
7. **Why Choose Us** — 2x2 grid of feature items with icons, titles, descriptions, and "Read More" links
8. **Recent Blog** — carousel of blog cards with image, title, date/author, and excerpt
9. **Footer** — dark background, 4-column layout: About (text + Read More), Quick Menu, Categories, Social Icons, copyright with Component Dock attribution

## Design Tokens (from live preview CSS analysis)

### Colors

| Token               | Hex                | Usage                                                                |
| ------------------- | ------------------ | -------------------------------------------------------------------- |
| brand-primary       | `#28a745`          | Navbar logo, primary buttons, search button, category icons, links  |
| brand-primary-hover | `#23923d`          | Button hover state                                                   |
| accent-info         | `#26baee`          | Full-time job item left border, text-info badge                      |
| accent-warning      | `#f8b500`          | Freelance job item left border, text-warning badge                   |
| accent-danger       | `#f23a2e`          | Part-time job item left border, text-danger badge                    |
| text-dark           | `#25262a`          | Headings, logo bold text                                             |
| text-body           | `#212529`          | Default body text                                                    |
| text-muted          | `rgba(0,0,0,0.5)`  | Secondary text, post dates, copyright                                |
| bg-white            | `#fff`             | Navbar, job cards, featured job cards                                |
| bg-light            | `#f8f9fa`          | Site sections (categories, features), navbar background              |
| bg-dark             | `#0d0d0d`          | Footer background                                                    |
| overlay-hero        | `rgba(0,0,0,0.4)`  | Hero and CTA section overlay on background images                    |
| border-color        | `#ced4da`          | Job list items, featured cards, form inputs                          |

### Typography

| Token        | Font Family                                         | Usage                            |
| ------------ | --------------------------------------------------- | -------------------------------- |
| body-font    | "Work Sans", -apple-system, BlinkMacSystemFont, ... | All body text, headings, buttons |
| heading-font | "Amatic SC" (700)                                   | Hero h1 "Find Job" display text  |
| mono-font    | "Roboto Mono", SFMono-Regular, ...                  | Code/mono usage (minimal)        |

### Buttons

| Style              | Shape                           | Usage                         |
| ------------------ | ------------------------------- | ----------------------------- |
| Primary (solid)    | `rounded` (4px), `pill` (30px)  | Search, Post New Job, CTAs    |
| Outline warning    | `rounded`, border `#ffc107`     | "Find Jobs" in CTA banner     |
| Solid warning      | `rounded`, bg `#ffc107`         | "Apply For A Job" in CTA      |

### Section Backgrounds

| Section              | Background                                       |
| -------------------- | ------------------------------------------------ |
| Navbar               | White (`#fff`) with `bg-light` inner bar         |
| Hero                 | `images/hero_1.jpg` + `rgba(0,0,0,0.4)` overlay |
| Popular Categories   | White (default)                                  |
| Recent Jobs          | Light (`bg-light` / `#f8f9fa`)                  |
| Testimonies          | White (default)                                  |
| CTA Banner           | `images/hero_1.jpg` + `rgba(0,0,0,0.4)` overlay |
| Why Choose Us        | Light (`bg-light`)                               |
| Recent Blog          | White (default)                                  |
| Footer               | Dark (`#0d0d0d`)                                 |

## Requirements

### Requirement: Navbar renders correctly

The navbar displays the HireHub logo, navigation links, and a Post New Job button.

#### Scenario: Navbar elements are visible

- **WHEN** the user visits the HireHub landing page
- **THEN** the navbar is visible with the "HireHub" logo (bold suffix)
- **AND** navigation links "For Candidates", "For Employees" (with dropdown), and "Contact" are displayed
- **AND** a "Post New Job" green pill button is visible on the right

#### Scenario: Mobile hamburger menu toggles

- **WHEN** the user clicks the hamburger menu icon on mobile
- **THEN** the mobile menu opens showing all navigation links
- **AND** clicking a link closes the menu

#### Scenario: For Employees dropdown works

- **WHEN** the user hovers over or clicks "For Employees"
- **THEN** a dropdown menu appears with sub-links (Category, Browse Candidates, Post a Job, Employer Profile)
- **AND** the dropdown has an arrow indicator

### Requirement: Hero search form is interactive

The hero section displays a full-width background image with an overlay, the heading "Find Job", and a search form.

#### Scenario: Hero displays correctly

- **WHEN** the user sees the hero section
- **THEN** a background image with dark overlay is shown
- **AND** the heading "Find Job" is displayed in large display text
- **AND** a search form with two inputs (job title, location) and a Search button is visible
- **AND** "or browse by category" links are shown below the form

#### Scenario: Search form submission is handled

- **WHEN** the user fills in the search fields and clicks Search
- **THEN** the form submission is handled without page reload

### Requirement: Popular Categories section displays

The categories section shows 8 job category cards in a responsive grid.

#### Scenario: Category cards are displayed

- **WHEN** the user scrolls to the Popular Categories section
- **THEN** a "Popular Categories" heading is shown
- **AND** 8 category cards are displayed in a 4-column grid
- **AND** each card has an icon, category name, and job count number

#### Scenario: Category cards are interactive

- **WHEN** the user hovers over a category card
- **THEN** the card shows a hover effect (border or background change)

### Requirement: Recent Jobs listing renders correctly

The recent jobs section displays a list of job items on the left and a featured jobs carousel on the right.

#### Scenario: Job items are displayed

- **WHEN** the user views the Recent Jobs section
- **THEN** at least 4 job listing items are shown
- **AND** each item displays a company logo, job title, company name, location, salary range, and a category badge (Full Time / Freelance / Part Time)
- **AND** each item has a colored left border based on job type (blue for Full Time, yellow for Freelance, red for Part Time)

#### Scenario: Show More Jobs button is visible

- **WHEN** the user views the job listings
- **THEN** a "Show More Jobs" button is displayed below the list

#### Scenario: Featured Jobs carousel works

- **WHEN** the user views the Featured Jobs sidebar
- **THEN** a carousel of featured job cards is displayed
- **AND** Prev/Next navigation controls are visible
- **AND** each card shows job title, category badge, company, location, salary, and a description

### Requirement: Testimonies section renders correctly

The testimonies section shows a video/image on the left and a quote on the right.

#### Scenario: Testimony content is visible

- **WHEN** the user scrolls to the Testimonies section
- **THEN** a heading "Testimonies" is displayed
- **AND** an image with a play button overlay is shown on the left
- **AND** a testimonial quote with attribution (name + role) is shown on the right
- **AND** a "Watch Video" link is present

### Requirement: CTA banner displays correctly

The CTA section is a full-width banner with a background image and overlay.

#### Scenario: CTA elements are visible

- **WHEN** the user scrolls to the CTA section
- **THEN** "Your Dream Job" and "Is Waiting For You" headings are displayed
- **AND** a "Find Jobs" outline button and an "Apply For A Job" solid button are visible

### Requirement: Why Choose Us section renders correctly

The features section displays a 2x2 grid of feature items.

#### Scenario: Feature items are displayed

- **WHEN** the user scrolls to the Why Choose Us section
- **THEN** a "Why Choose Us" heading is shown
- **AND** 4 feature items are displayed in a 2x2 grid
- **AND** each item has an icon, title, description, and "Read More" link

### Requirement: Recent Blog carousel works

The blog section displays a carousel of blog post cards.

#### Scenario: Blog cards are displayed

- **WHEN** the user scrolls to the Recent Blog section
- **THEN** a "Recent Blog" heading is shown
- **AND** a carousel of blog cards is displayed
- **AND** each card has an image, title, date/author, and excerpt text

### Requirement: Footer renders correctly

The footer has a dark background with multiple columns and copyright.

#### Scenario: Footer links and attribution

- **WHEN** the user views the footer
- **THEN** columns for About, Quick Menu, Categories, and Social Icons are displayed
- **AND** social media icon links are visible
- **AND** a Component Dock attribution link to componentdock.com is present
- **AND** the copyright line shows the current year

## Visual Design Notes (from screenshot analysis)

The original ColorLib screenshot (AVIF format, source unavailable for direct vision analysis) shows a clean, professional job board design:

- **Overall aesthetic:** Clean, professional job board with a green (`#28a745`) brand accent on white/light backgrounds. The hero has a full-bleed photo with dark overlay.
- **Typography:** "Amatic SC" for the hero display text (handwritten style), "Work Sans" for everything else — clean, modern sans-serif.
- **Layout:** Standard Bootstrap grid, 12-column. Sections alternate between white and light gray backgrounds.
- **Job items:** White cards with subtle borders, colored left accent border per job type (blue/yellow/red).
- **Buttons:** Green primary with rounded corners; the "Post New Job" button in the navbar is a pill-shaped (30px radius) green button.
- **Footer:** Dark (`#0d0d0d`) with white text and green links.

## Verification Checklist

- [ ] Navbar: logo, links, dropdown, mobile menu, Post New Job button
- [ ] Hero: background image + overlay, "Find Job" heading, search form (2 inputs + button), category links
- [ ] Popular Categories: 8 cards in 4-col grid, icons, names, counts
- [ ] Recent Jobs: 4+ job items with logo/title/company/location/salary/badge, colored left borders
- [ ] Featured Jobs: carousel with Prev/Next, job cards
- [ ] Show More Jobs button
- [ ] Testimonies: image with play button, quote, attribution, Watch Video link
- [ ] CTA Banner: background image + overlay, headings, two buttons
- [ ] Why Choose Us: 2x2 grid, 4 feature items with icons
- [ ] Recent Blog: carousel of blog cards
- [ ] Footer: dark bg, 4 columns, social icons, Component Dock link, copyright
- [ ] Responsive: mobile hamburger menu, stacked layouts on small screens
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md/PR)
