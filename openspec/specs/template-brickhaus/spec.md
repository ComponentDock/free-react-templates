# Template: Brickhaus (Construction / Home Builder)

## Purpose

Recreation of ColorLib **Homebuilder** — a construction / home builder company website template.

- **Source:** https://colorlib.com/wp/template/homebuilder/
- **Preview:** https://preview.colorlib.com/theme/homebuilder/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/homebuilder-free-template.jpg
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/brickhaus`
- **Surge target:** `brickhaus.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and HTML structure.

| Token | Value | Notes |
|---|---|---|
| Font family | `"Poppins", Arial, sans-serif` | Loaded via Google Fonts; weights 300–900 |
| Primary brand color | `#fdbe34` (amber/gold) | Used for: `.bg-primary`, `.services .icon`, `.subheading`, `.btn.btn-primary`, testimonial section bg |
| Dark navy | `#00043c` | Footer bg, services-2 third card bg |
| Dark overlay on hero | `rgba(0,0,0,0.4)` to `transparent` gradient | `.hero-wrap .overlay` |
| Text color (body) | `#000000` | Primary text |
| Text color (white) | `#fff` | On dark/navy/gold backgrounds |
| Text muted | `rgba(0,0,0,0.7)` | Secondary text |
| Light gray bg | `#f8f9fd` | Counter section, alternating bg |
| Soft yellow | `#fede99` | Services icon secondary circle |
| Service-2 icon ring | `#fdc64d` | Services-2 icon bg |
| Button border-radius | `3px` | All buttons use `border-radius: 3px` |
| Section padding | `7em 0` (desktop) / `6em 0` (mobile) | `.ftco-section` |
| Subheading | `font-size: 16px`, uppercase, letter-spacing 2px, `#fdbe34`, weight 800 | |
| Counter number | `font-size: 50px`, weight 700, `rgba(0,0,0,0.8)` | `.ftco-counter .text .number` |

### Color Palette Summary

| Role | Hex | Used In |
|---|---|---|
| Brand / Primary | `#fdbe34` | Nav active, icons, CTA buttons, testimonial bg, subheadings, newsletter bar |
| Dark Navy | `#00043c` | Footer, services-2 card 3 |
| White | `#fff` | Page background, card bg, button text |
| Black | `#000000` | Body text, icon colors, hero text |
| Light Gray | `#f8f9fd` | Counter section bg |
| Soft Gold | `#fede99` | Services icon secondary circle |
| Muted | `rgba(0,0,0,0.7)` | Secondary/body text |

## Section Structure

Reproduced in exact order from the preview DOM:

1. **TopBar** — Logo text "Homebuilder." (bold "builder." span) + social media icons (Facebook, Twitter, Instagram, Dribbble) right-aligned
2. **Navbar** — dark bg, hamburger toggler, search form, nav links: Home, About, Our team, Project, Blog, Contact
3. **Hero** — Full-width image carousel (owl-carousel), 3 slides with overlay gradient, centered text (h2 subtitle + h1 title), dot indicators
4. **Services Row** — 4-column grid: icon in gold circle + heading + description. Items: Construction, House Renovation, Painting, Architecture Design
5. **Services Row 2** — 3-column row (no gutters): horizontal icon + text. Cards: Expert & Professional (light bg), High Quality Work (gold bg), 24/7 Help Support (navy bg)
6. **About** — Split layout: left = image/video with play button popup, right = "Welcome to Home Builder" subheading + h2 + paragraph + tabbed content (Our Mission / Our Vision / Our Value)
7. **Counter** — 4-column stats: 50 Years Experienced, 8500 Project Done, 378 Professional Expert, 1200 Machineries Equipments
8. **Work Gallery** — 3×2 grid of project images with overlay expand icon, category label + title
9. **Testimonials** — Gold bg (#fdbe34), carousel with quote icon, testimonial text, circular person avatar + name + position
10. **Blog** — 3-column blog cards: image with rounded top, meta (date, author, comments), title
11. **Newsletter** — Gold bar: "Subscribe to our Newsletter" heading + email input + subscribe button
12. **Footer** — Dark bg: 3-column about section (About us + social links), link columns (Services, About, Resources), copyright, and right sidebar with "Request A Quote" form (name, email, subject, message, send)

## Gherkin Requirements

### Feature: Brickhaus — Construction Company Website

#### Scenario: TopBar displays logo and social links
- **Given** the user loads the page
- **Then** a top bar is visible with the logo "Brickhaus." on the left
- **And** social media icon links (Facebook, Twitter, Instagram, Dribbble) are displayed on the right

#### Scenario: Navbar navigation
- **Given** the user loads the page
- **When** the user views the navigation bar
- **Then** nav links are displayed: Home, About, Our team, Project, Blog, Contact
- **And** a search form input is visible on the right side of the navbar
- **And** on mobile the hamburger menu toggles the nav links

#### Scenario: Hero carousel
- **Given** the user loads the page
- **Then** a full-width hero carousel is displayed
- **And** it shows a background image with a dark gradient overlay
- **And** centered heading text is visible (subtitle + main title)
- **And** dot indicators allow navigation between 3 slides

#### Scenario: Services Row 1
- **Given** the user scrolls to the services section
- **Then** 4 service cards are displayed in a row
- **And** each card has a gold circular icon, heading, and description
- **And** the services are: Construction, House Renovation, Painting, Architecture Design

#### Scenario: Services Row 2
- **Given** the user scrolls to the second services row
- **Then** 3 horizontal service cards are displayed
- **And** card 1 (Expert & Professional) has a light gray background
- **And** card 2 (High Quality Work) has a gold background
- **And** card 3 (24/7 Help Support) has a navy background with white/gold text

#### Scenario: About section with tabs
- **Given** the user scrolls to the about section
- **Then** a split layout is displayed: image/video on left, text on right
- **And** a play button overlay is visible on the image
- **And** the right side shows "Welcome to Home Builder" subheading, heading, and paragraph
- **And** 3 tab buttons are visible: Our Mission, Our Vision, Our Value
- **When** the user clicks a tab
- **Then** the corresponding content panel is shown

#### Scenario: Counter stats
- **Given** the user scrolls to the counter section
- **Then** 4 stat counters are displayed
- **And** each shows a large number with a label (Years Experienced, Project Done, Professional Expert, Machineries Equipments)
- **And** the numbers animate on scroll (count up from 0)

#### Scenario: Work gallery
- **Given** the user scrolls to the portfolio section
- **Then** a 3×2 grid of project images is displayed
- **And** each image has a hover overlay with an expand icon
- **And** each card shows a category label and project title

#### Scenario: Testimonials carousel
- **Given** the user scrolls to the testimonials section
- **Then** the section has a gold background
- **And** a testimonial carousel is displayed with quote text
- **And** each testimonial shows a circular avatar, name, and position

#### Scenario: Blog cards
- **Given** the user scrolls to the blog section
- **Then** 3 blog cards are displayed in a row
- **And** each card has a rounded-top image, meta info (date, author, comment count), and title

#### Scenario: Newsletter bar
- **Given** the user scrolls to the newsletter section
- **Then** a gold background bar is displayed
- **And** a "Subscribe to our Newsletter" heading is visible on the left
- **And** an email input + subscribe button are on the right

#### Scenario: Footer
- **Given** the user scrolls to the footer
- **Then** a dark navy background footer is displayed
- **And** it contains: About us column with social links, Services links, About links, Resources links
- **And** a "Request A Quote" form is displayed on the right with name, email, subject, message fields and send button
- **And** a copyright line with "Made with Component Dock" link is present

#### Scenario: Responsive behavior
- **Given** the user is on a mobile viewport (< 768px)
- **Then** the navbar collapses to a hamburger menu
- **And** service columns stack vertically
- **And** the about section stacks image above text
- **And** the footer columns stack vertically
- **And** all touch targets are at least 44×44px

## Verification Checklist

- [ ] Spec reviewed for completeness (all 12 sections accounted for)
- [ ] Design tokens match live preview CSS (brand #fdbe34, navy #00043c, Poppins font, 3px radius)
- [ ] Section order matches preview DOM 1:1
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Surge target: `brickhaus.free.componentdock.com`
- [ ] Package name: `@free-react-templates/brickhaus`
- [ ] All images use placeholder URLs (picsum.photos)
- [ ] All icons from lucide-react
- [ ] Google Fonts loaded via `<link>` in index.html
