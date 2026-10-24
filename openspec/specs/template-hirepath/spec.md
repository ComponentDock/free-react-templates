# Template: HirePath (Job Board / Careers)
<!-- prep-status: shipped-as=jobquest -->
> **SHIPPED-UNDER** — the ColorLib `careers` design this prep describes already
> ships as `apps/jobquest` (<https://jobquest.free.componentdock.com>).
> Do not scaffold `apps/hirepath`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-jobquest/spec.md`.

## Purpose

Recreation of the ColorLib **Careers** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source slug**: `careers`
- **ColorLib page**: https://colorlib.com/wp/template/careers/
- **Preview URL**: https://preview.colorlib.com/theme/careers/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/careers-free-template.jpg
- **New name**: `hirepath`
- **App folder**: `apps/hirepath`
- **Package**: `@free-react-templates/hirepath`

## Design tokens (extracted from preview CSS)

| Token                      | Value                          | Usage                                |
| -------------------------- | ------------------------------ | ------------------------------------ |
| Primary brand color        | `#1644ba`                      | Buttons, links, overlay tint         |
| Primary hover              | `#1747c3`                      | Button/link hover                    |
| Overlay tint               | `rgba(22, 68, 186, 0.9)`       | Hero/statistics/CTA section overlays |
| Body text                  | `#7f848c`                      | Body paragraphs, muted text          |
| Heading text               | `#212529`                      | Headings, strong text                |
| Footer background          | `#242424`                      | Footer dark section                  |
| Footer link text           | `rgba(255, 255, 255, 0.5)`     | Footer links default                 |
| Footer link hover          | `#fff`                         | Footer links hover                   |
| Form input bg              | `#ebeef0`                      | Search form inputs                   |
| Button warning (CTA)       | Bootstrap warning class        | "Sign Up" CTA button                 |
| Badge primary              | `#1644ba` background           | "Freelancer" badge                   |
| Badge warning              | Bootstrap warning              | "Full-time" badge                    |
| Font family                | `"Nunito", sans-serif`         | Body and headings                    |
| Border radius (buttons)    | `0.3rem`                       | Buttons and form elements            |
| Section spacing            | `py-5` / `7rem` footer padding | Vertical rhythm                      |
| Background: statistics/CTA | hero image with blue overlay   | Parallax-style sections              |
| Background: testimonials   | `#f8f9fa` (bg-light)           | Light gray testimonial carousel      |
| Background: job listings   | `#fff`                         | White section                        |
| Background: company logos  | white, top border              | `site-section py-4 mb-5 border-top`  |

## Section structure (order from preview DOM)

1. **Navbar** — sticky top, logo "HirePath", nav links (Home, Job Listings, About, Services, Blog), Contact Us CTA button (primary blue). Mobile hamburger menu.
2. **Hero** — full-width background image with dark/blue overlay, centered headline "A Powerful Career Website Template", subtitle, 4-column search form: job title text input, location select, category select, "Search Job" primary button (full-width on mobile).
3. **Statistics** — blue overlay on background image, title "Careers Statistics", subtitle, 4-column animated counters (Candidates: 1930, Jobs Posted: 54, Jobs Filled: 120, Companies: 550).
4. **Job Listings** — white background, title "109,234 Job Listed", list of job cards each with: thumbnail image, badge (type), job title link, publisher + category meta, location (city + country), salary range. Cards separated by bottom borders.
5. **Company Logos** — white background with top border, title "Our Candidates Work In Company", subtitle, 4-column logo grid (placeholder images).
6. **Testimonials** — light gray background, carousel with person images and blockquotes with cite attribution.
7. **CTA Banner** — blue overlay on background image, "Looking For A Job?" headline, subtitle, yellow "Sign Up" button aligned right.
8. **Footer** — dark background (#242424), 4-column layout: Search Trending links, Company links, Support links, Contact Us with social icons (Facebook, Twitter, Instagram, LinkedIn). Copyright line with "Made with Component Dock" link.

## Requirements

### Navbar

Feature: HirePath Navbar

#### Scenario: Desktop navbar displays logo and nav links

- **GIVEN** the user views the page on a desktop viewport
- **THEN** the logo "HirePath" is visible on the left
- **AND** the nav links "Home", "Job Listings", "About", "Services", "Blog" are visible
- **AND** a "Contact Us" button is visible on the right

#### Scenario: Mobile hamburger menu toggles navigation

- **GIVEN** the user views the page on a mobile viewport
- **WHEN** the user taps the hamburger menu icon
- **THEN** the mobile navigation menu expands
- **AND** all nav links are visible in the menu

### Hero section

Feature: HirePath Hero

#### Scenario: Hero displays headline and search form

- **GIVEN** the hero section is visible
- **THEN** the headline "A Powerful Career Website Template" is displayed
- **AND** a subtitle describing the platform is shown
- **AND** a 4-column search form is visible with:
| field | type |
| Job title | text input |
| Location | select dropdown |
| Category | select dropdown |
| Search | primary button |

#### Scenario: Search form is responsive

- **GIVEN** the user views the page on a mobile viewport
- **THEN** the search form fields stack vertically
- **AND** the "Search Job" button spans full width

### Statistics section

Feature: HirePath Statistics

#### Scenario: Statistics counters display correctly

- **GIVEN** the statistics section scrolls into view
- **THEN** 4 counter items are displayed in a row:
| label | target value |
| Candidates | 1930 |
| Jobs Posted | 54 |
| Jobs Filled | 120 |
| Companies | 550 |
- **AND** the section has a blue overlay background

#### Scenario: Statistics section is responsive

- **GIVEN** the user views on a mobile viewport
- **THEN** the counters display in a 2x2 grid

### Job Listings section

Feature: HirePath Job Listings

#### Scenario: Job listings display with heading and job cards

- **GIVEN** the job listings section is visible
- **THEN** the heading "109,234 Job Listed" is displayed
- **AND** at least 3 job cards are shown
- **AND** each job card contains:
| element | description |
| thumbnail | placeholder image |
| badge | job type (Freelancer, Full-time, etc.) |
| title | clickable job title |
| meta | publisher name and category |
| location | city and country |
| salary | salary range text |

#### Scenario: Job cards are separated by borders

- **GIVEN** multiple job cards are displayed
- **THEN** each card has a bottom border separating it from the next

### Company Logos section

Feature: HirePath Company Logos

#### Scenario: Company logos section displays correctly

- **GIVEN** the company logos section is visible
- **THEN** the heading "Our Candidates Work In Company" is displayed
- **AND** a subtitle paragraph is shown
- **AND** 4 placeholder logo images are displayed in a row

### Testimonials section

Feature: HirePath Testimonials

#### Scenario: Testimonials carousel displays testimonials

- **GIVEN** the testimonials section is visible
- **THEN** the section has a light gray background
- **AND** at least 2 testimonial items are available in the carousel
- **AND** each testimonial shows a person image and a blockquote
- **AND** each blockquote includes a cite with the person's name

### CTA Banner section

Feature: HirePath CTA Banner

#### Scenario: CTA banner displays with action button

- **GIVEN** the CTA banner section is visible
- **THEN** the heading "Looking For A Job?" is displayed
- **AND** a subtitle text is shown
- **AND** a yellow "Sign Up" button is visible
- **AND** the section has a blue overlay background

### Footer

Feature: HirePath Footer

#### Scenario: Footer displays four columns with links

- **GIVEN** the footer is visible
- **THEN** the footer has a dark background
- **AND** 4 link columns are displayed:
| column | heading |
| Search Trending | Web Design, Graphic Design, Web Developers, Python, HTML5, CSS3 |
| Company | About Us, Career, Blog, Resources |
| Support | Support, Privacy, Terms of Service |
| Contact Us | Social media icons (Facebook, Twitter, Instagram, LinkedIn) |
- **AND** a copyright line with "Made with Component Dock" linking to componentdock.com is shown

## Verification checklist

- [ ] All 8 sections present in correct order
- [ ] Navbar: logo, 5 nav links, Contact Us button, mobile hamburger
- [ ] Hero: headline, subtitle, 4-column search form with inputs/select/button
- [ ] Statistics: 4 animated counters with labels, blue overlay background
- [ ] Job Listings: heading, 3+ job cards with image/badge/title/meta/location/salary
- [ ] Company Logos: heading, subtitle, 4 placeholder logos
- [ ] Testimonials: light background, carousel with 2+ testimonials (image + blockquote + cite)
- [ ] CTA Banner: heading, subtitle, yellow Sign Up button, blue overlay
- [ ] Footer: 4 link columns, social icons, copyright with Component Dock link
- [ ] Responsive: all sections adapt to mobile (stacked layout, hamburger menu)
- [ ] Design tokens: Nunito font, #1644ba primary, #242424 footer, 0.3rem radius
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Footer links to componentdock.com
