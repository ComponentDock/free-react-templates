# Template: Pleats (UI Component / Interactive Accordion)

## Purpose

Recreation of ColorLib **Bootstrap Accordion V05** (`https://colorlib.com/wp/template/accordion-05/`), preview URL `https://preview.colorlib.com/theme/accordion-05/`. Built with Vite, React 19, Tailwind CSS 4, TypeScript (strict), and Lucide React icons.

## Design tokens

- **Font Family**: Poppins, sans-serif
- **Brand Colors**:
  - Primary / Accent: Deep Blue / Indigo (`#3b82f6` / `#2563eb`)
  - Background: Clean light neutral gradient or subtle solid gray (`#f8fafc`)
  - Card Surface: White (`#ffffff`) with subtle shadow (`shadow-md` or `shadow-lg`)
  - Text: Dark Slate (`#1e293b` for headings, `#64748b` for secondary)
- **Component Styling**:
  - Rounded cards with smooth expand/collapse transitions
  - Header styling with distinct icons (Manage, Location, Hobbies)
  - Clean lists inside each accordion section with item indicators

## Gherkin requirements & scenarios

### Feature: Pleats Accordion Showcase

As a user visiting the Pleats interactive accordion component showcase, I want to explore multiple collapsible accordion sections with rich content so that I can easily organize and view structured information.

#### Scenario: View accordion sections

- Given the user loads the Pleats application
- Then the main heading "Pleats Showcase" (or Accordion #05 equivalent) should be visible
- And three primary sections ("Manage", "Location", "Hobbies") should be displayed as accordion cards

#### Scenario: Expand and collapse accordion sections

- Given the "Manage" section is initially expanded showing account, settings, and profile links
- When the user clicks on the "Location" section header
- Then the "Location" section expands to show its content
- And the "Manage" section collapses

#### Scenario: Footer attribution

- Given the user scrolls to the bottom of the page
- Then a footer should display copyright and a link to `https://www.componentdock.com/` ("Component Dock")

## Verification checklist

- [ ] Vite + React 19 + Tailwind CSS 4 setup correct
- [ ] 100% test coverage with Vitest & Testing Library
- [ ] Fully responsive layout matching live preview
- [ ] Footer links to Component Dock
- [ ] CNAME and homepage configured for pleats.free.componentdock.com
