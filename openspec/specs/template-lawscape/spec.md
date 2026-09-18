---
name: Lawscape
description: >
  Recreation of ColorLib Lawride — a lawyer & legal firm landing page template
  with a top bar, orange navbar, hero banner, statistics, about section, practice
  areas, testimonials, team, CTA, blog, and footer.
source:
  name: Lawride
  slug: lawride
  url: https://colorlib.com/wp/template/lawride/
  preview: https://preview.colorlib.com/theme/lawride/
stack:
  - React 19
  - Tailwind CSS 4
  - TypeScript
  - Vite
  - lucide-react icons
---

## Purpose

Recreate ColorLib Lawride as a faithful React landing page for a law firm, using
the original as the design reference. The template features a dark header top bar,
orange navbar, full-screen hero with CTA, statistics cards, about section, practice
areas grid, client testimonials, attorney team, call-to-action, blog posts, and a
footer with Component Dock branding.

## Design Tokens

| Token         | Value                | Usage                                             |
| ------------- | -------------------- | ------------------------------------------------- |
| brand-primary | #de6320              | Buttons, active nav, hover accents, card overlays |
| brand-dark    | #0f0f16              | Header top bar background                         |
| brand-nav     | #c2581e              | Navbar background                                 |
| light-bg      | #f7f7f7              | Section backgrounds (albaster)                    |
| text-body     | #777                 | Body text color                                   |
| text-heading  | #222                 | Heading text color                                |
| heading-font  | "Lora", serif        | All headings (h1-h6)                              |
| body-font     | "Roboto", sans-serif | Body text                                         |
| button-radius | 0 (sharp)            | No border-radius on buttons                       |
| hero-overlay  | rgba(2,4,23,0.702)   | Dark overlay on hero image                        |
| cta-overlay   | rgba(1,0,9,0.6)      | Dark overlay on CTA background                    |

## Requirements

### Requirement: HeaderTop displays contact information and social links

The template SHALL display a dark header top bar with phone number, email address,
and social media icon links. The bar SHALL be hidden on mobile viewports.

#### Scenario: Header bar renders contact info and social icons

- **WHEN** the page loads
- **THEN** a dark top bar shows a phone number and email address
- **AND** social media icon links are displayed for Facebook, Twitter, Instagram, and LinkedIn

#### Scenario: Header bar hidden on mobile

- **WHEN** the user views the page on a mobile viewport
- **THEN** the top bar is not visible

### Requirement: Navbar renders with logo and navigation links

The template SHALL display a sticky orange navbar with the "Lawscape" logo text and
navigation links: Home, About, Services, Practice Areas, Team, Blog, Contact.
The navbar SHALL include a mobile hamburger menu toggle.

#### Scenario: Navbar displays all navigation links

- **WHEN** the page loads
- **THEN** the navbar shows the "Lawscape" logo
- **AND** navigation links include Home, About, Services, Practice Areas, Team, Blog, Contact

#### Scenario: Mobile menu toggles on button click

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu expands
- **AND** clicking a link in the mobile menu closes it

### Requirement: Hero displays headline and call-to-action

The template SHALL display a full-width hero section with a dark image overlay,
a centered headline about understanding client intention, and a "Make an Appointment"
CTA button linking to the contact section.

#### Scenario: Hero shows headline and CTA

- **WHEN** the page loads
- **THEN** the hero section shows the heading "We Well Understand Your Intention"
- **AND** a "Make an Appointment" button is displayed linking to #contact

### Requirement: Statistics counter displays four metric cards

The template SHALL display four statistics cards showing lawyer count, successful
cases, satisfied clients, and personal cases, with numbers and labels.

#### Scenario: Statistics cards show correct numbers

- **WHEN** the page loads
- **THEN** four statistics cards are visible with values 35, 1526, 720, 680
- **AND** the cards show labels for Dedicated Lawyers, Successful Cases, Satisfied Clients, Personal Cases

### Requirement: About section shows video placeholder and description

The template SHALL display an about section with a side-by-side layout containing
a video placeholder image and descriptive text with a "Learn More" button.

#### Scenario: About section renders heading and button

- **WHEN** the page loads
- **THEN** the about section has the heading "We Properly Understand Your Purpose"
- **AND** a "Learn More" button is present

### Requirement: Practice areas section shows four area cards

The template SHALL display four practice area cards (Employment Law, Personal Injury,
Family Law, Bank & Financial) with images, hover overlays, and a "View All Practices" button.

#### Scenario: Practice areas displays four cards and button

- **WHEN** the page loads
- **THEN** four practice area cards are displayed with titles
- **AND** a "View All Practices" button is shown

### Requirement: Testimonials section renders client reviews

The template SHALL display client testimonials with names, roles, review text,
and profile images on a light background.

#### Scenario: Testimonials shows three client reviews

- **WHEN** the page loads
- **THEN** client testimonials are displayed with names and roles

### Requirement: Team section shows four attorney cards

The template SHALL display four attorney cards with photo, name, specialization,
and social media links.

#### Scenario: Team shows four attorneys with social links

- **WHEN** the page loads
- **THEN** four attorney cards are displayed with names and specializations
- **AND** each card has social media icon links

### Requirement: CTA section displays evaluation prompt

The template SHALL display a dark-background call-to-action section with a
"Free Case Evaluation" heading and a "Contact us Now" button.

#### Scenario: CTA section renders heading and button

- **WHEN** the page loads
- **THEN** a "Free Case Evaluation" heading is displayed
- **AND** a "Contact us Now" button is present

### Requirement: Blog section shows latest posts

The template SHALL display three blog post cards with images, titles, dates,
comment counts, excerpts, and "Read More" links.

#### Scenario: Blog shows three posts with Read More links

- **WHEN** the page loads
- **THEN** three blog cards are shown with titles, dates, and excerpts
- **AND** each card has a "Read More" link

### Requirement: Newsletter section with email subscription form

The template SHALL display a newsletter section with About, Navigation Links,
Newsletter (with email input), and InstaFeed columns.

#### Scenario: Newsletter renders all columns

- **WHEN** the page loads
- **THEN** four columns are shown: About Agency, Navigation Links, Newsletter, InstaFeed
- **AND** an email input is present for newsletter subscription

### Requirement: Footer links to Component Dock

The template SHALL display a footer with a copyright line that includes a link to
https://www.componentdock.com/ branded as "Component Dock", and social media icons.

#### Scenario: Footer displays Component Dock link

- **WHEN** the user views the footer
- **THEN** a link to https://www.componentdock.com/ is present
- **AND** the link text mentions "Component Dock"
