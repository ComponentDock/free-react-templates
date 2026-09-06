# Template: Grove (Agency / Portfolio)

## Purpose

Grove is a multi-section single-page website in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Avo" free template (source: https://colorlib.com/wp/template/avo/), built under a DIFFERENT name (**Grove**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 agency/portfolio template: dark navbar, full-width hero slider with background images and overlay, counter statistics, "About us" section with 6 services, portfolio/works gallery, testimonials carousel, contact CTA section, and footer. The design features Nunito Sans font, a red brand accent (#d1002c), white background with light grey (#f8f9fa) alternating sections, and Bootstrap blue (#007bff) primary buttons.

**WHAT MAKES GROVE DISTINCT (signature behaviors):**

1. Dark navbar with logo "grove" and 5 nav links
2. Full-height hero with owl-carousel-style slider (2 slides), counter stats, and CTA buttons
3. "About us" section with 6 service items (icons + titles)
4. Portfolio gallery with "View all projects" button
5. Testimonials carousel with client photos and quotes
6. Contact/CTA section with "Get started" button
7. Red accent color (#d1002c) used for highlights, icons, hover states

## Source mapping

- **ColorLib source:** Avo
- **Preview URL:** https://preview.colorlib.com/theme/avo/ (reachable — full DOM + CSS analyzed)
- **New name:** grove
- **Category:** Agency / Portfolio

## Design tokens

Extracted from live preview DOM + CSS stylesheet analysis (preview at https://preview.colorlib.com/theme/avo/).

### Colors

| Token                  | Value     | Usage                                     |
| ---------------------- | --------- | ----------------------------------------- |
| `--color-bg`           | `#fff`    | Page background (white)                   |
| `--color-bg-light`     | `#f8f9fa` | Alternating section background            |
| `--color-text`         | `#212529` | Default body text                         |
| `--color-heading`      | `#000`    | Heading text color                        |
| `--color-accent`       | `#d1002c` | Brand red for highlights, icons, hover    |
| `--color-primary`      | `#007bff` | Bootstrap blue for CTA buttons            |
| `--color-primary-hover`| `#0069d9` | Button hover state                        |
| `--color-text-muted`   | `#6c757d` | Secondary/muted text                      |
| `--color-overlay`      | `rgba(0,0,0,0.5)` | Hero image overlay (approximate)  |
| `--color-nav-bg`       | `#343a40` | Dark navbar background                    |
| `--color-form-bg`      | `#f3f3f3` | Contact form background                   |

### Typography

| Element    | Font                    | Weight | Usage                        |
| ---------- | ----------------------- | ------ | ---------------------------- |
| Body       | Nunito Sans (Google)    | 400    | Default text (16px, 1.8)     |
| Headings   | Nunito Sans             | 400    | Section headings             |
| Nav links  | Nunito Sans             | 400    | Navigation items             |
| Counter    | Nunito Sans             | 800    | Hero counter numbers (40px)  |
| Buttons    | Nunito Sans             | 400    | CTA button text              |
| Service    | Nunito Sans             | 600    | Service item titles          |

### Shapes & Spacing

| Token           | Value                            | Usage                      |
| --------------- | -------------------------------- | -------------------------- |
| Hero height     | 850px (desktop)                  | Full-height hero section   |
| Section padding | 7em vertical (ftco-section)      | Standard section spacing   |
| Button radius   | 0.25rem (Bootstrap default)      | CTA button corners         |
| Form radius     | 5px                              | Contact form corners       |
| Navbar height   | auto                             | Dark navbar                |
| Contact form bg | #f3f3f3                          | Contact section form       |

## Requirements

### Requirement: Navbar

The system SHALL render a dark navbar with the logo "grove" (with "v" styled differently) and 5 navigation links: Home, About, Work, Blog, Contact.

#### Scenario: Navbar renders with links

- **GIVEN** the user visits the Grove page
- **THEN** a dark navbar is visible at the top
- **AND** the logo "grove" is displayed on the left
- **AND** 5 navigation links are visible on the right: Home, About, Work, Blog, Contact

#### Scenario: Navbar is responsive

- **GIVEN** the viewport is mobile-sized
- **WHEN** the page loads
- **THEN** a hamburger menu toggle is visible
- **AND** clicking it reveals the navigation links

### Requirement: Hero section with slider

The system SHALL render a full-height hero section with a background image slider (2 slides), overlay, counter statistics, headline text, and CTA buttons.

#### Scenario: Hero renders first slide

- **GIVEN** the page loads
- **WHEN** the hero section is visible
- **THEN** a background image with dark overlay is displayed
- **AND** a counter stat "400" with "More than a hundred successful projects" is shown
- **AND** the headline "We Create Modern & Minimal Website" is visible
- **AND** a "Start Project" CTA button is displayed

#### Scenario: Hero slider transitions

- **GIVEN** the first slide is displayed
- **WHEN** the slider auto-transitions to the second slide
- **THEN** the counter shows "21" with "Years of Experienced"
- **AND** the CTA button reads "Explore Projects"

#### Scenario: Video play button

- **GIVEN** the hero section is visible
- **THEN** a play button icon is visible for a video popup

### Requirement: About us section

The system SHALL render an "About us" section with a heading and 6 service items.

#### Scenario: About section renders

- **GIVEN** the user scrolls past the hero
- **THEN** a section with "About us" heading is visible
- **AND** 6 service items are displayed: UI/UX Design, Web Development, Product Design, Mobile Apps, SEO, and one additional service

### Requirement: Portfolio / Works section

The system SHALL render a portfolio section with the heading "Our Works" and a "View all projects" button.

#### Scenario: Portfolio section renders

- **GIVEN** the user scrolls to the portfolio area
- **THEN** the heading "Our Works" is visible
- **AND** portfolio gallery items are displayed
- **AND** a "View all projects" button is present

### Requirement: Testimonials section

The system SHALL render a testimonials section with the heading "Clients Says About Us?" and client testimonial cards.

#### Scenario: Testimonials render

- **GIVEN** the user scrolls to the testimonials
- **THEN** the heading "Clients Says About Us?" is visible
- **AND** testimonial cards with client photos, names, and quotes are displayed

### Requirement: Contact / CTA section

The system SHALL render a contact/CTA section with a heading and "Get started" button.

#### Scenario: Contact CTA renders

- **GIVEN** the user scrolls to the contact area
- **THEN** the heading "Fill in the brief and get the project estimate" is visible
- **AND** a "Get started" CTA button is displayed

### Requirement: Footer

The system SHALL render a footer with links and Component Dock attribution.

#### Scenario: Footer renders

- **GIVEN** the page is loaded
- **THEN** a footer is visible at the bottom
- **AND** it contains a link to "https://www.componentdock.com/"
- **AND** the link text mentions "Component Dock"

## Verification checklist

- [ ] Dark navbar renders with logo and 5 nav links
- [ ] Hero section shows background image with overlay
- [ ] Counter statistics animate (400 projects, 21 years)
- [ ] Hero headline and CTA buttons render
- [ ] Slider transitions between 2 slides
- [ ] About us section with 6 service items
- [ ] Portfolio/Works section with gallery
- [ ] Testimonials section with client cards
- [ ] Contact/CTA section with button
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
- [ ] `packages/ui` components reused where possible
- [ ] 100% test coverage maintained
