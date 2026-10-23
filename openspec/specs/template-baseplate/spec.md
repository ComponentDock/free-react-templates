# Template: Baseplate (Footer)

## Purpose

Recreation of ColorLib "Bootstrap Footer 03"
(https://colorlib.com/wp/template/bootstrap-footer-03/).
Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-03/

Stack: React 19, Vite, Tailwind CSS 4, TypeScript (strict). Vitest + Testing
Library with 100% coverage enforced.

## Requirements

### Requirement: Footer renders with brand logo

The footer MUST display a bold black logo link to the homepage.

#### Scenario: Logo renders

- **WHEN** the Baseplate page loads
- **THEN** a link with text "Baseplate" is visible in the footer
- **AND** the link points to "#"

### Requirement: Social media icons render with brand colors

The footer MUST display six social media icon links, each in a colored circle
matching its platform brand color.

#### Scenario: Six social icons render

- **WHEN** the Baseplate page loads
- **THEN** links for Facebook, Twitter, Instagram, Behance, Dribbble, and YouTube are visible
- **AND** each link opens in a new tab with rel="noreferrer"
- **AND** each link has an accessible aria-label matching its platform name

### Requirement: Navigation links render in two columns

The footer MUST display left-aligned navigation (Privacy, Policy) and
right-aligned navigation (Home, Our works, About, Blog, Contact).

#### Scenario: Left nav links render

- **WHEN** the Baseplate page loads
- **THEN** links for "Privacy" and "Policy" are visible

#### Scenario: Right nav links render

- **WHEN** the Baseplate page loads
- **THEN** links for "Home", "Our works", "About", "Blog", and "Contact" are visible

### Requirement: Copyright notice renders

The footer MUST display a centered copyright line with the current year.

#### Scenario: Copyright renders

- **WHEN** the Baseplate page loads
- **THEN** a copyright notice containing the current year is visible

### Requirement: Component Dock attribution link

The footer MUST include a link to https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: Attribution link renders

- **WHEN** the Baseplate page loads
- **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is visible
- **AND** the link opens in a new tab with rel="noreferrer"

### Requirement: Footer has white background

The footer MUST have a white background with a light gray top border.

#### Scenario: Footer styling

- **WHEN** the Baseplate page loads
- **THEN** the footer element has a white background class

### Requirement: Social icons have brand colors

Each social icon circle MUST use its platform's brand color as background.

#### Scenario: Facebook icon color

- **WHEN** the Baseplate page loads
- **THEN** the Facebook icon link has background color #3b579b

#### Scenario: Twitter icon color

- **WHEN** the Baseplate page loads
- **THEN** the Twitter icon link has background color #00a0fb

#### Scenario: Instagram icon color

- **WHEN** the Baseplate page loads
- **THEN** the Instagram icon link has background color #c31574

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/baseplate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/baseplate/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Footer renders with brand logo — a link with text "Baseplate" is visible in the footer
- [ ] Social media icons render with brand colors — links for Facebook, Twitter, Instagram, Behance, Dribbble, and YouTube are visible
- [ ] Navigation links render in two columns — links for "Privacy" and "Policy" are visible
- [ ] Copyright notice renders — a copyright notice containing the current year is visible
- [ ] Footer has white background — the footer element has a white background class
- [ ] Social icons have brand colors — the Facebook icon link has background color #3b579b
