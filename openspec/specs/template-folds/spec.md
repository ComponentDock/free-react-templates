# Template: Folds (Accordion & Widget UI)

## Purpose

Recreation of ColorLib **Accordion 05** (`https://colorlib.com/wp/template/accordion-05/`, preview: `https://preview.colorlib.com/theme/bac/accordion-05/`), built as a modern React 19 + Tailwind CSS 4 + TypeScript interactive widget suite.

## Design Tokens

- **Brand / Accent Color**: Teal / Turquoise `#75d6d1` (`rgb(117, 214, 209)`) for active accordion headers, icons, and expanded content bodies.
- **Background**: Light neutral `#fafafa` page background, solid white `#ffffff` accordion cards with soft box shadow (`0px 10px 29px -16px rgba(0, 0, 0, 0.12)`).
- **Typography**: Poppins sans-serif font family, base size 15px, line height 1.8.
- **Icons**: Lucide icons (`User`, `Settings`, `MapPin`, `Heart`, etc.) mapping to Ionicon concepts.
- **Radius**: Clean rectangular cards (`rounded-none` or subtle rounded) matching the minimalist UI style.

## Requirements & Scenarios

### Feature: Interactive Accordion Sections

As a user visiting Folds, I want to expand and collapse accordion sections so I can view categorized lists and account/profile options cleanly.

#### Scenario: Expanding an accordion section

- **Given** the accordion component is loaded with sections (Manage, Location, Hobbies)
- **When** the user clicks the "Manage" accordion header
- **Then** the section expands to reveal its items (Account, Settings, Profile) with teal background and white text.

#### Scenario: Collapsing an accordion section

- **Given** the "Manage" section is expanded
- **When** the user clicks the "Manage" header again
- **Then** the section collapses smoothly.

### Feature: Component Dock Footer Link

As a visitor, I want a footer linking to Component Dock.

- **Given** the page is scrolled to the bottom
- **When** the footer is rendered
- **Then** it contains a link to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] Spec validated (`npm run spec:validate`)
- [ ] Unit tests written with 100% coverage
- [ ] Responsive layout tested
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
