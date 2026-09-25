# Template: Toolkit (UI Kit)

## Purpose

Recreation of ColorLib **Tools Ui Kit** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- Source: https://colorlib.com/wp/template/tools-ui-kit/
- Preview: https://preview.colorlib.com/theme/tools-ui-kit/ (404 — preview unreachable; fallback to screenshot)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tools-free-template.jpg
- New name: `toolkit` (apps/toolkit, @free-react-templates/toolkit)
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- Note: This is a UI Kit / component showcase template (Bootstrap 4 original). The React recreation will showcase reusable UI components organized by category.

## Design tokens (extracted from screenshot — preview unreachable)

| Token                | Value                                                                                                                                             | Usage                                                             |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Primary (blue)       | `#5B86E5`                                                                                                                                         | Hero gradient start, button backgrounds, primary accent           |
| Secondary (blue)     | `#36D1DC`                                                                                                                                         | Hero gradient end, accent elements                                |
| Hero gradient        | `linear-gradient(135deg, #5B86E5, #36D1DC)`                                                                                                       | Hero section background (left-to-right blue gradient)             |
| White                | `#ffffff`                                                                                                                                         | Hero text, button text on blue, page background, card backgrounds |
| Dark text            | `#212529`                                                                                                                                         | Section headings, body text on white                              |
| Muted text           | `#6c757d`                                                                                                                                         | Subtitles, secondary labels                                       |
| Light gray bg        | `#f8f9fa`                                                                                                                                         | Alternating section backgrounds                                   |
| Border               | `#dee2e6`                                                                                                                                         | Card borders, dividers                                            |
| Font family          | Inter (Google Fonts)                                                                                                                              | All text                                                          |
| Heading weight       | 300 (light)                                                                                                                                       | Hero heading "Tools UI Kit." — large, thin, elegant               |
| Body weight          | 400                                                                                                                                               | Paragraphs, body text                                             |
| Button style         | Rounded pill, white bg on blue hero, blue bg on white sections                                                                                    | Primary CTA "DOWNLOAD TOOLS" with cloud-download icon             |
| Button border-radius | ~4px (Bootstrap default)                                                                                                                          | All buttons                                                       |
| Section padding      | ~80px top/bottom                                                                                                                                  | Between major sections                                            |
| Navbar               | Transparent over hero, white text. Logo "Tools Kit." left. Right: COMPONENTS dropdown, DOWNLOAD link, social icons (Facebook, Twitter, Instagram) |

## Requirements

### Requirement: Navbar displays navigation and social links

Users SHALL see a transparent navbar with the logo "Tools Kit.", a COMPONENTS dropdown, a DOWNLOAD link, and social icons (Facebook, Twitter, Instagram).

#### Scenario: Navbar renders logo and links

- **GIVEN** I am on the Toolkit homepage
- **THEN** I should see a "Tools Kit." logo
- **AND** I should see a "COMPONENTS" dropdown button
- **AND** I should see a "DOWNLOAD" link
- **AND** I should see social icon links for Facebook, Twitter, and Instagram

#### Scenario: Navbar is transparent over hero

- **GIVEN** I am on the Toolkit homepage
- **THEN** the navbar should have a transparent background
- **AND** the text should be white

#### Scenario: Components dropdown toggles

- **GIVEN** I am on the Toolkit homepage
- **WHEN** I click the "COMPONENTS" dropdown button
- **THEN** I should see a menu with component categories (Buttons, Forms, Cards, Alerts, Modals, Tables)
- **WHEN** I click the button again
- **THEN** the menu should close

#### Scenario: Clicking outside closes dropdown

- **GIVEN** the components dropdown is open
- **WHEN** I click outside the dropdown
- **THEN** the menu should close

### Requirement: Hero section displays title and CTA

Users SHALL see a hero section with a blue gradient background, the heading "Tools UI Kit.", a subtitle, and a "DOWNLOAD TOOLS" button.

#### Scenario: Hero renders content

- **GIVEN** I am on the Toolkit homepage
- **THEN** I should see a heading "Tools UI Kit."
- **AND** I should see a subtitle "Free Bootstrap 4 UI Kit on Tools Design."
- **AND** I should see a "DOWNLOAD TOOLS" button

#### Scenario: Hero has gradient background

- **GIVEN** I am on the Toolkit homepage
- **THEN** the hero section should have a blue gradient background
- **AND** the text should be white

### Requirement: Basic Elements section showcases UI components

Users SHALL see a "Basic Elements" section with button variants, form elements, cards, and alerts.

#### Scenario: Buttons section shows variants

- **GIVEN** I scroll to the Basic Elements section
- **THEN** I should see a "Basic Elements" heading
- **AND** I should see a "Buttons" subsection
- **AND** I should see "Pick your style" subtitle
- **AND** there should be multiple button variants (Primary, Secondary, Disabled, Outline, Rounded, Outline Rounded)

#### Scenario: Form elements are displayed

- **GIVEN** I scroll to the Basic Elements section
- **THEN** I should see a "Form Elements" subsection
- **AND** I should see a text input and a select dropdown

#### Scenario: Cards are displayed

- **GIVEN** I scroll to the Basic Elements section
- **THEN** I should see a "Cards" subsection
- **AND** I should see three card components with images and text

#### Scenario: Alerts are displayed

- **GIVEN** I scroll to the Basic Elements section
- **THEN** I should see an "Alerts" subsection
- **AND** I should see success, info, warning, and error alert messages

### Requirement: Footer displays copyright and Component Dock link

Users SHALL see a footer with copyright text and a link to Component Dock.

#### Scenario: Footer renders content

- **GIVEN** I am on the Toolkit homepage
- **THEN** I should see a footer with copyright text
- **AND** the footer should contain a link to "https://www.componentdock.com/" branded as "Component Dock"
- **AND** the footer should display the current year

## Verification checklist

- [ ] Navbar transparent over hero with white text
- [ ] Hero section with blue gradient background
- [ ] Hero heading "Tools UI Kit." in light weight
- [ ] Hero subtitle and "DOWNLOAD TOOLS" CTA button
- [ ] Basic Elements section with button showcase
- [ ] Multiple button variant examples displayed
- [ ] Components dropdown functional
- [ ] Social icons in navbar (Facebook, Twitter, Instagram)
- [ ] Footer with copyright and Component Dock link
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
