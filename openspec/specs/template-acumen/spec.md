# Template: Acumen (Business)

## Purpose

Recreation of the ColorLib **Classic** business template as a React 19 + Vite +
Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/classic/
- **Preview:** https://preview.colorlib.com/theme/classic/
- **New name:** `acumen` (apps/acumen, @free-react-templates/acumen)
- **Deploy target:** https://acumen.free.componentdock.com
- **Category:** Business
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/classic-free-template.jpg

## Design Tokens

Extracted from the live preview stylesheet (style.css at preview.colorlib.com/theme/classic/):

### Colors

| Token                   | Value             | Usage                       |
| ----------------------- | ----------------- | --------------------------- |
| `--color-primary`       | `#a1c4fd`         | Brand blue (gradient start) |
| `--color-primary-light` | `#c2e9fb`         | Brand blue (gradient end)   |
| `--color-text`          | `#4f4f4f`         | Body text                   |
| `--color-text-muted`    | `#898989`         | Secondary text, labels      |
| `--color-border`        | `#e8e8e8`         | Borders, dividers           |
| `--color-overlay`       | `rgba(0,0,0,0.4)` | Header dark overlay         |

**Button gradient:** `linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%)`

### Fonts

| Font     | Family                     | Usage                  |
| -------- | -------------------------- | ---------------------- |
| Headings | `'Montserrat', sans-serif` | Section titles, nav    |
| Body     | `'Roboto', sans-serif`     | Paragraphs, body text  |
| Accent   | `'Satisfy', cursive`       | Decorative accent text |

### Button Shape

- **Border-radius:** `100px` (pill-shaped / full-round)
- **Default bg:** gradient `#a1c4fd → #c2e9fb`
- **Hover:** transparent bg with outline/border

## Section Structure (DOM order)

1. **Navbar** — Sticky top navbar with logo "Acumen", search toggle, language dropdown, primary nav links (Home, Services, Portfolio, Team, Price, Blog, Contact).
2. **Hero** — Full-width section with background image + dark overlay. Headline "We Are Provide Creative Business", CTA "Contact Now". Blue gradient dot accent.
3. **About** — Split layout with tabbed content (Our Mission / Our Vision / Our Support).
4. **Services** — Grid of 6 service cards with icons, titles, descriptions, "Read More" links.
5. **Skills** — Progress bars with percentages: Web Design (95%), Coding (85%), Developing (90%), Java Script (95%), Apps Design (85%), Graphics (90%).
6. **Portfolio** — Filterable gallery grid with filter tabs and hover overlay.
7. **Team** — Grid of 4 team member cards with photos, names, roles, social hover.
8. **Pricing** — Monthly/Yearly toggle. 4 pricing tiers: Basic ($10), Premium ($50, highlighted), Business ($80), Ultimate ($100).
9. **Blog** — 1 featured post + 3 side posts with dates and excerpts.
10. **Counter** — Dark band with 4 stat counters: Project Complete (1172), Happy Clients (1000), Total Clients (1200), Winning Awards (1172).
11. **Contact** — Form (Name, Email, Subject, Message + "Send Now") + address info + map placeholder.
12. **Footer** — Dark background with logo, description, subscription input, link columns (Company, Resources, Solutions), Component Dock credit.

## Requirements

### Requirement: Hero section

The system SHALL render a full-width hero section with a background image, a dark
overlay, a headline, a subtitle, and a "Contact Now" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is loaded
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the headline "We Are Provide Creative Business"
- **AND** it SHALL show a "Contact Now" CTA button linking to #contact
- **AND** it SHALL have a dark overlay over a background image

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name "Acumen",
navigation links (Home, Services, Portfolio, Team, Price, Blog, Contact), and a
search toggle.

#### Scenario: Navbar links

- **GIVEN** the page is loaded
- **WHEN** the navbar is displayed
- **THEN** it SHALL show navigation links pointing to their respective sections
- **AND** the navbar SHALL be sticky at the top of the page

### Requirement: About section tabs

The system SHALL render an about section with three tabbed content panels
(Our Mission, Our Vision, Our Support) and a "View More" button.

#### Scenario: Tab switching

- **GIVEN** the about section is displayed with "Our Mission" active
- **WHEN** the user clicks "Our Vision" tab
- **THEN** the vision content SHALL be displayed
- **AND** the mission content SHALL be hidden

### Requirement: Services section

The system SHALL render a services section with 6 service cards in a grid layout,
each with an icon, title, description, and "Read More" link.

#### Scenario: Service cards

- **GIVEN** the page is loaded
- **WHEN** the services section is displayed
- **THEN** it SHALL show 6 service cards
- **AND** each card SHALL have an icon, title, and description

### Requirement: Skills section

The system SHALL render a skills section with 6 progress bars showing percentage
levels with correct ARIA attributes.

#### Scenario: Progress bars

- **GIVEN** the page is loaded
- **WHEN** the skills section is displayed
- **THEN** it SHALL show 6 progress bars
- **AND** "Web Design" SHALL show 95%
- **AND** "Coding" SHALL show 85%

### Requirement: Portfolio filter

The system SHALL render a portfolio section with filterable gallery grid.
Clicking a filter tab SHALL filter the displayed items.

#### Scenario: Filter functionality

- **GIVEN** the portfolio section is displayed with "All" filter active
- **WHEN** the user clicks "Graphics" filter
- **THEN** only graphics items SHALL be visible

### Requirement: Team section

The system SHALL render a team section with 4 team member cards, each showing
a photo, name, role, and social links on hover.

#### Scenario: Team members

- **GIVEN** the page is loaded
- **WHEN** the team section is displayed
- **THEN** it SHALL show 4 team member cards
- **AND** each card SHALL show a name and role

### Requirement: Pricing toggle

The system SHALL render a pricing section with Monthly/Yearly toggle tabs and
4 pricing tiers. Clicking a toggle SHALL switch the displayed period.

#### Scenario: Monthly to Yearly

- **GIVEN** the pricing section is displayed with Monthly active
- **WHEN** the user clicks "Yearly" tab
- **THEN** prices SHALL show "/ Year"
- **AND** 4 pricing tiers SHALL be displayed

### Requirement: Blog section

The system SHALL render a blog section with 1 featured post and 3 side posts,
each showing a date, title, and excerpt.

#### Scenario: Blog posts

- **GIVEN** the page is loaded
- **WHEN** the blog section is displayed
- **THEN** it SHALL show 1 featured post
- **AND** it SHALL show 3 side posts

### Requirement: Counter stats

The system SHALL render a dark-background counter section with 4 stat counters
displaying the correct values.

#### Scenario: Counter values

- **GIVEN** the page is loaded
- **WHEN** the counter section is displayed
- **THEN** "Project Complete" SHALL show 1,172
- **AND** "Happy Clients" SHALL show 1,000

### Requirement: Contact form

The system SHALL render a contact section with a form (Name, Email, Subject,
Message, Send Now button) and address information.

#### Scenario: Form fields

- **GIVEN** the contact section is displayed
- **WHEN** the form is rendered
- **THEN** it SHALL show fields for Name, Email, Subject, and Message
- **AND** it SHALL show a "Send Now" submit button
- **AND** the address SHALL show "160 Link Road, Dhaka-1216"

### Requirement: Footer

The system SHALL render a dark footer with logo, description, subscription input,
link columns (Company, Resources, Solutions), and a Component Dock credit link.

#### Scenario: Footer content

- **GIVEN** the page is scrolled to the footer
- **WHEN** the footer is displayed
- **THEN** it SHALL show the logo and description
- **AND** it SHALL show a subscription email input
- **AND** it SHALL link to https://www.componentdock.com/
