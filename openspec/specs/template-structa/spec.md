# Spec: Structa — Construction Company Template

> Recreation of ColorLib "Consto" — https://colorlib.com/wp/template/consto/
> Preview: https://preview.colorlib.com/theme/consto/

## Overview

Structa is a construction company landing page template with a bold orange
brand palette, dark purple accent sections, and Raleway typography. The design
features a hero slider, about section, services grid, project portfolio,
testimonials, contact form, and a 4-column footer.

## Design Tokens (extracted from preview CSS)

| Token      | Value     | Usage                             |
| ---------- | --------- | --------------------------------- |
| brand      | `#FF5E14` | Primary orange — buttons, accents |
| brand-dark | `#E5520F` | Hover state for brand elements    |
| dark       | `#2D0A31` | Dark purple section backgrounds   |
| dark-light | `#3A1240` | Lighter variant of dark bg        |
| paper      | `#FFFFFF` | White section backgrounds         |
| mist       | `#646D77` | Body text color                   |
| heading    | `#000000` | Heading text color                |
| font-sans  | Raleway   | All text                          |

## Sections (in order)

1. **Navbar** — Sticky header with logo ("Structa" + orange dot), address
   ("78/A, Green Lane, New York"), navigation links (Home, About, Service,
   Project, Blog, Contact), phone number CTA, mobile hamburger menu.

2. **Hero** — Full-width hero with dark overlay on background image. Heading:
   "Experienced Construction Solution". Subtext about the company. CTA button:
   "Our Services". Right sidebar: "Explore Our Latest Projects" with
   "Explore Now" link.

3. **About** — Two-column layout. Left: large image. Right: section title
   "Complete solution of large projects", descriptive paragraph, "Learn More"
   button.

4. **Services** — Dark purple background. Heading: "Services we provide". CTA:
   "Get Free Quote". Three service cards in a row: General Contracting,
   Project Planning, Interior Design — each with an icon and description.

5. **Projects** — White background. Heading: "Projects we have Done". Three
   project cards with images, titles, and "View Project" buttons.

6. **MoreCTA** — Dark purple background. "Want to build something great?"
   heading with "Contact Us" button.

7. **Testimonials** — Carousel of testimonial cards with avatar, name, role,
   and quote text. Previous/Next navigation.

8. **Contact** — Form section with fields: name, email, subject (select
   dropdown), message (textarea), and "Send Message" submit button. Client-side
   validation.

9. **BannerCTA** — "Any help needed?" section with "Contact Us" button on
   dark background.

10. **Footer** — 4-column layout:
    - Column 1: Logo, description, phone, email, social icons
    - Column 2: Navigation links
    - Column 3: Services links
    - Column 4: Newsletter signup with email validation
    - Bottom bar: Copyright + "Made with Component Dock" link

## Scenarios

### Navbar

- GIVEN the page loads, THEN the navbar is visible with logo and nav links
- GIVEN the user scrolls down, THEN the navbar becomes sticky with white bg
- GIVEN the user clicks the mobile menu button, THEN the mobile nav opens
- GIVEN the mobile nav is open and user clicks a link, THEN the nav closes

### Hero

- GIVEN the page loads, THEN the hero heading and CTA are visible
- GIVEN the user clicks "Our Services", THEN it navigates to #services

### About

- GIVEN the page loads, THEN the about heading and image are visible
- GIVEN the user clicks "Learn More", THEN the button is clickable

### Services

- GIVEN the page loads, THEN three service cards are visible
- GIVEN the section renders, THEN each card has a title and description

### Projects

- GIVEN the page loads, THEN three project cards are visible
- GIVEN the user clicks "View Project", THEN the button is clickable

### MoreCTA

- GIVEN the page loads, THEN the CTA heading and button are visible

### Testimonials

- GIVEN the page loads, THEN at least one testimonial is visible
- GIVEN the user clicks next/prev, THEN the testimonial changes

### Contact

- GIVEN the page loads, THEN the form fields are visible
- GIVEN the user submits empty, THEN validation errors appear
- GIVEN the user fills all fields correctly, THEN the form submits

### BannerCTA

- GIVEN the page loads, THEN "Any help needed?" text and CTA are visible

### Footer

- GIVEN the page loads, THEN all 4 footer columns are visible
- GIVEN the user views the footer, THEN "Made with Component Dock" links to
  https://www.componentdock.com/
- GIVEN the newsletter form, WHEN user enters invalid email, THEN error shows
- GIVEN the newsletter form, WHEN user enters valid email, THEN success message shows
