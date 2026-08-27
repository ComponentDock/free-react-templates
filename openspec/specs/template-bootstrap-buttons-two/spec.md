# Template: Bootstrap Buttons Two (Creative UI Button Collection & Effects)

## Purpose

Recreation of ColorLib Bootstrap Buttons 02 (https://colorlib.com/wp/template/bootstrap-buttons-02/). A comprehensive, elegant UI button showcase featuring creative hover effects, animated buttons, drop shadows, gradients, social buttons, pill shapes, outline variations, and interactive code snippets, built with React 19, Tailwind CSS 4, and TypeScript.

## Design tokens

- **Primary Brand Color**: Indigo / Royal Blue (`#4f46e5` / `#6366f1`)
- **Secondary Accent**: Cyan / Teal (`#06b6d4` / `#14b8a6`)
- **Font Family**: Inter, system-ui, sans-serif
- **Button Radii**: Rounded-full (`rounded-full`), rounded-lg (`rounded-lg`), rounded-md (`rounded-md`), sharp (`rounded-none`)
- **Section Backgrounds**: Slate-50 / White light mode, Slate-900 / Slate-800 dark mode

## Requirements & Gherkin Scenarios

### Requirement 1: Creative & Animated Button Variations

- As a developer visiting the template, I want to explore creative button styles with animated hover effects, gradient glows, and icon transitions so I can elevate my UI projects.

Scenario: Viewing creative button categories
Given the user is on the Bootstrap Buttons Two home page
When the user browses the button categories navigation
Then they should see sections for Gradient Glow Buttons, Animated Hover Effects, Pill & Capsule Buttons, Outline & Border Styles, and Social Media Buttons

Scenario: Interacting with animated hover states
Given the user is viewing an animated button component card
When the user hovers over, focuses, or clicks a button
Then the button should display smooth transition animations for background gradients, translation/elevation, and glowing drop shadows

### Requirement 2: Code Snippet Generator & Copy-to-Clipboard

- As a developer, I want to inspect the React / Tailwind markup for any button variant and copy it instantly to my clipboard.

Scenario: Copying button code snippet
Given the user clicks the "View Code" button on a button style card
When the code panel expands to display the snippet
And the user clicks the copy button
Then the markup should be copied to the clipboard and show a success confirmation feedback toast

### Requirement 3: Component Dock Footer & Responsive Navigation

- As a user, I want a responsive header and footer linking to Component Dock.

Scenario: Footer attribution check
Given the user scrolls to the bottom of the page
Then the footer must display "Made with Component Dock" linking to https://www.componentdock.com/

## Verification Checklist

- [ ] All creative button variations render correctly with responsive padding and typography
- [ ] Hover, active, focus, and transition effects function flawlessly
- [ ] Code snippet accordion/modal and copy-to-clipboard work as expected
- [ ] Footer contains the mandatory Component Dock link
- [ ] 100% test coverage with Vitest & Testing Library
