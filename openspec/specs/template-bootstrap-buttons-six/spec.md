# Template: Bootstrap Buttons Six (UI Button Showcase & Design System)

## Purpose

Recreation of ColorLib Bootstrap Buttons 06 (`https://colorlib.com/wp/template/bootstrap-buttons-06/`, preview: `https://preview.colorlib.com/theme/bootstrap-buttons-06/`). A clean, modern UI component showcase featuring an extensive palette of bootstrap-inspired button variants, size scales (Large, Medium, Small), solid color variations (Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray, White), and full-width block buttons, built with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Primary Brand Color**: Indigo / Blue (`#4f46e5` / `#2563eb`)
- **Secondary Accent**: Slate / Gray (`#64748b`)
- **Font Family**: Inter, system-ui, sans-serif
- **Button Radii**: Rounded (`rounded-lg`, `rounded-md`, `rounded-full`)
- **Section Backgrounds**: Slate-50 light mode, Slate-900 dark mode, clean card containers

## Requirements & Gherkin Scenarios

### Requirement 1: Size Scale Showcase

- As a developer visiting the template, I want to explore different button sizes so I can choose the appropriate scale for my user interface.

Scenario: Viewing button sizes
Given the user is on the Bootstrap Buttons Six home page
When the user views the size scale section
Then they should see Large, Medium, and Small button variants with proportional padding and typography

### Requirement 2: Comprehensive Color Palette

- As a developer, I want to see a rich collection of colored buttons so I can match my brand guidelines.

Scenario: Viewing color variants
Given the user is viewing the color palette section
When the user scans the buttons
Then they should see Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray, and White button options with interactive hover states

### Requirement 3: Full Width Block Buttons

- As a designer, I want to test full-width buttons for responsive layouts.

Scenario: Viewing full width block button
Given the user is viewing the full width section
When the user checks the block button
Then it should span 100% of its container width with clear hover feedback

## Verification Checklist

- [ ] All size scales (Large, Medium, Small) render correctly
- [ ] All 19 color variants display exact color contrast and hover effects
- [ ] Full width button expands correctly to container bounds
- [ ] Fully responsive on mobile and desktop viewports
- [ ] Footer includes branded Component Dock link (`https://www.componentdock.com/`)
