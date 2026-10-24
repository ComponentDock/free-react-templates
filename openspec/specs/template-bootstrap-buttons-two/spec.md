# Template: Bootstrap Buttons Two (Creative UI Button Collection & Effects)

## Purpose

Recreation of ColorLib Bootstrap Buttons 02 (https://colorlib.com/wp/template/bootstrap-buttons-02/). A comprehensive, elegant UI button showcase featuring creative hover effects, animated buttons, drop shadows, gradients, social buttons, pill shapes, outline variations, and interactive code snippets, built with React 19, Tailwind CSS 4, and TypeScript.
- **Source design:** ColorLib "Bootstrap Buttons 02" — https://colorlib.com/wp/template/bootstrap-buttons-02/

## Design tokens

- **Primary Brand Color**: Indigo / Royal Blue (`#4f46e5` / `#6366f1`)
- **Secondary Accent**: Cyan / Teal (`#06b6d4` / `#14b8a6`)
- **Font Family**: Inter, system-ui, sans-serif
- **Button Radii**: Rounded-full (`rounded-full`), rounded-lg (`rounded-lg`), rounded-md (`rounded-md`), sharp (`rounded-none`)
- **Section Backgrounds**: Slate-50 / White light mode, Slate-900 / Slate-800 dark mode

## Requirements

### Requirement 1: Creative & Animated Button Variations

- As a developer visiting the template, I want to explore creative button styles with animated hover effects, gradient glows, and icon transitions so I can elevate my UI projects.

#### Scenario: Viewing creative button categories

- **GIVEN** the user is on the Bootstrap Buttons Two home page
- **WHEN** the user browses the button categories navigation
- **THEN** they should see sections for Gradient Glow Buttons, Animated Hover Effects, Pill & Capsule Buttons, Outline & Border Styles, and Social Media Buttons

#### Scenario: Interacting with animated hover states

- **GIVEN** the user is viewing an animated button component card
- **WHEN** the user hovers over, focuses, or clicks a button
- **THEN** the button should display smooth transition animations for background gradients, translation/elevation, and glowing drop shadows

### Requirement 2: Code Snippet Generator & Copy-to-Clipboard

- As a developer, I want to inspect the React / Tailwind markup for any button variant and copy it instantly to my clipboard.

#### Scenario: Copying button code snippet

- **GIVEN** the user clicks the "View Code" button on a button style card
- **WHEN** the code panel expands to display the snippet
- **AND** the user clicks the copy button
- **THEN** the markup should be copied to the clipboard and show a success confirmation feedback toast

### Requirement 3: Component Dock Footer & Responsive Navigation

- As a user, I want a responsive header and footer linking to Component Dock.

#### Scenario: Footer attribution check

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** the footer must display "Made with Component Dock" linking to https://www.componentdock.com/

## Verification checklist

- [ ] All creative button variations render correctly with responsive padding and typography
- [ ] Hover, active, focus, and transition effects function flawlessly
- [ ] Code snippet accordion/modal and copy-to-clipboard work as expected
- [ ] Footer contains the mandatory Component Dock link
- [ ] 100% test coverage with Vitest & Testing Library

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bb/bootstrap-buttons-02/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4f46e5` — nearest `#4f69a2` (d=76)
- `#6366f1` — nearest `#69b6f0` (d=80)
- `#06b6d4` — nearest `#03a9f4` (d=35)
- `#14b8a6` — nearest `#2884ba` (d=59)
<!-- live-palette-unverified:end -->
