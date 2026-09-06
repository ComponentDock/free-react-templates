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
