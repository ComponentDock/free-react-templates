# Template: Chambers (Law Firm Landing)

## Purpose

Recreation of ColorLib's **Lawfirm** law firm template.

- **Source:** https://colorlib.com/wp/template/lawfirm/
- **Preview:** https://preview.colorlib.com/theme/lawfirm/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/lawfirm-free-fullscreen-lawyer-website-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Package:** `@free-react-templates/chambers`
- **Deploy:** `chambers.free.componentdock.com`

A law firm landing page with a dark top bar, sticky navbar, fullscreen hero with
video overlay, 4-column feature strip, about section with video play, stat
counters, practice area cards, case gallery, attorney team grid, and a 5-column
footer with dark bottom bar.

## Design Tokens

| Token         | Value                  | Usage                      |
| ------------- | ---------------------- | -------------------------- |
| primary       | `#007bff`              | Buttons, links, accent     |
| primary-hover | `#0069d9`              | Button hover state         |
| text-dark     | `#212529`              | Headings, strong text      |
| text-body     | `#333333`              | Body text                  |
| text-muted    | `#6c757d`              | Secondary text, captions   |
| bg-dark       | `#161a1e`              | Intro strip, footer bg     |
| bg-darker     | `#121518`              | Alternate intro panels     |
| bg-light      | `#f8f9fa`              | About section bg           |
| font-body     | `'Roboto', sans-serif` | Body text, UI elements     |
| font-heading  | `'Roboto', sans-serif` | Headings (bold/700 weight) |

## Requirements

### Requirement: Top Bar

The system SHALL render a top bar with contact info (phone number, email) on the
left and social media icon links (Twitter, Facebook, Instagram, Dribbble) on the
right. The top bar SHALL have a dark background with white text.

#### Scenario: Top bar shows contact info

- **WHEN** the page loads
- **THEN** the top bar displays a phone number and email address
- **AND** social media icon links are visible on the right side

### Requirement: Navbar

The system SHALL render a sticky dark navbar with the brand name "Chambers" and
navigation links: Home, About, Practice Areas, Cases, Attorneys, Blog, Contact.
A hamburger toggle SHALL appear on mobile viewports.

#### Scenario: Navbar shows navigation links

- **WHEN** the page loads
- **THEN** the navbar displays "Chambers" as the brand
- **AND** navigation links for Home, About, Practice Areas, Cases, Attorneys, Blog, Contact are visible

#### Scenario: Navbar toggles on mobile

- **WHEN** the viewport width is below 768px
- **THEN** a hamburger menu button is visible
- **AND** clicking it toggles the navigation menu open/closed

### Requirement: Hero Section

The system SHALL render a fullscreen hero section with a background image, dark
overlay, headline "Don't Feel Helpless We Fight for Justice", a subtitle
paragraph, two CTA buttons ("Contact us" primary, "Read more" white), and a
video play link.

#### Scenario: Hero displays headline and CTAs

- **WHEN** the page loads
- **THEN** the hero headline reads "Don't Feel Helpless We Fight for Justice"
- **AND** a primary "Contact us" button is visible
- **AND** a white "Read more" button is visible

### Requirement: Intro Features

The system SHALL render a 4-column feature strip with dark backgrounds. Each
column SHALL have an icon, heading, and description text. The four features are:
Expert Attorneys, Case Dismissed, Court Performance, and Court Performance
(variant).

#### Scenario: Intro shows four feature cards

- **WHEN** the page loads
- **THEN** four feature cards are displayed in a row
- **AND** each card has an icon, heading, and description

### Requirement: About Section

The system SHALL render a split about section: left side with a background image
and video play button, right side with "Welcome to Chambers" subheading,
heading "Why to Put Your Trust In Chambers", description text, and a 2x2 grid
of service items (Expert Attorneys, Great Discount, Legal Advisory, Quick
Charges) each with an icon, heading, and short description.

#### Scenario: About section shows welcome content

- **WHEN** the page loads
- **THEN** the about section displays "Welcome to Chambers" as a subheading
- **AND** the heading reads "Why to Put Your Trust In Chambers"
- **AND** four service items are shown in a grid

### Requirement: Counter Stats

The system SHALL render a stats section with four counters: 3000+ Trusted
Clients, 1000+ Honors & Awards, 2000+ Expert Lawyers, 10540+ Successful Cases.
Each stat SHALL have an icon, number, and label.

#### Scenario: Counter displays stats

- **WHEN** the page loads
- **THEN** four stat blocks are visible
- **AND** each stat shows an icon, a number, and a label

### Requirement: Practice Areas

The system SHALL render a practice areas section with a centered heading "What
We Cover" and a 3-column grid of practice area cards. Each card SHALL have an
icon, heading, and description. Practice areas include: Business Law, Family
Law, Criminal Law, and Insurance Law.

#### Scenario: Practice areas shows four areas

- **WHEN** the page loads
- **THEN** the heading reads "What We Cover"
- **AND** four practice area cards are displayed
- **AND** each card has an icon, title, and description

### Requirement: Cases Gallery

The system SHALL render a cases section showing recent cases in a grid layout
with images and case category labels.

#### Scenario: Cases section displays gallery

- **WHEN** the page loads
- **THEN** case items are shown in a grid
- **AND** each case has an image and category label

### Requirement: Attorneys

The system SHALL render an attorneys/team section showing team member cards
with photos, names, and specializations.

#### Scenario: Attorneys shows team members

- **WHEN** the page loads
- **THEN** attorney cards are displayed
- **AND** each card has a photo, name, and role/specialization

### Requirement: Footer

The system SHALL render a 5-column footer with: brand logo + social links,
Explore links, Legal links, Company links, and contact info (address, phone,
email). A dark bottom bar SHALL contain copyright text and a "More templates at
Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer shows brand and links

- **WHEN** the page loads
- **THEN** the footer displays the "Chambers" brand name
- **AND** navigation link columns are visible
- **AND** contact information is shown

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer bottom bar contains a link to https://www.componentdock.com/
- **AND** the link text mentions "Component Dock"

### Requirement: Responsive Design

The system SHALL be responsive across desktop, tablet, and mobile viewports.
The navbar SHALL collapse to a hamburger on mobile. Grid layouts SHALL stack
vertically on smaller screens.

#### Scenario: Mobile layout adapts

- **WHEN** the viewport is 375px wide
- **THEN** the navbar shows a hamburger toggle
- **AND** multi-column grids stack to single column
- **AND** the hero text remains readable
