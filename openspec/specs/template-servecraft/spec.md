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

## Requirements

### Navbar

Feature: Sticky navigation bar

#### Scenario: Renders logo and navigation links

- **GIVEN** the page loads
- **THEN** a sticky navbar is visible at the top
- **AND** the logo text reads "Servecraft"
- **AND** navigation links include "Home", "About", "Services", "Projects", "Blog", "Contact"

#### Scenario: Navbar becomes sticky on scroll

- **GIVEN** the user scrolls past the hero section
- **THEN** the navbar remains fixed at the top of the viewport

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport width is less than 992px
- **THEN** a hamburger menu icon is visible
- **AND** clicking it opens the mobile navigation drawer

### Hero

Feature: Hero section

#### Scenario: Displays hero content

- **GIVEN** the hero section is in view
- **THEN** a heading reads "We Are Digital Services"
- **AND** a subtext paragraph is visible below the heading
- **AND** a CTA button reads "Our Services"
- **AND** the section has a background image with a dark overlay

#### Scenario: CTA scrolls to services

- **GIVEN** the user clicks the "Our Services" button
- **THEN** the page scrolls smoothly to the Services section

### About

Feature: About Us section

#### Scenario: Displays about content

- **GIVEN** the About section is in view
- **THEN** a section heading reads "About Us"
- **AND** three columns are visible: left text, center image, right text

### Services

Feature: Services section

#### Scenario: Displays six service cards

- **GIVEN** the Services section is in view
- **THEN** a centered heading reads "Services"
- **AND** six service cards are displayed in a 2-column grid
- **AND** each card has a circular icon, a heading, and a description
- **AND** the service headings are: "Content Marketing", "Social Media Marketing", "Brand & Logo Design", "Social Media Advertising", "Search Engine Marketing", "Web Design / Development"

### Projects

Feature: Projects gallery

#### Scenario: Filter buttons visible

- **GIVEN** the Projects section is in view
- **THEN** a centered heading reads "Projects"
- **AND** filter buttons display: "All", "Web", "Design", "Brand"
- **AND** "All" is active by default

#### Scenario: Gallery grid with hover overlay

- **GIVEN** the filter is set to "All"
- **THEN** nine project images are displayed in a 3-column grid
- **AND** hovering over an image shows a search-icon overlay

#### Scenario: Filtering by category

- **GIVEN** the user clicks the "Web" filter button
- **THEN** only images tagged "web" are displayed
- **AND** the "Web" button becomes active

### Testimonials

Feature: Testimonials carousel

#### Scenario: Displays testimonials on green background

- **GIVEN** the Testimonials section is in view
- **THEN** the section background is lime-green (#C2E54F)
- **AND** a heading reads "What Client Are Sayings"
- **AND** a carousel shows testimonial slides
- **AND** each slide contains a blockquote with a quote and an attribution (name, title)
- **AND** carousel navigation dots are visible

### Blog

Feature: Blog section

#### Scenario: Displays blog cards

- **GIVEN** the Blog section is in view
- **THEN** a section heading reads "Blog"
- **AND** three blog entry cards are displayed in a 3-column grid
- **AND** each card has an image, a title, a date, and a "Read More" link

### Contact

Feature: Contact section

#### Scenario: Form fields present

- **GIVEN** the Contact section is in view
- **THEN** a heading reads "Contact Form"
- **AND** the form has fields: First name, Full name, Email address, Subject, Message
- **AND** a "Send Message" submit button is visible

#### Scenario: Location information

- **GIVEN** the Contact section is in view
- **THEN** two location blocks are visible: "London" and "New York"
- **AND** each location shows Address, Phone, and Email details

### Footer

Feature: Footer

#### Scenario: Footer layout

- **GIVEN** the footer is in view
- **THEN** the footer has a light background
- **AND** four columns are visible: About blurb, Services links, Resources links, Templates links
- **AND** social media icons are displayed (Twitter, Facebook, Instagram, Dribbble, LinkedIn)
- **AND** a copyright line is present
- **AND** a link to Component Dock is present

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
