# Template: Vellum (Accordion / FAQ Template)

## Purpose

- Recreation of ColorLib **Accordion 16** (`https://colorlib.com/wp/template/accordion-16/`).
- Preview URL: `https://colorlib.com/wp/template/accordion-16/` (Live preview endpoint returned 404; fully designed and specified based on the canonical ColorLib screenshot `https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-16.jpg`).
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).

## Design Tokens

- Brand Primary: Deep Navy Blue (`#1e293b` / `bg-slate-800` or `#0f172a`), Accent Indigo (`#4f46e5` / `bg-indigo-600`), Soft Background (`#f8fafc`).
- Typography: Sans-serif (Inter / System font stack). Clean headings with generous line-height.
- Components: Rounded cards (`rounded-xl`), soft shadows (`shadow-sm`), interactive expanding accordion rows with chevron rotation indicators, primary action buttons with hover states.

## Sections

1. **Navbar**: Brand logo ("Vellum"), navigation links (Features, FAQ, Resources, Contact), and a "Get Started" CTA button.
2. **Hero Section**: Bold headline with subtext introducing the modern accordion & content management interface, supported by a hero illustration/placeholder and primary/secondary call-to-action buttons.
3. **Features Overview**: Three-column grid highlighting key benefits (Fast Navigation, Responsive Design, Customizable UI) with icons and brief descriptions.
4. **Interactive Accordion / FAQ Section**: Expandable vertical accordion list featuring common questions and detailed collapsible answers with smooth interactive toggles.
5. **Call to Action Banner**: Dark-themed banner encouraging users to try out the platform with a newsletter subscription or primary signup button.
6. **Footer**: Clean footer links, copyright notice, and required mandatory attribution link to `https://www.componentdock.com/` ("Component Dock").

## Requirements

### Feature: Navbar Navigation

#### Scenario: Navbar Navigation

- Scenario: User views the navigation bar
- **GIVEN** the Vellum application is loaded
- **THEN** the navbar displays the logo "Vellum" and links for Features, FAQ, Resources, and Contact
- **AND** a "Get Started" button is visible

### Feature: Interactive Accordion Sections

#### Scenario: Interactive Accordion Sections

- Scenario: User expands an accordion item
- **GIVEN** the FAQ / Accordion section is visible
- **WHEN** the user clicks on an accordion header
- **THEN** the corresponding accordion content expands smoothly and the chevron icon rotates

### Feature: Footer Attribution

#### Scenario: Footer Attribution

- Scenario: User scrolls to the footer
- **GIVEN** the page footer is rendered
- **THEN** it contains a link pointing to `https://www.componentdock.com/` with anchor text "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/vellum/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/vellum/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar Navigation — the navbar displays the logo "Vellum" and links for Features, FAQ, Resources, and Contact
- [ ] Interactive Accordion Sections — the corresponding accordion content expands smoothly and the chevron icon rotates
