# Template: Servecraft (Business / Services)

## Purpose

Recreation of the ColorLib "Services" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page business/services site.

- **Source template:** [ColorLib Services](https://colorlib.com/wp/template/services/)
- **Preview URL:** https://preview.colorlib.com/theme/services/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/services-free-template.jpg
- **New name:** `servecraft`
- **App path:** `apps/servecraft`
- **Package:** `@free-react-templates/servecraft`
- **Deploy target:** `servecraft.free.componentdock.com`

## Design tokens (from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| **Brand / Primary** | `#C2E54F` | Lime-green; used on `.btn-primary`, active filter buttons, testimonial section bg, accent links |
| **Text dark** | `#1a1a1a` / `#000` | Body headings and body copy |
| **Text muted** | `#666666`, `#888888`, `#999999` | Secondary / caption text |
| **Background light** | `#fff` (white) | Main content sections |
| **Background alt** | `#eff1f3` | Light gray — service icon circles, hover states |
| **Overlay** | `rgba(0,0,0,0.4)` | Hero + section overlays |
| **Font family** | `"Jost", sans-serif` | Google Fonts — weights 400, 700, 900 |
| **Button radius** | `30px` | Pill-shaped buttons |
| **Social-circle radius** | `50%` | Perfectly round social icons |
| **Service icon radius** | `50%` | Round icon containers |
| **Border radius base** | `4px` | Default Bootstrap radius |
| **Section backgrounds** | Hero: overlay bg-light + bg-image; Testimonials: `bg-primary` (#C2E54F); Blog: `bg-light`; Footer: `bg-light` |

## Visual design notes (from screenshot analysis)

- Clean, professional business-services layout with strong lime-green accent
- Full-width hero with dark overlay on background image, centered white text
- About section: 3-column layout (text blocks flanking a center image)
- Services: 2×3 card grid, each card has a circular icon (colored on `#eff1f3` bg) + heading + description
- Projects: filter button bar (All / Web / Design / Brand) + 3-column image gallery with hover zoom overlay
- Testimonials: lime-green (`#C2E54F`) full-width section with centered owl-carousel slider (quote + attribution)
- Blog: 3-column card grid — image on top, white card body below with title, date, and "Read More" link
- Contact: 2-column — left side form (name, email, subject, message, submit), right side address blocks (London, New York)
- Footer: light bg, 4 columns (About blurb, Services links, Resources links, Templates links + social icons)
- Sticky navbar with logo left, nav links right; scrolls smoothly to sections

## Gherkin requirements

### Navbar
```gherkin
Feature: Sticky navigation bar

  Scenario: Renders logo and navigation links
    Given the page loads
    Then a sticky navbar is visible at the top
    And the logo text reads "Servecraft"
    And navigation links include "Home", "About", "Services", "Projects", "Blog", "Contact"

  Scenario: Navbar becomes sticky on scroll
    Given the user scrolls past the hero section
    Then the navbar remains fixed at the top of the viewport

  Scenario: Mobile hamburger menu
    Given the viewport width is less than 992px
    Then a hamburger menu icon is visible
    And clicking it opens the mobile navigation drawer
```

### Hero
```gherkin
Feature: Hero section

  Scenario: Displays hero content
    Given the hero section is in view
    Then a heading reads "We Are Digital Services"
    And a subtext paragraph is visible below the heading
    And a CTA button reads "Our Services"
    And the section has a background image with a dark overlay

  Scenario: CTA scrolls to services
    Given the user clicks the "Our Services" button
    Then the page scrolls smoothly to the Services section
```

### About
```gherkin
Feature: About Us section

  Scenario: Displays about content
    Given the About section is in view
    Then a section heading reads "About Us"
    And three columns are visible: left text, center image, right text
```

### Services
```gherkin
Feature: Services section

  Scenario: Displays six service cards
    Given the Services section is in view
    Then a centered heading reads "Services"
    And six service cards are displayed in a 2-column grid
    And each card has a circular icon, a heading, and a description
    And the service headings are: "Content Marketing", "Social Media Marketing", "Brand & Logo Design", "Social Media Advertising", "Search Engine Marketing", "Web Design / Development"
```

### Projects
```gherkin
Feature: Projects gallery

  Scenario: Filter buttons visible
    Given the Projects section is in view
    Then a centered heading reads "Projects"
    And filter buttons display: "All", "Web", "Design", "Brand"
    And "All" is active by default

  Scenario: Gallery grid with hover overlay
    Given the filter is set to "All"
    Then nine project images are displayed in a 3-column grid
    And hovering over an image shows a search-icon overlay

  Scenario: Filtering by category
    Given the user clicks the "Web" filter button
    Then only images tagged "web" are displayed
    And the "Web" button becomes active
```

### Testimonials
```gherkin
Feature: Testimonials carousel

  Scenario: Displays testimonials on green background
    Given the Testimonials section is in view
    Then the section background is lime-green (#C2E54F)
    And a heading reads "What Client Are Sayings"
    And a carousel shows testimonial slides
    And each slide contains a blockquote with a quote and an attribution (name, title)
    And carousel navigation dots are visible
```

### Blog
```gherkin
Feature: Blog section

  Scenario: Displays blog cards
    Given the Blog section is in view
    Then a section heading reads "Blog"
    And three blog entry cards are displayed in a 3-column grid
    And each card has an image, a title, a date, and a "Read More" link
```

### Contact
```gherkin
Feature: Contact section

  Scenario: Form fields present
    Given the Contact section is in view
    Then a heading reads "Contact Form"
    And the form has fields: First name, Full name, Email address, Subject, Message
    And a "Send Message" submit button is visible

  Scenario: Location information
    Given the Contact section is in view
    Then two location blocks are visible: "London" and "New York"
    And each location shows Address, Phone, and Email details
```

### Footer
```gherkin
Feature: Footer

  Scenario: Footer layout
    Given the footer is in view
    Then the footer has a light background
    And four columns are visible: About blurb, Services links, Resources links, Templates links
    And social media icons are displayed (Twitter, Facebook, Instagram, Dribbble, LinkedIn)
    And a copyright line is present
    And a link to Component Dock is present
```

## Verification checklist

- [ ] Spec reviewed: all sections from preview captured
- [ ] Design tokens match preview CSS (#C2E54F primary, Jost font, 30px button radius)
- [ ] Section order matches preview 1:1 (Navbar → Hero → About → Services → Projects → Testimonials → Blog → Contact → Footer)
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` = `servecraft.free.componentdock.com`
- [ ] `homepage` in `package.json` = `https://servecraft.free.componentdock.com`
- [ ] Placeholder images use `https://picsum.photos/seed/servecraft-<n>/<w>/<h>`
- [ ] Google Fonts loaded via `<link>` in index.html (Jost)
- [ ] Icons from `lucide-react`
