# Civicore — Job Board Template

Recreation of ColorLib "Comport" (https://colorlib.com/wp/template/comport/).
Preview: https://preview.colorlib.com/theme/comport/

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

## Scenarios

### Navbar

- GIVEN user loads the page, THEN navbar displays logo and all navigation links
- GIVEN user on mobile, THEN hamburger menu toggles nav visibility

### Hero

- GIVEN user loads the page, THEN hero shows headline with highlighted "job" word
- GIVEN user loads the page, THEN hero shows background image and "Explore Now" CTA

### SearchBar

- GIVEN user on page, THEN search bar shows 2 dropdowns, text input, and find button
- GIVEN user submits search, THEN form does not navigate (handled client-side)

### Features

- GIVEN user scrolls to features, THEN 3 feature cards are visible with titles and CTAs

### Categories

- GIVEN user scrolls to categories, THEN 8 category cards display with icons and job counts

### Jobs

- GIVEN user on Recent tab, THEN job listing with title, location, field, deadline, badge, and apply button visible
- GIVEN user clicks Full Time tab, THEN full-time job listings display

### Newsletter

- GIVEN user subscribes with valid email, THEN confirmation message appears

### Testimonials

- GIVEN user scrolls to testimonials, THEN 2 testimonial slides display with quotes and names

### News

- GIVEN user scrolls to news, THEN 3 blog cards display with images, dates, and titles

### Download

- GIVEN user scrolls to download, THEN App Store and Play Store buttons visible

### Footer

- GIVEN user scrolls to footer, THEN "More templates at Component Dock" link points to https://www.componentdock.com/
- GIVEN user looks at footer, THEN no colorlib references exist anywhere in the footer

## Coverage

100% lines, functions, branches, statements enforced via vitest.config.ts thresholds.
