# Template: Fanfold (FAQ & Accordion UI Template)

## Purpose

Recreation of ColorLib **Accordion 06** (`https://colorlib.com/wp/template/accordion-06/`), a clean, modern FAQ and interactive accordion component template featuring multi-section expandable panels, category tabs, clean typography, search filter, and responsive layout. Stack: React 19, Tailwind CSS 4, TypeScript, Vite.

## Design Tokens

- **Brand Colors**:
  - Primary: `#4f46e5` (Indigo 600)
  - Primary Hover: `#4338ca` (Indigo 700)
  - Neutral Dark: `#1e293b` (Slate 800)
  - Neutral Light: `#f8fafc` (Slate 50)
  - Accent: `#06b6d4` (Cyan 500)
- **Typography**:
  - Font Family: `Inter, system-ui, sans-serif`
  - Headings: Bold sans-serif (`font-bold`, tracking-tight)
- **UI Elements**:
  - Border Radius: `rounded-xl` (12px) for cards, `rounded-lg` (8px) for buttons/inputs
  - Shadows: `shadow-sm` and `shadow-md` for depth
  - Transitions: smooth expand/collapse transitions (`transition-all duration-200`)

## Gherkin Requirements & Scenarios

### Feature: Interactive FAQ Accordion

As a visitor, I want to browse collapsible accordion items so I can find answers quickly.

#### Scenario: Expanding and collapsing an accordion item

- **Given** the user is viewing the FAQ section
- **When** the user clicks on an accordion header
- **Then** the corresponding content panel expands smoothly with an icon toggle (+ to -)
- **And** other items remain in their current state (or accordion mode can toggle single-expand).

#### Scenario: Filtering FAQs by category or keyword

- **Given** the user has opened the FAQ section
- **When** the user types a search term into the search bar
- **Then** the accordion list filters instantly to matching questions and answers

## Verification Checklist

- [ ] Spec valid (`npm run spec:validate`)
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Builds correctly (`npm run build`)
- [ ] Footer links to `https://www.componentdock.com/`
