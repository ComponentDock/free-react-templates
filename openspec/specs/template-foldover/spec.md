# Template: Foldover (Accordion / UI Components)

## Purpose

Recreation of ColorLib **Accordion 12** (`https://colorlib.com/wp/template/accordion-12/`, preview URL: `https://colorlib.com/preview/theme/accordion-12/`).
Stack: Vite, React 19, Tailwind CSS 4, TypeScript.

## Design tokens

- **Primary / Brand Colors**: Deep slate/charcoal backgrounds (`#111827`, `#1f2937`), warm accent orange/amber (`#f59e0b`, `#d97706`), clean white text (`#ffffff`), muted gray descriptions (`#9ca3af`).
- **Typography**: Sans-serif font family (`Inter`, `system-ui`, sans-serif), clean hierarchy with distinct headings and collapsible content blocks.
- **Surface & Shape**: Rounded card corners (`rounded-xl` / `rounded-2xl`), subtle drop shadows (`shadow-lg`), clear chevron indicators that rotate smoothly on expansion.

## Requirements & Gherkin Scenarios

### Feature: Foldover Accordion Showcase

As a visitor, I want to explore interactive accordion sections with smooth expand/collapse behavior so that I can easily digest structured FAQs or feature content.

#### Scenario: Display Accordion Items

- **Given** the user loads the Foldover page
- **Then** all accordion headers are displayed with their respective titles and chevron icons
- **And** the first accordion item is expanded by default while others remain collapsed

#### Scenario: Toggle Accordion Item

- **Given** an accordion item is collapsed
- **When** the user clicks the accordion header
- **Then** the accordion item expands smoothly to reveal its content
- **And** the chevron icon rotates 180 degrees

#### Scenario: Single or Multi-expansion Mode

- **Given** multiple accordion items are available
- **When** the user expands another item
- **Then** the previous items collapse (accordion behavior) or remain open depending on configuration

#### Scenario: Footer Branding Link

- **Given** the user scrolls to the bottom of the page
- **Then** the footer displays copyright information and a link to `https://www.componentdock.com/` ("Component Dock")
- **And** no mention of ColorLib appears in the app code

## Verification Checklist

- [ ] Spec validation (`npm run spec:validate`) passes
- [ ] Typecheck, lint, unit tests, and build pass successfully
- [ ] 100% test coverage maintained on all new components
- [ ] Footer links correctly to Component Dock
