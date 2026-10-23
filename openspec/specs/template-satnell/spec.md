# Template: Satnell (Personal Portfolio)

## Purpose

Recreation of the ColorLib "Satner" personal portfolio template
(https://colorlib.com/wp/template/satner/) as a single-page React 19
+ Vite + Tailwind CSS 4 + TypeScript app.

**Source:** ColorLib Satner
**Preview:** https://preview.colorlib.com/theme/satner/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/satner-free-template.jpg
**Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Design Tokens

Extracted from the live preview CSS (`style.css`).

| Token             | Value                                            | Notes                                      |
| ----------------- | ------------------------------------------------ | ------------------------------------------ |
| Brand color (primary) | `#4458dc` (blue)                            | Used in gradient + nav active state         |
| Brand color (accent)  | `#854fee` (purple)                           | Gradient partner with primary               |
| Gradient          | `linear-gradient(90deg, #4458dc 0%, #854fee 100%)` | Buttons, accents, highlights          |
| Text color (main) | `#000000`                                       | Headings                                   |
| Text color (body) | `#777777`                                       | Body paragraphs                            |
| Background (body) | Light textured (`body-bg.png`)                  | Very light grey/off-white pattern           |
| Background (feature cards) | `#f9f9fd`                            | Light lavender-grey for service cards       |
| Background (newsletter)   | Dark image-based (`subscribe-bg.png`)   | Full-width dark background area             |
| Background (footer)       | `#fcf8ff`                            | Very light purple/lavender                  |
| Font (headings)   | `"Rubik", sans-serif`                           | Body and headings font                      |
| Font (body)       | `"Roboto", sans-serif`                          | Paragraph text                              |
| Button radius     | `5px`                                            | Primary button border-radius                |
| Button style      | Gradient fill (`#4458dc → #854fee`), white text | `.primary_btn` with `<span>` inside         |
| Button (outline)  | Transparent bg, dark text, same radius           | `.primary_btn.tr-bg` variant                |

## Requirements

### Navbar

#### Scenario: Navbar

- **Scenario:** Sticky navigation bar with logo and menu links
- **GIVEN** the user is on the page
- **WHEN** the page loads
- **THEN** a navigation bar is visible at the top with a logo image on the left
- **AND** menu links: Home, About, Services, Portfolio, Contact (right-aligned)
- **AND** the navbar is responsive with a hamburger toggle on mobile

### Hero Banner

#### Scenario: Hero Banner

- **Scenario:** Full-width hero banner with greeting, name, role, and CTAs
- **GIVEN** the user is on the page
- **WHEN** the hero section renders
- **THEN** a greeting text ("Hello") is displayed
- **AND** the name ("I am Rah Satner") is displayed in large text
- **AND** the role ("Senior WordPress Developer") is shown
- **AND** two CTA buttons are visible: "Hire Me" (filled gradient) and "Get CV" (outline)
- **AND** a portrait/illustration image is displayed on the right side
- **AND** the background is a full-width banner image

### About Section

#### Scenario: About Section

- **Scenario:** About section with image and personal intro
- **GIVEN** the user scrolls past the hero
- **WHEN** the About section renders
- **THEN** a heading "let's Introduce about myself" is displayed
- **AND** two paragraphs of body text describe the person
- **AND** a "Download CV" primary button is shown
- **AND** a portrait/illustration image is displayed on the left
- **AND** the section has a light background with gap spacing

### Brand Logos

#### Scenario: Brand Logos

- **Scenario:** Brand logo carousel/bar
- **GIVEN** the user scrolls to the brand section
- **WHEN** the Brand area renders
- **THEN** 6-9 brand logos are displayed in a horizontal row
- **AND** logos are centered within the container
- **AND** the section has a light/white background

### Services/Features

#### Scenario: Services/Features

- **Scenario:** Four service cards in a grid
- **GIVEN** the user scrolls to the features section
- **WHEN** the Services area renders
- **THEN** a heading "service offers" is displayed
- **AND** a subtitle paragraph is shown
- **AND** exactly 4 service cards are displayed in a row (4-column grid)
- **AND** each card has a service icon/image, title, and description
- **AND** cards have a light `#f9f9fd` background with padding and slight hover effect
- **AND** the card services are: WP Developing, UI/UX Design, Web Development, App Design (or similar)

### Portfolio

#### Scenario: Portfolio

- **Scenario:** Filterable portfolio grid with category tabs
- **GIVEN** the user scrolls to the portfolio section
- **WHEN** the Portfolio area renders
- **THEN** a heading "quality work / Recently done project" is displayed
- **AND** filter tabs are shown: All, Popular, Latest, Following, Upcoming
- **AND** "All" is the default active filter
- **AND** a grid of portfolio items (3-column) is displayed
- **AND** each item has an image, overlay with an icon, and hover interaction
- **AND** clicking a filter tab shows only items matching that category

### Testimonials

#### Scenario: Testimonials

- **Scenario:** Client testimonial carousel
- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the Testimonial area renders
- **THEN** a heading "client say about me" is displayed
- **AND** a subtitle paragraph is shown
- **AND** a carousel of testimonial items is displayed
- **AND** each testimonial has a client photo, name, and review text
- **AND** the carousel allows navigation between testimonials

### Newsletter

#### Scenario: Newsletter

- **Scenario:** Newsletter subscription section
- **GIVEN** the user scrolls to the newsletter section
- **WHEN** the Newsletter area renders
- **THEN** a heading "get update from anywhere" is displayed (uppercase)
- **AND** a subtitle paragraph is shown
- **AND** an email input field with placeholder "Email address" is visible
- **AND** a "Get Started" submit button is shown
- **AND** the section has a dark/image background with white text

### Footer

#### Scenario: Footer

- **Scenario:** Minimal footer with social links
- **GIVEN** the user scrolls to the bottom
- **WHEN** the Footer renders
- **THEN** a logo is displayed centered
- **AND** a "Follow Me" heading is shown
- **AND** social media icon links are displayed (Facebook, Twitter, Dribbble, Behance)
- **AND** a copyright line with Component Dock attribution is shown
- **AND** the footer has a light lavender background (`#fcf8ff`)

## Verification checklist

- [ ] Navbar renders with correct links and responsive hamburger
- [ ] Hero banner has gradient CTA buttons, portrait image, correct copy
- [ ] About section has image, text, Download CV button
- [ ] Brand logos section displays 6+ brand items
- [ ] Services section shows 4 cards with icons, titles, descriptions
- [ ] Portfolio filter tabs work (All/Popular/Latest/Following/Upcoming)
- [ ] Portfolio grid shows items with overlay hover effect
- [ ] Testimonial carousel displays and navigates between items
- [ ] Newsletter has email input and submit button on dark background
- [ ] Footer has logo, social links, Component Dock attribution
- [ ] All sections match original ColorLib Satner structure and order
- [ ] Design tokens (colors, fonts, button shapes) match reference
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass with 100% coverage
