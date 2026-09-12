# Spec: Imprint — Personal Portfolio Template

## Purpose

Recreate the ColorLib **Evans** template (https://colorlib.com/wp/template/evans/)
as a React 19 + Vite + Tailwind CSS 4 + TypeScript app named **Imprint**.
The template is a personal portfolio and freelance designer page featuring a
dark hero, intro section, services grid, and alternating portfolio gallery.

## Requirements

### Requirement: Page loads with correct title

The document title SHALL be "Imprint — Personal Portfolio Template".

#### Scenario: Document title is set on load

- **WHEN** the page loads
- **THEN** the document title is "Imprint — Personal Portfolio Template"

### Requirement: Navbar renders brand and navigation

The navbar SHALL display the "Imprint" brand and navigation links for
About, Work, and Contact. On mobile, a hamburger toggle SHALL show/hide
the menu with proper aria-expanded state.

#### Scenario: Navbar shows brand and desktop links

- **WHEN** the page loads
- **THEN** the navbar contains a link with text "Imprint"
- **AND** the navbar contains links for "About", "Work", and "Contact"

#### Scenario: Mobile menu toggles

- **WHEN** I click the hamburger button
- **THEN** the button has aria-expanded "true"
- **AND** additional mobile navigation links are visible
- **WHEN** I click the hamburger button again
- **THEN** the button has aria-expanded "false"

### Requirement: Hero section renders main content

The hero SHALL display a heading "Creative Designer & Writer", a subtitle
"Personal Portfolio", and a "Learn More" call-to-action link.

#### Scenario: Hero heading and CTA

- **WHEN** the page loads
- **THEN** there is a heading containing "Creative Designer"
- **AND** there is a link with text "Learn More"
- **AND** there is text "Personal Portfolio"

### Requirement: Intro section renders

The intro section SHALL display a heading mentioning "Web Designer" and a
description paragraph about the designer.

#### Scenario: Intro content

- **WHEN** the page loads
- **THEN** there is a heading containing "Web Designer"
- **AND** there is a paragraph containing "Far far away"

### Requirement: Services section shows four service cards

The services section SHALL display four cards: Web Design, Web Development,
Graphic Design, and Writing, each with an icon, title, and description.

#### Scenario: All services rendered

- **WHEN** the page loads
- **THEN** there are headings for "Web Design", "Web Development", "Graphic Design", and "Writing"
- **AND** there is a description containing "203 Fake St. Mountain View"

### Requirement: Portfolio section shows six entries

The portfolio section SHALL display six project entries with alternating
left/right layouts. Each entry SHALL have a category label, date, title,
description, and "View Portfolio" button.

#### Scenario: Portfolio entries

- **WHEN** the page loads
- **THEN** there are 6 elements with text "View Portfolio"
- **AND** headings exist for "Midway", "Workplace Office", "Jacket Leather", "Topless", "Fashion Style", and "Prickly"

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ with text
"Component Dock" and open in a new tab.

#### Scenario: Footer Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to "https://www.componentdock.com/"
- **AND** the link text includes "Component Dock"
- **AND** the link has target="_blank"

### Requirement: Page composes all sections

The page SHALL render a banner landmark (navbar), main landmark, and
contentinfo landmark (footer).

#### Scenario: Landmark structure

- **WHEN** the page loads
- **THEN** there is a banner landmark
- **AND** there is a main landmark
- **AND** there is a contentinfo landmark

## Source

- Original: ColorLib Evans (https://colorlib.com/wp/template/evans/)
- Preview: https://preview.colorlib.com/theme/evans/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/evans-free-template.jpg
