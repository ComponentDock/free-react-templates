# Template: Derrick (Construction Company)

## Purpose

Recreation of the ColorLib **Vertex** construction company template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/vertex/
- **Preview:** https://preview.colorlib.com/theme/vertex/
- **New name:** `derrick` (apps/derrick, @free-react-templates/derrick)
- **Deploy target:** https://derrick.free.componentdock.com
- **Category:** Construction
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/vertex-free-template.jpg

## Design Tokens

### Colors

| Token                    | Value     | Usage                                             |
| ------------------------ | --------- | ------------------------------------------------- |
| `--color-primary`        | `#0962ea` | Buttons, links, slider overlay, footer background |
| `--color-primary-hover`  | `#0853c5` | Button hover state                                |
| `--color-text-dark`      | `#212529` | Body text                                         |
| `--color-text-muted`     | `#6c757d` | Secondary text, nav links                         |
| `--color-bg-light`       | `#f8f9fa` | Counter, portfolio, pricing sections              |
| `--color-pricing-border` | `#dbe9fe` | Pricing card borders                              |
| `--color-pricing-icon`   | `#609df9` | Pricing icon color                                |

### Fonts

| Font    | Family                           | Usage                      |
| ------- | -------------------------------- | -------------------------- |
| Primary | `Quicksand` (300, 400, 500, 700) | All headings and body text |

### Layout

- Square buttons (no border-radius)
- Full-viewport hero with blue overlay (opacity 0.8)
- 4-column stats grid
- 4-column services grid
- Asymmetric portfolio grid (1 large + 2 small)
- 3-column pricing cards with dashed borders
- 3-column blog carousel
- Dark blue footer

## Requirements

### Requirement: Page renders all sections

The template SHALL render all 10 sections in the correct order.

#### Scenario: All sections are present

- **WHEN** a user visits the Derrick homepage
- **THEN** the navbar, hero, stats, services, portfolio, CTA, testimonials, pricing, blog, and footer sections are rendered

### Requirement: Navigation is functional

The navbar SHALL display all navigation links and support mobile toggle.

#### Scenario: Desktop navigation links

- **WHEN** a user views the navbar on desktop
- **THEN** links for Home, What We Do, Projects, Pricing, Blog, About, and Contact are visible

#### Scenario: Mobile menu toggle

- **WHEN** a user clicks the mobile menu button
- **THEN** the navigation menu expands to show all links

### Requirement: Stats display correct numbers

The stats counter section SHALL display 4 statistics.

#### Scenario: Stats are rendered

- **WHEN** a user views the stats section
- **THEN** the numbers 1,000 (Years), 12,000 (Brigades), 10,000 (Engineering Units), and 12,921 (Employees) are displayed

### Requirement: Services section shows 4 items

The services section SHALL display 4 construction service cards.

#### Scenario: Service cards are rendered

- **WHEN** a user views the services section
- **THEN** cards for Construction Management, Pre-Construction Services, Construction Services, and General Constructing are displayed

### Requirement: Pricing shows 3 plans

The pricing section SHALL display 3 pricing tiers.

#### Scenario: Pricing plans are rendered

- **WHEN** a user views the pricing section
- **THEN** Basic Plan, Standard Plan, and Premium Plan at $29/month are displayed

### Requirement: Footer links to Component Dock

The footer SHALL link to the Component Dock website.

#### Scenario: Component Dock link is present

- **WHEN** a user views the footer
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is rendered

### Requirement: Quote form modal opens

A modal with a quote request form SHALL open when the CTA button is clicked.

#### Scenario: Modal opens on CTA click

- **WHEN** a user clicks the "Request a Quote" button in the CTA section
- **THEN** a modal dialog appears with fields for Full Name, Email, Date, Time, and Message

#### Scenario: Modal closes on close button

- **WHEN** a user clicks the close button in the modal
- **THEN** the modal is dismissed
