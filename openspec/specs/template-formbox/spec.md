# Template: Formbox

## Purpose

Recreation of ColorLib "Contact Form 17" (https://colorlib.com/wp/template/contact-form-17/).
Preview: https://preview.colorlib.com/theme/bootstrap/contact-form-17/

A two-column contact form with a navy blue (#35477d) sidebar showing contact information,
and a white form panel with underline-style inputs. The overall design features a teal
(#8bbabb) background accent on the upper portion.

Design Tokens:

- Font: Roboto (400, 700, 900 weights) via Google Fonts
- Brand color: #35477d (navy blue)
- Brand dark: #2d3d6b (darker navy for hover)
- Background accent: #8bbabb (teal)
- Text primary: #000000 (headings)
- Text secondary: #8c8c8c (body text)
- Label color: #b3b3b3 (light gray)
- Input border: #cccccc (bottom border only)
- Focus border: #000000
- Sidebar background: #35477d
- Sidebar text: rgba(255, 255, 255, 0.5)
- Sidebar icons: #ffffff

## Requirements

### Requirement: Contact form rendering

The template SHALL display a two-column contact card with a form panel and a sidebar.

#### Scenario: Form panel renders all fields

- **WHEN** the page loads
- **THEN** the "Send us a message" heading is visible
- **AND** the Name, Email, Phone, Company, and Message fields are present
- **AND** the "Send Message" button is visible

#### Scenario: Sidebar renders contact information

- **WHEN** the page loads
- **THEN** the "Contact Information" heading is visible
- **AND** the description paragraph is visible
- **AND** the address, phone, and email are displayed with icons

### Requirement: Form interaction

The template SHALL allow users to type into all form fields and prevent default form submission.

#### Scenario: User types in form fields

- **WHEN** the user types into any form field
- **THEN** the field value updates to reflect the typed text

#### Scenario: Form submission is prevented

- **WHEN** the user clicks the "Send Message" button
- **THEN** the form submission is prevented (no page navigation)

### Requirement: Footer links to Component Dock

The template SHALL display a footer linking to https://www.componentdock.com/.

#### Scenario: Footer renders correctly

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"
- **AND** the link opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formbox/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formbox/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
