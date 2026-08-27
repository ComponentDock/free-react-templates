# Template: Bootstrap Buttons Three (Solid & Outline Button Collection)

## Purpose

Recreation of ColorLib Bootstrap Buttons 03 (https://colorlib.com/wp/template/bootstrap-buttons-03/). A polished UI component library showcasing solid fill buttons, modern outline styles, dual-tone variants, badge integrations, and interactive states, built with React 19, Tailwind CSS 4, and TypeScript.

## Design tokens

- **Primary Brand Color**: Emerald / Teal (`#10b981` / `#059669`)
- **Secondary Accent**: Slate / Gray (`#64748b` / `#475569`)
- **Font Family**: Inter, system-ui, sans-serif
- **Button Radii**: Rounded-md (`rounded-md`), rounded-lg (`rounded-lg`), rounded-full (`rounded-full`), square (`rounded-none`)
- **Section Backgrounds**: Slate-50 / White light mode, Slate-900 / Slate-800 dark mode

## Requirements & Gherkin Scenarios

### Requirement 1: Solid & Outline Button Collections

- As a developer, I want to explore solid fill and clean outline button variants with clear hover and active states.

Scenario: Viewing solid and outline categories
Given the user is on the Bootstrap Buttons Three home page
When the user views the button showcase sections
Then they should see Solid Fill Buttons, Clean Outline Buttons, Status Variations (Success, Warning, Danger, Info), and Size Scaling (Sm, Md, Lg, Xl)

### Requirement 2: Interactive States & Copy Snippet

- As a user, I want to test focus, active, and disabled states, and copy button markup instantly.

Scenario: Copying code snippet
Given the user clicks the "Code" action on any button card
When the snippet view opens
And the user clicks the copy button
Then the React/Tailwind markup should be copied to the clipboard with success feedback

### Requirement 3: Component Dock Footer & Navigation

- As a user, I want a responsive header and footer linking to Component Dock.

Scenario: Footer attribution check
Given the user scrolls to the bottom of the page
Then the footer must display "Made with Component Dock" linking to https://www.componentdock.com/

## Verification Checklist

- [ ] All solid and outline button variants render correctly with responsive padding
- [ ] Hover, active, focus, and disabled states function properly
- [ ] Code snippet copy-to-clipboard works as expected
- [ ] Footer contains the mandatory Component Dock link
- [ ] 100% test coverage with Vitest & Testing Library
