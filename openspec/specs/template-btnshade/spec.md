# Template: BtnShade (UI Button Collection & Shaded Variants)

## Purpose

Recreation of ColorLib Bootstrap Buttons 11 (`https://colorlib.com/wp/template/bootstrap-buttons-11/`, preview: `https://preview.colorlib.com/theme/bootstrap-buttons-11/`). A comprehensive, clean Bootstrap 4 style button showcase featuring comprehensive sizes (large, medium, small), extensive color variants (Primary `#007bff`, Secondary `#6c757d`, Success `#28a745`, Info `#17a2b8`, Warning `#ffc107`, Danger `#dc3545`, Light `#f8f9fa`, Orange `#fd7e14`, Indigo `#6610f2`, Pink `#e83e8c`, Deep Orange `#ffac8e`, Aqua `#3fc5f0`, Dark `#393e46`, Black `#000000`, Purple `#6f42c1`, Blue `#007bff`, Brown `#a0855b`, Blue Gray `#3f4d71`), full-width buttons, and interactive copy/paste code snippets, built with React 19, Tailwind CSS 4, and TypeScript.

## Design tokens

- **Primary Brand Color**: Bootstrap Blue (`#007bff`)
- **Secondary Brand Color**: Slate Gray (`#6c757d`)
- **Accent Colors**: Success Green (`#28a745`), Warning Yellow (`#ffc107`), Danger Red (`#dc3545`), Info Cyan (`#17a2b8`), Indigo (`#6610f2`), Pink (`#e83e8c`), Orange (`#fd7e14`)
- **Font Family**: Inter, system-ui, -apple-system, sans-serif
- **Button Radii**: Standard rounded (`rounded`), pill (`rounded-full`), square (`rounded-none`)
- **Section Backgrounds**: Clean white (`bg-white`) and light gray (`bg-gray-50`) with subtle card borders

## Requirements

### Requirement 1: Button Sizes & Dimensions

- As a developer, I want to explore different button sizes (Large, Medium, Small) so I can choose the appropriate scale for my user interfaces.

#### Scenario: Viewing button sizes

- **GIVEN** the user is on the BtnShade home page
- **WHEN** the user views the button sizes section
- **THEN** they should see Large, Medium, and Small button variants with proportional padding and typography

### Requirement 2: Comprehensive Color Palette

- As a UI designer, I want to test all standard Bootstrap and custom shaded button colors (Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray) to evaluate color contrast and hierarchy.

#### Scenario: Exploring color variants

- **GIVEN** the user is on the color variants section
- **WHEN** the user browses the complete grid of 18 button color options
- **THEN** each button should display its distinct background color with accessible foreground text and hover effects

### Requirement 3: Full-Width & Special Layouts

- As a frontend engineer, I want to inspect full-width buttons and responsive alignment specimens for form submission and call-to-action blocks.

#### Scenario: Viewing full-width buttons

- **GIVEN** the user is on the full-width button section
- **WHEN** the user views the container
- **THEN** a full-width block button should span the container width with centered label text

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/btnshade/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/btnshade/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] App builds successfully without TypeScript or lint errors
- [ ] All 18 color variants render with correct styling and hover feedback
- [ ] Responsive layouts work cleanly across mobile and desktop viewports
- [ ] Footer includes the required link to `https://www.componentdock.com/` ("Component Dock")
- [ ] 100% test coverage maintained across all components
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
