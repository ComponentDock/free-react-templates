# Template: Stratton (Personal Portfolio)

## Purpose

Recreation of the ColorLib "Schmidt" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** [ColorLib Schmidt](https://colorlib.com/wp/template/schmidt/)
- **Preview:** https://preview.colorlib.com/theme/schmidt/
- **New name:** `stratton`
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **Category:** Personal portfolio / freelancer website
- **Description:** Multi-section personal portfolio for a UI/UX designer and developer. Features a hero with split layout (left text, right image), about section with stat counters, services grid, resume/experience timeline, portfolio gallery, blog entries, testimonials carousel, and contact form. Golden-yellow (#d5c455) brand accent throughout.

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/schmidt/css/style.css`:

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Brand accent | `#d5c455` | Hero overlay (right half), subheading text, service card hover bg, about-info accent, section icons, pricing |
| Primary button | `#0d6efd` | Hero CTA button (Bootstrap blue) |
| Primary hover | `#0b5ed7` | Button hover state |
| White button bg | `#ffffff` | Secondary CTA in hero, transparent hover |
| Dark text | `#000000` / `#222222` | Headings, body text |
| Body text | `rgba(0,0,0,0.8)` | Form controls, body copy |
| Muted text | `#999999` / `#a2a2a2` / `#b3b3b3` | Meta text, secondary labels |
| Light bg | `#f8f9fa` | Section alternate bg (`bg-light`) |
| Card bg | `#ffffff` | Service cards, testimonial cards |
| Card hover shadow | `rgba(0,0,0,0.18)` | Service card hover |
| Divider | `#e6e6e6` / `#ddd` | Borders, separators |

### Typography
| Property | Value |
|----------|-------|
| Font family | `"Poppins", Arial, sans-serif` |
| Weights | 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold) |
| Subheading | 13px, uppercase, letter-spacing 2px, bold, brand color |
| Heading h2 | 40px, weight 600, line-height 1.4 |
| Body | 14-16px, weight 400 |

### Shapes & Spacing
| Property | Value |
|----------|-------|
| Border radius (cards) | 3-4px |
| Border radius (buttons) | Bootstrap default (0.25rem) |
| Border radius (testimonials) | 4px |
| Service card padding | 30px |
| Service card shadow | `0px 5px 25px -2px rgba(0,0,0,0.06)` |
| Service card hover shadow | `0px 5px 25px -2px rgba(0,0,0,0.18)` |
| Testimonial card shadow | `0px 24px 48px -13px rgba(0,0,0,0.05)` |

### Hero Section
- Full viewport height (100vh)
- Split layout: left 50% text content, right 50% golden-yellow overlay (`#d5c455`)
- Overlay covers right half, opacity 1, hidden on mobile
- Dark background image behind (left side)
- Text color: `rgba(255,255,255,0.8)` (white-ish)
- Two CTA buttons: "More About Me" (primary blue) + "Hire Me" (white outline)
- Image carousel on right side

## Sections (page order)

Since Schmidt is a multi-page template, we consolidate into a single-page SPA. Section order:

1. **Navbar** — Fixed/sticky top, brand text "Strat.", nav links (Home, About, Services, Experience, Works, Blog, Contact)
2. **Hero** — Full viewport, split layout: left text (subheading "UI/UX Designer & Developer", name headline, two CTA buttons), right golden-yellow overlay with portrait image
3. **About** — Two-column: left = stat counters (5000 Happy Clients, 1200 Projects Done, 500 Cups of Coffee, 587 Working Hours), right = heading "About Me", bio text, info list (Name, Birthday, Age, etc.)
4. **Services** — Grid of service cards (2-3 columns): each with icon, title, description. Cards turn golden-yellow on hover. Items: UI/UX Design, Web Development, Graphic Design, Branding, Marketing, Mobile App Design, Visual Editor
5. **Experience** — Timeline/resume items with fade-in animation: education entries (Master Degree, Bachelor's, Diploma) + work experience (Art Director, Wordpress Developer, UI/UX Designer)
6. **Works/Portfolio** — Masonry/grid gallery of project images with overlay title on hover (9 items)
7. **Testimonials** — Carousel/slider of testimonial cards with user image, name, role, quote text
8. **Blog** — Grid of blog entry cards with image, meta (author, date, comments), title, excerpt
9. **Contact** — Two-column: left = contact info (address, phone, email) + contact form, right = Google Map placeholder
10. **Footer** — Copyright, Component Dock link

## Gherkin Requirements

### Navbar
```gherkin
Feature: Navbar
  Scenario: Sticky navigation bar
    Given the user loads the page
    Then a navbar is visible at the top
    And the brand text reads "Strat."
    And nav links include Home, About, Services, Experience, Works, Blog, Contact

  Scenario: Mobile responsive toggle
    Given the viewport is mobile width
    When the user taps the hamburger icon
    Then the nav menu expands
```

### Hero
```gherkin
Feature: Hero section
  Scenario: Split hero layout
    Given the user is on the home page
    Then a full-viewport hero is displayed
    And the left side shows a subheading "UI/UX Designer & Developer"
    And a name headline is visible
    And two CTA buttons are present: "More About Me" and "Hire Me"

  Scenario: Golden overlay on right
    Given the viewport is desktop width
    Then the right half of the hero has a golden-yellow (#d5c455) overlay
    And a portrait image is visible within the overlay area

  Scenario: Hero responsive on mobile
    Given the viewport is mobile width
    Then the overlay is hidden
    And content stacks vertically
```

### About
```gherkin
Feature: About section
  Scenario: Stat counters displayed
    Given the user scrolls to the About section
    Then four stat counters are visible
    And they show: 5000 Happy Clients, 1200 Projects Done, 500 Cups of Coffee, 587 Working Hours

  Scenario: About info list
    Given the user scrolls to the About section
    Then an info list is visible with labeled fields (Name, Birthday, Age, etc.)
    And label text is in brand color (#d5c455)
```

### Services
```gherkin
Feature: Services section
  Scenario: Service cards grid
    Given the user scrolls to the Services section
    Then 7 service cards are displayed in a responsive grid
    And each card has an icon, title, and description

  Scenario: Service card hover
    Given a service card is in view
    When the user hovers over a service card
    Then the card background changes to golden-yellow (#d5c455)
    And the text and icon color change to white
```

### Experience
```gherkin
Feature: Experience section
  Scenario: Resume timeline items
    Given the user scrolls to the Experience section
    Then 6 resume items are displayed
    And each item has a title and description paragraph
    And items animate in on scroll (fade-up)
```

### Works/Portfolio
```gherkin
Feature: Works gallery
  Scenario: Portfolio grid
    Given the user scrolls to the Works section
    Then 9 project items are displayed in a grid
    And each project has a background image
    And hovering shows a project title overlay
```

### Testimonials
```gherkin
Feature: Testimonials
  Scenario: Testimonial cards
    Given the user scrolls to the Testimonials section
    Then testimonial cards are displayed in a carousel
    And each card has a user image, name, role, and quote
```

### Blog
```gherkin
Feature: Blog section
  Scenario: Blog entries displayed
    Given the user scrolls to the Blog section
    Then blog entry cards are displayed in a responsive grid
    And each card shows an image, meta info (author, date, comments), title, and excerpt
```

### Contact
```gherkin
Feature: Contact section
  Scenario: Contact form and info
    Given the user scrolls to the Contact section
    Then a contact form is visible with name, email, subject, and message fields
    And contact information (address, phone, email) is displayed alongside
```

### Footer
```gherkin
Feature: Footer
  Scenario: Footer with Component Dock link
    Given the user scrolls to the bottom
    Then a footer is visible
    And it contains a link to https://www.componentdock.com/
```

## Verification Checklist

- [ ] All sections render without errors
- [ ] Navbar is sticky/fixed and responsive
- [ ] Hero has correct split layout with golden overlay on desktop
- [ ] Hero stacks vertically on mobile, overlay hidden
- [ ] About section shows stat counters and info list
- [ ] Services cards display in grid, hover effect works
- [ ] Experience timeline items animate on scroll
- [ ] Portfolio grid shows 9 items with hover overlays
- [ ] Testimonials carousel functions correctly
- [ ] Blog entries display with meta info
- [ ] Contact form has all required fields
- [ ] Footer links to Component Dock
- [ ] Design tokens match: brand color #d5c455, font Poppins, border-radius 3-4px
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code (only in spec)
- [ ] Placeholder images use picsum.photos
- [ ] Google Fonts loaded via link tag in index.html
- [ ] Footer includes "Component Dock" branding
