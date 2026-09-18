# Template: FrameCraft (Home Builder Landing)

## Purpose

FrameCraft is a single-page home builder template — a faithful React
recreation of the ColorLib free "Homebuilder" template
(preview: https://preview.colorlib.com/theme/homebuilder/ —
home building/renovation services landing), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source mapping:
- **ColorLib source:** "Homebuilder"
  (https://colorlib.com/wp/template/homebuilder/)
- **Preview URL:** https://preview.colorlib.com/theme/homebuilder/
  (HTTP 200, reachable; title: "Home Builder - Free Bootstrap 4 Template by Colorlib")

Design tokens captured from the live preview CSS (`css/style.css`):

- Brand gold/amber `#fdbe34` (active nav item bg, icon circles, buttons,
  highlight accents, section headings, counter section bg, team card borders,
  testimonial section bg) — the dominant accent color (43 uses)
- Dark navy `#00043c` (navbar bg, dark sections, some heading color)
- White `#fff` (content backgrounds, button text)
- Light background `#f8f9fd` (alternate sections)
- Text colors: `#333333` (body), `#6c757d` (muted/secondary)
- Typeface: **Poppins** (400/500/600/700/800) — Google Fonts `<link>`
- Button style: gold `#fdbe34` background with white text, rounded (Bootstrap
  `.btn-primary` overridden with gold), padding for CTAs
- Hero: 3-slide carousel (owl carousel) with dark overlay background images
  (house/construction photos), large white heading ("PROFESSIONAL BUILDER"),
  gold subtitle, white body text, navigation dots
- Navbar: dark navy `#00043c` background, white text, gold active state,
  search form on right, hamburger toggle for mobile
- Top bar: white bg with logo "Homebuilder." (bold + gold span) + social icons
- Services section: 4-column icon grid — gold circle icons (Construction,
  House Renovation, Painting, Architecture Design) + titles + descriptions
- Features row: 3-card horizontal bar (Expert & Professional, High Quality Work,
  24/7 Help Support) — icon + title + description
- About section: "Welcome to Home Builder" heading, tabbed content
  (Our Mission / Our Vision / Our Value), descriptive paragraph
- Counter section: 4 counters (Years of Experience / Project Done /
  Professional Expert / Machineries Equipments) — animated on scroll
- Projects gallery: owl carousel of project cards with images + category labels
- Testimonials: carousel on gold `#fdbe34` background ("bg-primary"),
  quote text + author name + role
- Blog section: 3 blog cards (image, date, admin, comments, title)
- Footer: dark bg with newsletter signup, About us text, Services links,
  About links, Resources links, Request A Quote form, copyright
  (→ Component Dock)

Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons.

FrameCraft lives in `apps/framecraft` and uses shared components from
`packages/ui` (Button, cn).

## Requirements

### Requirement: Top bar and navigation

The system SHALL render a top bar with the logo "FrameCraft" and social media
icon links, plus a dark navy navbar with section links (Home, About, Our team,
Project, Blog, Contact), an active gold state for the current section, and a
search form. On mobile, a hamburger toggle opens the nav.

#### Scenario: Top bar

- **GIVEN** the page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show the site name "FrameCraft" with the "Craft" portion
  styled differently (gold accent)
- **AND** it SHALL show social media icon links

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show links to Home, About, Our team, Project, Blog, and Contact
- **AND** "Home" SHALL have a gold active/highlighted state
- **AND** it SHALL show a search input field

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on mobile
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu

### Requirement: Hero slider

The system SHALL render a 3-slide hero carousel with dark overlay background
images, a gold subtitle, large white uppercase headline ("PROFESSIONAL BUILDER"),
a description paragraph, and navigation dots.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show a gold subtitle ("WE BUILD YOUR HOME")
- **AND** it SHALL show a large white headline (e.g. "PROFESSIONAL BUILDER")
- **AND** it SHALL show a description paragraph
- **AND** it SHALL show slide navigation dots

#### Scenario: Slider cycling

- **GIVEN** the hero slider is visible
- **WHEN** the slider auto-plays or the user navigates
- **THEN** it SHALL transition between 3 slides

### Requirement: Services section

The system SHALL render a 4-column services grid with gold circle icons,
service titles (Construction, House Renovation, Painting, Architecture Design),
and description text for each.

#### Scenario: Services display

- **GIVEN** the page is rendered
- **WHEN** the services section is visible
- **THEN** it SHALL show 4 service items with gold circle icons
- **AND** each SHALL have a title and description paragraph

### Requirement: Features row

The system SHALL render a 3-card horizontal features bar with icons,
titles (Expert & Professional, High Quality Work, 24/7 Help Support),
and short descriptions.

#### Scenario: Features display

- **GIVEN** the page is rendered
- **WHEN** the features row is visible
- **THEN** it SHALL show 3 feature cards with icons, titles, and descriptions

### Requirement: About section

The system SHALL render an "About" section with the heading "Welcome to
FrameCraft", a subtitle "We create and turn into reality", a description
paragraph, and a tabbed content area with 3 tabs (Our Mission, Our Vision,
Our Value) each showing a different paragraph.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is visible
- **THEN** it SHALL show the heading "Welcome to FrameCraft"
- **AND** it SHALL show a subtitle "We create and turn into reality"
- **AND** it SHALL show 3 tabs with content

#### Scenario: Tab switching

- **GIVEN** the about section is visible
- **WHEN** the user clicks a different tab
- **THEN** the tab SHALL become active and show the corresponding content

### Requirement: Counter section

The system SHALL render a counter row with 4 animated counters
(Years of Experience, Project Done, Professional Expert, Machineries
Equipments) on a dark background.

#### Scenario: Counter display

- **GIVEN** the page is rendered
- **WHEN** the counter section is visible
- **THEN** it SHALL show 4 counters that animate from 0 to their target value

### Requirement: Projects gallery

The system SHALL render a project gallery section with carousel of project
cards. Each card has an image and a category label (Building, College Health
Profession).

#### Scenario: Projects display

- **GIVEN** the page is rendered
- **WHEN** the projects section is visible
- **THEN** it SHALL show project cards with images and category labels

### Requirement: Testimonials section

The system SHALL render a testimonials carousel on a gold `#fdbe34` background
with the heading "Testimonial / Happy Clients", showing cards with quote text,
author name, and role.

#### Scenario: Testimonials display

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is visible
- **THEN** it SHALL show the heading "Testimonial" / "Happy Clients"
- **AND** it SHALL show at least 1 testimonial card with quote, author name, and role
- **AND** the section background SHALL be gold `#fdbe34`

### Requirement: Blog section

The system SHALL render a blog section with the heading "Our Blog / Recent Blog"
and 3 blog cards. Each card has an image, date, author name, comment count,
and title.

#### Scenario: Blog display

- **GIVEN** the page is rendered
- **WHEN** the blog section is visible
- **THEN** it SHALL show the heading "Our Blog" / "Recent Blog"
- **AND** it SHALL show 3 blog cards with image, date, author, comments, and title

### Requirement: Footer

The system SHALL render a dark footer with a newsletter signup form,
About us text, Services links, About links, Resources links, a
"Request A Quote" form, and a copyright line linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL show a newsletter signup ("Subscribe to our Newsletter")
- **AND** it SHALL show About us text with social icons
- **AND** it SHALL show column links for Services, About, and Resources
- **AND** it SHALL show a "Request A Quote" form with email + message + Send button
- **AND** the copyright SHALL link to https://www.componentdock.com/
