# Template: Fern (Real Estate Landing)

## Purpose

Fern is a single-page real estate landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Ecoverde"
template (preview: https://colorlib.com/wp/template/ecoverde/ — Bootstrap 4
real estate website), built under a DIFFERENT name (**Fern**), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 real estate site with a green brand palette,
Nunito Sans typography, property search form, featured property cards,
city showcase sections, how-it-works steps, testimonials, agent profiles,
and a blog preview. Assets are NOT copied — picsum.photos seeded
placeholders + lucide-react icons replace all original imagery.

Fern lives in `apps/fern` and uses shared components from `packages/ui`
(Button, cn).

## Design Tokens

| Token         | Value                      | Use                                          |
| ------------- | -------------------------- | -------------------------------------------- |
| Primary green | `#24A148`                  | Navbar, buttons, accents, section highlights |
| Accent blue   | `#007bff`                  | Links, hover states, secondary accents       |
| Dark ink      | `#0f101c`                  | Text, dark backgrounds, footer               |
| White         | `#ffffff`                  | Card backgrounds, content areas              |
| Light gray    | `#f7f7f7`                  | Section alternating backgrounds              |
| Medium gray   | `#666666`                  | Body text, descriptions                      |
| Font          | Nunito Sans (Google Fonts) | Headings + body (400, 600, 700)              |

## Requirements

### Requirement: Navigation bar

The system SHALL render a white navigation bar with the brand name "Fern",
section links (Home, About, Services, Properties, Blog, Contact), and a
hamburger toggle that opens a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "Fern" linking to `#home`
- **AND** it SHALL show links to Home, About, Services, Properties, Blog,
  and Contact

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-width hero section with a dark overlay on a
background image, a headline, supporting text, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain the headline "Discover Your Perfect Home"
- **AND** it SHALL contain a descriptive paragraph about real estate services
- **AND** it SHALL contain a "View Properties" call-to-action button

### Requirement: Search bar

The system SHALL render a property search form with location, property type,
and price range inputs.

#### Scenario: Search form layout

- **GIVEN** the page is rendered
- **WHEN** the search bar is displayed
- **THEN** it SHALL show a location text input
- **AND** it SHALL show a property type select dropdown
- **AND** it SHALL show a price range select dropdown
- **AND** it SHALL show a "Search" button

### Requirement: Features section

The system SHALL render a section highlighting key service features in a
grid layout.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show feature cards with an icon, title, and description
- **AND** it SHALL show at least three feature cards
- **AND** each feature card SHALL have an accessible icon

### Requirement: Featured properties

The system SHALL render a section showcasing featured property listings in
a card grid.

#### Scenario: Property cards

- **GIVEN** the page is rendered
- **WHEN** the featured properties section is displayed
- **THEN** it SHALL show property cards with an image, title, location,
  price, and details (beds, baths, sqft)
- **AND** it SHALL show at least three property cards
- **AND** each property card SHALL have a "View Details" link

### Requirement: Cities section

The system SHALL render a section showcasing cities or areas served.

#### Scenario: City cards

- **GIVEN** the page is rendered
- **WHEN** the cities section is displayed
- **THEN** it SHALL show city cards with a background image and city name
  overlay
- **AND** it SHALL show at least three city cards
- **AND** each city card SHALL display a property count or listing count

### Requirement: How it works

The system SHALL render a step-by-step guide explaining the process.

#### Scenario: Steps display

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL show numbered steps with a title and description
- **AND** it SHALL show at least three steps
- **AND** each step SHALL have a step number or icon

### Requirement: Testimonials

The system SHALL render customer testimonials in a carousel or grid.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show testimonials with a quote, author name, and role
- **AND** it SHALL show at least three testimonials
- **AND** each testimonial SHALL have an avatar placeholder

### Requirement: Agents section

The system SHALL render real estate agent profiles.

#### Scenario: Agent cards

- **GIVEN** the page is rendered
- **WHEN** the agents section is displayed
- **THEN** it SHALL show agent cards with a photo, name, and role
- **AND** it SHALL show social media icon links for each agent
- **AND** it SHALL show at least three agents

### Requirement: Blog section

The system SHALL render a blog preview with recent posts.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show blog post cards with an image, date, title, and
  excerpt
- **AND** it SHALL show at least three blog posts
- **AND** each blog card SHALL have a "Read More" link

### Requirement: Footer

The system SHALL render a dark footer with site links, contact info, and
a Component Dock attribution link.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show columns with About, Quick Links, and Contact info
- **AND** it SHALL show social media icon links
- **AND** it SHALL link to `https://www.componentdock.com/` (branded
  "Component Dock")
- **AND** it SHALL display the copyright notice

## Naming

The ColorLib source name "Ecoverde" is FORBIDDEN as the app name. **Fern** is
the new, original name — short, evocative, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name. Source slug

- preview URL are recorded in the spec and PR.

## Design reference

- **Original:** ColorLib "Ecoverde" (Bootstrap 4 Real Estate).
  Listed in TEMPLATES.md line 2588 (marked `[~]`).
- **Source URL:** https://colorlib.com/wp/template/ecoverde/
- **Preview mirrors:** https://themewagon.github.io/ecoverde/,
  https://themeslab.org/html/ecoverde
- **Stack:** Bootstrap 4, jQuery, Google Fonts (Nunito Sans),
  Font Awesome icons.
