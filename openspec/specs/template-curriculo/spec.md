# Spec: Curriculo — Resume & Portfolio Template

**Source:** ColorLib "Rezume" — https://colorlib.com/wp/template/rezume/
**Preview:** https://preview.colorlib.com/theme/rezume/
**New name:** curriculo
**Package:** @free-react-templates/curriculo

## Purpose

Curriculo is a professional resume and portfolio single-page template that showcases skills, work experience, projects, and contact information. It recreates the ColorLib "Rezume" design under a new original name with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens (extracted from preview CSS)

| Token                | Value                         | Usage                           |
| -------------------- | ----------------------------- | ------------------------------- |
| Body background      | `#f8f9fa`                     | Light gray page background      |
| Body text            | `#333`                        | Default paragraph text          |
| Headings             | `#222`, weight 200            | h1–h5                           |
| Primary blue         | `#0d6efd`                     | Links, buttons, accents         |
| Gradient start       | `#8490ff`                     | Hero overlay, portfolio overlay |
| Gradient end         | `#62bdfc`                     | Hero overlay, portfolio overlay |
| Font family          | Nunito Sans (200,300,400,700) | Via Google Fonts                |
| Letter spacing (nav) | 0.2em uppercase               | Navbar links                    |
| Footer bg            | Dark (gray-900)               | Footer section                  |

## Requirements

### Requirement: Page loads with all sections

The template SHALL render all 13 sections in order: Navbar, Hero, Clients, Portfolio, Case Studies, Resume, Certifications, About, Testimonials, Services, Blog, Contact, Footer.

#### Scenario: All sections are visible

- **WHEN** the user opens the Curriculo template
- **THEN** the navbar, hero, clients, portfolio, case studies, resume, certifications, about, testimonials, services, blog, contact, and footer sections are visible

### Requirement: Navbar navigation

The navbar SHALL provide fixed navigation with links to each section and a dark mode toggle.

#### Scenario: Desktop navigation

- **WHEN** the user clicks a navbar link
- **THEN** the page scrolls to the corresponding section

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle
- **THEN** the page switches between light and dark themes

### Requirement: Portfolio filter

The portfolio section SHALL display filterable project items.

#### Scenario: Filter by category

- **WHEN** the user clicks a filter tab
- **THEN** only portfolio items matching that category are shown

### Requirement: Contact form

The contact section SHALL include a functional contact form.

#### Scenario: Form submission

- **WHEN** the user fills in name, email, and message and clicks Send Message
- **THEN** a success confirmation message is displayed

### Requirement: Footer contains Component Dock link

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer branding

- **WHEN** the user scrolls to the footer
- **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"
