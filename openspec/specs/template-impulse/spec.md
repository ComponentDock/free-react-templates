# Template: Impulse (Creative Agency / Portfolio)

## Purpose

Recreation of ColorLib **Innova** template.

- Source slug: `innova`
- Preview URL: https://preview.colorlib.com/theme/innova/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/innova-free-template.jpg
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- New name: `impulse` (apps/impulse, @free-react-templates/impulse)
- Deploy target: https://impulse.free.componentdock.com

## Design tokens (extracted from live preview)

| Token            | Value                                                     | Source                                         |
| ---------------- | --------------------------------------------------------- | ---------------------------------------------- |
| Brand primary    | `#6f42c1` (purple)                                        | CSS variables, btn primary, active nav, CTA bg |
| Dark             | `#343a40`                                                 | Navbar bg (mobile), footer accents             |
| Heading text     | `#000000`                                                 | h1, h2, h3 defaults                            |
| Body text        | `#6c757d`                                                 | Global body color                              |
| Light bg         | `#f8f9fa`                                                 | Testimonials section                           |
| Overlay          | `rgba(0,0,0,0.3)`                                         | Hero overlay, portfolio hover                  |
| Font headings    | `Abril Fatface` (weight 900)                              | Google Fonts                                   |
| Font body        | `Roboto Mono` (weight 400)                                | Google Fonts                                   |
| Button radius    | `0` (square corners)                                      | `.btn` border-radius                           |
| Button uppercase | yes, letter-spacing 0.2em, font-weight 900                | `.btn` styles                                  |
| Outline white    | 2px solid white, white text; hover → white bg, black text | `.btn-outline-white`                           |
| Outline black    | 2px solid black, black text; hover → black bg, white text | `.btn-outline-black`                           |

## Section order (from live DOM)

1. Navbar — transparent overlay on hero (desktop), black bg on mobile, brand "Impulse" in Abril Fatface, links: Home, About, Services, Projects, Contact
2. Hero — full-viewport parallax bg image, dark overlay (0.3 opacity), centered large heading in white (Abril Fatface 7rem desktop / 3rem mobile)
3. Services — 4-column grid on desktop (stacks on mobile), each card: purple icon, h3 title, short description. Items: Email Design, Web Design, Mobile Design, Research
4. Portfolio ("Selected Work") — 2×2 grid, images with 10px white border, hover overlay reveals project name + category in centered white text
5. Testimonials ("Happy Client") — light gray bg (#f8f9fa), carousel with avatar (circle), name, company, blockquote. Dots nav below
6. About — Two column layout with images and text, "Creative We Grow" heading, "Learn More" outline-black button
7. CTA ("Get Started") — brand purple bg (#6f42c1), centered white heading + subtitle, outline-white button "Get In Touch!"
8. Footer — 3 columns: About Us text, Navigation links, Social icons (Twitter, Facebook, LinkedIn, Instagram). Component Dock link

## Requirements

### Requirement: Navbar renders correctly

Users SHALL see a transparent navbar overlaying the hero on desktop and a dark navbar on mobile.

#### Scenario: Desktop navbar renders with brand and links

- **WHEN** the viewport width is >= 992px
- **THEN** a dark transparent navbar overlays the hero
- **AND** the brand text "Impulse" is displayed in Abril Fatface font
- **AND** nav links "Home", "About", "Services", "Projects", "Contact" are visible
- **AND** active link color is brand purple

#### Scenario: Mobile navbar toggles

- **WHEN** the viewport width is < 992px and the hamburger button is clicked
- **THEN** the nav links expand vertically
- **AND** navbar background is black

### Requirement: Hero section renders full-viewport

Users SHALL see a full-viewport hero with a background image, dark overlay, and large centered heading.

#### Scenario: Hero renders full-viewport with background image

- **WHEN** the page loads
- **THEN** the hero occupies the full viewport height (min 700px)
- **AND** a background image covers the section
- **AND** a dark semi-transparent overlay (opacity 0.3) sits over the image
- **AND** the heading is centered in white

#### Scenario: Hero heading uses Abril Fatface font

- **WHEN** the hero section is rendered
- **THEN** the heading font-family is Abril Fatface
- **AND** the heading font-size is 7rem on desktop and 3rem on mobile

### Requirement: Services section shows four cards

Users SHALL see four service cards in a responsive grid with purple icons.

#### Scenario: Four service cards render in a grid

- **WHEN** the services section is visible
- **THEN** 4 service cards are displayed in a 4-column grid on desktop
- **AND** each card has a purple icon, a title, and a description
- **AND** the services are: Email Design, Web Design, Mobile Design, Research

### Requirement: Portfolio grid with hover overlay

Users SHALL see a 2×2 portfolio grid with hover overlays showing project info.

#### Scenario: Portfolio grid renders 4 items

- **WHEN** the portfolio section is visible
- **THEN** a section title "Selected Work" is displayed centered
- **AND** 4 portfolio items render in a 2×2 grid
- **AND** each item shows a project image with white border

#### Scenario: Portfolio hover reveals overlay

- **WHEN** a portfolio item is hovered
- **THEN** a dark overlay fades in over the image
- **AND** the project name and category text appear centered in white

### Requirement: Testimonials carousel

Users SHALL see a testimonial carousel on a light background with dot navigation.

#### Scenario: Testimonials carousel renders on light background

- **WHEN** the testimonials section is visible
- **THEN** the section has a light gray background
- **AND** a heading "Happy Client" is displayed centered
- **AND** a testimonial card shows a circular avatar, name, company, and quote
- **AND** carousel navigation dots are visible

### Requirement: Call-to-action section

Users SHALL see a CTA section with brand purple background and action button.

#### Scenario: CTA renders with brand background

- **WHEN** the CTA section is visible
- **THEN** the background is brand purple
- **AND** centered white text reads "Get Started"
- **AND** a "Get In Touch!" outline-white button is displayed

### Requirement: About section

Users SHALL see an about section with text and image.

#### Scenario: About section renders with heading and CTA

- **WHEN** the about section is visible
- **THEN** a label "About Us" is displayed
- **AND** a heading "Creative We Grow" is shown
- **AND** a "Learn More" outline-black button links to the about page

### Requirement: Footer renders with columns and Component Dock link

Users SHALL see a footer with about text, navigation links, social icons, and a Component Dock link.

#### Scenario: Footer renders with columns

- **WHEN** the footer is visible
- **THEN** an "About Us" column with description text is shown
- **AND** a "Navigation" column with links is shown
- **AND** a social icons column is shown

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is rendered
- **THEN** a link points to https://www.componentdock.com/
- **AND** the link text references Component Dock

## Verification checklist

- [ ] Navbar: transparent overlay on hero, dark on mobile, brand in Abril Fatface
- [ ] Hero: full-viewport, background image, dark overlay, large centered heading
- [ ] Services: 4 cards with purple icons, responsive grid
- [ ] Portfolio: 2×2 grid, hover overlay with project info
- [ ] Testimonials: light bg, carousel with avatar/name/quote, dot navigation
- [ ] About: two-column layout, heading, Learn More button
- [ ] CTA: purple bg, centered text, outline-white button
- [ ] Footer: 3 columns (about, nav, social), Component Dock link
- [ ] All design tokens match extracted values
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Placeholder images via picsum.photos/seed/impulse-*
