---
name: btncast
category: buttons
source: bootstrap-buttons-14
preview_url: https://preview.colorlib.com/theme/bb/bootstrap-buttons-14/
---

# Template: BtnCast (Bootstrap Buttons Showcase & Design System)

## Purpose

Recreation of ColorLib Bootstrap Buttons 14 (`https://colorlib.com/wp/template/bootstrap-buttons-14/`, preview: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-14/`). A clean, modern UI component showcase featuring button styles (solid, outline, rounded), sizes (small, regular, large), color variants (primary `#5735ea`, secondary `#32c5f6`, tertiary `#48da79`, gradient `#5635ea` to `#a15bf0`), brand buttons (Twitter `#69b6f0`, Facebook `#4f69a2`, LinkedIn `#2884ba`, Pinterest `#d03940`, Dribbble `#ea6294`), icon integration (Ionicons), and copy-to-clipboard code snippets, built with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Primary Brand Color**: Indigo / Violet (`#5735ea`)
- **Secondary Accent**: Cyan / Sky Blue (`#32c5f6`)
- **Tertiary Accent**: Emerald / Green (`#48da79`)
- **Gradient Accent**: Purple to Violet (`#5635ea` to `#a15bf0`)
- **Font Family**: Poppins, system-ui, sans-serif
- **Button Radii**: Rounded (`5px`), Pill/Round (`40px`)
- **Section Backgrounds**: Clean white / Slate-50 light mode (`#fafafa` / `#fff`)

## Requirements & Gherkin Scenarios

### Requirement 1: Interactive Button Styles Showcase

- As a developer visiting the template, I want to explore a well-organized grid of various modern button styles so I can easily copy and use them in my projects.

Scenario: Viewing button styles
Given the user is on the BtnCast home page
When the user views the "Pick Your Style" section
Then they should see default solid, outline, icon-enabled, and rounded buttons with hover/active states

### Requirement 2: Button Sizes and Color Variants

- As a developer, I want to test different button sizes and color themes.

Scenario: Exploring sizes and colors
Given the user scrolls to the size and color sections
When the user views small, regular, and large buttons in primary, secondary, tertiary, and gradient tones
Then all variants should display correct padding, font size, and color accents

### Requirement 3: Brand Social Buttons

- As a user, I want to see social media action buttons with official brand colors.

Scenario: Viewing social brand buttons
Given the user views the Social Buttons grid
Then they should see styled buttons for Twitter, Facebook, LinkedIn, Pinterest, and Dribbble in both solid and outline variants

### Requirement 4: Component Dock Footer & Responsive Navigation

- As a user, I want a responsive header and footer linking to Component Dock.

Scenario: Footer attribution check
Given the user scrolls to the bottom of the page
Then the footer must display "Made with Component Dock" linking to `https://www.componentdock.com/`

## Verification Checklist

- [ ] All button variations render correctly with responsive padding and typography
- [ ] Hover, active, focus, and disabled states function flawlessly
- [ ] Brand social buttons have correct official brand colors
- [ ] Footer contains the mandatory Component Dock link
- [ ] 100% test coverage with Vitest & Testing Library
