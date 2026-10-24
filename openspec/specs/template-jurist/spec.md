# Template: Jurist (Lawyer)

Recreation of ColorLib "Judicial" (https://colorlib.com/wp/template/judicial/).

## Purpose

Provide a free, production-ready React law firm landing template that faithfully
recreates the ColorLib Judicial design under the name "Jurist". The template
features a hero section, about section, practice areas, expertise grid, stats,
consultation form, testimonials with FAQ accordion, social bar, and footer.

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#cea15a` | live sheet paints it ×16 — `border-color` on `.form-control:active, .form-control:focus`; style.css (20,247 B, sha256 aa13bf860284) · <https://preview.colorlib.com/theme/judicial/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Page renders all major sections in order

The template SHALL render the following sections in order: Navbar, Hero, About,
FeaturedPractice, AreasOfExpertise, WhyChooseUs, Consultation, TestimonialsFaq,
SocialBar, Footer.

#### Scenario: All sections are present

- **WHEN** a user visits the Jurist template
- **THEN** the page contains a navbar with "Jurist" branding
- **AND** a hero heading "We Fight For Justice"
- **AND** an about section with image and text
- **AND** featured practice areas on gold background
- **AND** areas of expertise grid with 6 items
- **AND** why choose us stats section with 4 stats
- **AND** a consultation form with Name, Phone, Description fields
- **AND** testimonials and FAQ accordion
- **AND** social media bar with 5 icons
- **AND** footer with Component Dock link

### Requirement: Navigation links work

The navbar SHALL provide links to all major sections of the page.

#### Scenario: Navigation links are clickable

- **WHEN** a user views the navbar
- **THEN** links for Home, About, Practice Area, Case Studies, and Contact are visible
- **AND** each link points to the corresponding section anchor

### Requirement: Mobile menu toggles

The navbar SHALL provide a mobile menu toggle button.

#### Scenario: Mobile menu opens and closes

- **WHEN** a user clicks the mobile menu button
- **THEN** the mobile menu opens with all navigation links
- **AND** clicking a link closes the mobile menu

### Requirement: Consultation form accepts input

The consultation form SHALL accept user input in all fields.

#### Scenario: Form fields accept text input

- **WHEN** a user types in the Name field
- **THEN** the field displays the entered text
- **AND** the Phone field accepts input
- **AND** the Case Description textarea accepts input

### Requirement: FAQ accordion toggles

The FAQ section SHALL allow users to expand and collapse answers.

#### Scenario: FAQ items toggle on click

- **WHEN** a user clicks a FAQ question
- **THEN** the answer becomes visible
- **AND** clicking the same question again hides the answer

### Requirement: Footer links to Component Dock

The footer SHALL include a link to https://www.componentdock.com/.

#### Scenario: Component Dock link is present

- **WHEN** a user views the footer
- **THEN** a link labeled "Component Dock" points to https://www.componentdock.com/
- **AND** the link opens in a new tab

### Requirement: Design tokens match original

The template SHALL use the following design tokens from the original ColorLib
Judicial template:

#### Scenario: Brand colors are applied

- **WHEN** the page renders
- **THEN** the primary brand color is #cea15a (golden amber)
- **AND** the navy section background is #293462
- **AND** the body font is Nunito Sans
- **AND** the heading font is Oswald

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/jurist/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/jurist/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navigation links work — links for Home, About, Practice Area, Case Studies, and Contact are visible
- [ ] Mobile menu toggles — the mobile menu opens with all navigation links
- [ ] Consultation form accepts input — the field displays the entered text
- [ ] FAQ accordion toggles — the answer becomes visible
