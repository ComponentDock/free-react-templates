# Template: ProfileCraft (Personal Portfolio & Profile)

## Purpose

Recreation of ColorLib Breed2 — a free personal profile/portfolio website
template with a hero banner, stats, about section, services, testimonials,
portfolio grid, blog, and footer. The original is a Bootstrap-based template
for creative professionals and freelancers.

- **Source template**: [Colorlib Breed2](https://colorlib.com/wp/template/breed2/)
- **New Name**: `profilecraft` (App directory: `apps/profilecraft`, Package: `@free-react-templates/profilecraft`)
- **Category**: Landing Page / Personal Portfolio
- **Preview URL**: `https://preview.colorlib.com/theme/breed2/` (reachable at prep time)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/breed2-free-template.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Design tokens

> Extracted from the live preview CSS (`css/style.css`) and HTML structure.

| Token                      | Value                                                              | Notes                                         |
| -------------------------- | ------------------------------------------------------------------ | --------------------------------------------- |
| Font family                | `"Roboto", sans-serif`                                             | Weights: 300, 400, 500, 700                   |
| Primary CTA gradient       | `linear-gradient(to right, #1345e6 0%, #ed239f 51%, #1345e6 100%)` | Blue-to-pink gradient for `.primary_btn`      |
| Secondary gradient         | `linear-gradient(90deg, #1345e6 0%, #ed239f 100%)`                 | Blue-to-pink for underlines and hover effects |
| Heading color              | `#05364d` (dark teal)                                              | All h1-h5 headings                            |
| Body text                  | `#797979` (gray)                                                   | Paragraphs and general text                   |
| Section title accent       | `rgba(237, 35, 159, 0.6)` pink                                     | Blurred accent line under section labels      |
| Background (page)          | `#ffffff`                                                          | White page background                         |
| Background (stats)         | `#f8faff` (very light blue)                                        | Statistics section items                      |
| Background (services)      | `#f8faff` (very light blue)                                        | Service card default background               |
| Background (service hover) | `#5f30ff` (purple)                                                 | Service card hover state                      |
| Background (footer)        | `#021017` (very dark)                                              | Footer background                             |
| Background (blog sidebar)  | `#fbf9ff` (very light purple)                                      | Blog sidebar widgets                          |
| Text gradient (stats)      | `linear-gradient(90deg, #1345e6, #ed239f)`                         | Counter numbers use gradient text             |
| Button border-radius       | `5px`                                                              | `.primary_btn` border-radius                  |
| Button padding             | `0 38px`, line-height `50px`                                       | Primary button sizing                         |
| Button text transform      | `uppercase`                                                        | Primary button text                           |
| Button letter-spacing      | `0px`                                                              | Default (not wide)                            |
| Star rating (active)       | `#ffd804` (yellow)                                                 | Active star icons                             |
| Star rating (inactive)     | `#aeb9be` (light gray)                                             | Inactive star icons                           |
| Nav link hover             | `#efb6df` (light pink)                                             | Navigation hover color                        |
| Social icon hover          | `#ed239f` (pink)                                                   | Footer social icon hover                      |
| Portfolio overlay          | `rgba(19, 69, 230, 0.9)` (blue)                                    | Portfolio image overlay on hover              |
| Blog date badge            | `#1345e6` (blue) bg                                                | Date badge on blog images                     |
| Section padding            | `140px 0`                                                          | `.section_gap`                                |
| Transitions                | `all 0.4s ease 0s`                                                 | Smooth hover transitions                      |

## Requirements

### Feature: ProfileCraft — Personal Portfolio Landing Page

#### Scenario: Page loads with hero banner

- **GIVEN** the user opens the ProfileCraft page
- **THEN** the navigation bar should be visible with logo and menu items
- **AND** the hero section should show "Hey There!" greeting
- **AND** the hero should display "I am [Name]" as the main heading
- **AND** a subtitle like "Creative art director & designer" should be visible
- **AND** social media icons (Twitter, Skype, Instagram, Dribbble, Vimeo) should be present
- **AND** a "See My Work" CTA button should be visible

#### Scenario: Navigation menu items

- **GIVEN** the page is loaded
- **THEN** the navigation should contain links for "Home", "About", "Portfolio", "Pages" (dropdown), "Blog" (dropdown), "Contact"
- **AND** clicking a nav link should scroll to the corresponding section

#### Scenario: Statistics section with counters

- **GIVEN** the user scrolls to the statistics section
- **THEN** 3 stat items should be visible
- **AND** the stats should show "15k+ Happy Customer", "12k+ Ticket Solved", "9/10 Average Rating"
- **AND** the counter numbers should have a gradient text effect (blue-to-pink)

#### Scenario: About section with image and text

- **GIVEN** the user scrolls to the about section
- **THEN** an "About me" label should be visible
- **AND** a "Creative Art Director And Designer" heading should be displayed
- **AND** a descriptive paragraph should be below the heading
- **AND** a "Download CV" button should be visible
- **AND** an about image should be displayed on the left side

#### Scenario: Services section with 3 cards

- **GIVEN** the user scrolls to the services section
- **THEN** a "Our Service" label should be visible
- **AND** a "What Service We Offer For You" heading should be displayed
- **AND** 3 service cards should be displayed
- **AND** the cards should be titled "Web Development", "UX/UI Design", "WP Developing"
- **AND** each card should have an icon, title, description, and "Learn More" link
- **AND** hovering a card should change its background to purple (#5f30ff)

#### Scenario: Testimonial section with slider

- **GIVEN** the user scrolls to the testimonial section
- **THEN** a "Our Testimonial" label should be visible
- **AND** a "Honourable Client Says About Me" heading should be displayed
- **AND** a testimonial slider should show client photos, quotes, names, roles, and star ratings
- **AND** the star rating should show 4 active stars and 1 inactive star

#### Scenario: Portfolio grid with filter

- **GIVEN** the user scrolls to the portfolio section
- **THEN** filter tabs should be visible for portfolio categories
- **AND** portfolio items should be displayed in a grid
- **AND** hovering a portfolio item should show a blue overlay with title and description

#### Scenario: Blog section with posts

- **GIVEN** the user scrolls to the blog section
- **THEN** blog post cards should be displayed
- **AND** each card should have a thumbnail image, date badge, title, and excerpt
- **AND** the date badge should have a blue background

#### Scenario: Footer with social links

- **GIVEN** the user scrolls to the footer
- **THEN** the footer should have a dark background (#021017)
- **AND** it should contain social media icon links in circular buttons
- **AND** hovering social icons should show a gradient background
- **AND** a "Component Dock" link should be present (per conventions)

#### Scenario: Responsive layout on mobile

- **GIVEN** the user opens the page on a viewport width less than 768px
- **THEN** the navigation should collapse to a hamburger menu
- **AND** all sections should stack vertically
- **AND** the hero image should be hidden on mobile
- **AND** service cards should stack vertically

#### Scenario: Smooth scroll navigation

- **GIVEN** the user clicks a navigation menu item
- **THEN** the page should smoothly scroll to the target section

## Verification checklist

- [ ] Fixed navbar with logo and menu items (Home, About, Portfolio, Pages, Blog, Contact)
- [ ] Hero section with greeting, name, subtitle, social icons, and "See My Work" CTA
- [ ] Statistics section with 3 gradient-text counter items
- [ ] About section with image, heading, paragraph, and "Download CV" button
- [ ] Services section with 3 cards (Web Dev, UX/UI, WP Developing) and hover effects
- [ ] Testimonial slider with client photos, quotes, and star ratings
- [ ] Portfolio grid with filter tabs and hover overlay effects
- [ ] Blog section with post cards and date badges
- [ ] Dark footer (#021017) with circular social icon buttons
- [ ] Roboto font loaded (weights 300-700)
- [ ] Blue-to-pink gradient (#1345e6 → #ed239f) for CTAs and accents
- [ ] Dark teal (#05364d) for headings
- [ ] Purple (#5f30ff) for service card hover background
- [ ] Smooth hover transitions (0.4s ease) on all interactive elements
- [ ] Responsive: hamburger menu, stacking layouts on mobile
- [ ] No references to ColorLib in app code
- [ ] Uses `cn()` from `packages/ui` for class composition
- [ ] 100% test coverage (lines, functions, branches, statements)
