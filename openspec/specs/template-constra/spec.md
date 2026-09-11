# Template: Constra (Construction)

## Purpose

Recreation of the ColorLib "Consto" construction website template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **ColorLib source:** https://colorlib.com/wp/template/consto/
- **Live preview analyzed:** https://preview.colorlib.com/theme/consto/
- **New name:** `constra` (apps/constra, package @free-react-templates/constra)
- **Category:** Construction / Corporate

## Design Tokens

| Token | Value | Source |
|---|---|---|
| `--brand` (primary) | `#FF5E14` (orange) | Button fills, links, borders |
| `--brand-dark` | `#2D0A31` (deep purple) | CTA banner / dark section backgrounds |
| `--footer-bg` | `#F5F6F7` (light gray) | Footer wrapper background |
| `--text-primary` | `#222222` | Headings |
| `--text-secondary` | `#5E5E5E` | Body copy, footer text |
| Font family | `"Raleway", sans-serif` | Global body/headings |
| Button radius (pill) | `25px` | `.submit-btn`, primary CTA buttons |
| Card radius | `8px` | Service cards, testimonial cards |
| Outlined button | `1px solid #FF5E14`, transparent bg | `.border-btn` — "All Project", "Contact Us" |
| Pill button | bg `#FF5E14`, white text, 25px radius | "Our Services", "Learn More", "Send Message" |

### Section Backgrounds

| Section | Background |
|---|---|
| Hero/Slider | Full-width background image (hero), dark overlay text area |
| About (support-company-area) | White/transparent |
| Services | Image overlay via `data-background` attribute (light texture) |
| Projects carousel | White |
| More Projects banner | Image overlay via `data-background` (texture) |
| Testimonials | White |
| Contact form | Image overlay via `data-background` (video-bg texture) |
| CTA "Any help needed?" | Image overlay via `data-background` (section-bg1.png texture) |
| Footer | Solid `#F5F6F7` |

## Section Order (fidelity requirement: 1:1 match)

1. **Navbar** — sticky header with logo (left), address line, nav links (Home, About, Service, Project, Blog with dropdown, Contact), phone CTA on right
2. **Hero Slider** — full-width background image, left-aligned text overlay ("Experienced Construction Solution"), description paragraph, "Our Services" pill button; right sidebar with "Explore Our Latest Projects" + "Explore Now" link
3. **About** — split layout: large image left (col-7), right content (col-4) with heading "Complete solution of large projects", description, "Learn More" pill button
4. **Services** — section-bg overlay, left heading "Services we provide" + "Get Free Quote" button, right side three rows each with service image (left) + service card (right): General Contracting, Project Planning, Interior Design; each card has title, description, "Explore Now" link
5. **Projects Carousel** — centered heading "Projects we have Done", owl-carousel with 3 project images, each with hover overlay showing project title + "View Project" button
6. **More Projects Banner** — section-bg overlay, centered "All Project" outlined button
7. **Testimonials** — carousel with quote icon, testimonial paragraph, founder avatar + name + title
8. **Contact Form** — section-bg overlay, form card on left: chat icon + "Get Free Quote" heading, fields (name, email, topic dropdown, message textarea), "Send Message" pill button
9. **CTA Banner** — section-bg overlay (dark purple tone), heading "Any help needed?", description, "Contact Us" outlined button right-aligned
10. **Footer** — three columns: logo + description + social icons, quick links + working hours, newsletter signup form; bottom bar with copyright

## Gherkin Requirements

### Scenario: Navbar displays logo, address, navigation, and phone CTA

```gherkin
Feature: Navbar

  Scenario: Renders logo, address, nav links, and phone number
    Given the user loads the page
    Then the navbar is visible at the top
    And the logo is displayed on the left
    And the address "78/A, Green Lane, New York" is shown
    And navigation links "Home", "About", "Service", "Project", "Blog", "Contact" are visible
    And the phone number "+10 (78) 367 2536" is displayed on the right

  Scenario: Navbar is sticky on scroll
    Given the user scrolls down
    Then the navbar remains fixed at the top of the viewport
```

### Scenario: Hero slider section

```gherkin
Feature: Hero Slider

  Scenario: Displays hero content with heading, description, and CTA
    Given the user is on the homepage
    Then the hero section shows the heading "Experienced Construction Solution"
    And a description paragraph is visible below the heading
    And the "Our Services" CTA button is displayed

  Scenario: Right sidebar content is visible
    Given the hero section is rendered
    Then the right sidebar shows "Explore Our Latest Projects"
    And the "Explore Now" link is visible
```

### Scenario: About section

```gherkin
Feature: About Section

  Scenario: Displays split layout with image and content
    Given the user scrolls to the about section
    Then a large image is displayed on the left
    And the heading "Complete solution of large projects" is on the right
    And a description paragraph is shown
    And the "Learn More" pill button is visible
```

### Scenario: Services section

```gherkin
Feature: Services Section

  Scenario: Shows section heading and three service cards
    Given the user scrolls to the services section
    Then the heading "Services we provide" is displayed
    And the "Get Free Quote" button is visible
    And three services are shown: "General Contracting", "Project Planning", "Interior Design"
    And each service card has a description and "Explore Now" link

  Scenario: Service cards display images
    Given the services section is rendered
    Then each service card has a corresponding image displayed to its left
```

### Scenario: Projects carousel

```gherkin
Feature: Projects Carousel

  Scenario: Displays heading and project cards
    Given the user scrolls to the projects section
    Then the heading "Projects we have Done" is centered
    And a carousel of project images is displayed

  Scenario: Project cards show overlay on hover
    Given the user hovers over a project card
    Then the project title and "View Project" button are revealed
```

### Scenario: More Projects banner

```gherkin
Feature: More Projects Banner

  Scenario: Shows centered outlined button
    Given the user scrolls to the more projects area
    Then the "All Project" outlined button is centered on a textured background
```

### Scenario: Testimonials section

```gherkin
Feature: Testimonials

  Scenario: Displays testimonial carousel
    Given the user scrolls to the testimonials section
    Then a quote icon is displayed
    And a testimonial paragraph is shown
    And the founder avatar, name "Robart Brown", and title are visible

  Scenario: Testimonials carousel is navigable
    Given multiple testimonials are loaded
    Then the user can navigate between testimonials
```

### Scenario: Contact form section

```gherkin
Feature: Contact Form

  Scenario: Displays form with fields and submit button
    Given the user scrolls to the contact section
    Then the heading "Get Free Quote" is displayed
    And a chat icon is shown above the heading
    And the form has fields: name, email, topic dropdown, message textarea
    And the "Send Message" pill button is visible

  Scenario: Form validates required fields
    Given the user clicks "Send Message" without filling fields
    Then form validation prevents submission
```

### Scenario: CTA banner

```gherkin
Feature: CTA Banner

  Scenario: Displays call-to-action with button
    Given the user scrolls to the CTA section
    Then the heading "Any help needed?" is displayed
    And a description paragraph is shown
    And the "Contact Us" outlined button is visible on the right
```

### Scenario: Footer

```gherkin
Feature: Footer

  Scenario: Displays three-column layout with newsletter
    Given the user scrolls to the footer
    Then the footer logo is displayed
    And quick links and working hours are shown
    And a newsletter signup form with email input is visible

  Scenario: Footer copyright and Component Dock link
    Given the footer is rendered
    Then a copyright line is displayed
    And the footer links to https://www.componentdock.com/
```

## Verification Checklist

- [ ] All 10 sections render in correct order matching the reference
- [ ] Navbar is sticky on scroll
- [ ] Hero section has background image area + text overlay
- [ ] About section uses split layout (image left, content right)
- [ ] Services section shows 3 service cards with images
- [ ] Projects carousel renders with overlay cards
- [ ] More Projects banner has outlined button centered
- [ ] Testimonials carousel with quote icon + founder info
- [ ] Contact form has all fields (name, email, topic select, message)
- [ ] CTA banner uses dark section background
- [ ] Footer has three columns + newsletter + copyright
- [ ] Brand color #FF5E14 used for all primary buttons/links
- [ ] Font Raleway applied globally
- [ ] All buttons use pill shape (25px radius) or outlined style per reference
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage
