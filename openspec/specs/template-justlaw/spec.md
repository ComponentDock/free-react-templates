---
name: justlaw
template: Justlaw
colorlib:
  slug: justlaw
  url: https://colorlib.com/wp/template/justlaw/
  preview: https://preview.colorlib.com/theme/justlaw/
category: Lawyers
status: in-progress
---

## Purpose

Recreation of ColorLib "Justlaw" (https://colorlib.com/wp/template/justlaw/) — a lawyer and legal firm landing page template featuring a hero with consultation CTA, practice areas, about section with stats, contact form, tabbed case studies, testimonials, team members, and a branded footer.

## Requirements

### Requirement: Navbar with sticky header and mobile menu

The template SHALL display a sticky dark navbar with logo, navigation links (Home, Services, About, Case Studies, Blog), and a "Free Consultation" CTA button. A mobile hamburger menu SHALL toggle navigation on small screens.

#### Scenario: Desktop navbar renders all links

- **GIVEN** the page loads on a desktop viewport
- **WHEN** I look at the top navigation
- **THEN** I see the logo "Justlaw", five nav links, and a "Free Consultation" button

#### Scenario: Mobile menu toggles on button click

- **GIVEN** the page loads on a mobile viewport
- **WHEN** I tap the hamburger menu button
- **THEN** the navigation links and consultation button become visible

### Requirement: Hero section with headline and consultation bar

The template SHALL display a full-width hero with a background image, headline "We will fight for you like a friend", subtitle "Professional lawyers", and a red bottom bar with phone number and video play button.

#### Scenario: Hero displays headline and contact info

- **GIVEN** the page loads
- **WHEN** I look at the hero section
- **THEN** I see the headline, subtitle, phone number, and a play button

### Requirement: Legal Practice Area section

The template SHALL display three practice area cards (Vehicle Accident, Health Law, Insurance Law) in a grid layout, each with an image, icon, title, and description.

#### Scenario: Three practice areas are visible

- **GIVEN** the page loads
- **WHEN** I scroll to the practice area section
- **THEN** I see three cards with titles and descriptions

### Requirement: About section with stats

The template SHALL display an "About Just Law" section with description text, counter stats (250+ Happy Clients, 920+ Winning Cases), and overlapping images.

#### Scenario: About section shows stats

- **GIVEN** the page loads
- **WHEN** I scroll to the about section
- **THEN** I see the heading, description, and two counter stats

### Requirement: Free Consultation form

The template SHALL display a contact form with Name, Phone, Practice Area select, Email, Message textarea, and Submit button over a dark background image.

#### Scenario: Form renders all fields

- **GIVEN** the page loads
- **WHEN** I scroll to the consultation form
- **THEN** I see five input fields and a submit button

#### Scenario: Form submission shows success message

- **GIVEN** I fill out all form fields
- **WHEN** I click Submit Now
- **THEN** a success message is displayed

### Requirement: Recent Case Studies with tabs

The template SHALL display tabbed case studies (Vehicle Accident, Health Law, Insurance Law, Bankruptcy) with three case cards per tab showing image, tag, title, description, and read more link.

#### Scenario: Default tab shows Vehicle Accident cases

- **GIVEN** the page loads
- **WHEN** I scroll to case studies
- **THEN** three Vehicle Accident cases are displayed

#### Scenario: Clicking a tab switches the cases

- **GIVEN** the case studies section is visible
- **WHEN** I click the "Health Law" tab
- **THEN** three Health Law cases replace the Vehicle Accident cases

### Requirement: Testimonials section

The template SHALL display client testimonials with quotes, names, roles, and avatar images.

#### Scenario: Testimonials render correctly

- **GIVEN** the page loads
- **WHEN** I scroll to testimonials
- **THEN** I see three testimonials with quotes and client names

### Requirement: Team Members section

The template SHALL display three team members with circular photos, names, and titles.

#### Scenario: Team members are displayed

- **GIVEN** the page loads
- **WHEN** I scroll to the team section
- **THEN** I see three team member cards

### Requirement: CTA Banner

The template SHALL display a red banner with "Get Your Answer In Just 5 Minutes" heading and a "Get Started" button.

#### Scenario: CTA banner is visible

- **GIVEN** the page loads
- **WHEN** I scroll to the CTA section
- **THEN** I see the heading and a "Get Started" button

### Requirement: Footer with Component Dock attribution

The template SHALL display a 4-column footer (logo + description + social, Company links, Services links, Newsletter form) with a bottom bar linking to Component Dock.

#### Scenario: Footer renders all columns

- **GIVEN** the page loads
- **WHEN** I scroll to the footer
- **THEN** I see four columns and a newsletter form

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer is visible
- **WHEN** I look at the bottom bar
- **THEN** I see a "Component Dock" link pointing to https://www.componentdock.com/
