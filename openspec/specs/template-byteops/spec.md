---
name: byteops
description: >
  Recreation of ColorLib "Digilab" (https://colorlib.com/wp/template/digilab/)
  — a digital agency landing page with green brand (#31de79), Nunito Sans font,
  tabbed services, project gallery, team section, stats counters, process steps,
  FAQ accordion, testimonials carousel, blog cards, and contact form with map.
---

# ByteOps — Digital Agency Template

## Purpose

Recreate ColorLib "DigiLab" as a React 19 + Vite + Tailwind CSS 4 + TypeScript
template under the name "ByteOps". The template is a full-page digital agency
landing with 15 sections: navbar, hero, services (tabbed), features, projects,
about, team, stats, process, partners, FAQ (accordion), testimonials, blog,
contact (form + map), and footer with Component Dock attribution.

## Requirements

### Requirement: App renders all sections

The app renders without errors and all 15 sections are present in the DOM.

#### Scenario: Full page render

- **WHEN** the app loads
- **THEN** the document title is "ByteOps — Digital Agency Template"
- **AND** a banner (navbar), main landmark, and contentinfo (footer) are present
- **AND** "Component Dock" link is visible in the footer

### Requirement: Navbar with mobile toggle

The navbar shows all section links on desktop and a toggleable mobile menu.

#### Scenario: Desktop navigation

- **WHEN** the page renders
- **THEN** the Primary navigation contains at least 7 section links

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the "Open menu" button
- **THEN** the mobile menu becomes visible and the button changes to "Close menu"
- **WHEN** the user clicks the "Close menu" button
- **THEN** the mobile menu hides and the button changes to "Open menu"

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user clicks a nav link
- **THEN** the mobile menu closes

#### Scenario: Mobile menu closes on CTA click

- **WHEN** the mobile menu is open and the user clicks "Get in touch"
- **THEN** the mobile menu closes

### Requirement: Tabbed services section

The services section shows 7 service tabs with switchable content panels.

#### Scenario: Default tab

- **WHEN** the page loads
- **THEN** "Business Strategy" content is visible

#### Scenario: Tab switching

- **WHEN** the user clicks the "Research" tab
- **THEN** the "Research" heading is visible
- **WHEN** the user clicks the "UI Design" tab
- **THEN** the "UI Design" heading is visible

### Requirement: FAQ accordion

The FAQ section shows 5 questions with expand/collapse behavior.

#### Scenario: First question expanded

- **WHEN** the page loads
- **THEN** "What services do you offer?" is visible

#### Scenario: Toggle questions

- **WHEN** the user clicks "How long does a typical project take?"
- **THEN** the answer about timelines is visible
- **WHEN** the user clicks the same question again
- **THEN** the answer is hidden

### Requirement: Stats counters

The stats section displays 4 numeric values.

#### Scenario: Render stats

- **WHEN** the page loads
- **THEN** the values 500, 850, 20, and 24 are all visible

### Requirement: Team section

The team section shows 4 staff members with names and positions.

#### Scenario: Render team

- **WHEN** the page loads
- **THEN** Lloyd Wilson, Rachel Parker, Ian Smith, and Alicia Henderson are visible

### Requirement: Blog section

The blog section shows 3 blog post cards with titles.

#### Scenario: Render blog posts

- **WHEN** the page loads
- **THEN** blog post titles about lead generation, marketing trends, and online presence are visible

### Requirement: Contact form

The contact section has a form with inputs and a submit button.

#### Scenario: Render contact form

- **WHEN** the page loads
- **THEN** inputs for name, email, subject, and message are visible
- **AND** a "Send Message" button is present

#### Scenario: Form submission

- **WHEN** the user clicks "Send Message"
- **THEN** the form's default submit behavior is prevented

### Requirement: Footer with Component Dock

The footer links to componentdock.com.

#### Scenario: Footer attribution

- **WHEN** the page loads
- **THEN** "Component Dock" text is visible in the footer
- **AND** it links to https://www.componentdock.com/
