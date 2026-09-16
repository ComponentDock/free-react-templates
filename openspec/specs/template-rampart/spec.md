# Template: Rampart (Security Services Landing)

## Purpose

Rampart is a single-page security/services landing template — a React recreation
of the ColorLib free "Security" template
(preview: https://preview.colorlib.com/theme/security/ — security services
company landing page), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand/accent yellow `#fab700` (primary buttons, facts section background,
  newsletter button)
- Dark navy footer `#04091e`
- Text colors: `#222222` (primary), `#777777` (secondary/muted)
- Banner: full-screen hero with dark image overlay (`rgba(0,0,0,0.7)`)
- Typeface: Poppins (Google Fonts, weights 300–700)
- Buttons: yellow (#fab700) fill with white text, 1px border, rounded;
  on hover: white background, yellow text, yellow border
- Section backgrounds alternate white and light grey `#f9f9ff`
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Rampart lives in `apps/rampart` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Top bar

The system SHALL render a top utility bar with social icon links (Facebook,
Twitter, Dribbble, Behance) on the left and a phone number plus
"Register / Login" link on the right, separated from the main nav by a
horizontal rule.

#### Scenario: Top bar content

- **GIVEN** the page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show social icons for Facebook, Twitter, Dribbble and Behance
- **AND** it SHALL show a phone number "+880 012 3654 896" with a phone icon
- **AND** it SHALL show a "Register / Login" link

### Requirement: Navigation bar

The system SHALL render a main navigation bar with the site name "Rampart" and
links to Home, About, Services, Team, Pricing, Blog, and Contact, with a
mobile hamburger toggle.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Rampart" linking to `#home`
- **AND** it SHALL show links to Home, About, Services, Team, Pricing, Blog and
  Contact

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero banner

The system SHALL render a full-screen hero banner with a dark overlay on a
background image, a subtitle ("Opening on 21st February, 2018"), a headline
("Exhibition on Modern Era"), a paragraph of descriptive text, and a yellow
"Get Started" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero banner is displayed
- **THEN** it SHALL show the subtitle text
- **AND** it SHALL show the headline "Exhibition on Modern Era"
- **AND** it SHALL show a descriptive paragraph
- **AND** it SHALL show a "Get Started" button styled with the brand yellow
- **AND** the background SHALL have a dark overlay

### Requirement: Services section

The system SHALL render a "Our Offered Services" section with a heading,
subtitle, and three service cards in a row. Each card SHALL have an image
thumbnail, a title, and a description paragraph.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Offered Services"
- **AND** it SHALL show three service cards with titles "Basic & Common
  Repairs", "Brake Repairs & Services", and "Preventive Maintenance"
- **AND** each card SHALL display an image, title link, and description text

### Requirement: Features section

The system SHALL render a "Some Features that Made us Unique" section with a
heading, subtitle, and six feature items in a 3-column grid. Each feature
item SHALL have an icon, a title, and a description.

#### Scenario: Feature items

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "Some Features that Made us Unique"
- **AND** it SHALL show six feature items: "Expert Technicians",
  "Professional Service", "Great Support", "Technical Skills",
  "Highly Recommended", and "Positive Reviews"
- **AND** each feature item SHALL have an icon from lucide-react and a
  description paragraph

### Requirement: Facts/stats section

The system SHALL render a statistics counter section on a yellow (#fab700)
background with five stat counters: Projects Completed (2536), Happy Clients
(6784), Total Tasks Completed (1059), Cups of Coffee (2239), and In House
Professionals (435).

#### Scenario: Stat counters

- **GIVEN** the page is rendered
- **WHEN** the facts section is displayed
- **THEN** it SHALL have a yellow (#fab700) background
- **AND** it SHALL show five stat counters with the labels and values above
- **AND** each counter value SHALL be displayed in large bold white text

### Requirement: Gallery section

The system SHALL render a "Latest From Our Gallery" section with a heading,
subtitle, and seven gallery images in a masonry-style grid layout (2+1 top
row, 3 middle row, 2 bottom row using asymmetric column widths).

#### Scenario: Gallery grid

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Latest From Our Gallery"
- **AND** it SHALL display seven gallery image cards
- **AND** the layout SHALL use asymmetric columns for a masonry-like effect
- **AND** each image SHALL use a picsum.photos seeded placeholder

### Requirement: Blog section

The system SHALL render a "Latest From Our Blog" section with a heading,
subtitle, and four blog post cards. Each card SHALL have an image thumbnail,
a date, a title, a short excerpt, and a likes/comments meta row.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest From Our Blog"
- **AND** it SHALL show four blog post cards
- **AND** each card SHALL display an image, a date ("10 Jan 2018"), a title,
  an excerpt, and a meta row with likes and comments counts
- **AND** the card hover effect SHALL lift the image slightly

### Requirement: Footer

The system SHALL render a dark (#04091e) footer with three columns: "About Us"
with description text and copyright attribution to Component Dock, "Newsletter"
with an email input and arrow submit button, and "Follow Us" with social icon
links.

#### Scenario: Footer layout

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a dark (#04091e) background
- **AND** it SHALL show the "About Us" column with description and copyright
- **AND** it SHALL show a "Newsletter" column with email input and submit
- **AND** it SHALL show a "Follow Us" column with social icon links
- **AND** the copyright text SHALL link to `https://www.componentdock.com/`
  branded as "Component Dock" (NOT ColorLib)

## Verification checklist

- [ ] All sections render in the correct order: top bar → navbar → hero →
  services → features → facts → gallery → blog → footer
- [ ] Brand yellow #fab700 is used for buttons and facts section
- [ ] Dark navy #04091e background on footer
- [ ] Poppins font loaded via Google Fonts link
- [ ] Mobile hamburger menu toggles correctly with aria-expanded
- [ ] Gallery uses masonry-like asymmetric grid
- [ ] Blog cards show hover lift effect on images
- [ ] Newsletter form has email input with placeholder
- [ ] Footer links to Component Dock (not ColorLib)
- [ ] No ColorLib references in any app source files
- [ ] All images use picsum.photos seeded placeholders
- [ ] Icons use lucide-react (not font-awesome or linearicons)
- [ ] 100% test coverage on all component files
