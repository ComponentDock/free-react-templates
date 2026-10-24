# Template: JobLane (Job Board)
<!-- prep-status: shipped-as=jobnest -->
> **SHIPPED-UNDER** — the ColorLib `job-board-2` design this prep describes already
> ships as `apps/jobnest` (<https://jobnest.free.componentdock.com>).
> Do not scaffold `apps/joblane`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-jobnest/spec.md`.

## Purpose

Recreation of ColorLib "Job Board 2" (slug: `jobboard2`).
Preview: https://preview.colorlib.com/theme/jobboard2/
Source: https://colorlib.com/wp/template/job-board-2/

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
New name: **joblane** (`apps/joblane`, package `@free-react-templates/joblane`)

## Design tokens

Extracted from `https://preview.colorlib.com/theme/jobboard2/css/style.css`.

| Token | Value | Usage |
|-------|-------|-------|
| brand-primary | `#00D363` | CTA buttons (boxed-btn3), link hover, candidate position badge |
| brand-secondary | `#2B9BFF` | Job search CTA section background |
| brand-secondary-dark | `#0A8CFF` | Overlay on search CTA section |
| footer-bg | `#001D38` | Footer background (dark navy) |
| body-bg | `#F5F7FA` | Featured candidates + top companies sections (light grey) |
| candidate-quote | `#FD8E5E` | Testimonial quote icon background (orange) |
| owl-nav-bg | `#E6F3FF` | Carousel navigation pill background |
| owl-nav-hover | `#7FC1FC` | Carousel navigation pill hover |
| text-dark | `#040E27` | Body text, testimonial paragraph |
| text-heading | `#131313` | Button text, heading links |
| text-subtle | `#7A838B` | Subtitle text, testimonial attribution |
| text-muted | `#7e7e7e` | Generic muted text |
| white | `#ffffff` | Card backgrounds |
| font-family | `"Roboto", sans-serif` | All text |
| button-radius | `5px` | CTA buttons and cards |
| avatar-radius | `50%` | Candidate/testimonial circular images |

## Requirements

### Feature: JobLane template behaviour

#### Scenario: JobLane template behaviour

Order matches the live preview DOM exactly.

### 1. Navbar

Sticky header on white background. Logo left, nav links center (Home, Browse Job, Pages, Blog, Contact), right side has "Log in" text link and green "Post a Job" CTA button. Mobile: hamburger menu.

#### Scenario: Navbar displays on page load

- **GIVEN** I visit the joblane homepage
- **THEN** I see a sticky navbar with logo, navigation links, and "Post a Job" CTA
- **AND** the "Log in" text link is visible in the navbar

#### Scenario: Navbar is responsive

- **GIVEN** I visit on a mobile viewport
- **THEN** the hamburger menu icon is visible
- **AND** the desktop nav links are hidden

### 2. Hero section

Full-width banner with blue background image. Left side: "4536+ Jobs listed" subtitle, "Find your Dream Job" heading, description text, "Upload Your Resume" green CTA button. Right side: illustration image of people at desks.

#### Scenario: Hero displays job statistics and CTA

- **GIVEN** I visit the joblane homepage
- **THEN** I see the heading "Find your Dream Job"
- **AND** I see a stat line like "4536+ Jobs listed"
- **AND** I see an "Upload Your Resume" button

#### Scenario: Hero has illustration on desktop

- **GIVEN** I visit on a desktop viewport
- **THEN** I see an illustration image on the right side of the hero

### 3. Category search area

White background section with a 4-column search form: keyword input, location dropdown, category dropdown, green "Find Job" button. Below: "Popular Search:" with tag links (Design & Creative, Marketing, Administration, etc.).

#### Scenario: Search form renders all fields

- **GIVEN** I visit the joblane homepage
- **THEN** I see a search input for keyword
- **AND** I see a location dropdown
- **AND** I see a category dropdown
- **AND** I see a "Find Job" green button

#### Scenario: Popular search tags display

- **GIVEN** I visit the joblane homepage
- **THEN** I see "Popular Search:" label
- **AND** I see clickable tag links for popular categories

### 4. Popular Categories

Section title "Popolar Categories" (note: original has typo). 8 category cards in a 4-column grid. Each card: category name heading, position count badge, "Available position" label. Cards are white with 5px border-radius, light border, hover transition.

#### Scenario: Category grid displays 8 categories

- **GIVEN** I visit the joblane homepage
- **THEN** I see a "Popular Categories" section
- **AND** there are exactly 8 category cards
- **AND** each card shows a category name, position count, and "Available position"

#### Scenario: Category cards are styled consistently

- **GIVEN** I view a category card
- **THEN** it has a white background with rounded corners
- **AND** the position count is displayed in a colored badge

### 5. Job Listing

Section title "Job Listing" on left, "Browse More Job" outlined button on right. Below: list of job cards, each with company icon (SVG), job title, location (map marker icon), employment type (clock icon), "Apply Now" green button, heart/favorite icon, and deadline date. Cards have white background.

#### Scenario: Job listing section displays job cards

- **GIVEN** I visit the joblane homepage
- **THEN** I see a "Job Listing" heading
- **AND** I see multiple job cards each with a title, location, type, and "Apply Now" button

#### Scenario: Each job card shows metadata

- **GIVEN** I view a job card
- **THEN** I see a company icon thumbnail
- **AND** I see location and employment type with icons
- **AND** I see a deadline date
- **AND** I see a heart/favorite icon

#### Scenario: Browse More Job link is present

- **GIVEN** I visit the joblane homepage
- **THEN** I see a "Browse More Job" outlined button in the job listing section

### 6. Featured Candidates

Light grey background (#F5F7FA). Section title centered. Owl-carousel of candidate cards, each with circular avatar image, candidate name, and role title. White card with 5px border-radius.

#### Scenario: Featured candidates carousel renders

- **GIVEN** I visit the joblane homepage
- **THEN** I see a "Featured Candidates" section
- **AND** I see circular candidate avatar images
- **AND** each candidate has a name and role

#### Scenario: Candidate cards have consistent styling

- **GIVEN** I view a candidate card
- **THEN** it has a white background with rounded corners
- **AND** the avatar is displayed as a circle

### 7. Top Companies

Light grey background. Section title on left, "Browse More Job" outlined button on right. 4-column grid of company cards with company icon, company name, and available position count. White cards with 5px border-radius.

#### Scenario: Top companies grid displays 4 companies

- **GIVEN** I visit the joblane homepage
- **THEN** I see a "Top Companies" section
- **AND** there are 4 company cards
- **AND** each card shows a company icon, name, and position count

### 8. Job Search CTA

Blue background section (#2B9BFF) with semi-transparent overlay (#0A8CFF, 0.8 opacity). Two columns: "Looking for a Job?" with "Browse Job" button, and "Looking for a Expert?" with "Post a Job" button. Text is white.

#### Scenario: Job search CTA section displays dual calls to action

- **GIVEN** I visit the joblane homepage
- **THEN** I see a blue background section with two CTA blocks
- **AND** one says "Looking for a Job?" with a "Browse Job" button
- **AND** the other says "Looking for a Expert?" with a "Post a Job" button

### 9. Testimonials

White background, 100px vertical padding. Carousel of testimonial cards, each with circular avatar image, orange quote icon overlay, testimonial paragraph text, and attribution name.

#### Scenario: Testimonials carousel renders

- **GIVEN** I visit the joblane homepage
- **THEN** I see a "Testimonial" section
- **AND** I see circular author avatars
- **AND** each testimonial has a quote and attribution

#### Scenario: Testimonials have consistent styling

- **GIVEN** I view a testimonial
- **THEN** it displays a circular avatar with an orange quote icon overlay
- **AND** the testimonial text is displayed beside the avatar

### 10. Footer

Dark navy background (#001D38). 4-column layout: logo + contact info + social links, Company links, Category links, Newsletter subscribe form. Below: copyright text with "Component Dock" link (replacing original Colorlib attribution).

#### Scenario: Footer displays four content columns

- **GIVEN** I scroll to the bottom of the joblane homepage
- **THEN** I see a dark background footer
- **AND** I see a logo column with contact info and social icons
- **AND** I see a Company links column
- **AND** I see a Category links column
- **AND** I see a Newsletter subscribe form

#### Scenario: Footer links to Component Dock

- **GIVEN** I view the footer copyright
- **THEN** I see a link to https://www.componentdock.com/
- **AND** the link text says "Component Dock"

## Verification checklist

- [ ] All 10 sections present in correct order
- [ ] Design tokens match reference (green #00D363 CTAs, Roboto font, 5px radius)
- [ ] Hero illustration on right side (desktop)
- [ ] Category search form with 3 inputs + button
- [ ] 8 popular category cards in grid
- [ ] Job listing with 6 job cards showing all metadata
- [ ] Featured candidates carousel with circular avatars
- [ ] Top companies 4-column grid
- [ ] Blue CTA section with two call-to-action blocks
- [ ] Testimonial carousel with quote styling
- [ ] Dark navy footer with 4 columns
- [ ] Footer links to Component Dock
- [ ] Responsive: mobile hamburger, stacked layouts
- [ ] No Colorlib references in app code
- [ ] public/CNAME = `joblane.free.componentdock.com`
- [ ] homepage = `https://joblane.free.componentdock.com`
