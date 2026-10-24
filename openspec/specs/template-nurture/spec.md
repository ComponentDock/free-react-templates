# Template: Nurture (Kids Learning Center)

## Purpose

Recreation of ColorLib's **Nurture** kids learning center template as a React
single-page application. The original is a colorful, playful education/daycare
landing page with a hero, feature icons, class offerings, about section, school
news, pricing plans, and a footer.

- **Source:** https://colorlib.com/wp/template/nurture/
- **Preview:** https://preview.colorlib.com/theme/nurture/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `nurture` (no collision with existing apps/specs)
- **Source design:** ColorLib "Nurture" — https://colorlib.com/wp/template/nurture/

## Design Tokens

### Colors

| Token               | Hex       | Usage                                    |
| ------------------- | --------- | ---------------------------------------- |
| `--color-brand`     | `#0fb78d` | Primary green — buttons, accents         |
| `--color-sky`       | `#4fb0dc` | Secondary blue — icons, highlights       |
| `--color-lime`      | `#5cb100` | Tertiary green — additional accents      |
| `--color-tangerine` | `#ec661f` | Orange — CTA buttons, pricing highlights |
| `--color-ink`       | `#333333` | Primary text / headings                  |
| `--color-mist`      | `#666666` | Muted body text                          |
| `--color-paper`     | `#ffffff` | White section backgrounds                |
| `--color-cloud`     | `#f7f9fc` | Light gray section backgrounds           |

### Typography

| Role            | Font family | Notes                       |
| --------------- | ----------- | --------------------------- |
| Body / Headings | Poppins     | Sans-serif, used throughout |

### Buttons & Radii

| Element          | Style                                                                         |
| ---------------- | ----------------------------------------------------------------------------- |
| Primary button   | bg brand green (#0fb78d), white text, rounded pill, padding ~0.75rem vertical |
| Secondary button | Outline / transparent, border-radius pill                                     |
| CTA button       | bg orange (#ec661f), white text, rounded pill                                 |

### Section Backgrounds

| Section          | Background                          |
| ---------------- | ----------------------------------- |
| Hero             | Full-bleed image with dark overlay  |
| Features (icons) | White                               |
| What We Offer    | White                               |
| Education CTA    | Parallax bg image with dark overlay |
| About Us         | White                               |
| School News      | Light gray (#f7f9fc)                |
| Enroll CTA       | Parallax bg image with dark overlay |
| Pricing          | White                               |
| Footer           | Dark (#2b2b2b)                      |

## Requirements

### Navbar

#### Scenario: Fixed top navigation bar

- **GIVEN** the page loads
- **THEN** a fixed navbar is visible at the top
- **AND** it contains the brand name "Nurture"
- **AND** it has navigation links: Home, About, Courses, Pricing, News, Contact
- **AND** on mobile (< 768px) a hamburger toggles the menu

#### Scenario: Navbar links scroll to sections

- **GIVEN** the navbar is visible
- **WHEN** the user clicks "About"
- **THEN** the page scrolls smoothly to the About section

### Hero Section

#### Scenario: Hero with headline and CTA

- **GIVEN** the page loads
- **THEN** the hero section spans the full viewport height
- **AND** it displays a background image with a dark overlay
- **AND** a heading reads "Learning Center for Your Kids"
- **AND** there is an "Enroll Now" primary button

#### Scenario: Hero icon cards

- **GIVEN** the hero is visible
- **THEN** 3 icon cards are shown below the heading:
| icon  | label |
| book  | Learn |
| play  | Play  |
| food  | Meal  |

### Features / What We Offer

#### Scenario: Six class type cards

- **GIVEN** the features section is in view
- **THEN** the heading reads "What We Offer"
- **AND** 6 class cards are displayed in a 3x2 grid:
| title          | icon type |
| Music Class    | music     |
| Math Class     | calculator |
| English Class  | book      |
| Reading for Kids | book-open |
| History Class  | clock     |
| Active Class   | activity  |
- **AND** each card has an icon, title, and short description

### Education CTA Section

#### Scenario: Parallax CTA banner

- **GIVEN** the CTA section is in view
- **THEN** it displays "Education for Tomorrow's Leaders"
- **AND** has a "Learn More" button
- **AND** the section has a parallax background image

### About Us Section

#### Scenario: About section with image and text

- **GIVEN** the about section is in view
- **THEN** the heading reads "About Us"
- **AND** there is descriptive text about the learning center
- **AND** there is an image alongside the text
- **AND** a "Learn More" link or button is present

### School News Section

#### Scenario: News cards grid

- **GIVEN** the news section is in view
- **THEN** the heading reads "School News"
- **AND** 3 news post cards are displayed
- **AND** each card has an image, date, title, and excerpt

### Enroll CTA Section

#### Scenario: Enrollment call-to-action

- **GIVEN** the enroll section is in view
- **THEN** it displays "Enroll Your Kids This Summer to get 30% off"
- **AND** has a "Get Started" button
- **AND** the section has a parallax background image

### Pricing Section

#### Scenario: Three pricing plans

- **GIVEN** the pricing section is in view
- **THEN** the heading reads "Pricing"
- **AND** 3 pricing cards are displayed:
| plan    | features |
| Infant  | basic    |
| Toddler | standard |
| Lad     | premium  |
- **AND** each card has a plan name, price, feature list, and a "Get Started" button

### Footer

#### Scenario: Footer layout

- **GIVEN** the footer is visible
- **THEN** it has a dark background
- **AND** it contains brand info, contact details, and quick links
- **AND** a copyright line at the bottom
- **AND** a link to https://www.componentdock.com/ ("Component Dock")

#### Scenario: Newsletter subscription

- **GIVEN** the footer newsletter form is visible
- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the form accepts input (frontend only)

### Accessibility

#### Scenario: Keyboard navigation

- **GIVEN** the page loads
- **THEN** all interactive elements are keyboard-focusable
- **AND** focus-visible rings appear on buttons and links
- **AND** skip-to-content link is present

#### Scenario: Screen reader support

- **GIVEN** the page loads
- **THEN** all images have descriptive alt text
- **AND** form inputs have associated labels
- **AND** heading hierarchy is sequential (h1 > h2 > h3)

### Responsive Design

#### Scenario: Mobile layout

- **GIVEN** the viewport is 375px wide
- **THEN** the navbar collapses to a hamburger menu
- **AND** the hero text is readable (not overflowing)
- **AND** feature cards stack vertically
- **AND** pricing cards stack vertically
- **AND** the footer columns stack vertically

#### Scenario: Tablet layout

- **GIVEN** the viewport is 768px wide
- **THEN** the layout adapts with 2-column grids where appropriate

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/nurture/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/nurture/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] All sections render in correct order matching the original
- [ ] Brand colors (#0fb78d green, #4fb0dc blue, #ec661f orange) used correctly
- [ ] Poppins font loaded and applied
- [ ] Hero has background image with overlay
- [ ] Feature cards in 3x2 grid
- [ ] Pricing cards show 3 plans
- [x] Footer links to https://www.componentdock.com/
- [ ] Responsive: mobile (375px), tablet (768px), desktop (1200px+)
- [x] No ColorLib references in app code
- [x] public/CNAME = nurture.free.componentdock.com
- [x] package.json homepage = https://nurture.free.componentdock.com
- [ ] Tests pass with 100% coverage
- [ ] `npm run verify:app` passes for nurture
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
