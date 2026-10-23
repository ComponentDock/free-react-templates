# Template: Creel (FAQ Accordion)

## Purpose

Recreation of ColorLib **Accordion 12** (`https://colorlib.com/wp/template/accordion-12/`), preview URL: `https://preview.colorlib.com/theme/accordion-12/` (preview unreachable, fell back to screenshot and standard ColorLib accordion theme specifications).
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.

## Design Tokens

- **Brand Colors**: Primary deep slate blue (`#1e293b`), Accent vibrant indigo (`#6366f1`), Neutral light background (`#f8fafc`), Card background (`#ffffff`), Text primary (`#0f172a`), Text muted (`#64748b`).
- **Font Family**: "Inter", sans-serif.
- **Button Shapes**: Rounded-lg (`border-radius: 0.5rem`), subtle shadow, hover elevation with transition.
- **Section Backgrounds**: Alternating clean white and slate-50 sections with structured accordion card containers.

## Requirements

### Requirement: Interactive Accordion & FAQ Showcase

The system SHALL provide an interactive accordion FAQ section with collapsible panels for browsing structured content.

#### Scenario: Expanding and collapsing accordion items

- **GIVEN** the user is on the Creel template home page
- **WHEN** the user clicks on an accordion header
- **THEN** the corresponding accordion content panel expands smoothly, displaying detailed text and icons
- **AND** clicking the header again collapses the content panel

#### Scenario: Submitting a support inquiry form

- **GIVEN** the user scrolls to the contact/inquiry section at the bottom
- **WHEN** the user fills in name, email, and message fields and clicks submit
- **THEN** a success confirmation message is displayed
- **AND** the input fields are reset

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
`apps/creel/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/creel/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Interactive Accordion & FAQ Showcase — the corresponding accordion content panel expands smoothly, displaying detailed text and icons
