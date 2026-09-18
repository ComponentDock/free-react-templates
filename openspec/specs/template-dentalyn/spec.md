# Dentalyn — Dental Clinic Landing Template

Recreation of ColorLib **Dento** (https://colorlib.com/wp/template/dento/).

## Purpose

Dentalyn is a free dental clinic landing page template that recreates the ColorLib Dento design under a new name. It provides a professional, modern dental clinic website with sections for hero, about, services, pricing, appointment booking, team, testimonials, blog, and footer — built with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

| Token           | Value                                                             | Source                                            |
| --------------- | ----------------------------------------------------------------- | ------------------------------------------------- |
| Brand primary   | `#0891b2` (teal/cyan)                                             | `.dento-btn`, `.contact-information`, nav active  |
| Secondary       | `#0f766e` (dark teal)                                             | Button hover state                                |
| Body font       | Montserrat (Google Fonts, 300–700)                                | `@font-face` declarations                         |
| Section heading | Centered, underline accent `#0891b2`                              | `.section-heading .line`                          |
| Card/row bg     | `#f4f4f4`                                                         | `.dento-price-table`, `.single-dentist-area`      |
| Muted text      | `#707070` / `#b7b7b7`                                             | Table cells, post-meta, copyright                 |
| Dark bg overlay | `rgba(0,0,0,0.5)` gradient                                        | Hero, services, appointment, testimonials, footer |
| Button shape    | Rounded (slight radius), primary fill, outlined secondary variant | `.dento-btn`, `.btn-2`                            |
| Dark mode       | Slate-based: bg `#0f172a`, text `#f8fafc`, surface `#1e293b`      | `[data-bs-theme=dark]`                            |

## Requirements

### Requirement: Navbar displays navigation and branding

The template navbar SHALL display the site name "Dentalyn", navigation links for Home, About, Services, Pricing, Blog, and Contact, a "Book Now" call-to-action button, and a dark mode toggle.

#### Scenario: Navbar renders all elements

- **WHEN** the page loads
- **THEN** I see the "Dentalyn" logo link
- **AND** I see navigation links for Home, About, Services, Pricing, Blog, Contact
- **AND** I see a "Book Now" button
- **AND** I see a dark mode toggle button

#### Scenario: Dark mode toggles correctly

- **WHEN** I click the dark mode toggle
- **THEN** the document root gains the "dark" class
- **AND** the toggle icon changes to a sun icon

### Requirement: Hero section displays heading and CTAs

The hero section SHALL display a heading about dental care access, a subtitle describing the clinic, and two call-to-action buttons ("Get Started" and "Contact Us").

#### Scenario: Hero renders heading and buttons

- **WHEN** the hero section is visible
- **THEN** I see the heading "We Believe Everyone Should Have Easy Access To Great Dental Care"
- **AND** I see "Get Started" and "Contact Us" buttons

### Requirement: About section shows skill bars

The about section SHALL display a heading, description text, an image, and three skill bars (Experience Dentist 80%, Modern Equipment 65%, Friendly Staff 85%).

#### Scenario: About displays skill bar labels

- **WHEN** the about section is visible
- **THEN** I see skill bars labeled "Experience Dentist", "Modern Equipment", "Friendly Staff"

### Requirement: Stats section displays counters

The stats section SHALL display four statistics: 20 Years Of Experience, 700+ Happy Patients, 120 Certificate, 40+ Dentist.

#### Scenario: Stats shows all four values

- **WHEN** the stats section is visible
- **THEN** I see "20" with "Years Of Experience"
- **AND** I see "700+" with "Happy Patients"
- **AND** I see "120" with "Certificate"
- **AND** I see "40+" with "Dentist"

### Requirement: Services section lists dental services

The services section SHALL display six service types in a grid with a dark overlay background and a video play button.

#### Scenario: Services lists all types

- **WHEN** the services section is visible
- **THEN** I see Teeth Whitening, Missing Teeth, Cosmetic Dentistry, Examination, Teeth Pain, Root Canal

### Requirement: Pricing section shows table

The pricing section SHALL display a table with service names, stages, and prices, plus a "Read More" button.

#### Scenario: Pricing table has all rows

- **WHEN** the pricing section is visible
- **THEN** I see a table with column headers Service Names, Stage, Price
- **AND** there are at least 8 pricing rows

### Requirement: Appointment form collects booking info

The appointment section SHALL provide a form with Name, Phone, Email, Address, Schedule, Time, and Message fields plus a submit button.

#### Scenario: Form has required fields

- **WHEN** the appointment section is visible
- **THEN** I see inputs for Name, Phone, Email, Address
- **AND** I see selects for Schedule and Time
- **AND** I see a Message textarea
- **AND** I see a "Book Appointment" submit button

### Requirement: Team section shows dentist cards

The team section SHALL display three dentist cards with photos, names, roles, and social links.

#### Scenario: Team shows three members

- **WHEN** the team section is visible
- **THEN** I see three dentist names and roles

### Requirement: Testimonials section displays patient quotes

The testimonials section SHALL display patient testimonials with photos, quotes, names, and roles on a dark background.

#### Scenario: Testimonials shows patient quotes

- **WHEN** the testimonials section is visible
- **THEN** I see patient quotes with names and "Dental Patient" roles

### Requirement: Blog section shows recent posts

The blog section SHALL display three blog post cards with thumbnails, titles, excerpts, dates, and comment counts.

#### Scenario: Blog shows three posts

- **WHEN** the blog section is visible
- **THEN** I see three blog post titles with dates and comment counts

### Requirement: Footer has contact info and newsletter

The footer SHALL display contact information, opening hours, quick links, a newsletter form, social links, and a Component Dock attribution link.

#### Scenario: Footer has all elements

- **WHEN** the footer is visible
- **THEN** I see address and phone number
- **AND** I see opening hours
- **AND** I see quick links
- **AND** I see a newsletter form
- **AND** I see a link to componentdock.com
