# Template: Civicore (Job Board)

Recreation of ColorLib "Comport" (https://colorlib.com/wp/template/comport/).
Preview: https://preview.colorlib.com/theme/comport/

## Purpose

Civicore is a job board template with a navbar, hero, search bar, feature cards, categories, jobs, newsletter, testimonials, news and download. It recreates the ColorLib **Comport** design (https://colorlib.com/wp/template/comport/, preview: https://preview.colorlib.com/theme/comport/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens (extracted from css/style.css)

| Token            | Value                                          | Usage                          |
| ---------------- | ---------------------------------------------- | ------------------------------ |
| Brand orange     | #ff9902                                        | Primary buttons, accents, tabs |
| Dark navy        | #04091e                                        | Footer background              |
| Heading text     | #222                                           | All headings (h1–h6)           |
| Body text        | #777                                           | Paragraphs, muted text         |
| Light background | #f9f9f9                                        | Section backgrounds, card bg   |
| Blue badge       | #00afed                                        | Full-time job badge            |
| Teal badge       | #0088cc                                        | Part-time job badge            |
| Green badge      | #2dc100                                        | Intern job badge               |
| Font headings    | Poppins                                        | h1–h4, buttons                 |
| Font body        | Open Sans                                      | Paragraphs, nav, form elements |
| Button radius    | 3px                                            | All CTA buttons                |
| Button style     | Uppercase, 14px, weight 600, 15px 30px padding | Primary CTA                    |

## Section Structure (in order)

1. **Navbar** — Logo "Civicore" + navigation links (Home, About, Categories, Jobs, Blog, Contact) + Login text link + "Sign Up" button
2. **Hero** — Split: left = background image, right = heading "Find Your Dream Job with Civicore" (job highlighted in brand orange) + description + "Explore Now" CTA
3. **SearchBar** — Orange (#ff9902) background bar with flex form: category dropdown, location dropdown, keyword text input, "Find Job" button
4. **Features** — 3 equal columns: UX/UI Designer, Web Designer, Accounting & Finance. Each card: title + description + "Explore Now" link
5. **Categories** — Section heading "Find Job by Category" + subtitle + 8 category cards in 4-column grid (Accounting & Finance, Production & Operations, Telecommunications, Garments & Textile, Marketing & Sales, Engineering & Architecture, Design & Creative, Customer Support). Each: icon + name + "250 open jobs"
6. **Jobs** — Heading "Browse Recent Jobs" + tabbed interface (Recent, Full Time, Part Time, Intern). Each tab: 1 job listing with title, location, field, deadline, image, type badge (colored), Apply button
7. **Newsletter** — Background image with dark overlay, heading "Get Job Information Daily", subtitle, email input + "Subscribe Now" button
8. **Testimonials** — Heading "Happy Employees" + subtitle. 2 testimonial cards: profile photo, quote, name, company on hover overlay
9. **News** — Heading "Latest News" + subtitle + 3 blog cards: image, date/category tags, title
10. **Download** — Split: left = heading "Download the App", description, App Store + Play Store buttons. Right = phone mockup image
11. **Footer** — Dark navy (#04091e): 3-column (Top Products links, Newsletter form, Instagram feed grid) + Copyright bar with social icons + "More templates at Component Dock" linking https://www.componentdock.com/

## Requirements

### Feature: Navbar

#### Scenario: Navbar displays logo and all navigation links

- **Given** user loads the page,
- **When** the Navbar is inspected
- **Then** navbar displays logo and all navigation links

#### Scenario: Hamburger menu toggles nav visibility

- **Given** user on mobile,
- **When** the Navbar is inspected
- **Then** hamburger menu toggles nav visibility

### Feature: Hero

#### Scenario: Hero shows headline with highlighted "job" word

- **Given** user loads the page,
- **When** the Hero is inspected
- **Then** hero shows headline with highlighted "job" word

#### Scenario: Hero shows background image and "Explore Now" CTA

- **Given** user loads the page,
- **When** the Hero is inspected
- **Then** hero shows background image and "Explore Now" CTA

### Feature: SearchBar

#### Scenario: Search bar shows 2 dropdowns, text input, and find button

- **Given** user on page,
- **When** the SearchBar is inspected
- **Then** search bar shows 2 dropdowns, text input, and find button

#### Scenario: Form does not navigate (handled client-side)

- **Given** user submits search,
- **When** the SearchBar is inspected
- **Then** form does not navigate (handled client-side)

### Feature: Features

#### Scenario: 3 feature cards are visible with titles and CTAs

- **Given** user scrolls to features,
- **When** the Features is inspected
- **Then** 3 feature cards are visible with titles and CTAs

### Feature: Categories

#### Scenario: 8 category cards display with icons and job counts

- **Given** user scrolls to categories,
- **When** the Categories is inspected
- **Then** 8 category cards display with icons and job counts

### Feature: Jobs

#### Scenario: Job listing with title, location, field, deadline, badge, and apply…

- **Given** user on Recent tab,
- **When** the Jobs is inspected
- **Then** job listing with title, location, field, deadline, badge, and apply button visible

#### Scenario: Full-time job listings display

- **Given** user clicks Full Time tab,
- **When** the Jobs is inspected
- **Then** full-time job listings display

### Feature: Newsletter

#### Scenario: Confirmation message appears

- **Given** user subscribes with valid email,
- **When** the Newsletter is inspected
- **Then** confirmation message appears

### Feature: Testimonials

#### Scenario: 2 testimonial slides display with quotes and names

- **Given** user scrolls to testimonials,
- **When** the Testimonials is inspected
- **Then** 2 testimonial slides display with quotes and names

### Feature: News

#### Scenario: 3 blog cards display with images, dates, and titles

- **Given** user scrolls to news,
- **When** the News is inspected
- **Then** 3 blog cards display with images, dates, and titles

### Feature: Download

#### Scenario: App Store and Play Store buttons visible

- **Given** user scrolls to download,
- **When** the Download is inspected
- **Then** App Store and Play Store buttons visible

### Feature: Footer

#### Scenario: "More templates at Component Dock" link points to…

- **Given** user scrolls to footer,
- **When** the Footer is inspected
- **Then** "More templates at Component Dock" link points to https://www.componentdock.com/

#### Scenario: No colorlib references exist anywhere in the footer

- **Given** user looks at footer,
- **When** the Footer is inspected
- **Then** no colorlib references exist anywhere in the footer

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/civicore/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/civicore/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Coverage

100% lines, functions, branches, statements enforced via vitest.config.ts thresholds.

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar — Given** user loads the page,
- [ ] Hero — Given** user loads the page,
- [ ] SearchBar — Given** user on page,
- [ ] Features — Given** user scrolls to features,
- [ ] Categories — Given** user scrolls to categories,
- [ ] Jobs — Given** user on Recent tab,
- [ ] Newsletter — Given** user subscribes with valid email,
- [ ] Testimonials — Given** user scrolls to testimonials,
- [ ] News — Given** user scrolls to news,
- [ ] Download — Given** user scrolls to download,
