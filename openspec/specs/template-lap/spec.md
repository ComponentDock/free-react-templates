# Template: Lap (UI & Components / Accordions)

## Purpose

Recreation of ColorLib **Accordion 14** (`https://colorlib.com/wp/template/accordion-14/`), built as a modern, responsive React template (`@free-react-templates/lap`) using Vite, React 19, Tailwind CSS 4, and TypeScript.

- **Source Template**: ColorLib Accordion 14 (`https://colorlib.com/wp/template/accordion-14/`)
- **Live Preview URL**: `https://preview.colorlib.com/theme/accordion-14/` (Note: preview URL returned 404 during automated prep; faithful replication derived from canonical ColorLib screenshot and structured accordion design patterns).
- **Design Category**: Accordions / Interactive UI Components
- **Target URL**: `https://lap.free.componentdock.com`

---

## Design Tokens & Visual Research

Derived from the ColorLib Accordion 14 screenshot and design system conventions:

- **Brand Colors**:
  - Primary / Accent: Slate / Charcoal (`#2c3e50`, `#34495e`)
  - Secondary / Hover: Accent Blue (`#3498db`, `#2980b9`)
  - Neutral Backgrounds: Crisp White (`#ffffff`), Light Gray (`#f8f9fa`, `#f1f2f6`)
  - Text: Dark Slate (`#2d3436`), Muted Gray (`#636e72`)
- **Typography**:
  - Font Family: `Inter`, `Poppins`, sans-serif
  - Heading scale: Bold, clean sans-serif with distinct hierarchy
- **Button & Component Shapes**:
  - Rounded corners (`rounded-lg`, `rounded-xl`)
  - Smooth accordion expand/collapse transitions with chevron indicators
  - Card shadows with soft elevation (`shadow-md`, `shadow-lg`)

---

## Gherkin Requirements & Scenarios

### Feature: Accordion Navigation & Interactive Content

As a site visitor, I want to explore interactive accordion sections so that I can easily consume structured information in an organized layout.

#### Scenario: Expand and collapse accordion items

- **Given** the user is viewing the accordion section
- **When** the user clicks an accordion header
- **Then** the corresponding content panel expands smoothly and displays its details
- **And** clicking another header expands that item while optionally collapsing or keeping others accessible per accordion behavior.

#### Scenario: Interactive tabs and features

- **Given** the user is viewing the feature showcase
- **When** the user interacts with tabs or feature toggles
- **Then** the active view updates instantly with corresponding content.

#### Scenario: Component Dock Footer Attribution

- **Given** the user scrolls to the bottom of the page
- **When** the footer is rendered
- **Then** it must display a copyright notice and a direct link to `https://www.componentdock.com/` labeled "Component Dock".

---

## Verification Checklist

- [ ] App builds successfully (`npm run build`)
- [ ] Typecheck passes without errors (`npm run typecheck`)
- [ ] 100% test coverage maintained (`npm run test:coverage`)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] CNAME configured as `lap.free.componentdock.com`
