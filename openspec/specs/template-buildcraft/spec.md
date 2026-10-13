# Template: BuildCraft (Construction)

## Purpose

Recreation of ColorLib "Celt" free construction website template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template**: [ColorLib Celt](https://colorlib.com/wp/template/celt/)
- **Live preview**: https://preview.colorlib.com/theme/celt/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/celt-construction-company-website-template.jpg
- **New name**: `buildcraft` (app folder `apps/buildcraft`, package `@free-react-templates/buildcraft`)

## Design Tokens

Extracted from the live preview CSS (`style.css`) and rendered HTML:

| Token                | Value                     | Notes                                        |
| -------------------- | ------------------------- | -------------------------------------------- |
| Font family          | `Poppins`, sans-serif     | Primary typeface, Google Fonts               |
| Brand color (yellow) | `#ffd626`                 | CTAs, accents, highlights (31 occurrences)   |
| Dark bg (navy)       | `#004`                    | Hero overlay, dark sections (28 occurrences) |
| Darker navy          | `#001232`                 | Footer, deep dark backgrounds                |
| Text muted           | `#64728a`                 | Subtext, secondary content                   |
| Light bg             | `#eee`, `#f8f8f8`         | Alternating section backgrounds              |
| White                | `#ffffff`                 | Text on dark backgrounds, cards              |
| Button radius        | None (square/rectangular) | Default Bootstrap or minimal radius          |

## Visual Design Notes

- Dark navy (#004) hero with large "We Build Your Dream" heading and yellow (#ffd626) accents
- Bright yellow brand color used extensively for CTAs, counters, hover states
- Three-column feature cards below hero (Certified Experience, Teamwork, Technology)
- Stats counter strip with animated numbers
- Featured Works portfolio grid (4 items)
- Six service cards with icons
- Accordion "Why Choose Us" section with expandable items + Contact Us CTA
- Client testimonials carousel
- Latest News blog cards (3 items)
- Footer: dark navy background, contact info, links

## Requirements

### Feature: BuildCraft Template

Feature: BuildCraft - Construction Company Website
As a visitor to BuildCraft
I want to see a professional construction company website
So that I can learn about services and contact the company

Background:
- **GIVEN** the user navigates to the BuildCraft homepage

**--- Navbar ---**

#### Scenario: Navbar displays correctly

- **THEN** the navbar is visible at the top of the page
- **AND** the brand name "BuildCraft" is displayed
- **AND** the navigation links include "Home", "About", "Projects", "Services", "Blog", and "Contact"
- **AND** the navbar has a dark background

#### Scenario: Navbar scrolls to sections

- **WHEN** the user clicks "Services" in the navbar
- **THEN** the page scrolls to the Services section
- **WHEN** the user clicks "Contact" in the navbar
- **THEN** the page scrolls to the Contact section

**--- Hero Section ---**

#### Scenario: Hero section displays correctly

- **THEN** the hero section is displayed
- **AND** the heading shows "We Build Your Dream"
- **AND** there is a description paragraph
- **AND** there is a "Learn more" button

**--- Features Section ---**

#### Scenario: Features section shows three items

- **THEN** the features section displays 3 feature cards
- **AND** each card has an icon, title, description, and "Read more" link

Scenario Outline: Feature cards display correct titles
- **GIVEN** the features section is visible
- **THEN** the <position> feature card shows title "<title>"

Examples:
| position | title                |
| 1st      | Certified Experience |
| 2nd      | The Great Teamwork   |
| 3rd      | Modern Technology    |

**--- About Section ---**

#### Scenario: About section displays correctly

- **THEN** the "About Us" section is visible
- **AND** it shows a subtitle "Subtitle"
- **AND** it has descriptive body text about the company

#### Scenario: Stats counter displays correctly

- **THEN** the stats section shows 4 counter items
- **AND** each stat shows a numeric value and label
- **AND** the stat labels are "Year Of Experience", "Project Completed", "Happy Client", "Award Won"

**--- Portfolio Section ---**

#### Scenario: Featured Works section displays correctly

- **THEN** the "Featured Works" section is visible
- **AND** 4 project cards are displayed
- **AND** each card shows a project title and category
- **AND** there is a "View All" link

**--- Services Section ---**

#### Scenario: Services section lists all services

- **THEN** the "Our Services" section is visible
- **AND** 6 service items are displayed

Scenario Outline: Each service card renders correctly
- **GIVEN** the services section is visible
- **THEN** the service "<name>" shows a description and "Read more" link

Examples:
| name          |
| Construction  |
| Renovation    |
| Architecture  |
| Painting      |
| Decorating    |
| Consulting    |

**--- Why Choose Us Section ---**

#### Scenario: Why Choose Us section displays correctly

- **THEN** the "Why Choose Us" section is visible
- **AND** it has descriptive body text
- **AND** an accordion with expandable items is displayed
- **AND** a "Contact Us" CTA button is visible

#### Scenario: Accordion items expand on click

- **GIVEN** the Why Choose Us section is visible
- **WHEN** the user clicks the first accordion item
- **THEN** the first accordion item expands to show its content

**--- Testimonials Section ---**

#### Scenario: Happy Clients section displays correctly

- **THEN** the "Happy Clients" section is visible
- **AND** at least 3 testimonial items are displayed
- **AND** each testimonial shows a quote, client name, and role

**--- Blog Section ---**

#### Scenario: Latest News section shows blog posts

- **THEN** the "Lastest News" section is visible
- **AND** 3 blog post cards are displayed
- **AND** each card shows a title, date, author, excerpt, and "Read more" link

**--- Footer ---**

#### Scenario: Footer renders correctly

- **THEN** the footer is visible at the bottom of the page
- **AND** the footer shows contact information including address, phone, and email
- **AND** the footer has a "Contact Us" button
- **AND** the footer links to https://www.componentdock.com/

**--- Responsive ---**

#### Scenario: Page is responsive on mobile

- **GIVEN** the user views the page on a 375px wide viewport
- **THEN** the navbar collapses into a hamburger menu
- **AND** the hero section is full-width
- **AND** feature cards stack vertically
- **AND** service cards stack vertically
- **AND** project grid adjusts to fewer columns

## Verification Checklist

- [ ] All 10 sections present in correct order (Navbar → Hero → Features → About/Stats → Portfolio → Services → Why Choose Us → Testimonials → Blog → Footer)
- [ ] Brand color `#ffd626` used for CTAs and accents (via Tailwind theme token)
- [ ] Dark navy `#004` for hero and dark section backgrounds
- [ ] Font Poppins loaded via Google Fonts link in index.html
- [ ] 3 feature cards with icon + title + description + "Read more"
- [ ] 4 stats counter items with numbers
- [ ] 4 portfolio project cards
- [ ] 6 service cards with icon + title + description + "Read more"
- [ ] Accordion with expandable items (aria-expanded, keyboard accessible)
- [ ] Testimonial carousel with 3+ items
- [ ] 3 blog post cards with date, author, excerpt
- [ ] Footer with contact info and Component Dock link
- [ ] Responsive layout (mobile hamburger, stacked grids)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] All `picsum.photos` placeholder images used (deterministic seeds)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `npm run verify:app buildcraft` passes
