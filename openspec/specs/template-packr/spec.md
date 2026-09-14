# Template: Packr (Personal Portfolio / Freelancer)

## Purpose

Packr is a personal portfolio and freelancer landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Suitcase" free template (source:
https://colorlib.com/wp/template/suitcase/), built under a
DIFFERENT name (**Packr**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and DOM analysis.

| Token       | Value       | Usage                                        |
| ----------- | ----------- | -------------------------------------------- |
| brand       | `#0e27fb`   | Primary brand color, links, buttons, accents |
| brand-dark  | `#0b1fc4`   | Button hover state                           |
| gold        | `#F7AF1D`   | Accent highlights                            |
| ink         | `#333333`   | Body text, dark sections                     |
| ink-dark    | `#1a1a1a`   | Dark background for hero                     |
| paper       | `#f0f0f0`   | Light section backgrounds                    |
| cloud       | `#fafafa`   | Very light section backgrounds               |
| mist        | `#727272`   | Muted body text                              |
| Font family | Inconsolata | Monospace font, weights 300/400/700          |

## Sections

1. **Navbar** — Logo "Packr", navigation links (Home, Services, Work, Blog, About, Contact), mobile hamburger menu
2. **Hero** — Full-width background image with dark overlay, subtitle "Welcome & Enjoy", heading "Hello! I'm Simon, an illustrator from London", CTA button "Available For Hire!"
3. **Services** — "What I do" heading, 6 service cards in 3-column grid (Web Design, Web Development, Help & Support, Marketing, Digital Marketing, Web Strategy) with lucide-react icons
4. **Portfolio** — "Our Works" heading, 6 portfolio items in 2-column grid with hover overlay showing tags and title
5. **Blog** — "Blog" heading, featured image + 4 blog post cards with category, date, title
6. **Counters** — "Fun Facts" heading, 3 animated counters (Coffee: 456, Done Projects: 899, Subscribers: 2000) triggered by IntersectionObserver
7. **Testimonials** — "Our Client Says:" heading, 3 testimonial cards with photo, quote, author name and role
8. **CTA** — "Are you looking for a web designer?" with "Available for Hire!" button
9. **Footer** — Brand info, Newsletter signup form with validation, social media links (Facebook, Twitter, Instagram, Dribbble as inline SVGs), Component Dock attribution link

## Requirements

### Requirement 1: Navigation

The navbar shall display the brand name "Packr" and navigation links to all sections. On mobile, a hamburger button shall toggle a dropdown menu.

### Requirement 2: Hero Section

The hero section shall display a background image with a dark overlay, a subtitle, a main heading, and a CTA button linking to the contact section.

### Requirement 3: Services Section

The services section shall display 6 service cards in a responsive grid, each with an icon, title, and description.

### Requirement 4: Portfolio Section

The portfolio section shall display 6 project items in a 2-column grid with hover effects showing project tags and title.

### Requirement 5: Blog Section

The blog section shall display a featured image alongside 4 blog post cards, each with category, date, and title.

### Requirement 6: Counter Section

The counter section shall display 3 counters that animate from 0 to their target values when scrolled into view.

### Requirement 7: Testimonials Section

The testimonials section shall display 3 client testimonials with photos, quotes, and attribution.

### Requirement 8: CTA Section

The CTA section shall display a call-to-action heading and a button linking to the contact section.

### Requirement 9: Footer

The footer shall contain brand info, a newsletter signup form with email validation, social media links, and a "Component Dock" attribution link.

### Requirement 10: Responsive Design

All sections shall be responsive and display correctly on mobile, tablet, and desktop screens.

## Test Scenarios

- Gherkin scenarios are implemented as Vitest tests in `apps/packr/src/`
- 100% code coverage enforced on all statements, branches, functions, and lines
