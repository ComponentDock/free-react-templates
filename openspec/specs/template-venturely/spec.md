# Template: Venturely (Business & Investment Landing Page)

## Purpose

Recreation of ColorLib Bravo — a free business/investment website template
with a hero slider, about section, services, testimonials, team, and contact.
The original is a Bootstrap-based template for investment and business
consulting websites.

- **Source template**: [Colorlib Bravo](https://colorlib.com/wp/template/bravo/)
- **New Name**: `venturely` (App directory: `apps/venturely`, Package: `@free-react-templates/venturely`)
- **Category**: Landing Page / Business & Investment
- **Preview URL**: `https://preview.colorlib.com/theme/bravo/` (reachable at prep time)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/bravo-free-template.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Design tokens

> Extracted from the live preview CSS (`assets/css/style.css`) and HTML structure.

| Token                      | Value                                                | Notes                                                           |
| -------------------------- | ---------------------------------------------------- | --------------------------------------------------------------- |
| Font family                | `"Roboto", sans-serif`                               | Weights: 300, 400, 500, 700, 900                                |
| Primary CTA                | `#4760FF` (blue)                                     | `.btn` background color                                         |
| Accent / border            | `#FA8F77` (salmon/coral)                             | `.border-btn`, `.boxed-btn`, phone icon                         |
| Heading color              | `#140C40` (dark purple)                              | All h1-h6 headings                                              |
| Body text                  | `#140C40` (dark purple)                              | Paragraphs and general text                                     |
| Link color                 | `#635c5c` (gray-brown)                               | Default anchor links                                            |
| Background (page)          | `#ffffff`                                            | White page background                                           |
| Background (section-bg2)   | Image-based (`section_bg01.png`, `section_bg02.png`) | Dark textured backgrounds for testimonials and contact sections |
| Background (boxed-btn)     | `#fff` (default), `#FA8F77` (hover)                  | White button with salmon border                                 |
| Border (boxed-btn)         | `1px solid #FA8F77`                                  | Salmon border on outlined buttons                               |
| Button text transform      | `capitalize`                                         | Title case for buttons                                          |
| Letter spacing (boxed-btn) | `3px`                                                | Wide letter spacing on outlined buttons                         |
| Button padding             | `18px 44px`                                          | Generous button padding                                         |
| Button border-radius       | `0` (square)                                         | Sharp-cornered buttons                                          |
| Section padding            | `40px 0`                                             | `.section-padding40`                                            |
| Section title accent span  | `#FA8F77`                                            | Colored span in section titles                                  |
| Card border                | `1px solid #C2C5DB`                                  | Light lavender border on cards                                  |
| Footer background          | Dark (image-based)                                   | Footer uses section-bg2 background image                        |
| Transitions                | `0.3s`                                               | Smooth hover transitions on images and links                    |

## Requirements

### Feature: Venturely — Business & Investment Landing Page

#### Scenario: Page loads with hero slider

- **GIVEN** the user opens the Venturely page
- **THEN** the navigation bar should be visible with logo and menu items
- **AND** a hero slider should display with animated content
- **AND** the hero should show "Entrepreneur. Investor. Marketing Extraordinaire." heading
- **AND** an "Explore Our Services" CTA button should be visible

#### Scenario: Navigation menu items

- **GIVEN** the page is loaded
- **THEN** the navigation should contain links for "Home", "About", "Services", "Blog", "Contact"
- **AND** a phone number button should be visible on desktop
- **AND** clicking a nav link should scroll to the corresponding section

#### Scenario: About section with stats

- **GIVEN** the user scrolls to the about section
- **THEN** an "About Us" label should be visible
- **AND** a "Build trust fast using the most engaging technology" heading should be displayed
- **AND** a descriptive paragraph should be below the heading
- **AND** a "More About Us" button should be visible
- **AND** two stat boxes should show "10 Years of experience" and "$40M+ invested"

#### Scenario: Services / popular items section with 3 cards

- **GIVEN** the user scrolls to the services section
- **THEN** a "How we can help?" label should be visible
- **AND** 3 service cards should be displayed in a row
- **AND** each card should have an image with hover overlay and title
- **AND** each card should have a "Read More" overlay on hover

#### Scenario: Testimonial section with slider

- **GIVEN** the user scrolls to the testimonial section
- **THEN** a testimonial slider should be visible
- **AND** the testimonial should show a quote, company logo, and author name/role
- **AND** dot navigation indicators should be present for the slider

#### Scenario: Team section with 3 members

- **GIVEN** the user scrolls to the team section
- **THEN** a "Meet with our amazing team" heading should be visible
- **AND** 3 team member cards should be displayed
- **AND** each card should have a photo, name, role, and social media links
- **AND** social links should include Twitter, Facebook, and Pinterest icons

#### Scenario: Portfolio / popular items section with 2 cards

- **GIVEN** the user scrolls to the second portfolio section
- **THEN** 2 portfolio cards should be displayed side by side
- **AND** each card should have an image with hover overlay and title

#### Scenario: Contact / CTA section

- **GIVEN** the user scrolls to the contact section
- **THEN** a contact form or call-to-action should be visible
- **AND** the section should have a dark textured background

#### Scenario: Footer with links

- **GIVEN** the user scrolls to the footer
- **THEN** the footer should contain navigation links and copyright
- **AND** a "Component Dock" link should be present (per conventions)

#### Scenario: Responsive layout on mobile

- **GIVEN** the user opens the page on a viewport width less than 768px
- **THEN** the navigation should collapse to a mobile hamburger menu
- **AND** all sections should stack vertically
- **AND** team cards should stack vertically
- **AND** the phone number button should be hidden on mobile

#### Scenario: Smooth scroll navigation

- **GIVEN** the user clicks a navigation menu item
- **THEN** the page should smoothly scroll to the target section

## Verification checklist

- [ ] Fixed navbar with logo and menu items (Home, About, Services, Blog, Contact)
- [ ] Phone number button visible on desktop, hidden on mobile
- [ ] Hero slider with animated heading and "Explore Our Services" CTA
- [ ] About section with heading, paragraph, "More About Us" button, and 2 stat boxes
- [ ] Services section with 3 image cards and hover overlay effects
- [ ] Testimonial slider with quotes and dot navigation
- [ ] Team section with 3 member cards and social links (Twitter, Facebook, Pinterest)
- [ ] Portfolio section with 2 cards side by side
- [ ] Contact/CTA section with dark textured background
- [ ] Footer with navigation links
- [ ] Roboto font loaded (weights 300-900)
- [ ] Primary CTA blue (#4760FF) for main buttons
- [ ] Accent salmon (#FA8F77) for border buttons and section title accents
- [ ] Dark purple (#140C40) for headings and body text
- [ ] Square button corners (no border-radius) with letter-spacing
- [ ] Smooth hover transitions (0.3s) on images and links
- [ ] Responsive: hamburger menu, stacking layouts on mobile
- [ ] No references to ColorLib in app code
- [ ] Uses `cn()` from `packages/ui` for class composition
- [ ] 100% test coverage (lines, functions, branches, statements)
