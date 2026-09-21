# Template: Statutory (Legal / Law Firm)

## Purpose

Recreation of the ColorLib **Lawfirm** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

- **Source slug:** `lawfirm`
- **Source URL:** https://colorlib.com/wp/template/lawfirm/
- **Preview URL:** https://preview.colorlib.com/theme/lawfirm/
- **New name:** `statutory`
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, packages/ui shared components
- **Deploy target:** `statutory.free.componentdock.com`

## Requirements

### Requirement: Navbar

Statutory SHALL display a dark fixed navbar with brand name and navigation links.

#### Scenario: Desktop navigation

- **WHEN** the user opens the page on a viewport wider than 992px
- **THEN** a dark navbar is visible with brand "Statutory" and nav links for Home, About, Practice Areas, Cases, Contact

#### Scenario: Mobile hamburger menu

- **WHEN** the user taps the hamburger icon on a narrow viewport
- **THEN** the nav links expand in a dropdown below the brand

### Requirement: Hero section

Statutory SHALL display a hero section with a dark overlay background image, headline, subtext, and two CTA buttons.

#### Scenario: Hero displays headline and CTAs

- **WHEN** the hero section is visible
- **THEN** the heading reads "Don't Feel Helpless We Fight for Justice"
- **AND** a "Contact us" primary button is visible
- **AND** a "Read more" outline button is visible

### Requirement: Intro strip

Statutory SHALL display four dark feature boxes in a row with icons and descriptions.

#### Scenario: Four dark boxes with icons

- **WHEN** the intro section is in view
- **THEN** four feature boxes are displayed: Expert Attorneys, Case Dismissed, Court Performance, Legal Protection

### Requirement: About section

Statutory SHALL display a split layout with an image on the left and feature list on the right.

#### Scenario: About content with image and feature list

- **WHEN** the about section is visible
- **THEN** the heading reads "Why Put Your Trust In Our Law Firm"
- **AND** four feature items are listed: Expert Attorneys, Great Discount, Legal Advisory, Quick Charges

### Requirement: Counter stats

Statutory SHALL display four animated stat counters over a dark background image.

#### Scenario: Four stat cards

- **WHEN** the counter section is visible
- **THEN** four stats are displayed: Trusted Clients (3,000), Honor's & Awards (1,000), Expert Lawyers (2,000), Successful Cases (10,540)

### Requirement: Practice areas

Statutory SHALL display six practice area cards in a grid with icons.

#### Scenario: Six practice area cards

- **WHEN** the practice areas section is visible
- **THEN** six areas are displayed: Business Law, Family Law, Criminal Law, Real Estate Law, Personal Injury, Judicial Law

### Requirement: Case studies

Statutory SHALL display case study cards with background images, category tags, and titles.

#### Scenario: Case study grid

- **WHEN** the case studies section is visible
- **THEN** six case study cards are displayed in a grid

### Requirement: Testimonials

Statutory SHALL display client testimonial cards over a dark background image.

#### Scenario: Client testimonial cards

- **WHEN** the testimonials section is visible
- **THEN** three testimonial cards are displayed with client names, roles, and quotes

### Requirement: Appointment section

Statutory SHALL display a contact form with feature highlights and a submit button.

#### Scenario: Contact section with form

- **WHEN** the appointment section is visible
- **THEN** the heading reads "We Have Great Results"
- **AND** a contact form with name, email, subject, and message fields is displayed

### Requirement: Footer

Statutory SHALL display a dark footer with brand, link columns, contact info, and Component Dock attribution.

#### Scenario: Footer with links and contact

- **WHEN** the footer is visible
- **THEN** the brand "Statutory" is displayed
- **AND** a link to Component Dock (https://www.componentdock.com/) is present
- **AND** copyright text is shown

### Requirement: Design tokens

Statutory SHALL use Roboto font, blue #007bff primary, gold #cbb88c accents, and dark #1d2227 palette matching the original design.

#### Scenario: Correct design tokens

- **WHEN** the page renders
- **THEN** the primary color is blue (#007bff)
- **AND** accent color is gold (#cbb88c)
- **AND** font family is Roboto
- **AND** no ColorLib references exist in app source code
